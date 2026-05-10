import { socialLinks } from '../../data/jewelryData'
import PrimaryButton from '../Common/PrimaryButton'

function Footer() {
  return (
    <footer className="bg-espresso px-4 py-14 text-cream sm:py-18">
      {/* Footer section */}
      <div className="luxury-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-white">Kaizen Arts</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/70">
              Modern heirloom jewelry with warm metals, delicate stones, and polished editorial restraint.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href="#home"
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
              <a key={item} href="#collections" className="mb-3 block text-sm text-cream/70 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Care</h3>
            {['Sizing Guide', 'Shipping', 'Returns', 'Materials'].map((item) => (
              <a key={item} href="#features" className="mb-3 block text-sm text-cream/70 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-white">Newsletter</h3>
            <p className="text-sm leading-7 text-cream/70">Private previews, styling notes, and early access to limited pieces.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-cream/55 focus:border-sand"
              />
              <PrimaryButton className="min-h-12 px-5 py-2" variant="light">
                Join
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kaizen Arts. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
