import React from 'react'

type x = string | number | JSX.Element

type props = React.HTMLAttributes<HTMLDivElement> & {
  data?: x[]
  seperator?: x
  className?: string
}

export default function Main({ className = '', data = [], seperator = '/', ...props }: props) {
  className = 'mumpui mp-chain ' + className

  return (
    <div className={className} {...props}>
      {data.map((x, i) => [
        <div key={'l' + i} className='mp-chain-element'>
          {x}
        </div>,
        data.length - 1 !== i && (
          <div key={'s' + i} className='mp-chain-seperator'>
            {seperator}
          </div>
        )
      ])}
    </div>
  )
}
