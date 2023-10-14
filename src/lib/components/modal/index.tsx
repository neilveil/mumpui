import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  title?: string | JSX.Element
  buttons?: JSX.Element | JSX.Element[]
  visible?: boolean
  onClose?: () => void
}

export default function Main({
  children,
  title = '',
  buttons = [],
  visible = true,
  onClose,
  className = '',
  ...props
}: props) {
  className = 'mumpui mp-modal'

  const _buttons = Array.isArray(buttons) ? buttons : [buttons]

  return visible ? (
    <div
      className={className}
      onClick={e => {
        if (props.onClick) props.onClick(e)
        if (onClose) onClose()
      }}
    >
      <div {...props} className='mp-modal-box' onClick={e => e.stopPropagation()}>
        {!!title && <div className='mp-modal-title'>{title}</div>}
        {children}
        {!!_buttons.length && <div className='mp-modal-buttons'>{_buttons}</div>}
      </div>
    </div>
  ) : null
}
