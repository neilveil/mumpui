import React from 'react'

type props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  children?: any
  type?: 'default' | 'primary' | 'stroke' | 'dashed' | 'danger' | 'text'
  className?: string
}

export default function Main({ children, type, className, ...props }: props) {
  className = `mp-button mp-button-${type || 'default'} ${className || ''}`

  return (
    <button className={className} disabled={props.disabled} onClick={props.onClick} {...props}>
      {children}
    </button>
  )
}
