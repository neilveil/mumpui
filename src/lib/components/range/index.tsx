type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  onValue?: (value: number) => void
}

export default function Main({ onChange, onValue, className = '', style = {}, ...props }: props) {
  className = 'mumpui mp-range ' + className

  return (
    <div className={className} style={style}>
      <input
        {...props}
        type='range'
        onChange={e => {
          if (onChange) onChange(e)
          if (onValue) onValue(Number(e.target.value))
        }}
      />
    </div>
  )
}
