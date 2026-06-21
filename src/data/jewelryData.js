import {
  FaGem,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegCreditCard,
  FaRegHeart,
  FaShippingFast,
  FaShieldAlt,
  FaStar,
  FaStore,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GiDiamondRing, GiEarrings, GiNecklaceDisplay } from 'react-icons/gi'
import { IoGiftOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5'
import { PiSparkleFill } from 'react-icons/pi'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Profile', href: '/profile' },
]

export const heroImages = {
  background:
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85',
  detail:
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=720&q=85',
}

export const featureItems = [
  {
    title: 'Free Shipping',
    text: 'Complimentary insured delivery for every signature piece.',
    icon: FaShippingFast,
  },
  {
    title: 'Exclusive Design',
    text: 'Sculptural silhouettes crafted in limited seasonal drops.',
    icon: PiSparkleFill,
  },
  {
    title: 'Good Packaging',
    text: 'Keepsake boxes wrapped with soft suede and warm foil detail.',
    icon: IoGiftOutline,
  },
  {
    title: 'Highest Quality',
    text: 'Ethically sourced stones finished by master goldsmiths.',
    icon: FaShieldAlt,
  },
]

export const aboutImages = {
  editorial:
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
  product:
    'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&w=640&q=85',
}

export const collectionItems = [
  {
    slug: 'gold-earring',
    name: 'Gold Earring',
    price: '$240.00',
    category: 'Earrings',
    material: '18k gold vermeil',
    description: 'A softly sculpted gold earring with a warm polished finish and lightweight all-day feel.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=720&q=85',
  },
  {
    slug: 'diamond-ring',
    name: 'Diamond Ring',
    price: '$540.00',
    category: 'Rings',
    material: '14k gold, lab diamond',
    description: 'A delicate diamond ring designed with a low profile setting for refined everyday wear.',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=720&q=85',
  },
  {
    slug: 'gold-necklace',
    name: 'Gold Necklace',
    price: '$420.00',
    category: 'Necklaces',
    material: '18k gold plated sterling silver',
    description: 'A fluid gold necklace with a luminous chain and subtle pendant proportion.',
    image:
      'https://images.unsplash.com/photo-1599459182681-c938b7f78b6b?auto=format&fit=crop&w=720&q=85',
  },
  {
    slug: 'pearl-bracelet',
    name: 'Pearl Bracelet',
    price: '$310.00',
    category: 'Bracelets',
    material: 'Freshwater pearl, gold clasp',
    description: 'A modern pearl bracelet finished with a warm gold closure and hand-selected pearls.',
    image:
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=720&q=85',
  },
  {
    slug: 'opal-pendant',
    name: 'Opal Pendant',
    price: '$680.00',
    category: 'Necklaces',
    material: 'Opal, 14k gold',
    description: 'A luminous opal pendant with soft color play and a fine gold chain.',
    image:
      'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=720&q=85',
  },
  {
    slug: 'sculpted-cuff',
    name: 'Sculpted Cuff',
    price: '$390.00',
    category: 'Bracelets',
    material: 'Brushed gold vermeil',
    description: 'A sculptural cuff with rounded edges, warm reflection, and a comfortable open fit.',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=720&q=85',
  },
]

export const aboutStats = [
  { value: '18+', label: 'Years of craft' },
  { value: '42K', label: 'Pieces delivered' },
  { value: '96%', label: 'Repeat clients' },
]

export const atelierValues = [
  'Hand-finished metals with softly polished edges.',
  'Small-batch releases designed to avoid overproduction.',
  'Ethically sourced stones selected for warmth and clarity.',
]

export const videoPreview = {
  image:
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1100&q=85',
}

export const categories = [
  {
    name: 'Rings',
    icon: GiDiamondRing,
    image:
      'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=420&q=85',
  },
  {
    name: 'Necklaces',
    icon: GiNecklaceDisplay,
    image:
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=420&q=85',
  },
  {
    name: 'Bracelets',
    icon: GiEarrings,
    image:
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=420&q=85',
  },
]

export const brandLogos = ['MAISON LUNE', 'AURELIA', 'NOIRGOLD', 'VELVET GEM', 'OPAL & CO']

export const socialLinks = [
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/jewelbizzz/' },
  { label: 'X', icon: FaXTwitter, href: 'https://x.com/Its_Utsavv' },
  { label: 'Meesho', icon: FaStore, href: 'https://www.meesho.com/Utsavv?_ms=3.0.1' },
]

export const profileEssentials = [
  {
    title: 'Personal Details',
    text: 'Name, email, phone number, birthday, and jewelry preferences.',
    icon: IoPersonOutline,
  },
  {
    title: 'Shipping Address',
    text: 'Add your preferred shipping address during checkout.',
    icon: FaMapMarkerAlt,
  },
  {
    title: 'Payment Method',
    text: 'Payment details are entered securely at checkout.',
    icon: FaRegCreditCard,
  },
  {
    title: 'Account Settings',
    text: 'Password, notifications, privacy, returns, and concierge support.',
    icon: IoSettingsOutline,
  },
]

export const sharedIcons = {
  gem: FaGem,
  heart: FaRegHeart,
  star: FaStar,
}
