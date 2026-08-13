import { Building2, Headphones, Monitor, Users, Video, WalletCards } from 'lucide-react'

export const WHATSAPP = '919911161792'
export const PHONE_DISPLAY = '+91 99111 61792'

export const services = [
  { icon: Building2, title: 'Virtual Office', text: 'A professional Noida business presence without taking a long office lease.' },
  { icon: WalletCards, title: 'GST / Registered Office', text: 'Documentation-friendly plans for businesses that need a formal operating address.' },
  { icon: Headphones, title: 'BPO Seats', text: 'Ready calling seats with internet and an operations-friendly workspace setup.' },
  { icon: Users, title: 'Team Office', text: 'Flexible 3, 5, 10 or custom seat setups for startups, agencies and small teams.' },
  { icon: Video, title: 'Meeting & Interview Rooms', text: 'Book professional rooms for interviews, client meetings and small presentations.' },
  { icon: Monitor, title: 'Hot Desks', text: 'Drop in and work from Sector 63 without committing to a dedicated office.' }
]

export const plans = [
  { name: 'Business Presence', price: '₹999', suffix: '/month', note: 'Starting from', featured: false, features: ['Professional business address', 'Mail receiving support', 'Ideal for lean businesses', 'WhatsApp-first support'] },
  { name: 'Workspace Flex', price: '₹4,999', suffix: '/month', note: 'Popular starting plan', featured: true, features: ['Business presence included', 'Workspace access', 'Meeting-room credits', 'Mail handling support', 'Best for small teams'] },
  { name: 'BPO / Team Setup', price: 'Custom', suffix: '', note: 'Per seat / per shift', featured: false, features: ['Ready calling setup', 'Internet & workstation', 'Flexible day/night shift use', 'Custom seat plans'] }
]

export const comparison = [
  ['Business address', 'Included', 'Included', 'Included'],
  ['Mail receiving', 'Included', 'Included', 'Available'],
  ['Desk access', '—', 'Included', 'Dedicated'],
  ['Meeting room', 'Add-on', 'Credits', 'Custom'],
  ['Calling workstation', '—', 'Add-on', 'Included'],
  ['Flexible shift use', '—', 'Limited', 'Available'],
  ['Best for', 'Business presence', 'Founders / small teams', 'BPO / operations']
]

export const faqs = [
  ['Can I use Office62 as a virtual office in Noida?', 'Yes. Virtual-office plans are designed for businesses that need a professional Noida presence without taking a full-time office. Final documentation availability depends on the selected plan and property permissions.'],
  ['Can I use the address for GST or company registration?', 'Documentation-based use can be offered where eligibility and property documents allow it. We confirm the exact requirement before onboarding instead of promising a registration outcome blindly.'],
  ['Can I rent only BPO or calling seats?', 'Yes. You can enquire for a few seats or a larger team setup. Day and night shift requirements can be discussed based on availability.'],
  ['Do you offer meeting or interview rooms?', 'Yes. Meeting and interview-room usage can be arranged as a standalone requirement or bundled with workspace plans.'],
  ['Can I visit before paying?', 'Yes. Use the visit CTA or WhatsApp us and we can coordinate a visit to C4, B-3 (Basement), Sector 63, Noida.'],
  ['Is the pricing final?', 'The displayed prices are starting points. Exact pricing can change with duration, seat count, documentation needs, meeting-room usage and other requirements.']
]

export const gallerySlots = [
  ['Main workspace', 'Add the real wide-angle office photo here'],
  ['Calling / BPO seats', 'Add the actual workstation area photo here'],
  ['Meeting area', 'Add the real meeting or interview-room photo here'],
  ['Entrance / address', 'Add the real exterior, entrance or signage photo here']
]

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}
