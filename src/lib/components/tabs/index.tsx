import React from 'react'

type item = {
  key: string
  label: string
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  items?: item[]
  active?: string
  onChange?: (active: string) => void
  className?: string
}

export default function Main({ items = [], active, onChange, className = '', ...props }: props) {
  className = 'mumpui mp-tabs ' + className

  return (
    <div {...props} className={className}>
      {items.map(({ key, label }, i) => (
        <div
          key={i}
          className={active === key ? 'mp-tab-active' : ''}
          onClick={(e: any) => {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            if (onChange) onChange(key)
          }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
