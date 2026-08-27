import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
import './About.css'
import '../../styles/page-textures.css'

const principles = [
  ['01', 'Business First', 'Start with the real problem, not the technology.', '/images/Business First.webp'],
  ['02', 'Keep It Simple', 'Solutions should be easy to understand and use.', '/images/Practical Solutions.webp'],
  ['03', 'Make It Useful', 'Every solution should have a clear purpose.', '/images/Creative Technical.webp'],
  ['04', 'Keep Improving', 'There is always a better way to work.', '/images/Long-Term Support.webp'],
]

const decisions = [
  ['Understand', 'Learn how your business actually works.'],
  ['Identify', 'Find what is slowing it down.'],
  ['Choose', 'Use only the solutions that make sense.'],
  ['Improve', 'Keep refining the result.'],
]

function Path({ items, className = '' }) {
  return <div className={`about-path ${className}`.trim()}>{items.map(([title, copy], index) => <div className="about-path-step" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong>{copy && <p>{copy}</p>}</div>{index < items.length - 1 && <i className="bi bi-arrow-down" aria-hidden="true" />}</div>)}</div>
}

function About() {
  return <div className="about-page">
    <Section className="about-hero"><div className="container site-container about-hero-grid"><div className="about-hero-copy"><p className="eyebrow">About IrahNexAI</p><h1>Technology Is Only Useful When It Makes <em>Business Better.</em></h1><p>We help businesses improve how they look, reach customers, work, and grow using practical digital solutions and technology.</p><div className="hero-actions"><Button to="#about-story">Discover Our Story <span aria-hidden="true">↓</span></Button></div></div><div className="about-hero-visual" aria-label="Business, people, improvement"><div className="signal-header"><span>Business signal</span><b>Live direction</b></div><div className="signal-main"><div className="signal-score"><span>01</span><strong>Better<br /><em>work</em></strong><small>Business / People / Progress</small></div><div className="signal-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div></div><div className="signal-flow"><span>Business</span><i className="bi bi-arrow-right" aria-hidden="true" /><span>People</span><i className="bi bi-arrow-right" aria-hidden="true" /><span className="is-active">Improvement</span></div></div></div></Section>
    <Section id="about-story" className="about-story"><div className="container site-container"><div className="about-section-heading"><p className="eyebrow">Our story</p><h2>It Started With a Simple Idea.</h2><p>Good businesses should not have to struggle with unclear presence, scattered work, or technology that creates more confusion.</p></div><Path className="story-path" items={[['The Problem', 'Good businesses were working harder than they needed to.'], ['The Idea', 'Make improvement practical, clear, and useful.'], ['IrahNexAI', 'Bring brand, reach, systems, and technology together.'], ['The Journey', 'Keep learning from the businesses we help.']]} /></div></Section>
    <Section className="about-problem"><div className="container site-container"><div className="about-section-heading"><p className="eyebrow">Why we exist</p><h2>Good Businesses Deserve Better Support.</h2></div><div className="about-transformation"><div className="transformation-column before"><span className="transformation-label">Before</span><Path items={[['Good Business'], ['Outdated Presence'], ['Manual Work'], ['Missed Opportunities']]} /></div><div className="transformation-bridge"><i className="bi bi-arrow-right" aria-hidden="true" /><span>Practical improvement</span></div><div className="transformation-column after"><span className="transformation-label">After</span><Path items={[['Good Business'], ['Better Presence'], ['Simpler Work'], ['Better Customer Experience']]} /></div></div></div></Section>
    <Section className="about-values"><div className="container site-container"><div className="about-section-heading"><p className="eyebrow">What we believe</p><h2>The Way We Work Starts With What Matters.</h2></div><div className="principle-list">{principles.map(([number, title, copy, image]) => <article className="principle-row" key={title} style={{ backgroundImage: `linear-gradient(90deg, rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("${image}")` }}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></Section>
    <Section className="about-difference"><div className="container site-container"><div className="about-section-heading"><p className="eyebrow">What makes us different</p><h2>We Don't Believe Every Business Needs the Same Solution.</h2></div><div className="decision-system"><div className="decision-center" style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .78), rgba(11, 13, 12, .88)), url("/images/logo.webp")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '72%' }}><span className="decision-center-status">Starting point</span><strong>Your business</strong><small>One clear direction</small></div><Path className="decision-path" items={decisions} /></div></div></Section>
    <Section className="about-vision"><div className="container site-container vision-layout"><div className="about-section-heading"><p className="eyebrow">Our vision</p><h2>We're Building for the Businesses That Want to Improve.</h2><p>Our goal is to become a trusted partner for businesses that want to improve — from their brand and customer reach to their everyday work and use of technology.</p></div><Path items={[['Today'], ['Help Businesses'], ['Build Better Solutions'], ['Help More Businesses'], ['Keep Improving']]} /></div></Section>
    <Section className="about-cta"><div className="container site-container about-cta-shell"><div><p className="eyebrow">A practical next step</p><h2>Let's Build Something <em>Better.</em></h2><p>Tell us what is difficult in your business. We'll help you find a practical way forward.</p></div><div className="hero-actions"><Button to="/contact">Let's Talk <span aria-hidden="true">→</span></Button><Button to="/services" variant="secondary">Explore Our Services</Button></div></div></Section>
  </div>
}

export default About
