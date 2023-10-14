import React, { useEffect, useRef, useState } from 'react'
import { type option } from '.'
import search from './search'

type multiple = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> & {
  options?: option[]
  value?: option[]
  onChange?: (value: option[]) => void
  onSearch?: (search: string) => void
  simpleSearch?: boolean
  placeholder?: any
  clearable?: boolean
  disabled?: boolean
  valueHOC?: (option: option) => any
  optionHOC?: (option: option) => any
}

export default function Main({
  value = [],
  options = [],
  onChange,
  onSearch,
  simpleSearch,
  placeholder,
  clearable = false,
  disabled = false,
  className = '',
  optionHOC = (option: option) => <>{option.label}</>,
  ...props
}: multiple) {
  const [optionsVisible, setOptionsVisible] = useState(false)
  const [_search, _setSearch] = useState('')

  className = 'mumpui mp-select ' + (disabled ? 'mp-disabled ' : '') + (className || '')

  const ref: React.Ref<any> = useRef(null)

  placeholder = <div style={{ color: 'var(--mp-c-font-light)' }}>{placeholder || <>&nbsp;</>}</div>

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [])

  const _onChange = (selected: option) => {
    if (onSearch) onSearch('')
    if (onChange) onChange(value.concat(selected))
    _setSearch('')

    const inputEl = ref.current.querySelector('input')
    if (inputEl) {
      inputEl.value = ''
      inputEl.focus()
    }
  }

  const _onSearch = (search: string = '') => {
    if (onSearch) onSearch(search)
    if (simpleSearch) _setSearch(search)
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
          if (onChange) onChange(value.filter(y => y.key !== x.key))
        }}
      />
    </div>
  ))

  options = options.filter(x => !selectedKey.includes(x.key))

  if (_search) options = search(_search, options)

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => !disabled && setOptionsVisible(!optionsVisible)}
    >
      <div className='mp-select-multi'>{value.length ? valueEl : placeholder}</div>

      {optionsVisible && !!(options.length || onSearch || simpleSearch) && (
        <div className='mp-input-expanded-area'>
          {!!(onSearch || simpleSearch || clearable) && (
            <div
              className='mp-select-area'
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              {onSearch || simpleSearch ? (
                <input
                  placeholder='Search..'
                  onChange={e => _onSearch(e.target.value)}
                  onKeyUp={e => {
                    if (e.key === 'Enter') {
                      if (options.length) _onChange(options[0])
                    }
                  }}
                  onBlur={() => _setSearch('')}
                  className='mp-select-search'
                  autoFocus
                />
              ) : (
                <div className='mp-select-search'>&nbsp;</div>
              )}

              {!!clearable && (
                <div className='mp-select-clear' onClick={() => !!onChange && onChange([])}>
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
                _onChange(x)
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

const CrossIcon = ({ color = '#000000', onClick }: { color: string; onClick?: (e: React.MouseEvent) => void }) => (
  <svg onClick={onClick} width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 12L116.652 116.652' stroke={color} strokeWidth='18' strokeLinecap='round' />
    <path d='M116.652 12L12 116.652' stroke={color} strokeWidth='18' strokeLinecap='round' />
  </svg>
)
