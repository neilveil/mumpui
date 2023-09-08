import React from 'react'
import Checkbox from '../checkbox'

type option = {
  key: string
  label: string
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options?: option[]
  checked?: string[]
  onChange?: (keys: string[]) => void
}

export default function Main({ options = [], checked = [], onChange, className = '', ...props }: props) {
  className = 'mumpui mp-checkbox ' + className

  return (
    <div className={className} {...props}>
      {options.map(({ key, label }, i) => (
        <Checkbox
          key={i}
          checked={checked.includes(key)}
          label={label}
          onChange={_checked => !!onChange && onChange(_checked ? checked.concat(key) : checked.filter(x => x !== key))}
        />
      ))}
    </div>
  )
}
