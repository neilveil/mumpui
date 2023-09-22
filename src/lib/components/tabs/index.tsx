import React from 'react'

type option = {
  key: string
  label: string
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
  options?: option[]
  active?: string
  onClick?: (active: string) => void
  className?: string
}

export default function Main({ options = [], active, onClick, className = '', ...props }: props) {
  className = 'mumpui mp-tabs ' + className

  return (
    <div {...props} className={className}>
      {options.map(({ key, label }, i) => (
        <div
          key={i}
          className={active === key ? 'mp-tab-active' : ''}
          onClick={(e: any) => {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            if (onClick) onClick(key)
          }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
