import { brandLogos } from '../../data/jewelryData'
import FadeIn from '../Common/FadeIn'

function BrandStrip() {
  return (
    <section className="bg-sand/55 py-8">
      {/* Brand logos section */}
      <FadeIn className="luxury-container grid grid-cols-2 items-center gap-5 text-center sm:grid-cols-3 lg:grid-cols-5">
        {brandLogos.map((brand) => (
          <div
            key={brand}
            className="font-serif text-2xl font-bold tracking-wide text-espresso/75 transition duration-300 hover:text-espresso"
          >
            {brand}
          </div>
        ))}
      </FadeIn>
    </section>
  )
}

export default BrandStrip
