import React from 'react'

type props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: any
  primary?: boolean
  className?: string
  disabled?: boolean
}

export default function Main({ children, primary, className = '', type = 'button', ...props }: props) {
  className = `mumpui mp-button ${primary ? 'mp-button-primary' : ''}  ${className}`

  return (
    <button {...props} type={type} className={className} disabled={props.disabled} onClick={props.onClick}>
      {children}
    </button>
  )
}
