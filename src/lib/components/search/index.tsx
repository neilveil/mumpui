import React, { useEffect, useRef, useState } from 'react'

type props = React.InputHTMLAttributes<HTMLInputElement>

export default function Main({ children, className, style, disabled, onClick, ...props }: props) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mumpui mp-search ' + (disabled ? 'mp-disabled ' : '') + (className || '')
  style = Object.assign({}, style)

  const ref: any = useRef()

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [])

  return (
    <div ref={ref} className={className} style={style}>
      <input
        onClick={e => {
          if (onClick) onClick(e)
          setOptionsVisible(!optionsVisible)
        }}
        {...props}
      />

      {!!optionsVisible && <div className='mp-input-expanded-area'>{children}</div>}
    </div>
  )
}
