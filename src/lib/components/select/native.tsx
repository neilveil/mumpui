import React, { useRef, useState } from 'react'

type native = Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> & {
  options?: string[]
  value?: string
  onSelect?: (value: string) => void
  disabled?: boolean
}

export default function Main({ value, options = [], onSelect, disabled = false, className = '', ...props }: native) {
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
        onChange={e => !!onSelect && !disabled && onSelect(options[e.target.selectedIndex] || '')}
        disabled={disabled}
      >
        {options.map((x, i) => (
          <option key={i}>{x}</option>
        ))}
      </select>
    </div>
  )
}
