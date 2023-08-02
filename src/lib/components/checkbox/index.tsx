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
  checked: key[]
  onChange: (keys: key[]) => void
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
    <div className={'mp-checkboxes ' + props.className} style={props.style}>
      {props.options.map(({ key, label }, i) => (
        <Checkbox
          key={i}
          checked={props.checked.includes(key)}
          _key={key}
          label={label}
          onChange={(key: key) =>
            props.onChange(
              props.checked.includes(key) ? props.checked.filter(x => x !== key) : props.checked.concat(key)
            )
          }
        />
      ))}
    </div>
  )
}

export function Checkbox(props: checkbox) {
  return (
    <div className='mp-checkbox'>
      <label>
        <input type='checkbox' checked={props.checked} onChange={e => props.onChange(props._key)} />
        <span className='mp-checkbox-icon' />
        <span className='mp-checkbox-label'>{props.label}</span>
      </label>
    </div>
  )
}
