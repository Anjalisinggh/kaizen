import { aboutImages, sharedIcons } from '../../data/jewelryData'
import FadeIn from '../Common/FadeIn'
import PrimaryButton from '../Common/PrimaryButton'
import SectionHeader from '../Common/SectionHeader'

function AboutContent() {
  const StarIcon = sharedIcons.star

  return (
    <section id="about-us" className="py-20 sm:py-28">
      {/* About refinement section */}
      <div className="luxury-container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn className="relative">
          <img
            src={aboutImages.editorial}
            alt="Editorial jewelry portrait"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_28px_80px_rgba(52,35,20,0.18)]"
          />
          <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-espresso shadow-xl">
            <span className="mr-2 inline-flex text-sand">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="mt-0.5" />
              ))}
            </span>
            (5/5)
          </div>
        </FadeIn>

        <div className="grid items-center gap-8 md:grid-cols-[1fr_220px]">
          <div>
            <SectionHeader
              eyebrow="The Art Of Refinement"
              title="Radiant pieces with quiet confidence."
              text="Each piece is drawn with a soft architectural eye, then finished by hand for a glow that feels intimate, modern, and enduring."
            />
            <FadeIn delay={0.12}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-600">
                Our atelier pairs warm precious metals with fluid forms, balancing statement scale and delicate wearability for dinners, vows, galleries, and the everyday rituals in between.
              </p>
              <PrimaryButton href="/about" className="mt-8">Learn More</PrimaryButton>
            </FadeIn>
          </div>

          <FadeIn delay={0.18} className="rounded-[1.75rem] bg-white p-3 shadow-[0_22px_65px_rgba(80,52,25,0.14)]">
            <img
              src={aboutImages.product}
              alt="Gold ring detail"
              className="aspect-[3/4] w-full rounded-[1.35rem] object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
