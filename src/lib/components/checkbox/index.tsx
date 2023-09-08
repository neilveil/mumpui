import React from 'react'

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export default function Checkbox({ checked, label, onChange, className = '', ...props }: props) {
  className = `mumpui mp-checkbox ${className}`

  return (
    <div className={className} {...props}>
      <label>
        <input type='checkbox' checked={checked} onChange={() => !!onChange && onChange(!checked)} />
        <span className='mp-checkbox-icon' />
        <span className='mp-checkbox-label'>{label}</span>
      </label>
    </div>
  )
}
