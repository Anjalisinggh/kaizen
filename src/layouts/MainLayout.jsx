import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function MainLayout({ children, hideNavbar = false }) {
  return (
    <div className="min-h-screen overflow-hidden bg-stone-50 text-stone-950">
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
