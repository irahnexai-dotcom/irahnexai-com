import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Section from '../../components/Section/Section'
import Button from '../../components/Button/Button'
import './Contact.css'
import '../../styles/page-textures.css'

const improvementOptions = [
  'Get More Customers',
  'Improve My Online Presence',
  'Save Time & Automate',
  'Improve Customer Experience',
  'Improve My Business',
  "Not Sure Yet",
]

const signalStates = [
  ['UNCLEAR PROBLEM', 'UNDERSTAND', 'FIND THE RIGHT WAY', 'IMPROVE'],
  ['MORE CUSTOMERS', 'CLEARER PRESENCE', 'BETTER REACH', 'GROWTH'],
  ['REPETITIVE TASK', 'AUTOMATION', 'TIME SAVED', 'BETTER WORK'],
  ['CUSTOMER FRICTION', 'SIMPLER JOURNEY', 'MORE CONFIDENCE', 'LOYALTY'],
  ['BUSINESS PROBLEM', 'UNDERSTAND', 'PRACTICAL CHANGE', 'PROGRESS'],
  ['YOUR QUESTION', 'UNDERSTAND', 'FIND THE RIGHT WAY', 'NEXT STEP'],
]

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  ackTemplateId: import.meta.env.VITE_EMAILJS_ACK_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
const emailRoute = `mailto:irahnexai@gmail.com?subject=${encodeURIComponent('Business improvement enquiry')}&body=${encodeURIComponent('Hello IrahNexAI,\n\nI would like to discuss improving my business.\n\nBusiness name: \nWhat I would like to improve: \nBest way to reach me: \n\nThank you,')}`
const whatsappRoute = `https://wa.me/919025454148?text=${encodeURIComponent('Hello IrahNexAI, I would like to discuss improving my business.\n\nBusiness name: \nWhat I would like to improve:')}`

function BusinessSignal({ activeIndex, completedFields }) {
  const activeState = signalStates[activeIndex ?? 5]
  const fieldCount = Math.max(1, completedFields)

  return (
    <div className="business-signal" aria-label="Business conversation signal">
      <div className="signal-heading"><span className="signal-node active" />YOUR BUSINESS</div>
      <div className="signal-intro">A clearer way forward, one step at a time.</div>
      <div className="signal-flow">
            {activeState.map((label, index) => (
              <div className={index < fieldCount || index === 0 ? 'signal-step is-lit' : 'signal-step'} key={label}>
                <span className="signal-step-number">0{index + 1}</span>
                <span className="signal-step-dot" />
                <strong>{label}</strong>
              </div>
            ))}
      </div>
      <div className="signal-footer"><span className="signal-node active" />IRAHNEXAI</div>
    </div>
  )
}

function SubmissionButton({ state, type = 'submit' }) {
  if (state === 'success') {
    return <button className="conversation-submit is-success" type="button" aria-label="Enquiry sent successfully">
      Enquiry Sent
      <svg className="submit-check" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7" /></svg>
    </button>
  }

  const isSending = state === 'sending'
  const isError = state === 'error'
  return <button className={isSending ? 'conversation-submit is-sending' : isError ? 'conversation-submit is-error' : 'conversation-submit'} type={type} disabled={isSending} aria-busy={isSending} aria-label={isSending ? 'Sending enquiry' : undefined}>
    {isSending ? 'Sending...' : isError ? 'Try Again' : 'Send My Enquiry'}
    <span className="submit-visual" aria-hidden="true">
      {isSending ? <svg viewBox="0 0 220 48"><path className="submit-route" d="M18 24h178" /><path className="submit-plane" d="m0 8 16 8-16 8 4-8z" /></svg> : <span>→</span>}
    </span>
  </button>
}

