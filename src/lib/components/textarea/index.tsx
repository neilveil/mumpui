import React, { useCallback, useEffect, useRef, useState } from 'react'
import Progress from '../progress'

type props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  autoHeight?: boolean
  onValue?: (value: string) => void
  maxLength?: number
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

  const [value, setValue] = useState('')
  const [progressVisible, setProgressVisible] = useState(false)

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

    let value = e.target.value
    if (props.maxLength) value = value.slice(0, props.maxLength)

    if (onChange) onChange(e)
    if (onValue) onValue(value)

    setValue(value)
  }

  return (
    <div className={parentClassName} style={parentStyle}>
      {!!props.maxLength && progressVisible && (
        <Progress percent={parseInt(((value.length * 100) / props.maxLength).toString())} />
      )}

      <textarea
        {...props}
        ref={ref}
        onChange={_onChange}
        onFocus={e => {
          setProgressVisible(true)
          if (props.onFocus) props.onFocus(e)
        }}
        onBlur={e => {
          setProgressVisible(false)
          if (props.onBlur) props.onBlur(e)
        }}
      />
    </div>
  )
}
