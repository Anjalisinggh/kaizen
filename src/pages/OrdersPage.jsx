import { useEffect, useState } from 'react'
import { FiMapPin, FiPackage, FiTruck } from 'react-icons/fi'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { getOrders, subscribeStore } from '../lib/storefrontState'

function OrdersPage() {
  const [orders, setOrders] = useState(() => getOrders())

  useEffect(() => {
    const syncOrders = () => setOrders(getOrders())
    return subscribeStore(syncOrders)
  }, [])

  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      <div className="luxury-container">
        <FadeIn className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Order Tracking</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">Track your orders</h1>
        </FadeIn>

        <div className="grid gap-6">
          {orders.map((order, index) => (
            <FadeIn key={order.id} delay={index * 0.06}>
              <article className="grid gap-5 rounded-[2rem] bg-white/75 p-5 shadow-[0_18px_55px_rgba(80,52,25,0.1)] md:grid-cols-[110px_1fr_0.9fr]">
                <img src={order.image} alt={order.item} className="size-28 rounded-[1.3rem] object-cover" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">{order.id}</p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-espresso">{order.item}</h2>
                  <p className="mt-2 text-sm text-stone-600">{order.date} - {order.total}</p>
                  <a href={`#/product/${order.slug}`} className="mt-4 inline-block text-sm font-bold text-cocoa underline-offset-8 hover:underline">
                    View product
                  </a>
                </div>
                <div className="rounded-[1.3rem] bg-ivory p-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-espresso">
                    <FiTruck className="text-cocoa" /> {order.status}
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-stone-600">
                    <p className="flex gap-3"><FiPackage className="mt-1 text-cocoa" /> Packed by Utsav atelier.</p>
                    <p className="flex gap-3"><FiMapPin className="mt-1 text-cocoa" /> Delivery estimate: 2-3 business days.</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {orders.length === 0 && (
          <FadeIn className="rounded-[2rem] bg-white/75 p-8 text-center shadow-[0_18px_55px_rgba(80,52,25,0.1)]">
            <FiPackage className="mx-auto text-4xl text-cocoa" />
            <h2 className="mt-4 font-serif text-3xl font-semibold text-espresso">No orders yet</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-stone-600">
              Completed checkout orders will appear here with tracking details.
            </p>
            <PrimaryButton href="#/collections" className="mt-6">Start shopping</PrimaryButton>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export default OrdersPage
