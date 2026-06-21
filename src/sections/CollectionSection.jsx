import ProductCard from '../components/Collection/ProductCard'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { collectionItems } from '../data/jewelryData'

function CollectionSection() {
  return (
    <section id="collections" className="pb-20 sm:pb-28">
      {/* Collection section */}
      <div className="luxury-container rounded-[2rem] bg-cream/55 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)] sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.8fr]">
          <FadeIn className="rounded-[1.5rem] bg-white/55 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Our Collection</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-none text-espresso sm:text-5xl">
              Soft gold for luminous days.
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              A curated edit of rings, necklaces, and earrings shaped for modern heirloom dressing.
            </p>
            <PrimaryButton href="/collections" className="mt-7">See More</PrimaryButton>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-3">
            {collectionItems.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionSection
