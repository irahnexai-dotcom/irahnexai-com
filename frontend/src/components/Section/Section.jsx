function Section({ children, className = '', as: Element = 'section', ...props }) {
  return <Element className={`site-section ${className}`.trim()} {...props}>{children}</Element>
}

export default Section