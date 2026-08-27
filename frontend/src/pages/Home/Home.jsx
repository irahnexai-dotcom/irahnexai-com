import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import "./Home.css";

const solutions = [
  [
    "01",
    "Build Your Brand",
    "Make your business look professional.",
    "bi-stars",
    "/images/Build Your Brand.webp",
  ],
  [
    "02",
    "Grow Your Presence",
    "Help more people find and notice your business.",
    "bi-broadcast-pin",
    "/images/Grow Your Presence.webp",
  ],
  [
    "03",
    "Reach More Customers",
    "Bring in enquiries and improve follow-up.",
    "bi-people",
    "/images/Reach More Customers.webp",
  ],
  [
    "04",
    "Improve Your Business",
    "Make everyday work simpler and more organized.",
    "bi-arrow-up-right-circle",
    "/images/Improve Your Business.webp",
  ],
  [
    "05",
    "Make It Intelligent",
    "Use technology where it genuinely helps.",
    "bi-lightbulb",
    "/images/Make It Intelligent.webp",
  ],
];
const problems = [
  [
    "Not Enough Customers",
    "People don't know about your business.",
    "bi-person-plus",
  ],
  [
    "Too Much Manual Work",
    "Your team spends time doing repetitive tasks.",
    "bi-arrow-repeat",
  ],
  [
    "Poor Online Presence",
    "Your business does not look as professional online as it should.",
    "bi-window",
  ],
  [
    "Missed Opportunities",
    "Customers enquire, but follow-up is slow or inconsistent.",
    "bi-hourglass-split",
  ],
];
const industries = [
  ["Retail & Local Businesses", "/images/retail.jpg"],
  ["Education & Training", "/images/education.jpg"],
  ["Healthcare & Clinics", "/images/healthcare.jpg"],
  ["Food, Restaurants & Hospitality", "/images/food.jpg"],
  ["Real Estate & Property", "/images/real-estate.jpg"],
  ["Professional Services", "/images/professional.jpg"],
  ["Logistics & Transportation", "/images/logistics.jpg"],
  ["Textile & Fashion", "/images/textile.jpg"],
  ["Manufacturing & Engineering", "/images/manufacturing.jpg"],
  ["Finance & Business Services", "/images/finance.jpg"],
];
const process = [
  [
    "Discover",
    "Understand your business.",
    "We listen to how your business works today, what your customers need, and where your team loses time.",
    "/images/Discover.webp",
  ],
  [
    "Diagnose",
    "Find what needs improvement.",
    "We look at the gaps between the way things work now and the experience you want your customers and team to have.",
    "/images/Diagnose.webp",
  ],
  [
    "Plan",
    "Choose the right solution.",
    "We turn those findings into a clear plan with practical priorities, so every improvement has a reason behind it.",
    "/images/plan.webp",
  ],
  [
    "Implement",
    "Put it into action.",
    "We build and introduce the chosen changes carefully, keeping the solution useful for the people who use it every day.",
    "/images/Implement.webp",
  ],
  [
    "Improve",
    "Keep making it better.",
    "We review what is working, learn from real use, and keep refining the business as it grows.",
    "/images/Improve.webp",
  ],
];
const beforeItems = [
  "Brand feels unclear",
  "People cannot find you easily",
  "Enquiries are missed",
  "Daily work feels scattered",
  "Repetitive tasks take time",
];
const afterItems = [
  "A brand people remember",
  "A presence that gets noticed",
  "A clearer path to enquiries",
  "Work that feels organized",
  "Technology doing the repeat work",
];

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  );
}

