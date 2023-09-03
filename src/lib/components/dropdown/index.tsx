import React, { useEffect, useRef, useState } from 'react'

type key = number | string
type label = string

type option = {
  key: key
  label: label
}

type props = {
  value: null | option | option[]
  options: option[]
  onSelect: (option: null | option | option[]) => void
  onSearch?: (search: string) => void
  placeholder?: any
  clearable?: boolean
  disabled?: boolean
  status?: 'success' | 'error' | 'warning' | 'info'
  className?: string
  style?: React.CSSProperties
}

export default function Main({
  value,
  options = [],
  onSelect,
  onSearch,
  placeholder,
  clearable = false,
  disabled = false,
  status,
  className,
  style
}: props) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  className = 'mp-dropdown ' + (disabled ? 'mp-disabled ' : '') + (className || '')
  style = Object.assign({}, style)

  const ref: React.Ref<any> = useRef(null)

  const isMultiselect = Array.isArray(value)

  if (status) style.borderColor = 'var(--mp-c-' + status + ')'

  let valueEl: string | React.ReactNode[] = ''

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

    if (Array.isArray(value)) onSelect(value.concat(selected))
    else onSelect(selected)

    if (!isMultiselect) setOptionsVisible(false)
    else {
      const inputEl = ref.current.querySelector('input')
      if (inputEl) {
        inputEl.value = ''
        inputEl.focus()
      }
    }
  }

  if (value) {
    if (Array.isArray(value)) {
      const selectedKey = value.map(x => x.key)

      valueEl = value.map((x, i) => (
        <div key={i} className='mp-input-chip'>
          {x.label}
          <CrossIcon
            color='var(--mp-c-font-light)'
            onClick={e => {
              if (disabled) return
              e.stopPropagation()
              if (Array.isArray(value)) onSelect(value.filter(y => y.key !== x.key))
            }}
          />
        </div>
      ))

      options = options.filter(x => !selectedKey.includes(x.key))
    } else {
      valueEl = value.label
      const key = value.key

      options = options.filter(x => key !== x.key)
    }
  }

  return (
    <div
      tabIndex={0}
      ref={ref}
      className={className}
      style={style}
      onClick={() => (disabled ? null : setOptionsVisible(!optionsVisible))}
    >
      {!isMultiselect && <div className='mp-dropdown-single-select'>{valueEl ? valueEl : placeholder}</div>}

      {!!isMultiselect && <div className='mp-dropdown-multi-select'>{valueEl.length ? valueEl : placeholder}</div>}

      {optionsVisible && !!(options.length || onSearch) && (
        <div className='mp-input-expanded-area'>
          {!!(onSearch || clearable) && (
            <div
              className='mp-dropdown-area'
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
                  className='mp-dropdown-search'
                  autoFocus
                />
              ) : (
                <div className='mp-dropdown-search'>&nbsp;</div>
              )}

              {!!clearable && (
                <div className='mp-dropdown-clear' onClick={() => onSelect(isMultiselect ? [] : null)}>
                  Clear
                </div>
              )}
            </div>
          )}

          {options.map(({ key, label }, i) => (
            <div
              key={i}
              className='mp-dropdown-option'
              onClick={e => {
                e.stopPropagation()
                _onSelect({ key, label })
              }}
            >
              {label}
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

Main.search = (search: string, options: option[], caseSensitive: boolean = false) => {
  if (search)
    return options.filter(({ label }) =>
      caseSensitive ? label.includes(search) : label.toLowerCase().includes(search.toLowerCase())
    )
  else return options
}
