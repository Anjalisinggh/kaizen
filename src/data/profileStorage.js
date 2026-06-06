const PROFILE_STORAGE_KEY = 'kaizen-arts-profile'

export const defaultProfile = {
  name: 'Guest Shopper',
  tier: 'Utsav Member',
  email: '',
  phone: '',
  avatar: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=85',
  joined: 'Member since today',
  rewardPoints: 0,
  nextReward: 'Place an order to start earning rewards',
  birthday: '',
  ringSize: '',
  necklaceLength: '',
  preferredMetal: '',
  giftWrapping: 'Disabled',
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
