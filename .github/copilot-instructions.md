# IrahNexAI Frontend Rules

These rules apply to all frontend work in this repository. The product is a premium, trustworthy, business-focused digital transformation website for non-technical business owners.

## Stack and scope

- Use the existing React, Vite, JavaScript, Bootstrap CSS, Bootstrap Icons, React Router, and Oxlint stack.
- Keep the frontend lightweight. Do not add backend, authentication, databases, APIs, or server-side functionality unless explicitly requested.
- Add dependencies only when they provide clear value. Prefer CSS transitions and native browser behavior.
- Keep components simple, reusable, readable, and modular. Avoid over-abstraction and duplicated shared UI.

## Design direction

- Create a premium, modern, intelligent, clean, confident, human, and professional experience.
- Communicate that IrahNexAI understands business problems and improves businesses with practical technology.
- Use the official visual identity consistently across the entire site: deep charcoal `#0B0D0C`, secondary charcoal `#121614`, surface `#181D1A`, warm ivory `#F4F3ED`, muted text `#A8ADA7make it repeat the workflow of her section, and if you can also change the shape `, electric lime `#C8FF4D`, dark accent `#8FBF24`, and border `#29302C`.
- Keep the approximate visual balance at 70% dark backgrounds and surfaces, 20% warm ivory and neutral content, and 10% electric lime accents. Use lime selectively for CTAs, active states, key words, icons, progress, and meaningful highlights.
- Use exactly two Google Fonts: Bricolage Grotesque for headings and major visual statements, and Instrument Sans for body text, navigation, buttons, forms, labels, and supporting content.
- Use a typography hierarchy based on `clamp()`: hero text around `clamp(3rem, 7vw, 7rem)`, H1 around `clamp(2.75rem, 5vw, 5.5rem)`, H2 around `clamp(2rem, 4vw, 4rem)`, H3 around `clamp(1.35rem, 2vw, 2rem)`, and body text around 1rem to 1.125rem. Keep headlines expressive without overflow or awkward clipping.
- Use clear visual hierarchy: one purpose per section, a strong heading, short supporting text, a useful visual, and a clear CTA where appropriate.
- Use everyday English and describe business outcomes: saving time, reducing repetitive work, improving customer experience, organizing operations, increasing enquiries, and making work easier.
- Use subtle visual depth such as fine grids, thin lines, restrained radial gradients, abstract geometric shapes, and minimal lime atmosphere. Prefer charcoal-to-charcoal or charcoal-to-dark-green gradients; never use purple-blue AI gradients.
- Style primary buttons with a lime background and charcoal text; style secondary buttons with a dark or transparent surface, ivory border, and ivory text. Keep buttons substantial with restrained rounded corners, never tiny or excessively pill-shaped.
- Style cards with surface `#181D1A`, border `#29302C`, ivory text, muted supporting text, and selective lime accents. Use subtle border, shadow, transform, or background changes on hover without excessive glassmorphism.
- Avoid jargon, exaggerated claims, generic AI-startup visuals, excessive neon/glow, particles, robots, floating 3D objects, excessive gradients, glassmorphism, constant movement, huge animated text, and heavy videos.
- Use visual storytelling that shows problem, action, improvement, and growth. Animation should communicate business transformation, such as workflow progress or before-and-after improvement, rather than technical spectacle.
- Preserve existing design-system patterns when extending the site. Use CSS variables for colors, typography, spacing, radii, shadows, container widths, and breakpoints. Avoid random values, unnecessary inline styles, and `!important`.

## Performance and motion

- Optimize for low-end Android devices, older laptops, slow connections, and high-resolution screens.
- Prefer CSS `transform` and `opacity` animations. Avoid animating layout properties such as `width`, `height`, `top`, `left`, `margin`, and `padding`.
- Do not attach expensive calculations directly to scroll events. Use `requestAnimationFrame` only when JavaScript animation is genuinely necessary.
- Use only a few purposeful animations: lightweight fades, small slides, hover transitions, selective reveals, and occasional signature moments.
- Do not add fake loading screens or blocking page transitions. Navigation must remain instant.
- Lazy-load below-the-fold images, reserve media space to prevent layout shift, optimize images, and use WebP or AVIF where appropriate.
- Respect `prefers-reduced-motion`; reduced-motion users should receive a significantly calmer experience.

## Responsive behavior

- Use mobile-first CSS, Bootstrap utilities, Grid, Flexbox, fluid typography, and responsive media.
- Test and support 320px, 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px, 1920px+, and landscape layouts.
- Prevent horizontal overflow, clipping, overlap, broken grids, unreadable text, and navigation collisions.
- Use `min-height: 100dvh` or `100svh` where full-screen composition is appropriate instead of blindly using `100vh`.
- Keep the navbar sticky or fixed with a high z-index, visible active state, accessible keyboard behavior, responsive mobile menu, and enough offset that content is never covered.

## Accessibility and semantics

- Use semantic HTML, logical heading hierarchy, accessible buttons and links, visible focus states, meaningful alt text, sufficient contrast, and keyboard navigation.
- Use ARIA only when needed. Never disable browser zoom.
- Keep mobile menus and all interactive controls usable without a mouse.

## SEO and routing

- Each page should be ready for a unique title, meta description, Open Graph metadata, semantic structure, descriptive links, and a single logical H1.
- Keep React Router routes working on direct Netlify navigation through the existing SPA rewrite configuration.

## Validation

Before considering a change complete:

- Run `npm run lint` and fix relevant Oxlint issues.
- Run `npm run build` and fix all build errors.
- Check all routes, the mobile menu, links, buttons, console output, React warnings, horizontal overflow, and responsive layouts.
- Do not finish a page without checking mobile behavior and production build output.
