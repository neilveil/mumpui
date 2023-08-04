import React from 'react'

type props = React.InputHTMLAttributes<HTMLInputElement> & {
  status?: 'success' | 'error' | 'warning' | 'info'
  prefix?: string | React.ReactNode
  onPrefixClick?: () => void
  suffix?: string | React.ReactNode
  onSuffixClick?: () => void
  parentClassName?: string
  parentStyle?: React.CSSProperties
}

export default function Main({
  status,
  prefix,
  onPrefixClick,
  suffix,
  onSuffixClick,
  parentClassName,
  parentStyle,
  ...props
}: props) {
  const className = 'mp-input ' + (props.className || '')
  const style = Object.assign({}, props.style)

  if (status) style.borderColor = 'var(--mp-c-' + status + ')'

  if (props.type === 'color')
    return (
      <div className={className} style={style}>
        <input type='color' style={{ width: '4rem' }} {...props} />
        <input {...props} type='text' />
      </div>
    )

  return (
    <div className={className} style={style}>
      {prefix && <div className='mp-prefix'>{prefix}</div>}
      <input {...props} />
      {suffix && <div className='mp-suffix'>{suffix}</div>}
    </div>
  )
}
