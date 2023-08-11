import React, { useState } from 'react'

type key = number | string

type item = {
  key: key
  name: string
  icon?: React.ReactNode
  next?: item[]
  access?: string[]
}

type props = React.HTMLAttributes<HTMLDivElement> & {
  selected: key
  onSelect: (key: key) => void
  items: item[]
  access?: string[]
}

export default function Main({ selected, onSelect, items = [], className, access, ...props }: props) {
  className = 'mp-menu ' + (className || '')

  return (
    <div className={className} {...props}>
      {items.map((item, i) => (
        <MenuItem key={i} selected={selected} onSelect={onSelect} item={item} access={access} />
      ))}
    </div>
  )
}

const isExpanded = (next: item[] = [], selected: key): boolean => {
  for (const x of next)
    if (x.key === selected) return true
    else if (x.next?.length) return isExpanded(x.next, selected)
  return false
}

function MenuItem({
  selected,
  onSelect,
  item,
  access = []
}: {
  selected: key
  onSelect: (key: key) => void
  item: item
  access?: string[]
}) {
  const [expanded, setExpanded] = useState(isExpanded(item.next, selected))

  const isExpandable = !!item.next?.length

  if (item.access && item.access.length) {
    var allowed = false
    for (const _access of access) if (!allowed && item.access.includes(_access)) allowed = true

    if (!allowed) return null
  }

  return (
    <>
      <div
        className={`mp-menu-item ${selected === item.key ? 'mp-menu-item-selected' : ''} ${
          isExpandable ? 'mp-menu-item-expandable' : ''
        }`}
        onClick={() => (isExpandable ? setExpanded(!expanded) : onSelect(item.key))}
      >
        <div>
          <span className='mp-menu-item-icon'>{!!item.icon && item.icon}</span>
          <span className='mp-menu-item-name'>{item.name}</span>
        </div>

        {isExpandable && (expanded ? arrow(true) : arrow())}
      </div>

      {!!(isExpandable && expanded) &&
        item.next?.map((item, i) => (
          <div key={i} className='mp-menu-item-group'>
            <MenuItem selected={selected} onSelect={onSelect} item={item} />
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
      transform: rotate ? 'rotate(90deg)' : ''
    }}
    className='mp-menu-item-expand-icon'
  >
    <path d='M44 24L84 64L44 104' stroke='var(--mp-c-font-light)' strokeWidth='16' strokeLinecap='round' />
  </svg>
)
