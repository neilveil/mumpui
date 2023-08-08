import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  children?: any
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function Main({ children, align = 'center', className, ...props }: props) {
  const isEmpty = children === undefined

  className = `mp-divider ${isEmpty ? 'mp-divider-empty' : ''} ${className || ''}`

  return (
    <div className={className} {...props}>
      <div style={align === 'left' ? { width: '10vw' } : {}} className='mp-divider-line'></div>
      {!isEmpty && <div className='mp-divider-text'>{children}</div>}
      <div style={align === 'right' ? { width: '10vw' } : {}} className='mp-divider-line'></div>
    </div>
  )
}
