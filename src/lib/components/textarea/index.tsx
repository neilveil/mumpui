type props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  parentClassName?: string
  parentStyle?: React.CSSProperties
  status?: 'success' | 'error' | 'warning' | 'info'
  autoRows?: number
}

export default function Main({ ...props }: props) {
  const className = 'mp-input ' + (props.parentClassName || '')

  const parentStyle = Object.assign({}, props.parentStyle)

  if (props.status) parentStyle.borderColor = 'var(--mp-c-' + props.status + ')'

  if (props.autoRows) props.rows = Math.max(props.autoRows, (props.value || '').toString().split('\n').length)

  return (
    <div className={className} style={parentStyle}>
      <textarea {...props} />
    </div>
  )
}
