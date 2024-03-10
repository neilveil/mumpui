import React, { useState } from 'react'
import Progress from '../progress'

type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  prefix?: any
  onPrefixClick?: () => void
  suffix?: any
  onSuffixClick?: () => void
  onValue?: (value: string) => void
  maxLength?: number
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

  const [value, setValue] = useState('')
  const [progressVisible, setProgressVisible] = useState(false)

  const _onChange = (e: any) => {
    let value = e.target.value

    if (props.maxLength) value = value.slice(0, props.maxLength)

    if (onChange) onChange(e)
    if (onValue) onValue(value)

    setValue(value)
  }

  return (
    <div className={parentClassName} style={parentStyle}>
      {!!props.maxLength && progressVisible && (
        <Progress percent={parseInt(((value.length * 100) / props.maxLength).toString())} />
      )}

      {prefix && (
        <div className='mp-prefix' onClick={onPrefixClick} style={{ cursor: onPrefixClick ? 'pointer' : '' }}>
          {prefix}
        </div>
      )}

      <input
        {...props}
        onChange={_onChange}
        onFocus={e => {
          setProgressVisible(true)
          if (props.onFocus) props.onFocus(e)
        }}
        onBlur={e => {
          setProgressVisible(false)
          if (props.onBlur) props.onBlur(e)
        }}
        onWheel={(e: any) => {
          e.target.blur()
          if (props.onScroll) props.onScroll(e)
        }}
      />

      {suffix && (
        <div className='mp-suffix' onClick={onSuffixClick} style={{ cursor: onSuffixClick ? 'pointer' : '' }}>
          {suffix}
        </div>
      )}
    </div>
  )
}
