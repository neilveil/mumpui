import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

export default function Main({ className, ...props }: props) {
  className = 'mumpui mp-fields ' + (className || '')

  return <div className={className}>{props.children}</div>
}
