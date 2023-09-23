import { useEffect, useRef, useState } from 'react'

type props = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange'> & {
  onChange?: (value: string) => void
  closeOnClick?: boolean
}

export default function Main({
  closeOnClick = true,
  disabled,
  value = '',
  onChange,
  children,
  className,
  onClick,
  placeholder,
  ...props
}: props) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mumpui mp-search ' + (disabled ? 'mp-disabled ' : '') + (className || '')

  const ref: any = useRef()

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [])

  return (
    <div {...props} ref={ref} className={className}>
      <input
        onChange={e => {
          if (onChange) onChange(e.target.value)
        }}
        onClick={e => {
          if (onClick) onClick(e)
          if (!disabled) setOptionsVisible(!optionsVisible)
        }}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
      />

      {!!optionsVisible && (
        <div onClick={() => closeOnClick && setOptionsVisible(!optionsVisible)} className='mp-input-expanded-area'>
          {children}
        </div>
      )}
    </div>
  )
}
