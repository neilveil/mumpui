import React from 'react'

type props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  autoRows?: number
  status?: 'success' | 'error' | 'warning' | 'info'
  className?: string
  style?: React.CSSProperties
}

export default function Main({ autoRows, status, className, style, ...props }: props) {
  className = 'mp-textarea ' + (className || '')
  style = Object.assign({}, style)

  if (status) style.borderColor = 'var(--mp-c-' + status + ')'

  if (autoRows) props.rows = Math.max(autoRows, (props.value || '').toString().split('\n').length)

  return (
    <div className={className} style={style}>
      <textarea {...props} />
    </div>
  )
}