function Hero() {
  const stages = [
    ["Discover", "Brand & presence", "Retail & local businesses"],
    ["Improve", "Customer reach", "Education & training"],
    ["Connect", "Better processes", "Healthcare & clinics"],
    ["Simplify", "Smart technology", "Food & hospitality"],
    ["Automate", "Organized operations", "Manufacturing & engineering"],
    ["Grow", "All parts working together", "Professional services"],
  ];
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(
      () =>
        setActiveStage((stage) =>
          stage === stages.length - 1 ? 0 : stage + 1,
        ),
      activeStage === stages.length - 1 ? 1800 : 900,
    );
    return () => window.clearTimeout(timer);
  }, [activeStage, stages.length]);

  return (
    <Section className="home-hero">
      <div className="container site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">
            Business improvement & digital solutions
          </p>
          <h1 className="reveal reveal-delay-1">
            Make your business <em>better.</em>
          </h1>
          <p className="hero-lede reveal reveal-delay-2">
            We help businesses improve how they look, reach customers, work, and
            grow using practical digital solutions and technology.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <Button to="/contact">
              Improve My Business <span aria-hidden="true">↗</span>
            </Button>
            <Button to="/solutions" variant="secondary">
              See What We Do
            </Button>
          </div>
        </div>
        <div
          className="hero-system"
          aria-label="Solutions and industries journey"
        >
          <img className="hero-logo" src="/images/logo.webp" alt="IrahNexAI logo" />
          <div className="system-top">
            <span className="system-label">How improvement takes shape</span>
            <span className="system-count">0{activeStage + 1} / 06</span>
          </div>
          <div className="journey-visual">
            <div className="journey-core">
              <span className="core-dot" />
              {stages[activeStage][0]}
            </div>
            <div className="journey-routes">
              <div className="journey-route-row">
                <span className="route-kicker">What we improve</span>
                <strong>{stages[activeStage][1]}</strong>
              </div>
              <div className="journey-route-row">
                <span className="route-kicker">Who we help</span>
                <strong>{stages[activeStage][2]}</strong>
              </div>
              <div className="journey-progress" aria-hidden="true">
                <span
                  style={{
                    width: `${((activeStage + 1) / stages.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="system-caption">
            Practical change for real businesses
          </div>
        </div>
      </div>
    </Section>
  );
}

function Problems() {
  const [activeProblem, setActiveProblem] = useState(0);
  const impactRef = useRef(null);
  const [title, copy, icon] = problems[activeProblem];
  const impact = [
    "Fewer people discover you.",
    "Your team loses time.",
    "Customers lose confidence.",
    "Good enquiries go cold.",
  ][activeProblem];
  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveProblem((problem) => (problem + 1) % problems.length),
      3000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const selectProblem = (index) => {
    setActiveProblem(index);
    if (window.matchMedia("(max-width: 575.98px)").matches) {
      window.requestAnimationFrame(() =>
        impactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        }),
      );
    }
  };
  return (
    <Section className="problems-section">
      <div className="container site-container">
        <SectionIntro
          eyebrow="The starting point"
          title="Something holding your business back?"
        >
          Good businesses can lose time and opportunities when the basics are
          harder than they need to be.
        </SectionIntro>
        <div className="problem-ecosystem">
          <div className="problem-nodes">
            {problems.map(([problemTitle, problemCopy, problemIcon], index) => (
              <button
                className={
                  activeProblem === index
                    ? "problem-node is-active"
                    : "problem-node"
                }
                key={problemTitle}
                type="button"
                onClick={() => selectProblem(index)}
              >
                <span className="problem-node-icon">
                  <i className={`bi ${problemIcon}`} aria-hidden="true" />
                </span>
                <span>
                  <strong>{problemTitle}</strong>
                  <small>{problemCopy}</small>
                </span>
              </button>
            ))}
          </div>
          <div className="problem-impact" ref={impactRef}>
            <div className="impact-heading">
              <span className="impact-icon">
                <i className={`bi ${icon}`} aria-hidden="true" />
              </span>
              <div>
                <span className="impact-kicker">When this happens</span>
                <h3>{title}</h3>
              </div>
            </div>
            <div className="impact-path" aria-label={`${title} impact journey`}>
              <span>
                <b>01</b>
                {copy}
              </span>
              <i className="bi bi-arrow-down" aria-hidden="true" />
              <span>
                <b>02</b>
                {impact}
              </span>
              <i className="bi bi-arrow-down" aria-hidden="true" />
              <strong>
                <b>03</b>Room to improve
              </strong>
            </div>
            <p className="impact-note">
              A small, practical change can make this part of the business
              easier.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Solutions() {
  return (
    <Section className="solutions-section">
      <div className="container site-container">
        <SectionIntro
          eyebrow="What we improve"
          title="We help your business move forward."
        />
        <div className="solution-grid">
          {solutions.map(([number, title, copy, icon, image]) => (
            <Link
              className={`solution-card solution-card-${number}`}
              to="/solutions"
              key={number}
              style={{ backgroundImage: `linear-gradient(90deg, rgba(11, 13, 12, .92), rgba(11, 13, 12, .48)), url("${image}")` }}
            >
              <span className="card-number">{number}</span>
              <i className={`bi ${icon}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Transformation() {
  const [showAfter, setShowAfter] = useState(false);
  const items = showAfter ? afterItems : beforeItems;
  return (
    <Section className="transformation-section">
      <div className="container site-container">
        <div className="transformation-heading">
          <SectionIntro
            eyebrow="The difference we make"
            title="From difficult to simple."
          >
            See how the right mix of brand, presence, customer reach, better
            processes, and technology can move a business forward.
          </SectionIntro>
          <button
            className="transform-toggle"
            type="button"
            aria-pressed={showAfter}
            onClick={() => setShowAfter((visible) => !visible)}
          >
            <span>{showAfter ? "After" : "Before"}</span>
            <i className="bi bi-arrow-left-right" aria-hidden="true" />
            <strong>
              {showAfter ? "See where you started" : "See what could improve"}
            </strong>
          </button>
        </div>
        <div className={`transform-board${showAfter ? " is-after" : ""}`}>
          <div className="transform-state-label">
            <span className="state-marker" />
            {showAfter ? "What becomes possible" : "Common business friction"}
          </div>
          <div className="transform-steps">
            {items.map((item, index) => (
              <div className="transform-step" key={item}>
                <span className="transform-index">0{index + 1}</span>
                <span>{item}</span>
                {index < items.length - 1 && (
                  <i className="bi bi-arrow-down" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="transform-result">
            <i
              className={showAfter ? "bi bi-check2" : "bi bi-arrow-up-right"}
              aria-hidden="true"
            />
            <span>
              {showAfter
                ? "One connected approach to a better business."
                : "These are the places where improvement starts."}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Industries() {
  return (
    <Section className="industries-section">
      <div className="container site-container">
        <SectionIntro
          eyebrow="Who we help"
          title="Real businesses. Real problems."
        >
          From local businesses to growing companies, we help different types of
          businesses improve and move forward.
        </SectionIntro>
        <div className="industry-grid">
          {industries.map(([industry, image], index) => (
            <Link to="/industries" className="industry-link" style={{ backgroundImage: `linear-gradient(90deg, rgba(11, 13, 12, .78), rgba(11, 13, 12, .42)), url(${image})`, backgroundBlendMode: "multiply" }} key={industry}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{industry}</strong>
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WhyUs() {
  const principles = [
    ["Business First", "We start with your business problem.", "/images/Business First.webp"],
    ["Practical Solutions", "We recommend what actually helps.", "/images/Practical Solutions.webp"],
    ["Creative + Technical", "Business thinking meets useful technology.", "/images/Creative Technical.webp"],
    ["Long-Term Support", "We help improve the business continuously.", "/images/Long-Term Support.webp"],
  ];
  return (
    <Section className="why-section">
      <div className="container site-container">
        <div className="why-intro">
          <SectionIntro
            eyebrow="Why IrahNexAI"
            title="More than a digital agency."
          >
            Technology is only useful when it makes the business better. We
            bring the right parts together.
          </SectionIntro>
          <span className="why-signature">
            Business <i className="bi bi-plus" aria-hidden="true" /> People{" "}
            <i className="bi bi-plus" aria-hidden="true" /> Progress
          </span>
        </div>
        <div className="principles-rail">
          {principles.map(([title, copy, image], index) => (
            <article
              className="principle-band"
              key={title}
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(11, 13, 12, .9), rgba(11, 13, 12, .58)), url("${image}")`,
              }}
            >
              <span className="principle-big-number">0{index + 1}</span>
              <span className="principle-type">Principle</span>
              <div className="principle-band-copy">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <span className="principle-status" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveStep((step) => (step + 1) % process.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, []);
  return (
    <Section className="process-section">
      <div className="container site-container">
        <SectionIntro
          eyebrow="How we work"
          title="Simple process. Clear direction."
        />
        <div className="process-layout">
          <div className="process-rail" aria-hidden="true">
            <span
              className="process-progress"
              style={{
                transform: `scaleY(${(activeStep + 1) / process.length})`,
              }}
            />
          </div>
          <div className="process-list" aria-live="polite">
            {process.map(([title, copy, , image], index) => (
              <button
                className={
                  activeStep === index
                    ? "process-step is-active"
                    : activeStep > index
                      ? "process-step is-complete"
                      : "process-step"
                }
                key={title}
                type="button"
                onClick={() => setActiveStep(index)}
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(11, 13, 12, .92), rgba(11, 13, 12, .62)), url("${image}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <span className="process-number">
                  {activeStep > index ? "✓" : `0${index + 1}`}
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
              </button>
            ))}
          </div>
          <div className="process-note">
            <span>Step 0{activeStep + 1} of 05</span>
            <strong>{process[activeStep][0]}</strong>
            <p>{process[activeStep][1]}</p>
            <small>{process[activeStep][2]}</small>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section className="final-cta">
      <div className="container site-container">
        <div className="cta-content">
          <div>
            <p className="eyebrow">A practical next step</p>
            <h2>
              Your business can do <em>better.</em>
            </h2>
          </div>
          <div>
            <p>
              Tell us what is holding your business back. We'll help you find a
              practical way forward.
            </p>
            <div className="hero-actions">
              <Button to="/contact">
                Let's Talk <span aria-hidden="true">↗</span>
              </Button>
              <Button to="/solutions" variant="secondary">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Solutions />
      <Transformation />
      <Industries />
      <WhyUs />
      <Process />
      <FinalCta />
    </>
  );
}
