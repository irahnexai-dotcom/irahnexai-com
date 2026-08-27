import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
import './Services.css'

const services = [
  {
    id: 'ai-automation',
    number: '01',
    label: 'AI & Automation',
    title: 'Let Technology Handle the Repetitive Work.',
    intro: 'We automate repetitive tasks so your team can spend more time on customers and important work.',
    summary: 'From enquiries to follow-up and tasks, AI helps businesses move faster without losing the human touch.',
    workflow: ['Customer', 'Enquiry', 'AI / Automation', 'Action', 'Team'],
    examples: ['Lead Follow-Up', 'Customer Support', 'Business Workflow', 'Reports'],
    details: ['AI chatbots', 'WhatsApp automation', 'Lead automation', 'Customer follow-up', 'Business workflow automation', 'AI assistants', 'Automated reports', 'Simple business integrations'],
  },
  {
    id: 'digital-presence',
    number: '02',
    label: 'Websites & Digital Presence',
    title: 'Help Customers Find You.',
    intro: 'We build clean, fast websites and digital profiles that make your business easier to discover and trust.',
    summary: 'Your online presence should make it easy for customers to understand your business and get in touch.',
    workflow: ['Search', 'Your Business', 'Website', 'Enquiry'],
    examples: ['Business websites', 'Landing pages', 'Google Business support', 'WhatsApp Business setup', 'Digital catalogues', 'Online enquiry forms'],
    details: ['Business websites', 'Landing pages', 'Google Business Profile support', 'WhatsApp Business setup', 'Digital catalogues', 'Online enquiry forms', 'Basic e-commerce', 'Simple lead capture'],
  },
  {
    id: 'branding-design',
    number: '03',
    label: 'Branding & Business Design',
    title: 'Look as Good as Your Business Is.',
    intro: 'We help your business look professional and consistent everywhere customers see you.',
    summary: 'Clear branding makes trust easier to build and helps people remember your business.',
    workflow: ['Old / Unclear', 'Brand System', 'Professional'],
    examples: ['Logo design', 'Visiting cards', 'Business profiles', 'Brochures', 'Posters', 'Social creatives'],
    details: ['Logo design', 'Visiting cards', 'Business profiles', 'Brochures', 'Product catalogues', 'Posters', 'Social media creatives', 'Basic brand identity'],
  },
  {
    id: 'marketing-reach',
    number: '04',
    label: 'Marketing & Customer Reach',
    title: 'Help More People Notice You.',
    intro: 'We help businesses reach the right customers through simple, practical digital marketing.',
    summary: 'Good marketing is not noise — it is a clear path that brings the right people closer to your business.',
    workflow: ['Audience', 'Message', 'Reach', 'Enquiry'],
    examples: ['Social media management', 'Social media creatives', 'Content', 'Local SEO', 'Google Business support', 'Google Ads & Meta Ads'],
    details: ['Social media management', 'Social media creatives', 'Content planning', 'Local SEO support', 'Google Business support', 'Google Ads', 'Meta Ads', 'Lead generation'],
  },
  {
    id: 'business-support',
    number: '05',
    label: 'Business Support',
    title: 'Make Everyday Business Easier.',
    intro: 'Sometimes the answer is not more technology. We help organize and improve the way your business works.',
    summary: 'Better systems remove friction, help teams work with less confusion, and make business decisions easier.',
    workflow: ['Process', 'Organize', 'Track', 'Improve'],
    examples: ['Business process improvement', 'Lead tracking', 'Customer database organization', 'Reporting setup', 'Workflow support', 'Digital document organization'],
    details: ['Business process improvement', 'Customer database organization', 'Lead tracking', 'Staff workflow support', 'Digital document organization', 'Reporting setup', 'Basic business systems', 'Operational clarity'],
  },
]

