type props = React.HTMLAttributes<HTMLDivElement> & {
  type?: 'red' | 'blue' | 'green' | 'yellow' | 'quote'
  className?: string
}

export default function Main({ className = '', type, ...props }: props) {
  className = `mumpui mp-note ${type ? type : ''} ${className})`

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  )
}
