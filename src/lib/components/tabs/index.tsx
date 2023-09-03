import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  options: string[]
  active: number
  onClick: (active: number) => void
  className?: string
}

export default function Main({ className, options = [], active = 0, onClick, ...props }: props) {
  className = 'mp-tabs ' + (className || '')

  return (
    <div className={className} {...props}>
      {options.map((x, i) => (
        <div
          key={i}
          className={active === i ? 'mp-tab-active' : ''}
          onClick={(e: any) => {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            if (onClick) onClick(i)
          }}
        >
          {x}
        </div>
      ))}
    </div>
  )
}
