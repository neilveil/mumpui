import React from 'react'

type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

export default function Checkbox({ checked, label, onChange, disabled, className = '', ...props }: props) {
  className = `mumpui mp-checkbox ${className}`

  return (
    <div className={className}>
      <label>
        <input
          {...props}
          type='checkbox'
          checked={checked}
          onChange={() => !!onChange && !disabled && onChange(!checked)}
        />
        <span className={`mp-checkbox-icon ${disabled ? 'mp-disabled' : ''}`} />
        <span className='mp-checkbox-label'>{label}</span>
      </label>
    </div>
  )
}
