import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  percent?: number
  className?: string
}

export default function Main({ percent, className = '', ...props }: props) {
  className = `mumpui mp-progress ${className}`

  return percent ? (
    <div {...props} className={className}>
      <div style={{ width: percent + '%' }}></div>
    </div>
  ) : null
}
