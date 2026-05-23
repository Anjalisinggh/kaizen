import { FaPlay } from 'react-icons/fa'
import FadeIn from '../components/Common/FadeIn'
import ProductCard from '../components/Collection/ProductCard'
import { collectionItems, videoPreview } from '../data/jewelryData'

function ShowcasePage() {
  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Showcase page */}
      <div className="luxury-container">
        <FadeIn className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Video Showcase</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">The golden hour edit</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600">
            A styled preview of Utsav pieces in motion, paired with shoppable selections from the shoot.
          </p>
        </FadeIn>

        <FadeIn className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(80,52,25,0.16)]">
          <img src={videoPreview.image} alt="Jewelry video showcase" className="aspect-[16/8] w-full object-cover" />
          <div className="absolute inset-0 bg-espresso/20" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid size-20 place-items-center rounded-full bg-white text-cocoa shadow-2xl">
              <FaPlay className="ml-1 text-2xl" />
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collectionItems.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcasePage
