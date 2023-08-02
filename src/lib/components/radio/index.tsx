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
  selected: key
  onChange: (keys: key) => void
  className?: string
  style?: React.CSSProperties
}

type checkbox = {
  checked: boolean
  _key: key
  label: label
  onChange: (key: key) => void
}

export default function Main(props: props) {
  return (
    <div className={'mp-radios ' + props.className} style={props.style}>
      {props.options.map(({ key, label }, i) => (
        <Checkbox
          key={i}
          checked={props.selected === key}
          _key={key}
          label={label}
          onChange={(key: key) => props.onChange(key)}
        />
      ))}
    </div>
  )
}

export function Checkbox(props: checkbox) {
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
