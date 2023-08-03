import React, { useState } from 'react'

type props = {
  pageSize: number
  total: number
  offset: number
  onChange: (offset: number) => void
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function Main(props: props) {
  const className = 'mp-pagination ' + (props.className || '')
  const style = Object.assign({}, props.style)

  const onChange = (pageNumber: number) => {
    if (props.disabled) return

    if (pageNumber < 1) return
    if (pageNumber > Math.ceil(props.total / props.pageSize)) return

    const offset = (pageNumber - 1) * props.pageSize

    props.onChange(offset)
  }

  const [pageNumber, setPageNumber] = useState(Math.ceil(props.offset / props.pageSize) + 1)
  const pages = Math.ceil(props.total / props.pageSize)

  return (
    <div className={className} style={style}>
      <div
        className={'mp-pagination-left-arrow ' + (pageNumber <= 1 ? 'mp-pagination-disabled' : '')}
        onClick={() => (pageNumber > 1 ? setPageNumber(pageNumber - 1) : null)}
      >
        {arrow(true)}
      </div>
      <div className='mp-pagination-page-number'>
        <input
          type='number'
          value={pageNumber}
          min={1}
          onChange={e => setPageNumber(parseInt(e.target.value))}
          onBlur={() => onChange(pageNumber)}
          style={{ width: (pageNumber || 0).toString().length + 1 + 'ch' }}
          placeholder='..'
        />
      </div>
      <div className='mp-pagination-seperator'>/</div>
      <div className='mp-pagination-pages'>{pages}</div>
      <div
        className={'mp-pagination-right-arrow ' + (pageNumber >= pages ? 'mp-pagination-disabled' : '')}
        onClick={() => (pageNumber < pages ? setPageNumber(pageNumber + 1) : null)}
      >
        {arrow()}
      </div>
    </div>
  )
}

const arrow = (rotate?: boolean) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 128 128'
    fill='none'
    style={{
      transform: rotate ? 'rotate(180deg)' : ''
    }}
    className='mp-menu-item-expand-icon'
  >
    <path d='M44 24L84 64L44 104' stroke='var(--mp-c-font-light)' strokeWidth='16' strokeLinecap='round' />
  </svg>
)
