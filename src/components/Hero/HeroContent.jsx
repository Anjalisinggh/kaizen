import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { heroImages, navLinks, sharedIcons } from '../../data/jewelryData'
import { api } from '../../lib/api'

function HeroContent() {
  const GemIcon = sharedIcons.gem
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
    <section id="home" className="relative min-h-screen overflow-hidden bg-espresso px-4 py-6 sm:py-8">
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
        className="luxury-container relative min-h-[calc(100vh-3rem)] rounded-[2rem] border border-white/16 bg-white/[0.06] px-5 py-5 text-white shadow-[0_24px_90px_rgba(37,23,11,0.22)] backdrop-blur-[2px] sm:px-7 sm:py-7 lg:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-white text-cocoa shadow-xl">
              <GemIcon className="text-xl" />
            </span>
            <span className="font-serif text-3xl font-bold leading-none text-white drop-shadow-sm">Utsav</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white p-2 shadow-[0_18px_45px_rgba(37,23,11,0.22)] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full px-5 py-3 text-xs font-bold text-espresso transition hover:bg-cream"
              >
                {link.label}
                {link.label === 'Profile' && <FiChevronDown />}
              </a>
            ))}
            <a
              href="mailto:concierge@kaizenarts.test"
              className="rounded-full bg-cocoa px-7 py-3 text-xs font-bold text-white transition hover:bg-espresso"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="grid min-h-[calc(100vh-11rem)] items-center gap-10 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:pt-6">
          <div className="max-w-xl">
            <h1 className="font-serif text-6xl font-semibold leading-[0.86] drop-shadow-sm sm:text-7xl lg:text-[6.9rem]">
              Our Luxury Collections
            </h1>

            <div className="mt-4">
              <a
                href="#/collections"
                aria-label="Open collections"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-2 text-sm font-bold text-espresso shadow-[0_18px_45px_rgba(37,23,11,0.18)] transition hover:-translate-y-0.5 hover:bg-ivory"
              >
                <span>Let&apos;s Get Started</span>
                <span className="grid size-10 place-items-center rounded-full  text-xl">
                  <FiArrowRight />
                </span>
              </a>
            </div>

            <div className="mt-8 max-w-sm">
             
              <p className="mt-4 text-sm leading-7 text-white/78">
                Refined gold, luminous stones, and heirloom silhouettes designed for everyday ceremony.
              </p>
            </div>
          </div>

          <div className="relative min-h-[24rem] lg:min-h-[31rem]">
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
