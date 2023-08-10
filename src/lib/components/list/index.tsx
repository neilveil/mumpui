import React from 'react'

type props = React.InputHTMLAttributes<HTMLDivElement> & {
  className?: string
  label?: string
}

export default function Main({ className, label, ...props }: props) {
  className = 'mp-field ' + (className || '')

  return (
    <div className={className} {...props}>
      <div className='mp-label'>{label ? label : <>&nbsp;</>}</div>
      {props.children}
    </div>
  )
}
