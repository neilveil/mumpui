import React from 'react'

type props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  children?: any
  type?: 'default' | 'primary' | 'stroke' | 'dashed' | 'danger' | 'text'
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  onClick?: () => void
}

export default function Main({ children, type, ...props }: props) {
  const className = `mp-button mp-button-${type || 'default'} ${props.className || ''}`
  const style = Object.assign({}, props.style)

  return (
    <button className={className} style={style} disabled={props.disabled} onClick={props.onClick}>
      {children}
    </button>
  )
}
