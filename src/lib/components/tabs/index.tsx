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
  const ref: any = useRef()
  className = 'mumpui mp-tabs ' + className + (alt ? ' mp-tabs-alt' : '')

  // If init is not used, then the page will automatically scroll to tabs component on load
  const init = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const tabEl: HTMLDivElement = ref.current.querySelector(`div[data-mp-tab-key='${active}']`)

    if (tabEl)
      setTimeout(() => {
        if (init.current)
          tabEl.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          })

        init.current = true
      }, 0)
  }, [active])

  return (
    <div {...props} className={className} ref={_ref => (ref.current = _ref)}>
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
