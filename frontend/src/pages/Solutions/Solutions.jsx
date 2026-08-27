import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
import './Solutions.css'

const problems = [
  { id: 'customers', label: 'Get More Customers', title: 'Not Getting Enough Customers?', description: 'People may not be finding your business, understanding what you offer, or taking the next step.', path: ['BUSINESS', 'ONLINE PRESENCE', 'CUSTOMER DISCOVERY', 'ENQUIRY', 'FOLLOW-UP'], solutions: [['Website & Landing Page', 'Make it easier for customers to understand your business and contact you.'], ['Google & Local Presence', 'Help nearby customers discover your business.'], ['Social Media & Content', 'Show your products or services consistently where customers spend time.'], ['Lead Generation', 'Create practical ways to turn interest into enquiries.'], ['WhatsApp & Follow-Up', 'Make it easier to respond and continue the conversation.']], note: 'Your business may need one of these, or a combination.' },
  { id: 'time', label: 'Save Time', title: 'Too Much Work Is Being Done Manually?', description: 'Your team spends too much time repeating the same tasks.', path: ['REPETITIVE TASK', 'IDENTIFY', 'AUTOMATE', 'NOTIFY', 'TEAM'], solutions: [['AI Assistants', 'Handle common questions and repetitive information tasks.'], ['WhatsApp Automation', 'Automate common customer communication.'], ['Lead Automation', 'Capture, organize and notify your team about enquiries.'], ['Workflow Automation', 'Move repetitive business tasks through a simple automated process.'], ['Automated Reports', 'Turn recurring data into useful reports.']], note: "We'll identify what should be automated, and what should stay human." },
  { id: 'presence', label: 'Improve Online Presence', title: 'Does Your Business Look Behind the Competition?', description: 'Customers often judge a business before they contact it.', path: ['YOUR BUSINESS', 'BRANDING', 'DIGITAL PRESENCE', 'TRUST', 'CONTACT'], solutions: [['Business Website', 'Create a professional digital home for the business.'], ['Branding', 'Improve how your business looks and communicates.'], ['Google Business Presence', 'Make important business information easier to find.'], ['Digital Catalogue', 'Present products or services clearly online.'], ['Social Media Presence', 'Build a consistent and professional online identity.']], note: "The goal isn't to look modern for the sake of it. It is to build trust." },
  { id: 'operations', label: 'Improve Operations', title: 'Is Everyday Work Too Disorganized?', description: 'Scattered information and manual processes make simple work harder.', path: ['SCATTERED WORK', 'ORGANIZE', 'TRACK', 'CLARIFY', 'PROGRESS'], solutions: [['Lead Tracking', 'Keep customer enquiries organized.'], ['Business Workflows', 'Create clearer ways for tasks to move through your team.'], ['Data Organization', 'Bring important information into a structured system.'], ['Simple Dashboards', 'Give the team a clearer view of important information.'], ['Custom Tools', "Build a solution when existing tools don't fit the business."]], note: 'Sometimes the best solution is simply a better way to organize the work.' },
  { id: 'experience', label: 'Improve Customer Experience', title: 'Are Customers Waiting Too Long?', description: 'Slow replies, unclear information and missed follow-ups can make customers move elsewhere.', path: ['CUSTOMER NEED', 'CLEAR ANSWER', 'EASY CONTACT', 'FOLLOW-UP', 'CONFIDENCE'], solutions: [['WhatsApp Communication', 'Make customer communication easier.'], ['AI Customer Assistant', 'Answer common questions instantly and pass important conversations to your team.'], ['Enquiry Management', 'Keep customer requests organized.'], ['Follow-Up Automation', "Make sure important enquiries don't get forgotten."], ['Website Improvements', 'Give customers clearer information before they contact you.']], note: 'Better communication can make the entire customer journey simpler.' },
  { id: 'unsure', label: "I'm Not Sure Yet", title: 'Not Sure What Your Business Needs?', description: "You don't need to choose a technology. Tell us what is difficult and we will help you find the right direction.", path: ['YOUR QUESTION', 'UNDERSTAND', 'FIND THE RIGHT WAY', 'COMBINE', 'NEXT STEP'], solutions: [['Start with the problem', 'We will help you understand what is getting in the way.'], ['Find a practical direction', 'The right solution may combine several simple improvements.']], note: 'No technical knowledge needed. Just tell us what is difficult.' },
]

const customExamples = [
  ['RESTAURANT', ['Website', 'Google Presence', 'WhatsApp', 'Follow-Up'], 'Better customer enquiry flow'],
  ['RETAIL BUSINESS', ['Branding', 'Digital Catalogue', 'Website', 'Customer Follow-Up'], 'Better customer journey'],
  ['SERVICE BUSINESS', ['Website', 'Lead Capture', 'Lead Tracking', 'Automation'], 'More organized enquiries'],
]

function SolutionPath({ items }) {
  return <div className="solution-path">{items.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}{index < items.length - 1 && <i>↓</i>}</span>)}</div>
}

