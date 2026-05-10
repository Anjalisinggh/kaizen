import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProductDetailPage from './pages/ProductDetailPage'

const routes = {
  '#/': HomePage,
  '#/about': AboutPage,
  '#/collections': CollectionPage,
  '#/profile': ProfilePage,
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
  const ActivePage = routes[route] || HomePage

  return (
    <MainLayout hideNavbar={route === '#/'}>
      {productMatch ? <ProductDetailPage slug={productMatch[1]} /> : <ActivePage />}
    </MainLayout>
  )
}

export default App
