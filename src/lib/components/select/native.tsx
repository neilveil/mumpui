import React, { useRef, useState } from 'react'
import { type option } from '.'

type native = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options?: option[]
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export default function Main({ value, options = [], onChange, disabled = false, className = '', ...props }: native) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '')

  const ref: React.Ref<any> = useRef(null)

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => !disabled && setOptionsVisible(!optionsVisible)}
    >
      <select
        className='mp-select-single'
        value={value}
        onChange={e => !!onChange && !disabled && onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((x, i) => (
          <option key={i} value={x.key}>
            {x.label}
          </option>
        ))}
      </select>
    </div>
  )
}
