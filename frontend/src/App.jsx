import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'
import OpeningReveal from './components/OpeningReveal/OpeningReveal'
import 'aos/dist/aos.css'

const seoPages = {
  '/': {
    title: 'IrahNexAI | Practical Digital Solutions for Better Business',
    description: 'IrahNexAI helps businesses improve their brand, customer reach, everyday work, and use of practical digital solutions.',
  },
  '/services': {
    title: 'Business Services | IrahNexAI',
    description: 'Explore practical services from IrahNexAI, including automation, websites, branding, marketing, customer reach, and business support.',
  },
  '/solutions': {
    title: 'Business Solutions | IrahNexAI',
    description: 'Find practical digital solutions to help your business attract customers, save time, improve service, and stay organized.',
  },
  '/industries': {
    title: 'Industries We Support | IrahNexAI',
    description: 'See how IrahNexAI helps retail, education, healthcare, hospitality, professional services, manufacturing, and other businesses improve.',
  },
  '/about': {
    title: 'About IrahNexAI | Practical Business Improvement',
    description: 'Learn how IrahNexAI combines business thinking, design, and useful technology to help businesses work better and grow.',
  },
  '/process': {
    title: 'How We Work | IrahNexAI',
    description: 'Discover the clear, practical process IrahNexAI uses to understand business needs, build useful solutions, and keep improving.',
  },
  '/contact': {
    title: 'Contact IrahNexAI | Start Improving Your Business',
    description: 'Tell IrahNexAI what is holding your business back and find a practical way to improve your work, customer reach, and growth.',
  },
}

function updateMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function SeoMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = seoPages[pathname] || seoPages['/']
    const canonicalUrl = `https://irahnexai.com${pathname === '/' ? '/' : pathname}`
    document.title = page.title
    updateMeta('name', 'description', page.description)
    updateMeta('property', 'og:title', page.title)
    updateMeta('property', 'og:description', page.description)
    updateMeta('property', 'og:url', canonicalUrl)
    updateMeta('property', 'og:image', 'https://irahnexai.com/images/logo.webp')
    updateMeta('name', 'twitter:card', 'summary')
    updateMeta('name', 'twitter:title', page.title)
    updateMeta('name', 'twitter:description', page.description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [pathname])

  return null
}

function TextRevealAnimations() {
  const { pathname } = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const textElements = document.querySelectorAll('.site-main h1, .site-main h2, .site-main h3, .site-main .eyebrow, .site-main p')

      textElements.forEach((element, index) => {
        if (element.classList.contains('reveal')) return
        element.dataset.aos = 'fade-up'
        element.dataset.aosDuration = '650'
        element.dataset.aosOffset = '80'
        element.dataset.aosDelay = String(Math.min(index % 4, 3) * 70)
      })

      AOS.init({
        anchorPlacement: 'top-bottom',
        duration: 650,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      })
      AOS.refreshHard()
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <OpeningReveal />
      <SeoMetadata />
      <TextRevealAnimations />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
