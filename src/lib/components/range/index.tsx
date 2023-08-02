import React from 'react'

type props = React.InputHTMLAttributes<HTMLInputElement> & {
  parentClassName?: string
  parentStyle?: React.CSSProperties
}

export default function Main({ ...props }: props) {
  const className = 'mp-range ' + (props.parentClassName || '')
  const style = Object.assign({}, props.parentStyle)

  return (
    <div className={className} style={style}>
      <input type='range' />
    </div>
  )
}
