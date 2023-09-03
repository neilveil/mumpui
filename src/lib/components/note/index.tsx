import React from 'react'

type props = React.InputHTMLAttributes<HTMLDivElement> & {
  className?: string
  type?: 'default' | 'red' | 'blue' | 'green' | 'yellow' | 'quote'
}

export default function Main({ className, type, ...props }: props) {
  className = `mp-note ${type ? type : ''} ${className || ''})`

  return (
    <div className={className} {...props}>
      {props.children}
    </div>
  )
}
