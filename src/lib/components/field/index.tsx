import React from 'react'

type props = React.InputHTMLAttributes<HTMLDivElement> & {
  label?: string | JSX.Element
  className?: string
  style?: React.CSSProperties
}

export default function Main({ className = '', style = {}, label, ...props }: props) {
  className = 'mumpui mp-field ' + className

  return (
    <div {...props} className={className} style={style}>
      <div className='mp-label'>{label ? label : <>&nbsp;</>}</div>
      {props.children}
    </div>
  )
}
