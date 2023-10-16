import React from 'react'

type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  prefix?: any
  onPrefixClick?: () => void
  suffix?: any
  onSuffixClick?: () => void
  onValue?: (value: string) => void
  parentClassName?: string
  parentStyle?: React.CSSProperties
}

export default function Main({
  prefix,
  onPrefixClick,
  suffix,
  onSuffixClick,
  onValue,
  onChange,
  parentClassName = '',
  parentStyle = {},
  ...props
}: props) {
  parentClassName = 'mumpui mp-input ' + parentClassName

  const _onChange = (e: any) => {
    if (onChange) onChange(e)
    if (onValue) onValue(e.target.value)
  }

  return (
    <div className={parentClassName} style={parentStyle}>
      {prefix && (
        <div className='mp-prefix' onClick={onPrefixClick} style={{ cursor: onPrefixClick ? 'pointer' : '' }}>
          {prefix}
        </div>
      )}

      <input {...props} onChange={_onChange} />

      {suffix && (
        <div className='mp-suffix' onClick={onSuffixClick} style={{ cursor: onSuffixClick ? 'pointer' : '' }}>
          {suffix}
        </div>
      )}
    </div>
  )
}
