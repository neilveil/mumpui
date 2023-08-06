import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Main(props: props) {
  const className = 'mp-fields ' + (props.className || '')

  return (
    <div className={className} style={props.style}>
      {props.children}
    </div>
  )
}
