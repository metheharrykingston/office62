import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Building2, Check, ChevronRight, Clock3, Headphones, Mail, MapPin, MessageCircle, Monitor, PhoneCall, ShieldCheck, Sparkles, Users, Video, WalletCards } from 'lucide-react'
import './styles.css'

const WHATSAPP = '919999999999'

const services = [
  { icon: Building2, title: 'Virtual Office', text: 'A professional Noida business presence without taking a full-time office.' },
  { icon: Mail, title: 'Business Address', text: 'Receive business correspondence and keep your customer-facing address professional.' },
  { icon: WalletCards, title: 'GST / Registered Office', text: 'Documentation-ready workspace plans, subject to eligibility and property documentation.' },
  { icon: Headphones, title: 'BPO Seats', text: 'Ready calling desks for sales, support and outbound teams — scale seats up or down.' },
  { icon: Users, title: 'Team Office', text: 'Flexible 3, 5, 10+ seat setups for startups, agencies and remote teams.' },
  { icon: Video, title: 'Meeting & Interview Rooms', text: 'Book professional rooms by the hour for client meetings, interviews and presentations.' },
  { icon: Monitor, title: 'Hot Desks', text: 'Drop in, plug in and work from Sector 63 without committing to a monthly office.' },
  { icon: Clock3, title: 'Day / Night Shift Space', text: 'Use office capacity across shifts — ideal for operations and international calling teams.' },
]

const plans = [
  {
    name: 'Business Presence',
    price: '₹999',
    suffix: '/month',
    note: 'Starting from',
    features: ['Business address use', 'Mail receiving', 'Visitor-ready address', 'WhatsApp support'],
  },
  {
    name: 'Working Office',
    price: '₹4,999',
    suffix: '/month',
    note: 'Starting from',
    featured: true,
    features: ['Everything in Business Presence', 'Desk access', 'Meeting-room credits', 'Mail handling', 'Priority support'],
  },
  {
    name: 'BPO / Team Seats',
    price: 'Custom',
    suffix: '',
    note: 'Per seat / per shift',
    features: ['Ready workstations', 'Internet connectivity', 'Calling-ready setup', 'Flexible seat count', 'Day/night shift options'],
  },
]

