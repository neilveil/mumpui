import React, { useCallback, useEffect, useRef } from 'react'

type props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  autoHeight?: boolean
  onValue?: (value: string) => void
  parentClassName?: string
  parentStyle?: React.CSSProperties
}

export default function Main({
  autoHeight,
  onValue,
  onChange,
  parentClassName = '',
  parentStyle = {},
  ...props
}: props) {
  parentClassName = 'mumpui mp-textarea ' + parentClassName

  const ref: any = useRef()

  const setHeight = useCallback(
    (e: any) => (e && e.style && autoHeight ? (e.style.height = e.scrollHeight + 'px') : null),
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

  const _onChange = (e: any) => {
    if (!e.target.value) e.target.style.height = ''
    else setHeight(ref.current)

    if (onChange) onChange(e)
    if (onValue) onValue(e.target.value)
  }

  return (
    <div className={parentClassName} style={parentStyle}>
      <textarea {...props} ref={ref} onChange={_onChange} />
    </div>
  )
}
