type props = React.InputHTMLAttributes<HTMLDivElement> & {
  label?: string
  children?: React.ReactNode
  parentClassName?: string
  parentStyle?: object
}

export default function Main(props: props) {
  const parentClassName = 'mp-field ' + (props.parentClassName || '')
  const className = 'mp-label ' + (props.className || '')

  return (
    <div className={parentClassName} style={props.parentStyle}>
      <div {...props} className={className}>
        {props.label}
      </div>

      {props.children}
    </div>
  )
}
