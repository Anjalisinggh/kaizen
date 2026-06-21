import { useEffect, useState } from 'react'
import { FiLock } from 'react-icons/fi'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { createOrder, getCartItems, getCartTotal, formatPrice, subscribeStore } from '../lib/storefrontState'
import { navigate } from '../lib/navigation'

function CheckoutPage() {
  const [cartItems, setCartItems] = useState(() => getCartItems())
  const [form, setForm] = useState({
    shippingAddress: '',
    paymentDetails: '',
    giftNote: '',
    deliveryPreferences: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    const syncCart = () => setCartItems(getCartItems())
    return subscribeStore(syncCart)
  }, [])

  const fields = [
    ['Shipping address', 'shippingAddress'],
    ['Payment details', 'paymentDetails'],
    ['Gift note', 'giftNote'],
    ['Delivery preferences', 'deliveryPreferences'],
  ]

  const handleSubmit = (event) => {
    event.preventDefault()

    if (cartItems.length === 0) {
      setError('Add at least one piece before checkout.')
      return
    }

    if (!form.shippingAddress.trim() || !form.paymentDetails.trim()) {
      setError('Shipping address and payment details are required.')
      return
    }

    const order = createOrder(form)
    if (order) navigate('/orders')
  }

  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Checkout page */}
      <div className="luxury-container max-w-5xl">
        <FadeIn className="rounded-[2rem] bg-white/75 p-6 shadow-[0_20px_65px_rgba(80,52,25,0.12)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Checkout</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">Secure checkout</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {fields.map(([label, key]) => (
              <label key={label} className="block">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">{label}</span>
                <input
                  value={form[key]}
                  onChange={(event) => {
                    setError('')
                    setForm((current) => ({ ...current, [key]: event.target.value }))
                  }}
                  placeholder={label}
                  className="mt-2 min-h-13 w-full rounded-full border border-sand/60 bg-ivory px-5 text-sm font-semibold text-espresso outline-none focus:border-cocoa"
                />
              </label>
            ))}
            </div>
            <div className="mt-6 rounded-[1.3rem] bg-ivory p-5 text-sm text-stone-700">
              {cartItems.length > 0 ? (
                <>
                  <p className="font-bold text-espresso">{cartItems.length} item{cartItems.length === 1 ? '' : 's'} in your bag</p>
                  <p className="mt-2">Total due: {formatPrice(getCartTotal())}</p>
                </>
              ) : (
                <p>Your bag is empty.</p>
              )}
            </div>
            {error && <p className="mt-4 text-sm font-bold text-red-700">{error}</p>}
            <PrimaryButton type="submit" className="mt-8">
              <FiLock className="mr-2" /> Place Order
            </PrimaryButton>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}

export default CheckoutPage
