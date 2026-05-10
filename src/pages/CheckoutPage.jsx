import { FiLock } from 'react-icons/fi'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'

function CheckoutPage() {
  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Checkout page */}
      <div className="luxury-container max-w-5xl">
        <FadeIn className="rounded-[2rem] bg-white/75 p-6 shadow-[0_20px_65px_rgba(80,52,25,0.12)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Checkout</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">Secure checkout</h1>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {['Shipping address', 'Payment details', 'Gift note', 'Delivery preferences'].map((label) => (
              <label key={label} className="block">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">{label}</span>
                <input
                  placeholder={label}
                  className="mt-2 min-h-13 w-full rounded-full border border-sand/60 bg-ivory px-5 text-sm font-semibold text-espresso outline-none focus:border-cocoa"
                />
              </label>
            ))}
          </div>
          <PrimaryButton href="#/orders" className="mt-8">
            <FiLock className="mr-2" /> Place Order
          </PrimaryButton>
        </FadeIn>
      </div>
    </section>
  )
}

export default CheckoutPage
