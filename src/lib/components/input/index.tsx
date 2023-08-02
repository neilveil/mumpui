import React from 'react'

type props = React.InputHTMLAttributes<HTMLInputElement> & {
  parentClassName?: string
  parentStyle?: React.CSSProperties
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
  status?: 'success' | 'error' | 'warning' | 'info'
  onPrefixClick?: () => void
  onSuffixClick?: () => void
}

export default function Main({ ...props }: props) {
  const className = 'mp-input ' + (props.parentClassName || '')

  const parentStyle = Object.assign({}, props.parentStyle)

  if (props.status) parentStyle.borderColor = 'var(--mp-c-' + props.status + ')'

  if (props.type === 'color')
    return (
      <div className={className} style={parentStyle}>
        <input type='color' style={{ width: '4rem' }} {...props} />
        <input {...props} type='text' />
      </div>
    )

  return (
    <div className={className} style={parentStyle}>
      {props.prefix && <div className='mp-prefix'>{props.prefix}</div>}
      <input {...props} />
      {props.suffix && <div className='mp-suffix'>{props.suffix}</div>}
    </div>
  )
}
