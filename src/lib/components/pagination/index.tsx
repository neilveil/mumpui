import { useState } from 'react'

type props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  pageSize: number
  totalItems: number
  offset: number
  onChange?: (offset: number) => void
  disabled?: boolean
  className?: string
}

export default function Main({
  pageSize = 10,
  totalItems = 0,
  offset = 0,
  onChange,
  disabled,
  className = '',
  ...props
}: props) {
  className = 'mumpui mp-pagination ' + className

  const _onChange = (pageNumber: number) => {
    if (disabled) return

    if (pageNumber.toString() === 'NaN' || pageNumber < 1 || pageNumber > Math.ceil(totalItems / pageSize)) {
      setPageNumber(1)
      if (onChange) onChange(0)
      return
    }

    const offset = (pageNumber - 1) * pageSize

    if (onChange) onChange(offset)
  }

  const [pageNumber, setPageNumber] = useState(Math.ceil(offset / pageSize) + 1)
  const pages = Math.ceil(totalItems / pageSize)

  return (
    <div {...props} className={className}>
      <div
        className={'mp-pagination-left-arrow ' + (pageNumber <= 1 ? 'mp-pagination-disabled' : '')}
        onClick={() => {
          if (pageNumber > 1) {
            const _pageNumber = pageNumber - 1
            setPageNumber(_pageNumber)
            _onChange(_pageNumber)
          }
        }}
      >
        {arrow(true)}
      </div>
      <div className='mp-pagination-page-number'>
        <input
          type='number'
          value={pageNumber}
          min={1}
          onChange={e => setPageNumber(parseInt(e.target.value))}
          onBlur={() => _onChange(pageNumber)}
          onKeyUp={(e: any) => {
            if (e.key === 'Enter') {
              _onChange(pageNumber)
              e.target.blur()
            }
          }}
          style={{ width: (pageNumber || 0).toString().length + 1 + 'ch' }}
          placeholder='..'
        />
      </div>
      <div className='mp-pagination-seperator'>/</div>
      <div className='mp-pagination-pages'>{pages}</div>
      <div
        className={'mp-pagination-right-arrow ' + (pageNumber >= pages ? 'mp-pagination-disabled' : '')}
        onClick={() => {
          if (pageNumber < pages) {
            const _pageNumber = pageNumber + 1
            setPageNumber(_pageNumber)
            _onChange(_pageNumber)
          }
        }}
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
    style={{ transform: rotate ? 'rotate(180deg)' : '' }}
    className='mp-menu-item-expand-icon'
  >
    <path d='M44 24L84 64L44 104' stroke='var(--mp-c-font-light)' strokeWidth='16' strokeLinecap='round' />
  </svg>
)
