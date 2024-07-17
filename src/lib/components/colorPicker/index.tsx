import React from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  value?: string
  onValue?: (value: string) => void
  className?: string
  style?: React.CSSProperties
}

export default function Main({ value = '', className = '', onValue, placeholder = '', ...props }: props) {
  className = 'mumpui mp-color-picker ' + className

  const onChange = (e: any) => {
    let value = e.target.value

    value = value
      .split('')
      .filter((x: string) => x)
      .filter((x: string) => !!/[0-9a-f]/i.exec(x))
      .join('')
      .toLowerCase()

    if (onValue) onValue(value.slice(0, 6))
  }

  value = value.toLocaleLowerCase()

  return (
    <div {...props} className={className}>
      <input
        className='mp-color-picker-swatch'
        style={{ width: '4rem' }}
        onChange={onChange}
        type='color'
        value={'#' + value}
      />
      <input className='mp-color-picker-text' type='text' onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  )
}
