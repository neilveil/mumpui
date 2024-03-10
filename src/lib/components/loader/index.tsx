import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  empty?: boolean
  label?: string
  className?: string
}

export default function Main({ empty, label = 'Loading..', children, className = '', ...props }: props) {
  className = `mumpui mp-loader ${className || ''}`

  return (
    <div {...props} className={className}>
      <svg viewBox='25 25 50 50'>
        <circle cx='50' cy='50' r='20'></circle>
      </svg>

      {!empty && <div className='mp-loader-text'>{children === undefined ? label : children}</div>}
    </div>
  )
}
