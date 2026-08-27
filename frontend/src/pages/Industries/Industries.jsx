import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
import './Industries.css'

const industries = [
  { id: 'retail', name: 'Retail & Local Businesses', journey: 'Customer journey', statement: 'Help more local customers discover your business, contact you, and come back again.', challenges: ['Customers cannot easily find you online', 'Your online presence feels outdated', 'Enquiries are missed', 'Follow-up is manual'], solutions: ['Business website', 'Google Business support', 'Social media support', 'WhatsApp enquiries', 'Customer follow-up'] },
  { id: 'education', name: 'Education & Training', journey: 'Learning journey', statement: 'Make it easier for students and parents to find your courses and contact you.', challenges: ['Difficult to reach new students', 'Course information is scattered', 'Enquiries need manual follow-up', 'Admissions are difficult to manage'], solutions: ['Course website', 'Clear course presentation', 'Lead generation', 'WhatsApp communication', 'Admission workflow'] },
  { id: 'healthcare', name: 'Healthcare & Clinics', journey: 'Patient journey', statement: 'Make it easier for patients to find your services and reach your team.', challenges: ['Patients struggle to find information', 'Appointment enquiries are manual', 'Follow-up is inconsistent', 'Online presence needs more trust'], solutions: ['Professional website', 'Clear service information', 'Appointment enquiries', 'WhatsApp communication', 'Patient workflows'] },
  { id: 'food', name: 'Food, Restaurants & Hospitality', journey: 'Guest journey', statement: 'Help more guests find you, choose you, and stay connected.', challenges: ['Customers cannot easily find the business', 'Menu information is outdated', 'Social media is inconsistent', 'Enquiries are missed'], solutions: ['Digital menu', 'Business website', 'Google Business support', 'Social media', 'Customer communication'] },
  { id: 'real-estate', name: 'Real Estate & Property', journey: 'Property journey', statement: 'Make property discovery, enquiries, and follow-up easier to manage.', challenges: ['Property enquiries are difficult to organize', 'Leads are lost', 'Property information is scattered', 'Follow-up is manual'], solutions: ['Property website', 'Digital property catalogue', 'Lead collection', 'Lead organization', 'Follow-up workflows'] },
  { id: 'professional', name: 'Professional Services', journey: 'Trust journey', statement: 'Present your expertise clearly and make it easier for the right clients to reach you.', challenges: ['Online presence does not show your value', 'Enquiries are difficult to manage', 'Appointments are handled manually', 'Follow-up is inconsistent'], solutions: ['Professional website', 'Clear service pages', 'Lead generation', 'Appointment systems', 'Process improvement'] },
  { id: 'logistics', name: 'Logistics & Transportation', journey: 'Movement journey', statement: 'Make your services easier to find, understand, and enquire about.', challenges: ['Business visibility is limited', 'Enquiries are hard to organize', 'Customer communication is scattered', 'Daily workflows take too much effort'], solutions: ['Business website', 'Service presentation', 'Enquiry management', 'Customer communication', 'Workflow improvement'] },
  { id: 'textile', name: 'Textile & Fashion', journey: 'Product journey', statement: 'Present your products beautifully and create a clearer path to new enquiries.', challenges: ['Products are difficult to present online', 'Branding feels inconsistent', 'Dealer enquiries are missed', 'Digital promotion is irregular'], solutions: ['Product catalogue', 'Brand identity', 'Digital presence', 'Dealer enquiries', 'Digital marketing'] },
  { id: 'manufacturing', name: 'Manufacturing & Engineering', journey: 'Production journey', statement: 'Show what your company does and make B2B enquiries easier to start.', challenges: ['Company capabilities are hard to explain', 'Product information is scattered', 'Dealer enquiries are missed', 'Internal work can be repetitive'], solutions: ['Company website', 'Product catalogue', 'B2B lead generation', 'Digital presence', 'Useful automation'] },
  { id: 'finance', name: 'Finance & Business Services', journey: 'Confidence journey', statement: 'Build a professional presence and make it easier for customers to take the next step.', challenges: ['Online presence does not build enough confidence', 'Enquiries are difficult to track', 'Appointments are handled manually', 'Processes need better organization'], solutions: ['Professional website', 'Customer enquiries', 'Appointment systems', 'Lead management', 'Process improvement'] },
]

const industryImages = {
  retail: '/images/retail.jpg',
  education: '/images/education.jpg',
  healthcare: '/images/healthcare.jpg',
  food: '/images/food.jpg',
  'real-estate': '/images/real-estate.jpg',
  professional: '/images/professional.jpg',
  logistics: '/images/logistics.jpg',
  textile: '/images/textile.jpg',
  manufacturing: '/images/manufacturing.jpg',
  finance: '/images/finance.jpg',
}

const imageOverlay = 'linear-gradient(90deg, rgba(11, 13, 12, .82), rgba(11, 13, 12, .42))'

