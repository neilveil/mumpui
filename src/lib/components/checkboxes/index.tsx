import React from 'react'
import Checkbox from '../checkbox'

type option = {
  key: string
  label: string | JSX.Element
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options?: option[]
  checked?: string[]
  onChange?: (keys: string[]) => void
  disabled?: boolean
}

export default function Main({ options = [], checked = [], onChange, disabled, className = '', ...props }: props) {
  className = 'mumpui mp-checkboxes ' + className

  return (
    <div {...props} className={className}>
      {options.map(({ key, label }, i) => (
        <Checkbox
          key={i}
          checked={checked.includes(key)}
          label={label}
          onChange={_checked =>
            !!onChange && !disabled && onChange(_checked ? checked.concat(key) : checked.filter(x => x !== key))
          }
          disabled={disabled}
        />
      ))}
    </div>
  )
}
