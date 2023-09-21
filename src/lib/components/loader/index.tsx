import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  empty?: boolean
  className?: string
}

export default function Main({ empty, children, className = '', ...props }: props) {
  className = `mumpui mp-loader ${className || ''})`

  return (
    <div className={className} {...props}>
      <svg viewBox='25 25 50 50'>
        <circle cx='50' cy='50' r='20'></circle>
      </svg>

      {!empty && <div className='mp-loader-text'>{children === undefined ? 'Loading..' : children}</div>}
    </div>
  )
}