function SelectorVisual({ industry }) {
  const flow = industry ? [industry.name.split(' & ')[0], 'Discover', 'Enquiry', 'Better follow-up'] : ['Business', 'People', 'Enquiries', 'Progress']
  return <div className="selector-visual" aria-label={`${industry?.journey || 'Business'} visual`}><span className="visual-label">{industry?.journey || 'Business journey'}</span><div className="visual-flow">{flow.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, '0')}</b>{step}{index < flow.length - 1 && <i aria-hidden="true">↓</i>}</span>)}</div></div>
}

function IndustrySection({ industry, index }) {
  const [showHelp, setShowHelp] = useState(false)
  const items = showHelp ? industry.solutions : industry.challenges
  return <Section id={industry.id} className={`industry-detail industry-${index + 1}`} style={{ backgroundImage: `${imageOverlay}, url(${industryImages[industry.id]})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}><div className="container site-container"><div className="industry-detail-header"><span className="industry-number">{String(index + 1).padStart(2, '0')}</span><div><p className="eyebrow">{industry.journey}</p><h2>{industry.name}</h2><p className="industry-statement">{industry.statement}</p></div></div><div className="industry-detail-grid"><div className="detail-column industry-tabs-column"><div className="industry-tabs" role="tablist" aria-label={`${industry.name} information`}><button className={!showHelp ? 'industry-tab is-active' : 'industry-tab'} type="button" role="tab" aria-selected={!showHelp} onClick={() => setShowHelp(false)}><span className="tab-status tab-status-wrong" aria-hidden="true">×</span>Common challenges</button><button className={showHelp ? 'industry-tab is-active' : 'industry-tab'} type="button" role="tab" aria-selected={showHelp} onClick={() => setShowHelp(true)}><span className="tab-status tab-status-right" aria-hidden="true">✓</span>How IrahNexAI helps</button></div><div className={showHelp ? 'industry-items is-help' : 'industry-items'}><span className="detail-label">{showHelp ? 'Practical ways forward' : 'What can get in the way'}</span><ul>{items.map((item) => <li key={item}><i className={showHelp ? 'bi bi-check2' : 'bi bi-x-lg'} aria-hidden="true" />{item}</li>)}</ul></div></div><div className="industry-flow"><SelectorVisual industry={industry} /></div></div></div></Section>
}

function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id)
  const [selected, setSelected] = useState(industries[0])

  useEffect(() => {
    const sections = industries.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id) }), { rootMargin: '-25% 0px -65% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const tabs = [...document.querySelectorAll('.selector-link, .industry-mini-nav a')]
    tabs.forEach((tab, index) => {
      const industry = industries[index % industries.length]
      tab.style.backgroundImage = `${imageOverlay}, url(${industryImages[industry.id]})`
    })
  }, [])

  return <div className="industries-page"><Section id="industries" className="industries-hero"><div className="container site-container"><div className="industries-hero-copy"><p className="eyebrow">Where we make a difference</p><h1>Built for different <em>businesses.</em></h1><p>Every business has different challenges. We help you find practical ways to improve how you work, reach customers, and grow.</p></div><div className="selector-layout"><div className="industry-selector" aria-label="Choose an industry">{industries.map((industry, index) => <a className={selected.id === industry.id ? 'selector-link is-selected' : 'selector-link'} href={`#${industry.id}`} key={industry.id} onMouseEnter={() => setSelected(industry)} onFocus={() => setSelected(industry)} onClick={() => setSelected(industry)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{industry.name}</strong><i className="bi bi-arrow-up-right" aria-hidden="true" /></a>)}</div><SelectorVisual industry={selected} /></div></div></Section><nav className="industry-mini-nav" aria-label="Industry sections"><div className="container site-container">{industries.map((industry, index) => <a className={activeId === industry.id ? 'is-active' : ''} href={`#${industry.id}`} key={industry.id}><span>{String(index + 1).padStart(2, '0')}</span><b>{industry.name.split(' & ')[0]}</b></a>)}</div></nav>{industries.map((industry, index) => <IndustrySection industry={industry} index={index} key={industry.id} />)}<Section className="industries-final-cta"><div className="container site-container"><div className="industries-cta-shell"><div className="industries-cta-copy"><p className="eyebrow">A useful next step</p><h2>Don't see your industry?</h2><p>Tell us about your business. We'll help you find where you can improve.</p><Button to="/contact">Let's Talk <span aria-hidden="true">↗</span></Button></div><div className="industries-cta-signal" aria-hidden="true"><span className="cta-signal-label">Your business</span><div className="cta-signal-line"><i /><i /><i /></div><strong>There is always<br /><em>a better way forward.</em></strong><span className="cta-signal-end">Start with a conversation</span></div></div></div></Section></div>
}

export default Industries
