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

  placeholder = <span style={{ color: 'var(--mp-c-placeholder)' }}>{placeholder || <>&nbsp;</>}</span>

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

Main.search = (search: string, options: option[], caseSensitive: boolean = false) => {
  if (search)
    return options.filter(({ label }) =>
      caseSensitive ? label.includes(search) : label.toLowerCase().includes(search.toLowerCase())
    )
  else return options
}
