import React, { useEffect, useRef, useState } from 'react'

type option = {
  key: string
  label: string
  [key: string]: string
}

type props = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onSelect' | 'value' | 'placeholder'> & {
  options?: option[]
  value?: option
  onSelect?: (value?: option) => void
  onSearch?: (search: string) => void
  placeholder?: any
  clearable?: boolean
  disabled?: boolean
  valueHOC?: (option: option) => any
  optionHOC?: (option: option) => any
}

export default function Main({
  value,
  options = [],
  onSelect,
  onSearch,
  placeholder,
  clearable = false,
  disabled = false,
  className = '',
  valueHOC = (value: option) => <>{value.label}</>,
  optionHOC = (option: option) => <>{option.label}</>,
  ...props
}: props) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '')

  const ref: React.Ref<any> = useRef(null)

  placeholder = <div style={{ color: 'var(--mp-c-placeholder)' }}>{placeholder || <>&nbsp;</>}</div>

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [])

  const _onSelect = (selected: option) => {
    if (onSearch) onSearch('')
    if (onSelect) onSelect(selected)
    setOptionsVisible(false)
  }

  if (value) options = options.filter(x => value.key !== x.key)

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => !disabled && setOptionsVisible(!optionsVisible)}
    >
      <div className='mp-select-single'>{value ? valueHOC(value) : placeholder}</div>

      {optionsVisible && !!(options.length || onSearch) && (
        <div className='mp-input-expanded-area'>
          {!!(onSearch || clearable) && (
            <div
              className='mp-select-area'
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              {onSearch ? (
                <input
                  placeholder='Search..'
                  onChange={e => onSearch && onSearch(e.target.value)}
                  onKeyUp={e => {
                    if (e.key === 'Enter') {
                      if (options.length) _onSelect(options[0])
                    }
                  }}
                  className='mp-select-search'
                  autoFocus
                />
              ) : (
                <div className='mp-select-search'>&nbsp;</div>
              )}

              {!!clearable && (
                <div className='mp-select-clear' onClick={() => !!onSelect && onSelect()}>
                  Clear
                </div>
              )}
            </div>
          )}

          {options.map((x, i) => (
            <div
              key={i}
              className='mp-select-option'
              onClick={e => {
                e.stopPropagation()
                _onSelect(x)
              }}
            >
              {optionHOC(x)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

type native = Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> & {
  options?: string[]
  value?: string
  onSelect?: (value: string) => void
  disabled?: boolean
}

Main.Native = Native
function Native({ value, options = [], onSelect, disabled = false, className = '', ...props }: native) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '')

  const ref: React.Ref<any> = useRef(null)

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => !disabled && setOptionsVisible(!optionsVisible)}
    >
      <select
        className='mp-select-single'
        value={value}
        onChange={e => !!onSelect && onSelect(options[e.target.selectedIndex] || '')}
      >
        {options.map((x, i) => (
          <option key={i}>{x}</option>
        ))}
      </select>
    </div>
  )
}

type multiple = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onSelect' | 'value' | 'placeholder'> & {
  options?: option[]
  value?: option[]
  onSelect?: (value: option[]) => void
  onSearch?: (search: string) => void
  placeholder?: any
  clearable?: boolean
  disabled?: boolean
  valueHOC?: (option: option) => any
  optionHOC?: (option: option) => any
}

Main.Multiple = Multiple
function Multiple({
  value = [],
  options = [],
  onSelect,
  onSearch,
  placeholder,
  clearable = false,
  disabled = false,
  className = '',
  optionHOC = (option: option) => <>{option.label}</>,
  ...props
}: multiple) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '')

  const ref: React.Ref<any> = useRef(null)

  placeholder = <div style={{ color: 'var(--mp-c-placeholder)' }}>{placeholder || <>&nbsp;</>}</div>

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [])

  const _onSelect = (selected: option) => {
    if (onSearch) onSearch('')
    if (onSelect) onSelect(value.concat(selected))

    const inputEl = ref.current.querySelector('input')
    if (inputEl) {
      inputEl.value = ''
      inputEl.focus()
    }
  }

  const selectedKey = value.map(x => x.key)

  const valueEl = value.map((x, i) => (
    <div key={i} className='mp-select-chip'>
      {x.label}
      <CrossIcon
        color='var(--mp-c-font-light)'
        onClick={e => {
          if (disabled) return
          e.stopPropagation()
          if (onSelect) onSelect(value.filter(y => y.key !== x.key))
        }}
      />
    </div>
  ))

  options = options.filter(x => !selectedKey.includes(x.key))

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => !disabled && setOptionsVisible(!optionsVisible)}
    >
      <div className='mp-select-multi'>{value.length ? valueEl : placeholder}</div>

      {optionsVisible && !!(options.length || onSearch) && (
        <div className='mp-input-expanded-area'>
          {!!(onSearch || clearable) && (
            <div
              className='mp-select-area'
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              {onSearch ? (
                <input
                  placeholder='Search..'
                  onChange={e => onSearch && onSearch(e.target.value)}
                  onKeyUp={e => {
                    if (e.key === 'Enter') {
                      if (options.length) _onSelect(options[0])
                    }
                  }}
                  className='mp-select-search'
                  autoFocus
                />
              ) : (
                <div className='mp-select-search'>&nbsp;</div>
              )}

              {!!clearable && (
                <div className='mp-select-clear' onClick={() => !!onSelect && onSelect([])}>
                  Clear
                </div>
              )}
            </div>
          )}

          {options.map((x, i) => (
            <div
              key={i}
              className='mp-select-option'
              onClick={e => {
                e.stopPropagation()
                _onSelect(x)
              }}
            >
              {optionHOC(x)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

Main.search = (search: string, options: option[], caseSensitive: boolean = false) => {
  if (search)
    return options.filter(({ label }) =>
      caseSensitive ? label.includes(search) : label.toLowerCase().includes(search.toLowerCase())
    )
  else return options
}

const CrossIcon = ({ color = '#000000', onClick }: { color: string; onClick?: (e: React.MouseEvent) => void }) => (
  <svg onClick={onClick} width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 12L116.652 116.652' stroke={color} strokeWidth='18' strokeLinecap='round' />
    <path d='M116.652 12L12 116.652' stroke={color} strokeWidth='18' strokeLinecap='round' />
  </svg>
)
