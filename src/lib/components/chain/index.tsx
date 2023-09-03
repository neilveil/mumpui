import React from 'react'

type key = number | string | symbol

type element = {
  key: key
  label: any
}

type props = React.HTMLAttributes<HTMLDivElement> & {
  elements?: element[]
  seperator?: any
  onClick?: (key: key) => void
  className?: string
}

export default function Main({ className, elements = [], seperator = '/', onClick, ...props }: props) {
  className = 'mp-chain ' + (className || '')

  return (
    <div className={className} {...props}>
      {elements.map(({ key, label }, i) => [
        <div
          key={'l' + i}
          className='mp-chain-label'
          onClick={() => {
            if (onClick) onClick(key)
          }}
        >
          {label}
        </div>,
        elements.length - 1 !== i && (
          <div key={'s' + i} className='mp-chain-seperator'>
            {seperator}
          </div>
        )
      ])}
    </div>
  )
}
