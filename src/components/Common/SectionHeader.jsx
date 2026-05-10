import FadeIn from './FadeIn'

function SectionHeader({ eyebrow, title, text, align = 'left', className = '', tone = 'dark' }) {
  const centered = align === 'center'
  const isLight = tone === 'light'

  return (
    <FadeIn className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.28em] ${isLight ? 'text-cream' : 'text-cocoa/80'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl ${
          isLight ? 'text-white' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${isLight ? 'text-cream/75' : 'text-stone-600'}`}>
          {text}
        </p>
      )}
    </FadeIn>
  )
}

export default SectionHeader
