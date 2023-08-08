import React from 'react'

type props = React.InputHTMLAttributes<HTMLDivElement> & {
  className?: string
  label?: any
  position?: 'top' | 'right' | 'bottom' | 'left'
}

export default function Main({ className, label, position = 'top', ...props }: props) {
  className = 'mp-tooltip ' + (className || '')

  return (
    <div className={className} {...props}>
      {props.children}
      <div className={'mp-tooltip-text mp-tooltip-' + position}>{label}</div>
    </div>
  )
}
