import React from 'react'

type option = {
  key: string
  label: string
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: option[]
  checked: string
  onChange: (keys: string) => void
}

export default function Main({ options, checked, onChange, className = '', style = {}, ...props }: props) {
  className = 'mumpui mp-radio ' + className

  return (
    <div className={'mp-radios ' + className} style={style} {...props}>
      {options.map(({ key, label }, i) => (
        <Radio key={i} checked={checked === key} _key={key} label={label} onChange={key => onChange(key)} />
      ))}
    </div>
  )
}

type radio = {
  checked: boolean
  _key: string
  label: string
  onChange: (key: string) => void
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
