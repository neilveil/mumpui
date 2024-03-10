import React, { useEffect, useRef } from 'react'

type item = {
  key: string
  label: any
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  items?: item[]
  active?: string
  onChange?: (active: string) => void
  alt?: boolean
  className?: string
}

export default function Main({ items = [], active, onChange, alt, className = '', ...props }: props) {
  className = 'mumpui mp-tabs ' + className + (alt ? ' mp-tabs-alt' : '')

  // If init is not used, then the page will automatically scroll to tabs component on load
  const init = useRef(false)

  useEffect(() => {
    const tabEl = document.querySelector(`div[data-mp-tab-key='${active}']`)

    if (tabEl)
      setTimeout(() => {
        if (init.current)
          tabEl.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          })

        init.current = true
      }, 0)
  }, [active])

  return (
    <div {...props} className={className}>
      {items.map(({ key, label }, i) => (
        <div
          key={i}
          data-mp-tab-key={key}
          className={active === key ? 'mp-tab-active' : ''}
          onClick={() => {
            if (onChange) onChange(key)
          }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
