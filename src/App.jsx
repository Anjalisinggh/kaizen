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

const routes = {
  '#/': HomePage,
  '#/about': AboutPage,
  '#/collections': CollectionPage,
  '#/profile': ProfilePage,
  '#/profile/edit': ProfileEditPage,
  '#/wishlist': WishlistPage,
  '#/orders': OrdersPage,
  '#/showcase': ShowcasePage,
  '#/checkout': CheckoutPage,
}

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/')

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#/'
    }

    const onHashChange = () => {
      setRoute(window.location.hash || '#/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const productMatch = route.match(/^#\/product\/(.+)$/)
  const cartMatch = route.match(/^#\/cart\/(.+)$/)
  const collectionCategoryMatch = route.match(/^#\/collections\/(.+)$/)
  const ActivePage = routes[route] || HomePage

  return (
    <MainLayout hideNavbar={route === '#/'}>
      {productMatch && <ProductDetailPage slug={productMatch[1]} />}
      {cartMatch && <CartPage slug={cartMatch[1]} />}
      {collectionCategoryMatch && <CollectionPage categorySlug={collectionCategoryMatch[1]} />}
      {!productMatch && !cartMatch && !collectionCategoryMatch && <ActivePage />}
    </MainLayout>
  )
}

export default App
