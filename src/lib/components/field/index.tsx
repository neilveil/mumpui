import React from 'react'

type props = React.InputHTMLAttributes<HTMLDivElement> & {
  children?: any
  label?: string
}

export default function Main({ children, label, ...props }: props) {
  const className = 'mp-field ' + (props.className || '')
  const style = Object.assign({}, props.style)

  return (
    <div className={className} style={style} {...props}>
      <div className='mp-label'>{label}</div>

      {children}
    </div>
  )
}
