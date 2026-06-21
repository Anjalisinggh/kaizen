import { useState } from 'react'
import { socialLinks } from '../../data/jewelryData'
import { api } from '../../lib/api'
import PrimaryButton from '../Common/PrimaryButton'

function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault()
    if (!email.trim() || isSubmitting) return

    setIsSubmitting(true)
    setMessage('')

    try {
      await api.subscribeNewsletter(email.trim())
      setEmail('')
      setMessage('Subscribed successfully.')
    } catch {
      setMessage('Try again when the API is running.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-espresso px-4 py-14 text-cream sm:py-18">
      <div className="luxury-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-white">Utsav</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/70">
              Modern heirloom jewelry with warm metals, delicate stones, and polished editorial restraint.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href || '/'}
                    {...(social.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-sand hover:text-espresso"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Explore</h3>
            {['Collections', 'New Arrivals', 'Editorial', 'Gift Cards'].map((item) => (
              <a key={item} href="/collections" className="mb-3 block text-sm text-cream/70 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Care</h3>
            {['Sizing Guide', 'Shipping', 'Returns', 'Materials'].map((item) => (
              <a key={item} href="/about" className="mb-3 block text-sm text-cream/70 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Newsletter</h3>
            <p className="text-sm leading-7 text-cream/70">Private previews, styling notes, and early access to limited pieces.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setMessage('')
                }}
                placeholder="Email address"
                className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-cream/55 focus:border-sand"
              />
              <PrimaryButton type="submit" className="min-h-12 px-5 py-2" variant="light">
                {isSubmitting ? 'Joining...' : 'Join'}
              </PrimaryButton>
            </form>
            {message && <p className="mt-3 text-xs font-semibold text-sand">{message}</p>}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Utsav. All rights reserved.</p>
          <p>Privacy Policy - Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
