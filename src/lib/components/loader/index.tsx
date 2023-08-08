import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

export default function Main({ children, className, ...props }: props) {
  className = `mp-loader ${className || ''})`

  return (
    <div className={className} {...props}>
      <svg viewBox='25 25 50 50'>
        <circle cx='50' cy='50' r='20'></circle>
      </svg>

      <div className='mp-loader-text'>{children === undefined ? 'Loading..' : children}</div>
    </div>
  )
}
