import FadeIn from '../Common/FadeIn'

function FeatureCard({ item, index }) {
  const Icon = item.icon

  return (
    <FadeIn delay={index * 0.08}>
      <article className="group h-full border-stone-200/70 px-6 py-8 text-center transition duration-300 hover:-translate-y-2 hover:bg-white/45 md:border-r last:md:border-r-0">
        <div className="mx-auto mb-4 grid size-13 place-items-center rounded-full bg-cream text-cocoa shadow-[inset_0_0_0_1px_rgba(122,86,55,0.16)] transition duration-300 group-hover:bg-espresso group-hover:text-white">
          <Icon className="text-xl" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-espresso">{item.title}</h3>
        <p className="mx-auto mt-2 max-w-52 text-xs leading-6 text-stone-600">{item.text}</p>
      </article>
    </FadeIn>
  )
}

export default FeatureCard
