import React, { useState } from 'react'

type item = {
  key: string
  label: string
  icon?: React.ReactNode
  next?: item[]
  access?: string[]
}

type props = React.HTMLAttributes<HTMLDivElement> & {
  active: string
  onClick: (key: string) => void
  items: item[]
  access?: string[]
}

export default function Main({ active, onClick, items = [], access, className = '', ...props }: props) {
  className = 'mumpui mp-menu ' + className

  return (
    <div {...props} className={className}>
      {items.map((item, i) => (
        <MenuItem key={i} active={active} onClick={onClick} item={item} access={access} />
      ))}
    </div>
  )
}

const isExpanded = (next: item[] = [], active: string): boolean => {
  for (const x of next)
    if (x.key === active) return true
    else if (x.next?.length) return isExpanded(x.next, active)
  return false
}

function MenuItem({
  active,
  onClick,
  item,
  access = []
}: {
  active: string
  onClick: (key: string) => void
  item: item
  access?: string | string[]
}) {
  const [expanded, setExpanded] = useState(isExpanded(item.next, active))

  const isExpandable = !!item.next?.length

  if (item.access && item.access.length) {
    if (typeof item.access === 'string') item.access = [item.access]

    let allowed = false
    for (const _access of access) if (!allowed && item.access.includes(_access)) allowed = true

    if (!allowed) return null
  }

  return (
    <>
      <div
        className={`mp-menu-item ${active === item.key ? 'mp-menu-item-active' : ''} ${
          isExpandable ? 'mp-menu-item-expandable' : ''
        }`}
        onClick={() => (isExpandable ? setExpanded(!expanded) : onClick(item.key))}
      >
        <div>
          {!!item.icon && <span className='mp-menu-item-icon'>{item.icon}</span>}
          <span className='mp-menu-item-name'>{item.label}</span>
        </div>

        {isExpandable && (expanded ? arrow(true) : arrow())}
      </div>

      {!!(isExpandable && expanded) &&
        item.next?.map((item, i) => (
          <div key={i} className='mp-menu-item-group'>
            <MenuItem active={active} onClick={onClick} item={item} access={access} />
          </div>
        ))}
    </>
  )
}

const arrow = (rotate?: boolean) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 128 128'
    fill='none'
    style={{
      transform: rotate ? 'rotate(90deg)' : '',
      transition: 'all 200ms ease'
    }}
    className='mp-menu-item-expand-icon'
  >
    <path d='M44 24L84 64L44 104' stroke='var(--mp-c-font-light)' strokeWidth='16' strokeLinecap='round' />
  </svg>
)
