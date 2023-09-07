import React from 'react'

type element = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>

type props = element & {
  prefix?: any
  onPrefixClick?: () => void
  suffix?: any
  onSuffixClick?: () => void
  className?: string
  onValue?: (value: string) => void
  style?: React.CSSProperties
}

export default function Main({
  prefix,
  onPrefixClick,
  suffix,
  onSuffixClick,
  className = '',
  style = {},
  onValue,
  onChange,
  ...props
}: props) {
  className = 'mumpui mp-input ' + className
  style = Object.assign({}, style)

  const _onChange = (e: any) => {
    if (onChange) onChange(e)
    if (onValue) onValue(e.target.value)
  }

  if (props.type === 'color') {
    const propsExceptType: any = {}
    Object.entries(props).forEach(([key, value]) => (key === 'type' ? null : (propsExceptType[key] = value)))

    return (
      <div className={className} style={style}>
        <input style={{ width: '4rem' }} {...props} onChange={_onChange} />
        <input type='text' onChange={_onChange} {...propsExceptType} />
      </div>
    )
  }

  return (
    <div className={className} style={style}>
      {prefix && (
        <div className='mp-prefix' onClick={onPrefixClick} style={{ cursor: onPrefixClick ? 'pointer' : '' }}>
          {prefix}
        </div>
      )}

      <input onChange={_onChange} {...props} />

      {suffix && (
        <div className='mp-suffix' onClick={onSuffixClick} style={{ cursor: onSuffixClick ? 'pointer' : '' }}>
          {suffix}
        </div>
      )}
    </div>
  )
}
