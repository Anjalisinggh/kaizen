import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import OrdersPage from './pages/OrdersPage'
import ProfileEditPage from './pages/ProfileEditPage'
import ProfilePage from './pages/ProfilePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShowcasePage from './pages/ShowcasePage'
import WishlistPage from './pages/WishlistPage'
import { getPathname } from './lib/navigation'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/collections': CollectionPage,
  '/profile': ProfilePage,
  '/profile/edit': ProfileEditPage,
  '/wishlist': WishlistPage,
  '/cart': CartPage,
  '/orders': OrdersPage,
  '/showcase': ShowcasePage,
  '/checkout': CheckoutPage,
}

function App() {
  const [route, setRoute] = useState(getPathname)

  useEffect(() => {
    const onRouteChange = () => {
      setRoute(getPathname())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const onClick = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || anchor.target || anchor.download || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const url = new URL(anchor.href, window.location.origin)
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return
      if (url.origin !== window.location.origin) return

      const path = url.pathname + url.search
      if (path === getPathname()) return

      event.preventDefault()
      window.history.pushState({}, '', path)
      onRouteChange()
    }

    window.addEventListener('popstate', onRouteChange)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onRouteChange)
      document.removeEventListener('click', onClick)
    }
  }, [])

  const productMatch = route.match(/^\/product\/(.+)$/)
  const cartMatch = route.match(/^\/cart\/(.+)$/)
  const collectionCategoryMatch = route.match(/^\/collections\/(.+)$/)
  const isRoutedPage = Boolean(routes[route] || productMatch || cartMatch || collectionCategoryMatch)
  const ActivePage = routes[route] || HomePage

  return (
    <MainLayout hideNavbar={route === '/' || !isRoutedPage}>
      {productMatch && <ProductDetailPage slug={productMatch[1]} />}
      {cartMatch && <CartPage slug={cartMatch[1]} />}
      {collectionCategoryMatch && <CollectionPage categorySlug={collectionCategoryMatch[1]} />}
      {!productMatch && !cartMatch && !collectionCategoryMatch && <ActivePage />}
    </MainLayout>
  )
}

export default App
