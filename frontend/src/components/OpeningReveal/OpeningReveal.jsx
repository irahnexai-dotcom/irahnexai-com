import { useEffect, useState } from 'react'
import './OpeningReveal.css'

function OpeningReveal() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isVisible) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const hideTimer = window.setTimeout(() => setIsVisible(false), 0)
      return () => window.clearTimeout(hideTimer)
    }

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false)
    }, 4200)

    return () => window.clearTimeout(hideTimer)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="opening-reveal" aria-hidden="true">
      <div className="opening-reveal-panel opening-reveal-panel-left" />
      <div className="opening-reveal-panel opening-reveal-panel-right" />
      <div className="opening-reveal-line" />
    </div>
  )
}

export default OpeningReveal