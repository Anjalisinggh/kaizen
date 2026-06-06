import { useEffect, useState } from 'react'
import ProductCard from '../components/Collection/ProductCard'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { getWishlistProducts, subscribeStore } from '../lib/storefrontState'

function WishlistPage() {
  const [wishlist, setWishlist] = useState(() => getWishlistProducts())

  useEffect(() => {
    const syncWishlist = () => setWishlist(getWishlistProducts())
    return subscribeStore(syncWishlist)
  }, [])

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
          {wishlist.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        {wishlist.length === 0 && (
          <FadeIn className="rounded-[2rem] bg-white/75 p-8 text-center shadow-[0_18px_55px_rgba(80,52,25,0.1)]">
            <h2 className="font-serif text-3xl font-semibold text-espresso">No saved pieces yet</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-stone-600">
              Tap the heart on any product to build your own saved edit.
            </p>
            <PrimaryButton href="#/collections" className="mt-6">Browse collection</PrimaryButton>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export default WishlistPage
