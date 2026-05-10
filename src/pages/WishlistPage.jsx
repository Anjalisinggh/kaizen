import ProductCard from '../components/Collection/ProductCard'
import FadeIn from '../components/Common/FadeIn'
import { profileWishlist } from '../data/jewelryData'

function WishlistPage() {
  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Wishlist page */}
      <div className="luxury-container">
        <FadeIn className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Wishlist</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">Saved pieces</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600">
            Your private edit of pieces to revisit, compare, and reserve for later.
          </p>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profileWishlist.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WishlistPage