function wa(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

function App() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Office62 home">
          <span className="brandMark">62</span>
          <span>Office62</span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#location">Location</a>
          <a className="navCta" href={wa('Hi, I want to know about Office62 workspace plans.')} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15}/> Noida Sector 63</div>
          <h1>Your office in Noida.<br/><span>Without the office headache.</span></h1>
          <p className="heroText">
            Virtual office, business address, BPO seats, flexible team space and meeting rooms — all from one professional Sector 63 location.
          </p>
          <div className="heroActions">
            <a className="primary" href={wa('Hi, I want to book or enquire about an Office62 plan.')} target="_blank" rel="noreferrer">
              Get my Noida office <ArrowRight size={18}/>
            </a>
            <a className="secondary" href="#services">Explore services <ChevronRight size={18}/></a>
          </div>
          <div className="trustRow">
            <span><Check size={16}/> Flexible plans</span>
            <span><Check size={16}/> Fast onboarding</span>
            <span><Check size={16}/> Sector 63 location</span>
          </div>
        </div>

        <div className="heroPanel">
          <div className="availability">
            <span className="dot"></span>
            Spaces available
          </div>
          <h3>What do you need?</h3>
          <div className="needGrid">
            {['Virtual office','GST address','BPO seats','Meeting room','Team office','Hot desk'].map((item, i) => (
              <a key={item} href={wa(`Hi, I am interested in ${item} at Office62.`)} target="_blank" rel="noreferrer">
                <span>{String(i+1).padStart(2,'0')}</span>{item}<ArrowRight size={16}/>
              </a>
            ))}
          </div>
          <p className="micro">Tell us your requirement. We’ll recommend the simplest plan.</p>
        </div>
      </section>

      <section className="ticker">
        <div className="shell tickerInner">
          <span>VIRTUAL OFFICE</span><i>•</i><span>BPO SEATS</span><i>•</i><span>MEETING ROOMS</span><i>•</i><span>TEAM OFFICES</span><i>•</i><span>BUSINESS ADDRESS</span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">One office. Multiple ways to use it.</div>
            <h2>Start small. Scale when you need to.</h2>
          </div>
          <p>Choose only what your business needs today. Add desks, rooms or a larger setup later.</p>
        </div>

        <div className="services">
          {services.map(({icon: Icon, title, text}) => (
            <article className="serviceCard" key={title}>
              <div className="icon"><Icon size={21}/></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={wa(`Hi, tell me more about ${title}.`)} target="_blank" rel="noreferrer">Enquire <ArrowRight size={15}/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection">
        <div className="shell split">
          <div>
            <div className="eyebrow darkEyebrow">Built for operators</div>
            <h2>Need 6 calling seats next week? Done.</h2>
            <p className="largeP">Skip the furniture, internet setup and long leases. Bring your people and start operating from a ready workspace.</p>
            <a className="lightButton" href={wa('Hi, I need BPO/calling seats. Please share availability.')} target="_blank" rel="noreferrer">
              Check BPO seat availability <ArrowRight size={18}/>
            </a>
          </div>
          <div className="statGrid">
            <div><strong>1–20+</strong><span>Flexible seats</span></div>
            <div><strong>Day / Night</strong><span>Shift options</span></div>
            <div><strong>Fast</strong><span>Operational setup</span></div>
            <div><strong>Sector 63</strong><span>Noida business hub</span></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="pricing">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">Simple starting plans</div>
            <h2>Pay for presence. Upgrade for workspace.</h2>
          </div>
          <p>Final pricing can vary by documentation, seat count, duration and room usage.</p>
        </div>

        <div className="plans">
          {plans.map(plan => (
            <article className={`plan ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="popular">MOST FLEXIBLE</div>}
              <div className="planNote">{plan.note}</div>
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}<span>{plan.suffix}</span></div>
              <ul>
                {plan.features.map(f => <li key={f}><Check size={16}/>{f}</li>)}
              </ul>
              <a href={wa(`Hi, I am interested in the ${plan.name} plan.`)} target="_blank" rel="noreferrer">
                Get this plan <ArrowRight size={17}/>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell launch">
        <div className="launchCard">
          <div>
            <div className="eyebrow">For companies entering Delhi NCR</div>
            <h2>Noida Launch Office</h2>
            <p>Get a professional NCR presence, mail handling, meeting-room access and workspace credits without building a new office from scratch.</p>
          </div>
          <div className="launchList">
            <span><ShieldCheck size={18}/> Business presence</span>
            <span><Mail size={18}/> Mail handling</span>
            <span><Users size={18}/> Workspace access</span>
            <span><PhoneCall size={18}/> Local operating base</span>
          </div>
          <a className="primary" href={wa('Hi, tell me about the Noida Launch Office package.')} target="_blank" rel="noreferrer">
            Launch in Noida <ArrowRight size={18}/>
          </a>
        </div>
      </section>

      <section className="section shell" id="location">
        <div className="locationCard">
          <div className="mapMock">
            <div className="mapPin"><MapPin size={26}/></div>
            <div className="road r1"></div><div className="road r2"></div><div className="road r3"></div>
          </div>
          <div className="locationCopy">
            <div className="eyebrow">Location</div>
            <h2>C4, B-3 (Basement), Sector 63, Noida</h2>
            <p>Build your Noida business presence from C4, B-3 (Basement), Sector 63 — a practical base for virtual office, BPO and flexible workspace requirements.</p>
            <div className="addressPlaceholder"><strong>C4, B-3 (Basement)</strong><span>Sector 63, Noida, Uttar Pradesh</span></div>
            <a className="secondary" href={wa('Hi, I want to schedule a visit to C4, B-3 (Basement), Sector 63, Noida. Please share available timings.')} target="_blank" rel="noreferrer">
              Schedule a visit <ChevronRight size={18}/>
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell ctaInner">
          <div>
            <div className="eyebrow darkEyebrow">Ready when you are</div>
            <h2>Tell us what kind of office you need.</h2>
            <p>We’ll help you choose the simplest option — from an address to a complete operating team space.</p>
          </div>
          <a className="waBig" href={wa('Hi Office62, I want to discuss my office requirement.')} target="_blank" rel="noreferrer">
            <MessageCircle size={21}/> Talk on WhatsApp <ArrowRight size={19}/>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">62</span><span>Office62</span></div>
        <p>Flexible business presence & workspace in Noida Sector 63.</p>
        <p className="legal">GST/registered office availability is subject to eligibility, lease permissions and required documentation.</p>
      </footer>
      <a className="mobileWhatsApp" href={wa('Hi Office62, I want to discuss my office requirement.')} target="_blank" rel="noreferrer">
        <MessageCircle size={20}/> WhatsApp us <ArrowRight size={18}/>
      </a>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
