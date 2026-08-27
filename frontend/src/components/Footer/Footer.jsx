import { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin)

const exploreLinks = [['/', 'Home'], ['/services', 'Services'], ['/solutions', 'Solutions'], ['/industries', 'Industries'], ['/about', 'About Us'], ['/process', 'Process'], ['/contact', 'Contact']]
const serviceLinks = [['/services#ai-automation', 'AI & Automation'], ['/services#digital-presence', 'Digital Presence'], ['/services#business-support', 'Business Support'], ['/services#marketing-reach', 'Marketing & Customer Reach']]

function FooterLink({ href, children, external = false, icon }) {
  const content = <>{icon && <i className={`bi ${icon}`} aria-hidden="true" />}{children}<span aria-hidden="true">↗</span></>
  if (!external && href.startsWith('/')) return <NavLink to={href}>{content}</NavLink>
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{content}</a>
}

function Footer() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const down = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z'
      const center = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z'

      ScrollTrigger.create({
        trigger: '.site-footer',
        start: 'top bottom',
        toggleActions: 'play pause resume reverse',
        onEnter: self => {
          const velocity = self.getVelocity()
          const variation = velocity / 10000

          gsap.fromTo('#bouncy-path', {
            morphSVG: down
          }, {
            duration: 2,
            morphSVG: center,
            ease: `elastic.out(${1 + variation}, ${1 - variation})`,
            overwrite: true
          })
        }
      })
    })

    return () => context.revert()
  }, [])

  return (
    <footer className="site-footer">
      <svg className="footer-bounce" viewBox="0 0 2278 683" preserveAspectRatio="none" aria-hidden="true">
        <path id="bouncy-path" d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z" />
      </svg>
      <div className="container site-container footer-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <NavLink className="footer-brand-mark" to="/" aria-label="IrahNexAI home"><img src="/images/logo.webp" alt="" /><span>IrahNexAI</span></NavLink>
            <p>Helping businesses work better, reach more people, and grow with practical digital solutions.</p>
            <span className="footer-signal"><i aria-hidden="true" /> Connected for better business</span>
            <span className="footer-note">Made for better business.</span>
          </div>
          <nav className="footer-group" aria-label="Explore"><span className="footer-label">Explore</span>{exploreLinks.map(([path, label]) => <FooterLink href={path} key={path}>{label}</FooterLink>)}</nav>
          <nav className="footer-group" aria-label="Services"><span className="footer-label">Services</span>{serviceLinks.map(([path, label]) => <FooterLink href={path} key={path}>{label}</FooterLink>)}</nav>
          <div className="footer-group footer-connect"><span className="footer-label">Connect</span><FooterLink href="mailto:irahnexai@gmail.com" icon="bi-envelope">irahnexai@gmail.com</FooterLink><FooterLink href="tel:+919150918528" icon="bi-telephone">+91 91509 18528</FooterLink><FooterLink href="https://wa.me/919025454148" external icon="bi-whatsapp">+91 90254 54148</FooterLink><FooterLink href="https://www.linkedin.com/company/irahnexai" external icon="bi-linkedin">LinkedIn</FooterLink><FooterLink href="https://www.instagram.com/irahnexai" external icon="bi-instagram">Instagram</FooterLink></div>
        </div>
        <div className="footer-bottom"><span>© 2026 IrahNexAI</span></div>
      </div>
    </footer>
  )
}

export default Footer