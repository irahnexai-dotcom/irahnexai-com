import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
import './Process.css'
import '../../styles/page-textures.css'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We start by understanding how your business works today.',
    detail:
      'You tell us what is difficult, what customers need, and what you want to improve.',
    result: 'Clear problem + clear goal',
    image: '/images/Discover.webp',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We decide the best next step for the business.',
    detail:
      'We identify the right priorities, the best solution path, and what should happen first.',
    result: 'Clear direction',
    image: '/images/plan.webp',
  },
  {
    number: '03',
    title: 'Create',
    description: 'We turn the direction into something practical and clear.',
    detail:
      'Design, content, structure, and business logic are shaped around your real needs.',
    result: 'A clear concept',
    image: '/images/Creative Technical.webp',
  },
  {
    number: '04',
    title: 'Build',
    description: 'We put the idea into a working form.',
    detail:
      'This stage brings the solution together so it can help your team and customers in real life.',
    result: 'Working solution',
    image: '/images/Implement.webp',
  },
  {
    number: '05',
    title: 'Test',
    description: 'We review the details before it goes live.',
    detail:
      'We check the experience across devices, forms, content, and day-to-day workflows.',
    result: 'Ready to go',
    image: '/images/Diagnose.webp',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We bring the solution into the real world.',
    detail:
      'The work becomes part of the business with a cleaner way to operate and grow.',
    result: 'Live progress',
    image: '/images/Improve.webp',
  },
  {
    number: '07',
    title: 'Improve',
    description: 'We keep refining what matters most.',
    detail:
      'The business continues to learn and improve as new needs, opportunities, and goals appear.',
    result: 'Better next steps',
    image: '/images/Improve.webp',
  },
]

function Process() {
  return (
    <div className="process-page">
      <Section className="process-hero">
        <div className="container site-container process-hero-grid">
          <div className="process-hero-copy">
            <p className="eyebrow">How We Work</p>
            <h1>
              From your problem to a <em>better</em>
              <span className="solution-line">solution.</span>
            </h1>
            <p>
              We understand your business, identify what needs to improve, build the
              right solution, and stay with you as it grows.
            </p>
            <div className="hero-actions">
              <Button to="/contact">
                Start a Conversation <span aria-hidden="true">→</span>
              </Button>
              <Button to="#process-journey" variant="secondary">
                See Our Process <span aria-hidden="true">↓</span>
              </Button>
            </div>

            <div className="process-sequence" aria-label="Business improvement process">
              <span className="process-sequence-label">YourBusiness</span>
              {steps.map((step) => (
                <span key={step.title} className="process-sequence-item">
                  {step.number}
                  {step.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="process-journey" className="process-timeline-section">
        <div className="container site-container">
          <div className="section-intro">
            <p className="eyebrow">The journey</p>
            <h2>Clear steps. Real progress.</h2>
          </div>

          <div className="process-timeline">
            {steps.map((step) => (
              <article
                className="process-step"
                key={step.title}
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(11, 13, 12, .92), rgba(11, 13, 12, .62)), url("${step.image}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <span className="process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="process-step-detail">
                  <p>{step.detail}</p>
                  <strong>{step.result}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="process-why">
        <div className="container site-container process-why-grid">
          <div className="process-why-card">
            <span>Business first</span>
            <h3>We focus on what matters.</h3>
            <p>Every stage is built around your business goals, customer experience, and day-to-day reality.</p>
          </div>
          <div className="process-why-card">
            <span>Practical</span>
            <h3>We keep it useful.</h3>
            <p>Strategy, design, and technology work together so the solution is helpful and sustainable.</p>
          </div>
          <div className="process-why-card">
            <span>Better growth</span>
            <h3>We improve as you improve.</h3>
            <p>We help businesses move from scattered effort to a clearer and more effective system.</p>
          </div>
        </div>
      </Section>

      <Section className="process-cta">
        <div className="container site-container process-cta-shell">
          <div>
            <p className="eyebrow">Ready to start?</p>
            <h2>Tell us what you want to improve.</h2>
            <p>We will help you find the right path forward.</p>
          </div>
          <div className="hero-actions">
            <Button to="/contact">
              Let&apos;s Talk <span aria-hidden="true">→</span>
            </Button>
            <Button to="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Process
