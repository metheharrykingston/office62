import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, BadgeCheck, Building2, ChevronRight, Headphones, MapPin, MessageCircle, Sparkles, Users, Video } from 'lucide-react'
import { PHONE_DISPLAY, services, wa } from './data'
import { FAQ, Gallery, LeadForm, LocationAndFooter, Pricing, Testimonials } from './Sections'
import './styles.css'
import './responsive.css'

function App() {
  return <main className="pageShell">
    <nav className="nav shell"><a className="brand" href="#top"><span className="brandMark">62</span><span className="brandText"><strong>Office62</strong><small>Sector 63, Noida</small></span></a><div className="navLinks"><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#plans">Plans</a><a href="#faq">FAQ</a><a className="navButton" href={wa('Hi, I want to know about Office62 workspace options.')} target="_blank" rel="noreferrer">WhatsApp Us</a></div></nav>

    <section className="hero shell" id="top"><div className="heroLeft"><div className="eyebrow"><Sparkles size={14}/> Flexible office infrastructure in Noida</div><h1>Make your business look established in Noida — <span>without taking on a heavy office setup.</span></h1><p className="heroText">Virtual office, GST address, BPO seats, meeting rooms and flexible team workspace from C4, B-3 (Basement), Sector 63, Noida.</p><div className="heroActions"><a className="primaryButton" href={wa('Hi, I want to get started with Office62. Please guide me.')} target="_blank" rel="noreferrer">Get My Office Setup <ArrowRight size={18}/></a><a className="ghostButton" href="#services">Explore Services <ChevronRight size={18}/></a></div><div className="heroMetaRow"><span><BadgeCheck size={16}/> Fast setup</span><span><BadgeCheck size={16}/> Flexible plans</span><span><BadgeCheck size={16}/> WhatsApp-first support</span></div><div className="heroStats"><div><strong>6+</strong><span>Ways to use the office</span></div><div><strong>1–20+</strong><span>Seat flexibility</span></div><div><strong>Day / Night</strong><span>Shift-friendly usage</span></div></div></div><div className="heroRight"><div className="heroCard heroLeadCard"><div className="cardTopline">Workspace at a glance</div><h3>What do you need today?</h3><div className="quickGrid">{['Virtual Office','GST Address','BPO Seats','Meeting Room','Team Office','Hot Desk'].map((item,index)=><a key={item} href={wa(`Hi, I am interested in ${item} at Office62.`)} target="_blank" rel="noreferrer"><span>{String(index+1).padStart(2,'0')}</span><b>{item}</b><ArrowRight size={15}/></a>)}</div><div className="officeMiniCard"><div><small>Location</small><strong>C4, B-3 (Basement), Sector 63, Noida</strong></div><MapPin size={18}/></div></div><div className="heroCard heroNoteCard"><div className="noteHeader"><MessageCircle size={18}/><span>Fastest way to enquire</span></div><p>Tell us your requirement and we’ll suggest the simplest option — address, seats, or a full team setup.</p><a className="inlineLink" href={wa('Hi Office62, please recommend the right plan for me.')} target="_blank" rel="noreferrer">Chat now <ArrowRight size={15}/></a></div></div></section>

    <section className="floatingStrip shell"><div><Building2 size={18}/> Virtual Office</div><div><Headphones size={18}/> BPO Seats</div><div><Video size={18}/> Meeting Rooms</div><div><Users size={18}/> Team Workspace</div></section>

    <section className="section shell" id="services"><div className="sectionHeader"><div><div className="eyebrow">Services</div><h2>Everything around a practical business base.</h2></div><p>Office62 is designed so the same location can serve a solo founder, a growing team, or an active calling operation.</p></div><div className="servicesGrid">{services.map(({icon:Icon,title,text})=><article className="serviceCard" key={title}><div className="serviceIcon"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p><a href={wa(`Hi, tell me more about ${title}.`)} target="_blank" rel="noreferrer">Enquire Now <ArrowRight size={15}/></a></article>)}</div></section>

    <Gallery/>

    <section className="darkSection"><div className="shell darkWrap"><div className="darkCopy"><div className="eyebrow darkEyebrow">Built for operators and teams</div><h2>Need calling seats or a flexible team setup? Turn idle office capacity into usable inventory.</h2><p>Use the same office as a virtual office, meeting space, hot-desk hub or ready BPO workspace instead of letting it sit empty.</p><a className="lightButton" href={wa('Hi, I need BPO seats or a team workspace. Please share options.')} target="_blank" rel="noreferrer">Check Availability <ArrowRight size={18}/></a></div><div className="darkPanel"><div><strong>1–20+</strong><span>Flexible seat counts</span></div><div><strong>Fast</strong><span>Operational setup</span></div><div><strong>Day / Night</strong><span>Shift-friendly usage</span></div><div><strong>Sector 63</strong><span>Noida business zone</span></div></div></div></section>

    <Pricing/>
    <Testimonials/>
    <LeadForm/>
    <FAQ/>
    <LocationAndFooter/>

    <section className="ctaSection"><div className="shell ctaWrap"><div><div className="eyebrow darkEyebrow">Ready when you are</div><h2>Tell us what kind of office setup you need.</h2><p>We’ll help you choose the most practical option and move fast from enquiry to setup.</p></div><a className="ctaButton" href={wa('Hi Office62, I want to discuss my office requirement.')} target="_blank" rel="noreferrer"><MessageCircle size={20}/> Talk on WhatsApp <ArrowRight size={18}/></a></div></section>

    <a className="mobileBar" href={wa('Hi Office62, I want to discuss my office requirement.')} target="_blank" rel="noreferrer"><MessageCircle size={19}/> WhatsApp Office62 · {PHONE_DISPLAY} <ArrowRight size={17}/></a>
  </main>
}

createRoot(document.getElementById('root')!).render(<App/>)
