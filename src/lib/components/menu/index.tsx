import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type item = {
  label: string
  key?: string
  path?: string
  icon?: JSX.Element
  next?: item[]
  access?: string[]
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
  active?: string
  onClick?: (item: item) => void
  items?: item[]
  access?: string[]
  basePath?: string
}

export default function Main({ active, onClick, items = [], access, basePath = '', className = '', ...props }: props) {
  className = 'mumpui mp-menu ' + className

  return (
    <div {...props} className={className}>
      {items.map((item, i) => (
        <MenuItem key={i} active={active} onClick={onClick} item={item} access={access} basePath={basePath} />
      ))}
    </div>
  )
}

const isExpanded = (next: item[] = [], active?: string): boolean => {
  for (const x of next)
    if (x.key === active) return true
    else if (x.next?.length) return isExpanded(x.next, active)
  return false
}

function MenuItem({
  active,
  onClick = () => {},
  item,
  access,
  basePath
}: {
  active?: string
  onClick?: (key: item) => void
  item: item
  access?: string | string[]
  basePath: string
}) {
  const [expanded, setExpanded] = useState(isExpanded(item.next, active))

  const isExpandable = !!item.next?.length

  if (access && item.access && item.access.length) {
    if (!access.length) return null

    if (typeof item.access === 'string') item.access = [item.access]

    let allowed = false
    for (const _access of access) if (!allowed && item.access.includes(_access)) allowed = true

    if (!allowed) return null
  }

  const isActive = (active && active === item.key) || window.location.pathname === basePath + item.path

  const itemEl = (
    <div
      className={`mp-menu-item ${isActive ? 'mp-menu-item-active' : ''} ${
        isExpandable ? 'mp-menu-item-expandable' : ''
      }`}
      onClick={() => (isExpandable ? setExpanded(!expanded) : onClick(item))}
    >
      <div>
        {!!item.icon && <span className='mp-menu-item-icon'>{item.icon}</span>}
        <span className='mp-menu-item-name'>{item.label}</span>
      </div>

      {isExpandable && (expanded ? arrow(true) : arrow())}
    </div>
  )

  return (
    <>
      {item.path ? <Link to={item.path}>{itemEl}</Link> : itemEl}

      {!!(isExpandable && expanded) &&
        item.next?.map((item, i) => (
          <div key={i} className='mp-menu-item-group'>
            <MenuItem active={active} onClick={onClick} item={item} access={access} basePath={basePath} />
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