function Solutions() {
  const [activeId, setActiveId] = useState('customers')
  const activeProblem = problems.find((problem) => problem.id === activeId) || problems[0]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = problems.findIndex((problem) => problem.id === currentId)
        return problems[(currentIndex + 1) % problems.length].id
      })
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return <div className="solutions-page">
    <Section className="solutions-hero">
      <div className="container site-container solutions-hero-grid">
        <div className="solutions-hero-copy"><p className="eyebrow">Business Solutions</p><h1>Start With the Problem.<br /><em>Not the Technology.</em></h1><p>Every business is different. Tell us what is difficult, and we&apos;ll help you find a practical solution.</p><div className="hero-actions"><Button to="#problem-solver">Find a Solution <span aria-hidden="true">↓</span></Button><Button to="/contact" variant="secondary">Let&apos;s Talk <span aria-hidden="true">→</span></Button></div></div>
        <div className="solutions-hero-visual" aria-label="Business problem transformed into a practical solution"><div className="rail-header"><span>IRAHNEXAI / SOLUTION RAIL</span><b>LIVE</b></div><div className="solution-rail"><div className="rail-step is-problem"><span>01</span><i /><div><small>START WITH</small><strong>A real business problem</strong><p>Something is getting in the way.</p></div></div><div className="rail-step"><span>02</span><i /><div><small>MAKE IT CLEAR</small><strong>Understand what matters</strong><p>Find the point of friction.</p></div></div><div className="rail-step"><span>03</span><i /><div><small>CHOOSE WELL</small><strong>Find the right combination</strong><p>Use only what helps.</p></div></div><div className="rail-step is-outcome"><span>04</span><i /><div><small>MOVE FORWARD</small><strong>Better business</strong><p>Clearer work. Better progress.</p></div></div></div><div className="rail-footer"><span>PROBLEM</span><i>→</i><span>UNDERSTAND</span><i>→</i><span className="is-active">SOLUTION</span></div></div>
      </div>
    </Section>

    <Section id="problem-solver" className="problem-solver-section">
      <div className="container site-container"><div className="solver-heading"><p className="eyebrow">02 / Find the right direction</p><h2>Tell us what&apos;s getting in the way.</h2></div><div className="solver-layout"><nav className="problem-selector" aria-label="Business problems"><span className="selector-label">What&apos;s the problem?</span>{problems.map((problem, index) => <button className={activeId === problem.id ? 'problem-option is-active' : 'problem-option'} key={problem.id} type="button" aria-selected={activeId === problem.id} onClick={() => setActiveId(problem.id)}><b>0{index + 1}</b><span>{problem.label}</span><i aria-hidden="true">→</i></button>)}</nav><div className="selected-solution"><div className="selected-heading"><p className="eyebrow">Selected problem</p><h3>{activeProblem.title}</h3><p>{activeProblem.description}</p></div><div className="solution-path-wrap"><span className="path-label">The path forward</span><SolutionPath items={activeProblem.path} /></div><div className="possible-solutions"><span className="path-label">Possible solutions</span><div className="solution-list">{activeProblem.solutions.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div><p className="solution-note">{activeProblem.note}</p></div>{activeId === 'unsure' && <Button to="/contact">Help Me Find a Solution <span aria-hidden="true">→</span></Button>}</div></div><div className="custom-solution"><div><p className="eyebrow">Beyond the obvious answer</p><h3>Your Problem Doesn&apos;t Have to Fit a Box.</h3><p>Sometimes the right answer combines several solutions. Sometimes it requires something built specifically for your business.</p></div><div className="custom-path"><span>YOUR BUSINESS</span><i>↓</i><span>YOUR PROBLEM</span><i>↓</i><span>UNDERSTAND</span><i>↓</i><span>COMBINE</span><i>↓</i><span>CUSTOMIZE</span><i>↓</i><strong>YOUR SOLUTION</strong></div></div><div className="custom-examples">{customExamples.map(([title, items, outcome]) => <article key={title}><span>{title}</span><div>{items.map((item) => <b key={item}>{item}</b>)}</div><small>↓ {outcome}</small></article>)}</div></div>
    </Section>

    <Section className="solutions-final-cta"><div className="container site-container final-cta-grid"><div className="final-cta-copy"><p className="eyebrow">03 / The right next step</p><h2>Your Business Doesn&apos;t Need More Noise.<br /><em>It Needs the Right Solution.</em></h2><p>Tell us what is difficult. We&apos;ll help you figure out what makes sense.</p><div className="hero-actions"><Button to="/contact">Let&apos;s Talk <span aria-hidden="true">→</span></Button><Button to="/contact" variant="secondary">Contact Us</Button></div></div><div className="convergence-panel" aria-label="Problem to solution journey"><div className="convergence-panel-top"><span>DECISION PATH</span><b>READY WHEN YOU ARE</b></div><div className="convergence-path"><span>PROBLEM</span><i>↓</i><span>UNDERSTAND</span><i>↓</i><span className="is-final">RIGHT SOLUTION</span><i>↓</i><strong>YOUR BUSINESS</strong></div><div className="convergence-panel-note">Start with what is difficult. End with what helps.</div></div></div></Section>
  </div>
}

export default Solutions
