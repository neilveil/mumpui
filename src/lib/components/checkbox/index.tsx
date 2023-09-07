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

export default function Main({ options, checked, onChange, className, style }: props) {
  className = 'mumpui mp-checkboxes ' + className

  return (
    <div className={className} style={style}>
      {options.map(({ key, label }, i) => (
        <Checkbox
          key={i}
          checked={checked.includes(key)}
          _key={key}
          label={label}
          onChange={(key: key) =>
            onChange(checked.includes(key) ? checked.filter(x => x !== key) : checked.concat(key))
          }
        />
      ))}
    </div>
  )
}

type checkbox = {
  checked: boolean
  _key: key
  label: label
  onChange: (key: key) => void
}

export function Checkbox(props: checkbox) {
  return (
    <div className='mp-checkbox'>
      <label>
        <input type='checkbox' checked={props.checked} onChange={() => props.onChange(props._key)} />
        <span className='mp-checkbox-icon' />
        <span className='mp-checkbox-label'>{props.label}</span>
      </label>
    </div>
  )
}
