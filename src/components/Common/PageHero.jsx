import FadeIn from './FadeIn'

function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="absolute inset-0 bg-cream" />
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/78 via-cocoa/42 to-cream/20" />
      <FadeIn className="luxury-container relative max-w-4xl text-white">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-cream">{eyebrow}</p>
        <h1 className="font-serif text-6xl font-semibold leading-[0.88] sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-cream/90 sm:text-base">{text}</p>
      </FadeIn>
    </section>
  )
}

export default PageHero
