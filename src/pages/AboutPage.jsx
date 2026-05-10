import { FaCheck } from 'react-icons/fa'
import { aboutImages, aboutStats, atelierValues, featureItems } from '../data/jewelryData'
import FadeIn from '../components/Common/FadeIn'
import PageHero from '../components/Common/PageHero'
import SectionHeader from '../components/Common/SectionHeader'
import FeatureCard from '../components/Features/FeatureCard'

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kaizen Arts"
        title="Jewelry shaped by patience, light, and restraint."
        text="Our studio creates modern heirlooms with quiet silhouettes, warm materials, and the precision of traditional hand finishing."
        image={aboutImages.editorial}
      />

      <section className="py-20 sm:py-28">
        {/* About us page editorial story */}
        <div className="luxury-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="grid grid-cols-2 gap-4">
            <img
              src={aboutImages.editorial}
              alt="Jewelry editorial portrait"
              className="aspect-[4/5] rounded-[2rem] object-cover shadow-[0_22px_70px_rgba(80,52,25,0.15)]"
            />
            <img
              src={aboutImages.product}
              alt="Fine jewelry product"
              className="mt-12 aspect-[4/5] rounded-[2rem] object-cover shadow-[0_22px_70px_rgba(80,52,25,0.15)]"
            />
          </FadeIn>

          <div>
            <SectionHeader
              eyebrow="Our Atelier"
              title="An editorial approach to everyday heirlooms."
              text="Kaizen Arts began with a simple idea: fine jewelry should feel intimate, wearable, and visually calm without losing its sense of occasion."
            />
            <FadeIn delay={0.12} className="mt-8 space-y-4">
              {atelierValues.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-full bg-white/70 p-3 pr-5 shadow-sm">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-espresso text-xs text-white">
                    <FaCheck />
                  </span>
                  <p className="text-sm font-medium text-stone-700">{value}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-cream/60 py-16">
        {/* About us stats section */}
        <div className="luxury-container grid gap-4 md:grid-cols-3">
          {aboutStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <div className="rounded-[1.5rem] bg-white/70 p-8 text-center shadow-[0_18px_50px_rgba(80,52,25,0.1)]">
                <p className="font-serif text-6xl font-semibold text-espresso">{stat.value}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.22em] text-cocoa">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        {/* About us values section */}
        <div className="luxury-container">
          <SectionHeader
            align="center"
            eyebrow="What We Protect"
            title="The quiet details matter."
            text="From shipping to packaging to quality control, every touchpoint is designed to feel refined and considered."
            className="max-w-2xl"
          />
          <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/35 shadow-[0_18px_60px_rgba(80,52,25,0.08)] md:grid-cols-4">
            {featureItems.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
