import FeatureCard from '../components/Features/FeatureCard'
import { featureItems } from '../data/jewelryData'

function FeatureSection() {
  return (
    <section id="features" className="bg-cream/55 py-8">
      {/* Features section */}
      <div className="luxury-container grid overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/35 shadow-[0_18px_60px_rgba(80,52,25,0.08)] md:grid-cols-4">
        {featureItems.map((item, index) => (
          <FeatureCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
