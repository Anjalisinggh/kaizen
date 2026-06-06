import { useEffect, useState } from 'react'
import { sharedIcons } from '../../data/jewelryData'
import { isWishlisted, subscribeStore, toggleWishlist } from '../../lib/storefrontState'

function ProductCard({ product }) {
  const HeartIcon = sharedIcons.heart
  const productUrl = `#/product/${product.slug}`
  const [saved, setSaved] = useState(() => isWishlisted(product.slug))

  useEffect(() => {
    const syncSavedState = () => setSaved(isWishlisted(product.slug))
    return subscribeStore(syncSavedState)
  }, [product.slug])

  return (
    <article className="group relative min-w-0 rounded-[1.5rem] bg-white p-3 shadow-[0_18px_50px_rgba(80,52,25,0.1)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(80,52,25,0.18)]">
      <a href={productUrl} aria-label={`View ${product.name} details`} className="absolute inset-0 z-10 rounded-[1.5rem]" />
      <div className="relative overflow-hidden rounded-[1.1rem]">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <button
          type="button"
          aria-label={`${saved ? 'Remove' : 'Save'} ${product.name}`}
          aria-pressed={saved}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setSaved(toggleWishlist(product.slug))
          }}
          className={`absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full shadow-lg transition hover:bg-espresso hover:text-white ${
            saved ? 'bg-espresso text-white' : 'bg-white/90 text-cocoa'
          }`}
        >
          <HeartIcon />
        </button>
      </div>
      <div className="px-2 pb-2 pt-4">
        <h3 className="font-serif text-2xl font-semibold text-espresso">{product.name}</h3>
        <p className="mt-2 inline-flex rounded-full bg-ivory px-4 py-2 text-xs font-bold text-cocoa">
          {product.price}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
