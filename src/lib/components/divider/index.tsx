import React from 'react'

type props = {
  children?: any
  align?: 'left' | 'center' | 'right'
  className?: string
  style?: React.CSSProperties
}

export default function Main({ children, align = 'center', className, style }: props) {
  className = 'mp-divider ' + (className || '')
  style = Object.assign({}, style)

  return (
    <div className={className} style={style}>
      <div style={align === 'left' ? { width: '10vw' } : {}} className='mp-divider-line'></div>
      <div className='mp-divider-text'>{children}</div>
      <div style={align === 'right' ? { width: '10vw' } : {}} className='mp-divider-line'></div>
    </div>
  )
}
