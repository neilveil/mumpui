import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  label?: any
  position?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  className?: string
}

export default function Main({ className = '', label, position = 'top', delay, ...props }: props) {
  className = 'mumpui mp-tooltip ' + className

  delay = delay !== undefined ? delay : Main.delay

  return (
    <div {...props} className={className}>
      {props.children}
      <div style={{ animationDelay: delay.toString() + 'ms' }} className={'mp-tooltip-text mp-tooltip-' + position}>
        {label}
      </div>
    </div>
  )
}

Main.delay = 300
