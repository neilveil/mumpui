import React, { useCallback, useEffect, useRef } from 'react'

type props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  autoRows?: number
  className?: string
  style?: React.CSSProperties
  autoHeight?: boolean
}

export default function Main({ className = '', style = {}, autoHeight, onChange, ...props }: props) {
  className = 'mumpui mp-textarea ' + className

  const ref: any = useRef()

  const setHeight = useCallback(
    (e: any) => (e && autoHeight ? (e.style.height = e.scrollHeight + 'px') : null),
    [autoHeight]
  )

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref)
    })
  }, [setHeight])

  useEffect(() => {
    setHeight(ref.current)
  }, [props.value, setHeight])

  return (
    <div className={className} style={style}>
      <textarea
        ref={ref}
        onChange={e => {
          if (!e.target.value) e.target.style.height = ''
          else setHeight(ref.current)
          if (onChange) onChange(e)
        }}
        {...props}
      />
    </div>
  )
}
