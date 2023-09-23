type props = React.HTMLAttributes<HTMLDivElement> & {
  autoCol?: boolean
  colBreakPoint?: number
  className?: string
}

export default function Main({ autoCol = false, colBreakPoint = 1080, className = '', style = {}, ...props }: props) {
  className = 'mumpui mp-fields ' + (className || '')

  if (autoCol && window.innerWidth <= colBreakPoint) style.flexDirection = 'column'

  return (
    <div {...props} className={className} style={style}>
      {props.children}
    </div>
  )
}
