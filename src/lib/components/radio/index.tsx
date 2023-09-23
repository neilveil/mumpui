type option = {
  key: string
  label: string
  [key: string]: any
}

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options?: option[]
  checked?: string
  onChange?: (keys: string) => void
  disabled?: boolean
}

export default function Main({
  options = [],
  checked,
  onChange,
  disabled,
  className = '',
  style = {},
  ...props
}: props) {
  className = 'mumpui mp-radio ' + className

  return (
    <div {...props} className={'mp-radios ' + className} style={style}>
      {options.map(({ key, label }, i) => (
        <Radio
          key={i}
          checked={checked === key}
          _key={key}
          label={label}
          onChange={key => !!onChange && !disabled && onChange(key)}
          disabled={disabled}
        />
      ))}
    </div>
  )
}

type radio = {
  checked: boolean
  _key: string
  label: string
  onChange: (key: string) => void
  disabled?: boolean
}

export function Radio(props: radio) {
  return (
    <div className='mp-radio'>
      <label>
        <input type='radio' checked={props.checked} onChange={() => props.onChange(props._key)} />
        <span className={`mp-radio-icon ${props.disabled ? 'mp-disabled' : ''}`} />
        <span className='mp-radio-label'>{props.label}</span>
      </label>
    </div>
  )
}
