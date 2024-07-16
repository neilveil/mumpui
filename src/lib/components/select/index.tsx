import React, { useEffect, useRef, useState } from 'react'

import { default as Multi } from './multi'
import { default as Native } from './native'
import { default as search } from './search'
import Placeholder from '../placeholder'

export type option = {
  key: string
  label: string
  [key: string]: string
}

type props = Omit<React.InputHTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> & {
  options?: option[]
  value?: string
  onChange?: (value: string) => void
  onSearch?: (search: string) => void
  simpleSearch?: boolean
  placeholder?: any
  clearable?: boolean
  disabled?: boolean
  optionsSpace?: boolean
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
  optionsSpace = false,
  className = '',
  valueHOC = (value: option) => <>{value.label}</>,
  optionHOC = (option: option) => <>{option.label}</>,
  ...props
}: props) {
  const [optionsVisible, setOptionsVisible] = useState(false)
  const [_search, _setSearch] = useState('')

  className =
    'mumpui mp-select ' +
    (disabled ? 'mp-disabled ' : '') +
    (optionsSpace ? 'mp-options-space ' : '') +
    (className || '')

  const ref: React.Ref<any> = useRef(null)

  placeholder = <div style={{ color: 'var(--mp-c-font-light)' }}>{placeholder || <>&nbsp;</>}</div>

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  const keyListener = (e: any) => {
    if (e.key === 'Escape') setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    window.addEventListener('keyup', keyListener)
    return () => {
      window.removeEventListener('click', clickListener)
      window.removeEventListener('keyup', keyListener)
    }
  }, [])

  const _onSelect = (selected: option) => {
    if (onSearch) onSearch('')
    if (onChange) onChange(selected.key)
    setOptionsVisible(false)
    _setSearch('')
  }

  const _onSearch = (search: string = '') => {
    if (onSearch) onSearch(search)
    if (simpleSearch) _setSearch(search)
  }

  const selectedOptions = options.find(x => x.key === value)

  if (value) options = options.filter(x => value !== x.key)

  if (_search) options = search(_search, options)

  return (
    <div
      {...props}
      tabIndex={0}
      ref={ref}
      className={className}
      onClick={() => {
        if (!disabled) setOptionsVisible(!optionsVisible)
        if (!optionsVisible) _setSearch('')
      }}
    >
      <div className='mp-select-single'>{selectedOptions ? valueHOC(selectedOptions) : placeholder}</div>

      {optionsVisible && (
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
                  // onBlur={() => _setSearch('')}
                  value={_search}
                  autoFocus
                />
              ) : (
                <div className='mp-select-search'>&nbsp;</div>
              )}

              {!!clearable && (
                <div className='mp-select-clear' onClick={() => !!onChange && onChange('')}>
                  Clear
                </div>
              )}
            </div>
          )}

          {options.map(x => (
            <div
              key={x.key}
              className='mp-select-option'
              onClick={e => {
                e.stopPropagation()
                _onSelect(x)
              }}
            >
              {optionHOC(x)}
            </div>
          ))}

          {!options.length && (
            <div onClick={() => _setSearch('')} style={{ display: 'flex', justifyContent: 'center' }}>
              <Placeholder style={{ width: '50%', padding: '2rem 2rem' }} empty />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

Main.Multi = Multi
Main.Native = Native
Main.search = search
