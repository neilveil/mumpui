import React from 'react'

type data = string | data[]

type props = React.HTMLAttributes<HTMLDivElement> & {
  data: data
  type?: 'ol' | 'ul'
  className?: string
}

const wrapInLI: any = (data: data, type: 'ol' | 'ul' = 'ul') => {
  if (typeof data === 'string') return <li>{data}</li>
  else
    return data.map((x, i) =>
      type === 'ol' ? <ol key={i}>{wrapInLI(x, type)}</ol> : <ul key={i}>{wrapInLI(x, type)}</ul>
    )
}

export default function Main({ data, type, className, ...props }: props) {
  className = 'mumpui mp-list ' + (className || '')
  data = wrapInLI(data, type)

  return (
    <div className={className} {...props}>
      {data}
    </div>
  )
}
