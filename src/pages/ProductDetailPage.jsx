import { useEffect, useState } from 'react'
import { FaRegHeart, FaShieldAlt, FaStar } from 'react-icons/fa'
import { FiShoppingBag, FiTruck } from 'react-icons/fi'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import ProductCard from '../components/Collection/ProductCard'
import { collectionItems } from '../data/jewelryData'
import { addToCart, isWishlisted, subscribeStore, toggleWishlist } from '../lib/storefrontState'
import { navigate } from '../lib/navigation'

function ProductDetailPage({ slug }) {
  const product = collectionItems.find((item) => item.slug === slug) || collectionItems[0]
  const relatedProducts = collectionItems.filter((item) => item.slug !== product.slug).slice(0, 3)
  const [saved, setSaved] = useState(() => isWishlisted(product.slug))

  useEffect(() => {
    const syncSavedState = () => setSaved(isWishlisted(product.slug))
    return subscribeStore(syncSavedState)
  }, [product.slug])

  const handleAddToCart = () => {
    addToCart(product.slug)
    navigate('/cart')
  }

  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Product detail page */}
      <div className="luxury-container">
        <a href="/collections" className="text-sm font-bold text-cocoa underline-offset-8 hover:underline">
          Back to collection
        </a>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="rounded-[2rem] bg-white/70 p-4 shadow-[0_24px_80px_rgba(80,52,25,0.14)]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
          </FadeIn>

          <FadeIn delay={0.1} className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">{product.category}</p>
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-none text-espresso sm:text-7xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sand">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
              <span className="text-sm font-bold text-stone-500">(124 reviews)</span>
            </div>
            <p className="mt-6 font-serif text-5xl font-semibold text-cocoa">{product.price}</p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-stone-600">{product.description}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white/75 p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">Material</p>
                <p className="mt-2 text-sm font-semibold text-espresso">{product.material}</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/75 p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">Care</p>
                <p className="mt-2 text-sm font-semibold text-espresso">Soft cloth, dry storage, no perfume contact.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton onClick={handleAddToCart}>
                <FiShoppingBag className="mr-2" /> Add To Bag
              </PrimaryButton>
              <button
                type="button"
                aria-pressed={saved}
                onClick={() => setSaved(toggleWishlist(product.slug))}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sand/80 px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-espresso hover:text-white ${
                  saved ? 'bg-espresso text-white' : 'bg-white/70 text-espresso'
                }`}
              >
                <FaRegHeart /> {saved ? 'Saved' : 'Save'}
              </button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-stone-700">
              <div className="flex items-center gap-3 rounded-full bg-cream/70 px-5 py-3">
                <FiTruck className="text-cocoa" /> Complimentary insured shipping and returns.
              </div>
              <div className="flex items-center gap-3 rounded-full bg-cream/70 px-5 py-3">
                <FaShieldAlt className="text-cocoa" /> Lifetime polishing and authenticity guarantee.
              </div>
            </div>
          </FadeIn>
        </div>

        <section className="mt-16">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">You May Also Like</p>
              <h2 className="font-serif text-4xl font-semibold text-espresso">Complete the look</h2>
            </div>
            <a href="/collections" className="text-sm font-bold text-cocoa underline-offset-8 hover:underline">
              View all pieces
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProductDetailPage
