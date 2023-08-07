import React, { useRef } from 'react'

type props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  className?: string
  style?: React.CSSProperties
}

export default function Main({ label, className, style, ...props }: props) {
  className = 'mp-file ' + (className || '')
  style = Object.assign({}, style)

  const ref: React.Ref<any> = useRef()

  props.type = 'file'

  return (
    <div className={className} style={style} onClick={() => ref.current.click()}>
      {label}
      <input ref={ref} {...props} />
    </div>
  )
}
