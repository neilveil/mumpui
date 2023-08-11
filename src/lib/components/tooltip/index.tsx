import React from 'react'

type props = React.InputHTMLAttributes<HTMLDivElement> & {
  className?: string
  label?: any
  position?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
}

export default function Main({ className, label, position = 'top', delay, ...props }: props) {
  className = 'mp-tooltip ' + (className || '')

  return (
    <div className={className} {...props}>
      {props.children}
      <div
        style={{ animationDelay: (delay || Main.delay).toString() }}
        className={'mp-tooltip-text mp-tooltip-' + position}
      >
        {label}
      </div>
    </div>
  )
}

Main.delay = 3000
