type props = React.HTMLAttributes<HTMLDivElement> & {
  visible?: boolean
  onClose?: () => void
  className?: string
}

export default function Main({ children, visible = true, onClose, className = '', ...props }: props) {
  className = 'mumpui mp-modal ' + className

  return visible ? (
    <div
      {...props}
      className={className}
      onClick={e => {
        if (props.onClick) props.onClick(e)
        if (onClose) onClose()
      }}
    >
      <div className='mp-modal-box' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
}
