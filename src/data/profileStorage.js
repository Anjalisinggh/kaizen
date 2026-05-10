import { profileUser } from './jewelryData'

const PROFILE_STORAGE_KEY = 'kaizen-arts-profile'

export const defaultProfile = {
  ...profileUser,
  birthday: 'March 18',
  ringSize: 'US 6.5',
  necklaceLength: '18 inches',
  preferredMetal: 'Warm gold',
  giftWrapping: 'Enabled',
  previewNotifications: 'Enabled',
}

export function getProfile() {
  const storedProfile = window.localStorage.getItem(PROFILE_STORAGE_KEY)

  if (!storedProfile) {
    return defaultProfile
  }

  try {
    return { ...defaultProfile, ...JSON.parse(storedProfile) }
  } catch {
    return defaultProfile
  }
}

export function saveProfile(profile) {
  window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({ ...defaultProfile, ...profile }))
}
