import { useEffect, useMemo, useState } from 'react'
import { FiEdit3, FiLogOut, FiPackage, FiTruck } from 'react-icons/fi'
import { IoBagCheckOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { PiSparkleFill } from 'react-icons/pi'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import ProductCard from '../components/Collection/ProductCard'
import { profileEssentials } from '../data/jewelryData'
import { defaultProfile } from '../data/profileStorage'
import { api } from '../lib/api'

function ProfilePage() {
  const [profile, setProfile] = useState(defaultProfile)
  const [orders, setOrders] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [stats, setStats] = useState([
    { label: 'Orders', value: '0', icon: IoBagCheckOutline },
    { label: 'Wishlist', value: '0', icon: FaRegHeart },
    { label: 'Rewards', value: '0', icon: PiSparkleFill },
  ])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    api.getPublicProfile()
      .then((data) => {
        if (!isMounted || !data) return
        setProfile((current) => ({ ...current, ...data }))
        setOrders(data.orders || [])
        setWishlist(data.wishlist || [])
        setStats([
          { label: 'Orders', value: String(data.stats?.orders || 0), icon: IoBagCheckOutline },
          { label: 'Wishlist', value: String(data.stats?.wishlist || 0), icon: FaRegHeart },
          { label: 'Rewards', value: String(data.stats?.rewards || 0), icon: PiSparkleFill },
        ])
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const accountDetails = useMemo(() => profileEssentials.map((item) => {
    if (item.title !== 'Personal Details') {
      return item
    }

    return {
      ...item,
      text: `${profile.name}, ${profile.email}, ${profile.phone}.`,
    }
  }), [profile])

  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Ecommerce profile page */}
      <div className="luxury-container">
        <FadeIn className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[2rem] bg-espresso p-6 text-white shadow-[0_28px_90px_rgba(52,35,20,0.2)] sm:p-8">
            <div className="flex items-center gap-4">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="size-24 rounded-full border-4 border-white/25 object-cover shadow-2xl"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-sand">{profile.tier}</p>
                <h1 className="mt-2 font-serif text-4xl font-semibold leading-none">{profile.name}</h1>
                <p className="mt-2 text-sm text-cream/70">{profile.joined}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sand">Reward Points</p>
                  <p className="mt-2 font-serif text-5xl font-semibold">{Number(profile.rewardPoints || 0).toLocaleString()}</p>
                </div>
                <div className="grid size-14 place-items-center rounded-full bg-sand text-espresso">
                  <FiPackage className="text-2xl" />
                </div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-3/4 rounded-full bg-sand" />
              </div>
              <p className="mt-3 text-sm text-cream/70">{profile.nextReward}</p>
            </div>

            <div className="mt-6 grid gap-3">
              <p className="rounded-full bg-white/10 px-5 py-3 text-sm text-cream/80">{profile.email}</p>
              <p className="rounded-full bg-white/10 px-5 py-3 text-sm text-cream/80">{profile.phone}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryButton href="#/profile/edit" variant="light" className="w-full">
                Edit Profile
              </PrimaryButton>
              <a
                href="#/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-espresso"
              >
                <FiLogOut /> Sign Out
              </a>
            </div>
          </aside>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon

                return (
                  <FadeIn key={stat.label} delay={index * 0.06}>
                    <article className="rounded-[1.5rem] bg-white/75 p-6 shadow-[0_18px_50px_rgba(80,52,25,0.1)] transition hover:-translate-y-1">
                      <div className="grid size-11 place-items-center rounded-full bg-cream text-cocoa">
                        <Icon className="text-xl" />
                      </div>
                      <p className="mt-5 font-serif text-4xl font-semibold text-espresso">{stat.value}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cocoa">{stat.label}</p>
                    </article>
                  </FadeIn>
                )
              })}
            </div>

            <FadeIn className="rounded-[2rem] bg-white/75 p-5 shadow-[0_18px_55px_rgba(80,52,25,0.1)] sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Orders</p>
                  <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">Recent purchases</h2>
                </div>
                <a
                  href="#/orders"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-xs font-bold text-espresso transition hover:bg-espresso hover:text-white"
                >
                  <FiTruck /> Track All
                </a>
              </div>

              <div className="mt-6 space-y-4">
                {(orders.length > 0 ? orders : []).map((order) => (
                  <a
                    key={order.id}
                    href={`#/product/${order.slug}`}
                    className="grid gap-4 rounded-[1.35rem] border border-stone-200/70 bg-ivory/70 p-3 transition hover:bg-white sm:grid-cols-[88px_1fr_auto]"
                  >
                    <img src={order.image} alt={order.item} className="size-22 rounded-[1rem] object-cover" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cocoa">{order.id}</p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-espresso">{order.item}</h3>
                      <p className="mt-1 text-sm text-stone-600">{order.date}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-cocoa">{order.status}</span>
                      <p className="font-bold text-espresso">{order.total}</p>
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <FadeIn className="rounded-[2rem] bg-white/70 p-6 shadow-[0_18px_55px_rgba(80,52,25,0.1)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Account Center</p>
                <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">Everything in one place</h2>
              </div>
              <FiEdit3 className="hidden text-2xl text-cocoa sm:block" />
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {accountDetails.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="rounded-[1.35rem] bg-ivory p-5 transition hover:-translate-y-1 hover:bg-cream">
                    <div className="mb-4 grid size-10 place-items-center rounded-full bg-white text-cocoa shadow-sm">
                      <Icon />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-espresso">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[2rem] bg-cream/70 p-6 shadow-[0_18px_55px_rgba(80,52,25,0.1)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Concierge Notes</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">Saved preferences</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-stone-700">
              <p>
                Ring size: {profile.ringSize} · Necklace length: {profile.necklaceLength} · Preferred metal:{' '}
                {profile.preferredMetal}.
              </p>
              <p>Gift wrapping: {profile.giftWrapping || 'Disabled'} for anniversary and birthday orders.</p>
              <p>Private preview notifications: {profile.previewNotifications} for limited capsule releases.</p>
            </div>
          </FadeIn>
        </div>

        <section className="mt-12">
          {/* Profile wishlist section */}
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Wishlist</p>
              <h2 className="font-serif text-4xl font-semibold text-espresso">Saved for later</h2>
            </div>
            <a href="#/collections" className="text-sm font-bold text-cocoa underline-offset-8 hover:underline">
              View collection
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(wishlist.length > 0 ? wishlist : []).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          {!isLoading && wishlist.length === 0 && (
            <p className="mt-6 text-sm text-stone-600">No wishlist items yet.</p>
          )}
        </section>
      </div>
    </section>
  )
}

export default ProfilePage
