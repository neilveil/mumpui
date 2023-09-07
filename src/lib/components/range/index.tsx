import React from 'react'

type props = React.InputHTMLAttributes<HTMLInputElement>

export default function Main({ className, style, ...props }: props) {
  className = 'mumpui mp-range ' + (className || '')
  style = Object.assign({}, style)

  return (
    <div className={className} style={style}>
      <input type='range' {...props} />
    </div>
  )
}
