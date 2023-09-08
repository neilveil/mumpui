type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  prefix?: any
  onPrefixClick?: () => void
  suffix?: any
  onSuffixClick?: () => void
  onValue?: (value: string) => void
  className?: string
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
