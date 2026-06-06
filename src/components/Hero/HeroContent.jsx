import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'
import { heroImages, navLinks, sharedIcons } from '../../data/jewelryData'
import { api } from '../../lib/api'

function HeroContent() {
  const GemIcon = sharedIcons.gem
  const [menuOpen, setMenuOpen] = useState(false)
  const [community, setCommunity] = useState({ totalUsers: 230000, avatars: [] })

  useEffect(() => {
    let isMounted = true

    api.getHeroCommunity()
      .then((data) => {
        if (!isMounted || !data) return
        setCommunity({
          totalUsers: data.totalUsers || 0,
          avatars: data.avatars || [],
        })
      })
      .catch(() => {})

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="home" className="relative h-[100dvh] overflow-hidden bg-espresso px-4 py-4 sm:min-h-screen sm:h-auto sm:py-8">
      <img
        src={heroImages.background}
        alt="Luxury jewelry model wearing gold pieces"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[#785634]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#76512f]/70 via-[#8d6a45]/38 to-transparent" />

      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="luxury-container relative flex h-full flex-col rounded-[2rem] border border-white/16 bg-white/[0.06] px-4 py-4 text-white shadow-[0_24px_90px_rgba(37,23,11,0.22)] backdrop-blur-[2px] sm:min-h-[calc(100vh-3rem)] sm:px-7 sm:py-7 lg:px-8"
      >
        <div className="relative flex shrink-0 items-center justify-between gap-4">
          <a href="#/" className="flex items-center gap-2.5 sm:gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-white text-cocoa shadow-xl sm:size-11">
              <GemIcon className="text-lg sm:text-xl" />
            </span>
            <span className="font-serif text-2xl font-bold leading-none text-white drop-shadow-sm sm:text-3xl">Utsav</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white p-2 shadow-[0_18px_45px_rgba(37,23,11,0.22)] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full px-5 py-3 text-xs font-bold text-espresso transition hover:bg-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:concierge@kaizenarts.test"
              className="rounded-full bg-cocoa px-7 py-3 text-xs font-bold text-white transition hover:bg-espresso"
            >
              Contact Us
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full bg-white text-espresso shadow-lg lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute inset-x-4 top-[4.5rem] z-20 rounded-[1.35rem] border border-white/16 bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-espresso hover:bg-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:concierge@kaizenarts.test"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-full bg-cocoa px-4 py-3 text-center text-sm font-bold text-white hover:bg-espresso"
            >
              Contact Us
            </a>
          </div>
        )}

        <div className="flex min-h-0 flex-1 flex-col gap-3 pt-4 sm:gap-10 sm:pt-14 lg:grid lg:min-h-[calc(100vh-11rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:pt-6">
          <div className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-0 lg:max-w-xl lg:justify-center">
            <div className="flex flex-none items-center px-4 py-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 lg:flex-1">
              <h1 className="font-serif text-[2.35rem] font-semibold leading-[0.95] drop-shadow-sm sm:text-6xl sm:leading-[0.86] lg:text-[6.9rem]">
                Our Luxury Collections
              </h1>
            </div>

            <div className="flex min-h-0 flex-1 flex-col-reverse justify-end gap-28 sm:flex-col sm:justify-center sm:gap-3">
              <div className="flex flex-col justify-center gap-3 px-4 py-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <p className="max-w-sm text-sm leading-6 text-white/78 sm:mt-4 sm:leading-7">
                  Refined gold, luminous stones, and heirloom silhouettes designed for everyday ceremony.
                </p>
                <a
                  href="#/collections"
                  aria-label="Open collections"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-2 text-sm font-bold text-espresso shadow-[0_18px_45px_rgba(37,23,11,0.18)] transition hover:-translate-y-0.5 hover:bg-ivory sm:mt-4"
                >
                  <span>Let&apos;s Get Started</span>
                  <span className="grid size-10 place-items-center rounded-full text-xl">
                    <FiArrowRight />
                  </span>
                </a>
              </div>

              <motion.a
                href="#/product/gold-necklace"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid shrink-0 grid-cols-[4.75rem_1fr_auto] items-center gap-3 rounded-[1.2rem] bg-white p-3 text-espresso shadow-[0_18px_50px_rgba(37,23,11,0.24)] sm:hidden"
              >
                <img
                  src={heroImages.detail}
                  alt="Gold bracelet detail"
                  className="h-[4.75rem] w-[4.75rem] rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="font-serif text-xl font-bold leading-tight">Beautiful In Every Detail</p>
                  <p className="mt-1 text-xs font-semibold text-cocoa">Read More</p>
                </div>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-stone-200 text-cocoa">
                  <FiArrowRight className="text-sm" />
                </span>
              </motion.a>
            </div>
          </div>

          <div className="relative hidden min-h-[31rem] lg:block">
            <motion.div
              className="absolute right-0 top-60 flex items-center gap-6 text-white sm:right-8 lg:right-4"
            >
              <div className="flex -space-x-3 rounded-full bg-white/28 p-1.5 backdrop-blur-md">
                {(community.avatars.length > 0
                  ? community.avatars
                  : [1, 2, 3].map((item) => ({ avatar: `https://i.pravatar.cc/80?img=${item + 23}`, name: 'Happy client' }))
                ).map((item) => (
                  <img
                    key={item.avatar}
                    src={item.avatar}
                    alt={item.name || 'Happy client'}
                    className="size-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <span className="grid size-12 place-items-center rounded-full border-2 border-white bg-white text-2xl text-cocoa">
                  +
                </span>
              </div>
              <div>
               <p className="font-serif text-4xl font-bold leading-none">230K</p>
                <p className="mt-1 text-sm font-semibold text-white/78">Happy Clients</p>
              </div>
            </motion.div>

            <motion.a
              href="#/product/gold-necklace"
              className="absolute bottom-8 right-0 grid w-full max-w-[26rem] grid-cols-[9rem_1fr_auto] items-center gap-4 rounded-[1.35rem] bg-white p-4 text-espresso shadow-[0_22px_65px_rgba(37,23,11,0.24)] sm:right-4"
            >
              <img src={heroImages.detail} alt="Gold bracelet detail" className="h-24 w-36 rounded-2xl object-cover" />
              <div>
                <p className="font-serif text-2xl font-bold leading-6">Beautiful In Every Detail</p>
                <p className="mt-3 text-sm font-semibold text-cocoa">Read More</p>
              </div>
              <span className="grid size-8 place-items-center rounded-full border border-stone-200 text-cocoa">
                <FiArrowRight />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroContent
