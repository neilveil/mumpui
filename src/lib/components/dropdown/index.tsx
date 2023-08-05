import React, { useCallback, useEffect, useRef, useState } from 'react'

type key = number | string
type label = string

type option = {
  key: key
  label: label
}

type props = {
  options: option[]
  value: null | option | option[]
  onSelect: (option: option | option[]) => void
  onSearch?: (search: string) => void
  placeholder?: string
  className?: string
  style?: React.CSSProperties
  status?: 'success' | 'error' | 'warning' | 'info'
}

export default function Main({ options = [], ...props }: props) {
  const [optionsVisible, setOptionsVisible] = useState(false)

  const ref: React.Ref<any> = useRef(null)

  const clickListener: EventListener = e => {
    if (ref.current && !ref.current.contains(e.target)) setOptionsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [])

  const isMultiselect = Array.isArray(props.value)

  const onSelect = (selected: option) => {
    if (props.onSearch) props.onSearch('')

    if (Array.isArray(props.value)) props.onSelect(props.value.concat(selected))
    else props.onSelect(selected)

    if (!isMultiselect) setOptionsVisible(false)
    else {
      const inputEl = ref.current.querySelector('input')
      if (inputEl) {
        inputEl.value = ''
        inputEl.focus()
      }
    }
  }

  const className = 'mp-dropdown ' + (props.className || '')
  const style = Object.assign({}, props.style)

  if (props.status) style.borderColor = 'var(--mp-c-' + props.status + ')'

  var value: string | React.ReactNode[] = ''

  if (props.value) {
    if (Array.isArray(props.value)) {
      const selectedKey = props.value.map(x => x.key)

      value = props.value.map((x, i) => (
        <div key={i} className='mp-input-chip'>
          {x.label}
          <CrossIcon
            color='var(--mp-c-font-light)'
            onClick={e => {
              e.stopPropagation()
              if (Array.isArray(props.value)) props.onSelect(props.value.filter(y => y.key !== x.key))
            }}
          />
        </div>
      ))

      options = options.filter(x => !selectedKey.includes(x.key))
    } else {
      value = props.value.label
      const key = props.value.key
      options = options.filter(x => key !== x.key)
    }
  }

  const placeholder = <span style={{ color: 'var(--mp-c-placeholder)' }}>{props.placeholder || <>&nbsp;</>}</span>

  return (
    <div
      tabIndex={0}
      // onKeyUp={e => {
      //   if (e.key === 'Enter') setOptionsVisible(!optionsVisible)
      // }}
      ref={ref}
      className={className}
      style={style}
      // onFocus={() => setOptionsVisible(true)}
      onClick={() => setOptionsVisible(!optionsVisible)}
      // onBlur={() => setOptionsVisible(false)}
    >
      <div className='mp-value'>
        {isMultiselect && (value.length ? value : placeholder)}
        {!isMultiselect && (value ? value : placeholder)}
      </div>

      {/* <input
          className='mp-input'
          placeholder='Search..'
          onChange={e => console.log(e.target.value)}
          onFocus={() => {
            console.log('click')
            setOptionsVisible(true)
          }}
          onBlur={e => {
            console.log('blur')
            setOptionsVisible(false)
          }}
        /> */}

      {optionsVisible && !!(options.length || props.onSearch) && (
        <div className='mp-input-output'>
          {props.onSearch && (
            <div
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              <input
                className='mp-search'
                placeholder='Search..'
                onChange={e => props.onSearch && props.onSearch(e.target.value)}
                onKeyUp={e => {
                  if (e.key === 'Enter') {
                    if (options.length) onSelect(options[0])
                  }
                }}
                autoFocus
              />
            </div>
          )}

          {options.map(({ key, label }, i) => (
            <div
              key={i}
              className='mp-option'
              // tabIndex={0}
              // onKeyUp={e => {
              //   if (e.key === 'Enter') {
              //     const selected = { key, label }

              //     if (Array.isArray(props.value)) props.onSelect(props.value.concat(selected))
              //     else props.onSelect(selected)

              //     if (!isMultiselect) setOptionsVisible(false)
              //     else {
              //       const inputEl = ref.current.querySelector('input')
              //       if (inputEl) {
              //         inputEl.value = ''
              //         inputEl.focus()
              //       }
              //     }
              //   }
              // }}
              onClick={e => {
                e.stopPropagation()
                onSelect({ key, label })
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
