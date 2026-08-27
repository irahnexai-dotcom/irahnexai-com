import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/solutions', 'Solutions'],
  ['/industries', 'Industries'],
  ['/about', 'About'],
  ['/process', 'Process'],
  ['/contact', 'Contact'],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const drawerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const drawerCloseRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) setIsOpen(false)
      if (event.key !== 'Tab' || !isOpen || !drawerRef.current) return

      const focusable = [...drawerRef.current.querySelectorAll('a, button')]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      menuButtonRef.current?.focus()
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerCloseRef.current?.focus()
    return () => { document.body.style.overflow = previousOverflow }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const mobileDrawer = isOpen ? createPortal(
    <div className="mobile-drawer-layer" id="mobile-navigation" role="presentation" onMouseDown={closeMenu}>
      <aside ref={drawerRef} className="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation" onMouseDown={(event) => event.stopPropagation()}>
        <div className="mobile-drawer-header"><NavLink className="brand-mark" to="/" onClick={closeMenu}><img className="brand-logo" src="/images/logo.webp" alt="" /><span>IrahNexAI</span></NavLink><button ref={drawerCloseRef} className="drawer-close" type="button" aria-label="Close navigation" onClick={closeMenu}><span aria-hidden="true">×</span></button></div>
        <div className="mobile-drawer-rule" aria-hidden="true" />
        <div className="mobile-link-list">
          {links.map(([path, label]) => <NavLink key={path} className="mobile-nav-link" to={path} onClick={closeMenu}><span>{label === 'About' ? 'About Us' : label}</span><span className="mobile-nav-arrow" aria-hidden="true">↗</span></NavLink>)}
        </div>
        <div className="mobile-menu-footer"><p>Ready to improve your business?</p><NavLink className="mobile-cta" to="/contact" onClick={closeMenu}>Let's Talk <span aria-hidden="true">↗</span></NavLink><small>Erode, Tamil Nadu · India</small></div>
      </aside>
    </div>,
    document.body,
  ) : null

  return <>
    <nav className={`site-nav${isScrolled ? ' is-scrolled' : ''}${isOpen ? ' menu-is-open' : ''}`} aria-label="Main navigation">
      <div className="container site-container">
        <NavLink className="brand-mark" to="/" onClick={closeMenu}><img className="brand-logo" src="/images/logo.webp" alt="" /><span>IrahNexAI</span></NavLink>
        <div className="desktop-navigation">
          {links.map(([path, label]) => <NavLink key={path} className="nav-link" to={path}>{label}</NavLink>)}
          <NavLink className="nav-cta" to="/contact">Let's Talk <span aria-hidden="true">↗</span></NavLink>
        </div>
        <button ref={menuButtonRef} className="mobile-menu-button" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setIsOpen((open) => !open)}>
          <span className={isOpen ? 'menu-icon is-open' : 'menu-icon'} aria-hidden="true"><span /><span /><span /></span>
        </button>
      </div>
    </nav>
    {mobileDrawer}
  </>
}

export default Navbar