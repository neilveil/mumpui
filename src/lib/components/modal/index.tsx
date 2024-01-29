import React, { useRef } from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  title?: string | JSX.Element
  buttons?: JSX.Element | JSX.Element[]
  leftButtons?: JSX.Element | JSX.Element[]
  visible?: boolean
  onClose?: () => void
  width?: number | string
  noScrollbar?: boolean
  noCross?: boolean
}

export default function Main({
  children,
  title = '',
  buttons = [],
  leftButtons = [],
  visible = true,
  onClose,
  width,
  noScrollbar = false,
  noCross,
  style = {},
  className = '',
  ...props
}: props) {
  const ref: React.Ref<any> = useRef(null)

  const _leftButtons = Array.isArray(leftButtons) ? leftButtons : [leftButtons]
  const rightButtons = Array.isArray(buttons) ? buttons : [buttons]

  if (width) style.maxWidth = width

  if (visible) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''

  return visible ? (
    <div
      className='mumpui mp-modal'
      ref={ref}
      onClick={(e: any) => {
        if (e.target.contains(ref.current) && onClose) onClose()
      }}
    >
      <div {...props} className={`mp-modal-box ${className}`} style={style}>
        {!!title && (
          <div className='mp-modal-title'>
            <div>{title}</div>
            {!noCross && <div onClick={onClose ? onClose : undefined}>{closeIcon}</div>}
          </div>
        )}
        <div className={`mp-modal-content ${noScrollbar ? 'noScrollbar' : ''}`}>{children}</div>
        {!!(rightButtons.length || _leftButtons.length) && (
          <div className='mp-modal-buttons'>
            <div>{_leftButtons}</div>
            <div>{rightButtons}</div>
          </div>
        )}
      </div>
    </div>
  ) : null
}

const closeIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='var(--c-font-light)'>
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
  </svg>
)
