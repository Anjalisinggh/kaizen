import { FaPlay } from 'react-icons/fa'
import { categories, videoPreview } from '../../data/jewelryData'
import FadeIn from '../Common/FadeIn'
import SectionHeader from '../Common/SectionHeader'

function VideoShowcase() {
  return (
    <section id="pages" className="py-6 sm:py-12">
      {/* Video showcase section */}
      <div className="luxury-container grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <FadeIn className="group relative overflow-hidden rounded-[2rem] shadow-[0_26px_80px_rgba(80,52,25,0.16)]">
          <img
            src={videoPreview.image}
            alt="Jewelry styling video preview"
            className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-espresso/18" />
          <a
            href="/showcase"
            aria-label="Play jewelry showcase"
            className="absolute left-1/2 top-1/2 grid size-17 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-cocoa shadow-[0_18px_45px_rgba(52,35,20,0.24)] transition duration-300 hover:scale-110 hover:bg-cream"
          >
            <FaPlay className="ml-1" />
          </a>
        </FadeIn>

        <div>
          <SectionHeader
            eyebrow="Choose The Type"
            title="A shape for every ritual."
            text="Move from subtle daytime polish to candlelit statement pieces with categories designed to layer beautifully."
          />
          <FadeIn delay={0.12} className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
            {categories.map((category) => {
              const Icon = category.icon

              return (
                <article
                  key={category.name}
                  className="group rounded-full bg-white/75 p-2 text-center shadow-[0_18px_45px_rgba(80,52,25,0.1)] transition duration-300 hover:-translate-y-2 hover:bg-cream"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="mx-auto aspect-square w-full rounded-full object-cover transition duration-500 group-hover:scale-95"
                  />
                  <div className="py-4">
                    <h3 className="font-serif text-xl font-semibold text-espresso">{category.name}</h3>
                    <Icon className="mx-auto mt-2 text-cocoa" />
                  </div>
                </article>
              )
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
