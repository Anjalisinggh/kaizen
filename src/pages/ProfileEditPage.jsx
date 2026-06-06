import { useState } from 'react'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { getSavedProfile, saveProfile } from '../lib/storefrontState'

function ProfileEditPage() {
  const [profile, setProfile] = useState(() => getSavedProfile())
  const [isSaving, setIsSaving] = useState(false)

  const fields = [
    ['Full name', 'name'],
    ['Email address', 'email'],
    ['Phone number', 'phone'],
    ['Birthday', 'birthday'],
    ['Ring size', 'ringSize'],
    ['Necklace length', 'necklaceLength'],
    ['Preferred metal', 'preferredMetal'],
    ['Gift wrapping', 'giftWrapping'],
  ]

  const updateField = (key, value) => {
    setProfile((currentProfile) => ({ ...currentProfile, [key]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSaving) return

    setIsSaving(true)
    saveProfile(profile)
    window.location.hash = '#/profile'
  }

  return (
    <section className="px-4 pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Profile edit page */}
      <div className="luxury-container max-w-4xl">
        <FadeIn>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white/75 p-6 shadow-[0_20px_65px_rgba(80,52,25,0.12)] sm:p-8"
          >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Profile Settings</p>
          <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-espresso">Edit account details</h1>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {fields.map(([label, key]) => (
              <label key={label} className="block">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa">{label}</span>
                <input
                  value={profile[key]}
                  onChange={(event) => updateField(key, event.target.value)}
                  className="mt-2 min-h-13 w-full rounded-full border border-sand/60 bg-ivory px-5 text-sm font-semibold text-espresso outline-none focus:border-cocoa"
                />
              </label>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton type="submit">{isSaving ? 'Saving...' : 'Save Changes'}</PrimaryButton>
            <a href="#/profile" className="inline-flex min-h-12 items-center justify-center rounded-full border border-sand/80 px-6 text-sm font-bold text-espresso hover:bg-cream">
              Cancel
            </a>
          </div>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}

export default ProfileEditPage
