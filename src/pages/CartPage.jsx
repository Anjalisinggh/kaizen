import { FiCreditCard, FiMinus, FiPlus, FiShoppingBag, FiTruck } from 'react-icons/fi'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { collectionItems } from '../data/jewelryData'

function CartPage({ slug }) {
  const selectedProduct = collectionItems.find((product) => product.slug === slug) || collectionItems[1]

  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Cart page */}
      <div className="luxury-container">
        <FadeIn className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Shopping Bag</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">Your selected piece</h1>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr]">
          <FadeIn className="rounded-[2rem] bg-white/75 p-5 shadow-[0_20px_65px_rgba(80,52,25,0.12)] sm:p-7">
            <article className="grid gap-5 rounded-[1.5rem] bg-ivory p-4 sm:grid-cols-[140px_1fr_auto]">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="h-36 w-full rounded-[1.2rem] object-cover sm:w-36" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">{selectedProduct.category}</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-espresso">{selectedProduct.name}</h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">{selectedProduct.material}</p>
                <div className="mt-5 inline-flex items-center rounded-full bg-white p-1">
                  <button className="grid size-9 place-items-center rounded-full text-espresso hover:bg-cream" type="button">
                    <FiMinus />
                  </button>
                  <span className="px-4 text-sm font-bold text-espresso">1</span>
                  <button className="grid size-9 place-items-center rounded-full text-espresso hover:bg-cream" type="button">
                    <FiPlus />
                  </button>
                </div>
              </div>
              <p className="font-serif text-3xl font-semibold text-cocoa">{selectedProduct.price}</p>
            </article>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[2rem] bg-espresso p-6 text-white shadow-[0_24px_80px_rgba(52,35,20,0.2)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sand">Order Summary</p>
            <div className="mt-6 space-y-4 text-sm text-cream/75">
              <div className="flex justify-between"><span>Subtotal</span><span>{selectedProduct.price}</span></div>
              <div className="flex justify-between"><span>Insured shipping</span><span>Complimentary</span></div>
              <div className="flex justify-between"><span>Gift packaging</span><span>Included</span></div>
            </div>
            <div className="mt-6 border-t border-white/15 pt-5">
              <div className="flex justify-between font-serif text-3xl font-semibold">
                <span>Total</span>
                <span>{selectedProduct.price}</span>
              </div>
            </div>
            <PrimaryButton href="#/checkout" variant="light" className="mt-8 w-full">
              <FiCreditCard className="mr-2" /> Checkout
            </PrimaryButton>
            <div className="mt-5 flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm text-cream/80">
              <FiTruck className="text-sand" /> Ships in 2-3 business days
            </div>
            <a href="#/collections" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sand hover:text-white">
              <FiShoppingBag /> Continue shopping
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default CartPage
