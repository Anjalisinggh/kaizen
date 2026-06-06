import { collectionItems } from '../data/jewelryData'
import { defaultProfile } from '../data/profileStorage'

const WISHLIST_KEY = 'kaizen-utsav-wishlist'
const CART_KEY = 'kaizen-utsav-cart'
const ORDERS_KEY = 'kaizen-utsav-orders'
const PROFILE_KEY = 'kaizen-arts-profile'
const STORE_EVENT = 'kaizen-store-updated'

const readJson = (key, fallback) => {
  if (typeof window === 'undefined') return fallback

  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

const writeJson = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new Event(STORE_EVENT))
}

export const subscribeStore = (callback) => {
  window.addEventListener(STORE_EVENT, callback)
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener(STORE_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

export const getProduct = (slug) => collectionItems.find((product) => product.slug === slug)

export const getWishlistSlugs = () => readJson(WISHLIST_KEY, [])

export const getWishlistProducts = () => getWishlistSlugs().map(getProduct).filter(Boolean)

export const isWishlisted = (slug) => getWishlistSlugs().includes(slug)

export const toggleWishlist = (slug) => {
  const currentSlugs = getWishlistSlugs()
  const nextSlugs = currentSlugs.includes(slug)
    ? currentSlugs.filter((itemSlug) => itemSlug !== slug)
    : [slug, ...currentSlugs]

  writeJson(WISHLIST_KEY, nextSlugs)
  return nextSlugs.includes(slug)
}

export const getCartItems = () => {
  const savedItems = readJson(CART_KEY, [])

  return savedItems
    .map((item) => ({ product: getProduct(item.slug), quantity: Math.max(1, Number(item.quantity) || 1) }))
    .filter((item) => item.product)
}

export const addToCart = (slug, quantity = 1) => {
  const cart = readJson(CART_KEY, [])
  const existingItem = cart.find((item) => item.slug === slug)

  const nextCart = existingItem
    ? cart.map((item) => item.slug === slug ? { ...item, quantity: item.quantity + quantity } : item)
    : [{ slug, quantity }, ...cart]

  writeJson(CART_KEY, nextCart)
}

export const updateCartQuantity = (slug, quantity) => {
  const nextQuantity = Math.max(0, Number(quantity) || 0)
  const nextCart = readJson(CART_KEY, [])
    .map((item) => item.slug === slug ? { ...item, quantity: nextQuantity } : item)
    .filter((item) => item.quantity > 0)

  writeJson(CART_KEY, nextCart)
}

export const clearCart = () => writeJson(CART_KEY, [])

export const parsePrice = (price) => Number(String(price).replace(/[^0-9.]/g, '')) || 0

export const formatPrice = (value) => `$${value.toFixed(2)}`

export const getCartTotal = () => getCartItems().reduce((total, item) => {
  return total + parsePrice(item.product.price) * item.quantity
}, 0)

export const getOrders = () => readJson(ORDERS_KEY, [])

export const createOrder = (checkoutDetails) => {
  const cartItems = getCartItems()
  if (cartItems.length === 0) return null

  const total = getCartTotal()
  const now = new Date()
  const order = {
    id: `#UTS-${now.getTime().toString().slice(-6)}`,
    date: now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    status: 'Order placed',
    total: formatPrice(total),
    slug: cartItems[0].product.slug,
    item: cartItems.length === 1 ? cartItems[0].product.name : `${cartItems.length} pieces`,
    image: cartItems[0].product.image,
    items: cartItems.map(({ product, quantity }) => ({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity,
    })),
    checkoutDetails,
  }

  writeJson(ORDERS_KEY, [order, ...getOrders()])
  clearCart()
  return order
}

export const getSavedProfile = () => ({ ...defaultProfile, ...readJson(PROFILE_KEY, {}) })

export const saveProfile = (profile) => writeJson(PROFILE_KEY, { ...defaultProfile, ...profile })

export const getStoreStats = () => ({
  orders: getOrders().length,
  wishlist: getWishlistSlugs().length,
  rewards: getOrders().length * 125,
})
