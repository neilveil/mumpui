import React, { useRef } from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  title?: string | JSX.Element
  buttons?: JSX.Element | JSX.Element[]
  visible?: boolean
  onClose?: () => void
  width?: number | string
}

export default function Main({
  children,
  title = '',
  buttons = [],
  visible = true,
  onClose,
  width,
  style = {},
  className = '',
  ...props
}: props) {
  const ref: React.Ref<any> = useRef(null)

  const _buttons = Array.isArray(buttons) ? buttons : [buttons]

  if (width) style.maxWidth = width

  return visible ? (
    <div
      className='mumpui mp-modal'
      ref={ref}
      onClick={(e: any) => {
        if (e.target.contains(ref.current) && onClose) onClose()
      }}
    >
      <div {...props} className={'mp-modal-box ' + className} style={style}>
        {!!title && <div className='mp-modal-title'>{title}</div>}
        {children}
        {!!_buttons.length && <div className='mp-modal-buttons'>{_buttons}</div>}
      </div>
    </div>
  ) : null
}
