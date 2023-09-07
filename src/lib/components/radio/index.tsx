import React from 'react'

type key = number | string
type label = string

type option = {
  key: key
  label: string
  [key: key]: any
}

type props = {
  options: option[]
  checked: key
  onChange: (keys: key) => void
  className?: string
  style?: React.CSSProperties
}

export default function Main({ options, checked, onChange, className, style }: props) {
  className = 'mumpui mp-checkboxes ' + className

  return (
    <div className={'mp-radios ' + className} style={style}>
      {options.map(({ key, label }, i) => (
        <Radio key={i} checked={checked === key} _key={key} label={label} onChange={(key: key) => onChange(key)} />
      ))}
    </div>
  )
}

type radio = {
  checked: boolean
  _key: key
  label: label
  onChange: (key: key) => void
}

export function Radio(props: radio) {
  return (
    <div className='mp-radio'>
      <label>
        <input type='radio' checked={props.checked} onChange={() => props.onChange(props._key)} />
        <span className='mp-radio-icon' />
        <span className='mp-radio-label'>{props.label}</span>
      </label>
    </div>
  )
}