const improvementNeeds = [
  {
    id: 'customers',
    title: 'Get More Customers',
    description: 'You want more visibility and enquiries from the right people.',
    fit: ['Websites & Digital Presence', 'Marketing & Customer Reach', 'AI & Automation'],
  },
  {
    id: 'professional',
    title: 'Look More Professional',
    description: 'You want a business that feels clear, credible, and consistent.',
    fit: ['Branding & Business Design', 'Websites & Digital Presence'],
  },
  {
    id: 'time',
    title: 'Save Time',
    description: 'You want less repetitive work and fewer manual follow-ups.',
    fit: ['AI & Automation', 'Business Support'],
  },
  {
    id: 'service',
    title: 'Improve Customer Service',
    description: 'You want customers answered faster and communication to feel smoother.',
    fit: ['AI & Automation', 'Websites & Digital Presence', 'Business Support'],
  },
  {
    id: 'organize',
    title: 'Organize My Business',
    description: 'You want clearer systems, better tracking, and less confusion inside the team.',
    fit: ['Business Support', 'AI & Automation', 'Marketing & Customer Reach'],
  },
]

const heroWorkflow = [
  ['01', 'Business need', 'A challenge worth solving'],
  ['02', 'Right service', 'A practical direction'],
  ['03', 'Working system', 'Built around your business'],
  ['04', 'Better outcome', 'Clearer work and growth'],
]

function ServiceBlock({ service }) {
  return <article id={service.id} className="service-directory-item">
    <div className="service-block-inner">
      <div className="directory-number">{service.number}</div>
      <div className="directory-copy">
        <p className="eyebrow">{service.label}</p>
        <h2>{service.title}</h2>
        <p>{service.intro}</p>
      </div>
      <div className="directory-offer">
        <span className="directory-offer-label">We can help with</span>
        <div className="directory-tags">
          {service.examples.slice(0, 6).map((example) => <span key={example}>{example}</span>)}
        </div>
      </div>
    </div>
    <a className="directory-link" href="/contact">Talk to us <span aria-hidden="true">↗</span></a>
  </article>
}

function Services() {
  const [activeNeed, setActiveNeed] = useState('customers')

  const selectedNeed = improvementNeeds.find((need) => need.id === activeNeed) || improvementNeeds[0]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveNeed((currentNeed) => {
        const currentIndex = improvementNeeds.findIndex((need) => need.id === currentNeed)
        return improvementNeeds[(currentIndex + 1) % improvementNeeds.length].id
      })
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  return <div className="services-page">
    <Section className="services-hero">
      <div className="container site-container">
        <div className="services-hero-main">
          <div className="services-hero-copy">
            <p className="eyebrow">What We Do</p>
            <h1>Make Your Business Work <em>Smarter.</em></h1>
            <p>From AI automation to websites, branding and customer reach, we provide practical solutions that make everyday business easier.</p>
            <div className="hero-actions">
              <Button to="/contact">Improve My Business <span aria-hidden="true">↗</span></Button>
              <Button to="/solutions" variant="secondary">Explore Solutions</Button>
            </div>
          </div>
          <div className="business-system" aria-label="How our services improve a business">
            <div className="workflow-system-top"><span>BUSINESS IMPROVEMENT SYSTEM</span><b>LIVE / 04</b></div>
            <div className="hero-workflow-line" aria-hidden="true" />
            <div className="hero-workflow">
              {heroWorkflow.map(([number, title, description]) => (
                <div className="hero-workflow-step" key={number}>
                  <span className="workflow-step-number">{number}</span>
                  <span className="workflow-step-node" />
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>
              ))}
            </div>
            <div className="workflow-service-strip"><span>AVAILABLE THROUGH</span><strong>AI + WEB + BRAND + REACH + SUPPORT</strong></div>
          </div>
        </div>
      </div>
    </Section>

    <div className="service-directory-section">
      <div className="container site-container">
        <div className="directory-heading">
          <div>
            <p className="eyebrow">How we can help</p>
            <h2>Choose what your business needs next.</h2>
          </div>
          <p>Simple support for the parts of your business that need more clarity, time, or reach.</p>
        </div>
        <div className="service-directory-list">
          {services.map((service) => <ServiceBlock key={service.id} service={service} />)}
        </div>
      </div>
    </div>

    <Section className="service-need-section">
      <div className="container site-container">
        <div className="section-intro service-need-intro">
          <p className="eyebrow">What do you want to improve?</p>
          <h2>Choose the problem you want to solve.</h2>
        </div>
        <div className="service-need-layout">
          <div className="need-pill-grid">
            {improvementNeeds.map((need) => (
              <button
                key={need.id}
                type="button"
                className={activeNeed === need.id ? 'need-pill is-active' : 'need-pill'}
                onClick={() => setActiveNeed(need.id)}
              >
                {need.title}
              </button>
            ))}
          </div>
          <div className="need-detail-card">
            <span className="need-detail-kicker">Most relevant services</span>
            <h3>{selectedNeed.title}</h3>
            <p>{selectedNeed.description}</p>
            <div className="need-match-list">
              {selectedNeed.fit.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="service-transform-section">
      <div className="container site-container">
        <div className="section-intro">
          <p className="eyebrow">Before & After</p>
          <h2>Small changes make a bigger difference.</h2>
        </div>
        <div className="transform-grid">
          <div className="transform-card">
            <div className="transform-head"><span>Before</span><strong>Manual follow-up</strong></div>
            <div className="transform-state before-state"><span className="transform-pill">Delayed</span><p>Responses are slow and easy to miss.</p></div>
            <div className="transform-arrow"><i className="bi bi-arrow-down" aria-hidden="true" /></div>
            <div className="transform-head"><span>After</span><strong>Automatic follow-up</strong></div>
            <div className="transform-state after-state"><span className="transform-pill">Systemized</span><p>Lead capture and reply flow happens without constant manual effort.</p></div>
          </div>

          <div className="transform-card">
            <div className="transform-head"><span>Before</span><strong>Customers cannot find you</strong></div>
            <div className="transform-state before-state"><span className="transform-pill">Invisible</span><p>Your online presence is not helping people choose you.</p></div>
            <div className="transform-arrow"><i className="bi bi-arrow-down" aria-hidden="true" /></div>
            <div className="transform-head"><span>After</span><strong>Website + Google + WhatsApp</strong></div>
            <div className="transform-state after-state"><span className="transform-pill">Visible</span><p>People can discover you, trust you, and contact you more easily.</p></div>
          </div>

          <div className="transform-card">
            <div className="transform-head"><span>Before</span><strong>Business information scattered</strong></div>
            <div className="transform-state before-state"><span className="transform-pill">Fragmented</span><p>Files, leads, and updates are hard to organize.</p></div>
            <div className="transform-arrow"><i className="bi bi-arrow-down" aria-hidden="true" /></div>
            <div className="transform-head"><span>After</span><strong>Organized digital system</strong></div>
            <div className="transform-state after-state"><span className="transform-pill">Clear</span><p>Workflows become easier to manage and improve over time.</p></div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="services-final-cta">
      <div className="container site-container cta-shell">
        <div className="cta-copy">
          <p className="eyebrow">Tell Us What You Want to Improve</p>
          <h2>Tell us the problem. We’ll help you find the right solution.</h2>
          <p>You do not need to know which technology you need. Tell us what is difficult in your business and we will guide the next step.</p>
        </div>
        <div className="cta-panel">
          <strong>Common starting points</strong>
          <ul>
            <li><i className="bi bi-check2" aria-hidden="true" />More customer enquiries</li>
            <li><i className="bi bi-check2" aria-hidden="true" />Less manual work</li>
            <li><i className="bi bi-check2" aria-hidden="true" />A clearer business identity</li>
            <li><i className="bi bi-check2" aria-hidden="true" />Better customer experience</li>
          </ul>
          <Button to="/contact">Let's Talk <span aria-hidden="true">↗</span></Button>
        </div>
      </div>
    </Section>
  </div>
}

export default Services
