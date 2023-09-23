import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  visible?: boolean
  onClose?: () => void
}

export default function Main({ children, visible = true, onClose, className = '', ...props }: props) {
  className = 'mumpui mp-modal'

  return visible ? (
    <div
      className={className}
      onClick={e => {
        if (props.onClick) props.onClick(e)
        if (onClose) onClose()
      }}
    >
      <div {...props} className='mp-modal-box' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
}