function Contact() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [completedFields, setCompletedFields] = useState(0)
  const [formState, setFormState] = useState('idle')
  const [errors, setErrors] = useState({})

  function handleFieldChange(event) {
    const { name, value } = event.target
    setCompletedFields((count) => Math.max(count, ['name', 'business_name', 'phone', 'email', 'message'].indexOf(name) + 1))
    if (value.trim()) setErrors((current) => ({ ...current, [name]: '' }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (formState === 'sending') return
    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const nextErrors = {}
    if (!formData.get('improvement_area')) nextErrors.improvement_area = 'Please choose what you want to improve.'
    if (!formData.get('name')?.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.get('business_name')?.trim()) nextErrors.business_name = 'Please enter your business name.'
    if (!formData.get('phone')?.trim()) nextErrors.phone = 'Please enter your phone number.'
    if (!formData.get('message')?.trim()) nextErrors.message = 'Please tell us what you want to improve.'
    if (formData.get('email') && !/^\S+@\S+\.\S+$/.test(formData.get('email'))) nextErrors.email = 'Please check your email address.'
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    setFormState('sending')
    const name = formData.get('name').trim()
    const business_name = formData.get('business_name').trim()
    const phone = formData.get('phone').trim()
    const email = formData.get('email').trim()
    const improvement_area = `${String(activeIndex + 1).padStart(2, '0')} / ${improvementOptions[activeIndex]}`
    const message = formData.get('message').trim()
    const enquiry_context = improvementOptions[activeIndex] === 'Not Sure Yet'
      ? "You're not sure where to start yet — that's completely fine. We'll first understand your business and help you figure out what could make the biggest difference."
      : `You'd like to improve your business in the area of ${improvement_area}.`
    const templateParams = {
      name,
      business_name,
      phone,
      email,
      improvement_area,
      enquiry_context,
      message,
    }

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.contactTemplateId,
        templateParams,
        emailjsConfig.publicKey,
      )
    } catch (error) {
      console.error('EmailJS internal enquiry failed:', error)
      setFormState('error')
      return
    }

    if (email) {
      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.ackTemplateId,
          { name, email, improvement_area, enquiry_context, message },
          emailjsConfig.publicKey,
        )
      } catch (error) {
        console.error('EmailJS acknowledgement failed:', error)
      }
    }

    formElement.reset()
    setActiveIndex(null)
    setCompletedFields(0)
    setErrors({})
    setFormState('success')
  }

  return (
    <div className="contact-page">
      <Section className="contact-hero">
        <div className="container site-container contact-hero-grid">
          <div className="contact-hero-copy">
            <p className="eyebrow">Let's Talk</p>
            <h1>What&apos;s Holding Your <em>Business Back?</em></h1>
            <p>You don&apos;t need to know what solution you need. Tell us what&apos;s difficult, and we&apos;ll help you find a practical way forward.</p>
            <div className="hero-actions">
              <Button to="#improve">Start the Conversation <span aria-hidden="true">↓</span></Button>
            </div>
          </div>
          <BusinessSignal activeIndex={activeIndex} completedFields={completedFields} />
        </div>
      </Section>

      <Section id="improve" className="conversation-section">
        <div className="container site-container conversation-grid">
          <div className="conversation-copy">
            <p className="eyebrow">02 / Tell us a little</p>
            <h2>Let&apos;s make the problem clearer.</h2>
            <p>Your answers give us enough context to have a useful first conversation.</p>
            <div className="conversation-path"><span>PROBLEM</span><i>↓</i><span>UNDERSTAND</span><i>↓</i><span>IMPROVE</span></div>
          </div>
          <div className="conversation-form-wrap">
            {formState === 'success' ? (
              <div className="conversation-success" aria-live="polite"><span className="success-mark">✓</span><p className="eyebrow">Message received</p><h3>Got it. Your message is with us.</h3><p>We&apos;ll review what you&apos;ve shared and get back to you.</p><SubmissionButton state="success" /></div>
            ) : (
              <form className="conversation-form" onSubmit={handleSubmit} noValidate>
                <div className="improvement-fieldset" role="group" aria-labelledby="improvement-heading">
                  <h3 id="improvement-heading">What would you like to improve?</h3>
                  <p>Choose the closest starting point.</p>
                  <label className="visually-hidden" htmlFor="improvement">Improvement area</label>
                  <div className="improvement-select-wrap">
                    <select className="improvement-select" id="improvement" name="improvement_area" value={activeIndex ?? ''} onChange={(event) => setActiveIndex(Number(event.target.value))} required aria-invalid={Boolean(errors.improvement_area)}>
                      <option value="" disabled>Select an improvement area</option>
                    {improvementOptions.map((option, index) => <option value={index} key={option}>0{index + 1} / {option}</option>)}
                    </select>
                  </div>
                  {errors.improvement_area && <small className="field-error">{errors.improvement_area}</small>}
                </div>
                {[['name', 'Your Name', 'text'], ['business_name', 'Business Name', 'text'], ['phone', 'Phone / WhatsApp', 'tel'], ['email', 'Email', 'email']].map(([name, label, type]) => (
                  <div className="contact-field" key={name}><label htmlFor={name}>{label}</label><input id={name} name={name} type={type} onChange={handleFieldChange} aria-invalid={Boolean(errors[name])} />{errors[name] && <small className="field-error">{errors[name]}</small>}</div>
                ))}
                <div className="contact-field"><label htmlFor="message">Tell us what you want to improve</label><textarea id="message" name="message" rows="4" onChange={handleFieldChange} aria-invalid={Boolean(errors.message)} />{errors.message && <small className="field-error">{errors.message}</small>}</div>
                {formState === 'sending' && <p className="form-status" aria-live="polite">Starting the conversation...</p>}
                {formState === 'error' && <p className="form-status form-status-error" aria-live="polite">Something went wrong. Please try again or <a href={emailRoute}>email us directly</a>.</p>}
                <SubmissionButton state={formState} />
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section className="contact-alternatives">
          <div className="container site-container"><div className="alternatives-heading"><p className="eyebrow">Prefer a direct route?</p><h2>Start where it feels easiest.</h2></div><div className="alternative-list"><a href={emailRoute} style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("/images/mail.webp")' }}><span>EMAIL</span><strong>Send us an email <b>→</b></strong><small>irahnexai@gmail.com</small></a><div style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("/images/location.webp")' }}><span>LOCATION</span><strong>Erode, Tamil Nadu</strong><small>India</small></div><a href="tel:+919150918528" style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("/images/call.webp")' }}><span>CALL</span><strong>+91 91509 18528 <b>→</b></strong><small>Talk to us directly</small></a><a href={whatsappRoute} target="_blank" rel="noreferrer" style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("/images/whatsapp.webp")' }}><span>WHATSAPP</span><strong>+91 90254 54148 <b>→</b></strong><small>Message us on WhatsApp</small></a><a href="https://www.linkedin.com/company/irahnexai" target="_blank" rel="noreferrer" style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("/images/linkedin.webp")' }}><span>LINKEDIN</span><strong>Connect with us <b>→</b></strong><small>Follow IrahNexAI</small></a><a href="https://www.instagram.com/irahnexai" target="_blank" rel="noreferrer" style={{ backgroundImage: 'linear-gradient(rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("/images/instagram.webp")' }}><span>INSTAGRAM</span><strong>Follow our work <b>→</b></strong><small>@irahnexai</small></a></div></div>
      </Section>
    </div>
  )
}

export default Contact
