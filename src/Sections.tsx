import React, { FormEvent, useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarDays, Check, ChevronDown, Image as ImageIcon, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { comparison, faqs, gallerySlots, PHONE_DISPLAY, plans, wa, WHATSAPP } from './data'
import './sections.css'

export function Gallery() {
  return <section className="section shell compactTop" id="gallery">
    <div className="sectionHeader"><div><div className="eyebrow">Office gallery</div><h2>Show the real space before people visit.</h2></div><p>The gallery is ready for actual Office62 photography. No stock photos are presented as your office.</p></div>
    <div className="galleryGrid">{gallerySlots.map(([title, text], index) => <article className={`gallerySlot gallerySlot${index + 1}`} key={title}><div className="galleryIcon"><ImageIcon size={22}/></div><div><strong>{title}</strong><span>{text}</span></div></article>)}</div>
    <div className="galleryNotice"><BadgeCheck size={17}/> Upload actual Office62 photos later and these slots can be swapped without changing the layout.</div>
  </section>
}

export function Pricing() {
  return <section className="section shell" id="plans">
    <div className="sectionHeader"><div><div className="eyebrow">Plans</div><h2>Clear entry points. Flexible upgrades.</h2></div><p>Start with a professional address or move straight into workspace usage. Final pricing depends on duration, seat count and requirements.</p></div>
    <div className="plansGrid">{plans.map(plan => <article key={plan.name} className={`planCard ${plan.featured ? 'featured' : ''}`}><div className="planLabel">{plan.note}</div><h3>{plan.name}</h3><div className="planPrice">{plan.price}<span>{plan.suffix}</span></div><ul>{plan.features.map(feature => <li key={feature}><Check size={16}/>{feature}</li>)}</ul><a href={wa(`Hi, I am interested in the ${plan.name} plan.`)} target="_blank" rel="noreferrer">Get This Plan <ArrowRight size={16}/></a></article>)}</div>
    <div className="comparisonWrap"><div className="comparisonHeader"><div className="eyebrow">Compare packages</div><h3>See what fits before you enquire.</h3></div><div className="comparisonScroll"><table className="comparisonTable"><thead><tr><th>Feature</th><th>Business Presence</th><th>Workspace Flex</th><th>BPO / Team Setup</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={cell}>{cell}</th> : <td key={`${row[0]}-${i}`}>{cell}</td>)}</tr>)}</tbody></table></div></div>
  </section>
}

export function Testimonials() {
  return <section className="section shell compactTop" id="testimonials"><div className="sectionHeader"><div><div className="eyebrow">Testimonials</div><h2>Real feedback only.</h2></div><p>This section is ready for verified client reviews as soon as Office62 has permission to publish them.</p></div><div className="testimonialEmpty"><div className="testimonialIcon"><MessageCircle size={24}/></div><div><strong>Verified client stories will appear here.</strong><p>We intentionally haven’t invented names, ratings or quotes just to make the page look busy.</p></div><a href={wa('Hi, I want to know more about Office62 before booking.')} target="_blank" rel="noreferrer">Ask us directly <ArrowRight size={16}/></a></div></section>
}

export function LeadForm() {
  const [status, setStatus] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const text = `Hi Office62, I am submitting an enquiry.\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nRequirement: ${form.get('requirement')}\nTeam size: ${form.get('teamSize') || 'Not specified'}\nMessage: ${form.get('message') || 'No additional message'}`
    setStatus('Your enquiry is ready. Opening WhatsApp so you can send it directly to Office62.')
    window.open(wa(text), '_blank', 'noopener,noreferrer')
  }
  return <section className="section shell compactTop" id="lead-form"><div className="leadWrap"><div className="leadCopy"><div className="eyebrow">Get a recommendation</div><h2>Tell us what you need. We’ll narrow it down.</h2><p>Use the form if you don’t know which package fits. Your answers become a structured enquiry for Office62.</p><div className="leadPoints"><span><Check size={16}/> Virtual office & GST requirements</span><span><Check size={16}/> Team / seat count</span><span><Check size={16}/> Visit or meeting-room requirement</span></div></div><form className="leadForm" onSubmit={submit}><label><span>Name</span><input name="name" placeholder="Your name" required/></label><label><span>Phone</span><input name="phone" type="tel" placeholder="Your phone number" required/></label><label><span>What do you need?</span><select name="requirement" required defaultValue=""><option value="" disabled>Select a requirement</option><option>Virtual Office</option><option>GST / Registered Office</option><option>BPO Seats</option><option>Team Office</option><option>Meeting Room</option><option>Hot Desk</option><option>Not sure yet</option></select></label><label><span>Team size</span><input name="teamSize" placeholder="e.g. 6 people"/></label><label className="fullField"><span>Anything else?</span><textarea name="message" rows={4} placeholder="Start date, shift timing or other requirement"/></label><button className="primaryButton fullField" type="submit">Prepare My Enquiry <ArrowRight size={17}/></button>{status && <p className="formStatus fullField">{status}</p>}</form></div></section>
}

export function FAQ() {
  return <section className="section shell" id="faq"><div className="sectionHeader"><div><div className="eyebrow">FAQ</div><h2>Questions people ask before they book.</h2></div><p>Short, practical answers around virtual office usage, BPO seats, documentation and visits.</p></div><div className="faqList">{faqs.map(([question, answer]) => <details key={question} className="faqItem"><summary><span>{question}</span><ChevronDown size={19}/></summary><p>{answer}</p></details>)}</div></section>
}

export function LocationAndFooter() {
  return <><section className="section shell" id="location"><div className="locationWrap"><div className="mapPanel"><div className="mapSurface"><div className="pinBlob"><MapPin size={24}/></div><div className="mapBadge">Noida Sector 63</div></div></div><div className="locationCard"><div className="eyebrow">Location</div><h2>C4, B-3 (Basement), Sector 63, Noida</h2><p>Use this address as a practical operating base for your business presence, meetings, or team activity in Noida.</p><div className="addressCard"><div><strong>C4, B-3 (Basement)</strong><span>Sector 63, Noida, Uttar Pradesh</span></div><MapPin size={18}/></div><div className="locationActions"><a className="primaryButton" href={wa('Hi, I want to schedule a visit to Office62 in Sector 63, Noida.')} target="_blank" rel="noreferrer">Schedule a Visit <CalendarDays size={18}/></a><a className="ghostButton" href={`tel:+${WHATSAPP}`}><Phone size={18}/> Call {PHONE_DISPLAY}</a></div></div></div></section><footer className="footer shell"><div className="footerBrand"><span className="brandMark">62</span><div><strong>Office62</strong><small>Flexible workspace in Sector 63, Noida</small></div></div><div className="footerContact"><a href={`tel:+${WHATSAPP}`}><Phone size={16}/> {PHONE_DISPLAY}</a><span><Mail size={16}/> Business email to be confirmed before launch</span><span>Office hours to be confirmed before launch</span></div><div className="footerAddress"><strong>C4, B-3 (Basement)</strong><span>Sector 63, Noida, Uttar Pradesh</span></div><p className="footerLegal">GST / registered-office availability is subject to documentation, permissions and eligibility. Displayed prices are starting points and can vary by requirement.</p></footer></>
}
