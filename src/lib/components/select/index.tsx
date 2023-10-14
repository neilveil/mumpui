import React, { useEffect, useRef, useState } from 'react'

import { default as Multi } from './multi'
import { default as Native } from './native'
import { default as search } from './search'

export type option = {
  key: string
  label: string
  [key: string]: string
}

type props = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> & {
  options?: option[]
  value?: option
  onChange?: (value?: option) => void
  onSearch?: (search: string) => void
  simpleSearch?: boolean
  placeholder?: any
  clearable?: boolean
  disabled?: boolean
  valueHOC?: (option: option) => any
  optionHOC?: (option: option) => any
}

export default function Main({
  value,
  options = [],
  onChange,
  onSearch,
  simpleSearch,
  placeholder,
  clearable = false,
  disabled = false,
  className = '',
  valueHOC = (value: option) => <>{value.label}</>,
  optionHOC = (option: option) => <>{option.label}</>,
  ...props
}: props) {
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

  const _onSelect = (selected: option) => {
    if (onSearch) onSearch('')
    if (onChange) onChange(selected)
    setOptionsVisible(false)
    _setSearch('')
  }

  const _onSearch = (search: string = '') => {
    if (onSearch) onSearch(search)
    if (simpleSearch) _setSearch(search)
  }

  if (value) options = options.filter(x => value.key !== x.key)

  if (_search) options = search(_search, options)

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => !disabled && setOptionsVisible(!optionsVisible)}
    >
      <div className='mp-select-single'>{value ? valueHOC(value) : placeholder}</div>

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
                      if (options.length) _onSelect(options[0])
                    }
                  }}
                  className='mp-select-search'
                  onBlur={() => _setSearch('')}
                  autoFocus
                />
              ) : (
                <div className='mp-select-search'>&nbsp;</div>
              )}

              {!!clearable && (
                <div className='mp-select-clear' onClick={() => !!onChange && onChange()}>
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

Main.Multi = Multi
Main.Native = Native
Main.search = search
