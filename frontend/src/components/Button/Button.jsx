import { Link } from 'react-router-dom'

function Button({ children, to, variant = 'primary', type = 'button', ...props }) {
  const className = `btn btn-${variant}`

  if (to && typeof to === 'string' && to.startsWith('#')) {
    return (
      <a className={className} href={to} {...props}>
        {children}
      </a>
    )
  }

  return to ? (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button