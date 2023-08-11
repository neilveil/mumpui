import React from 'react'

type data = string | data[]

type props = React.HTMLAttributes<HTMLDivElement> & {
  data: data
  type?: 'ol' | 'ul'
  className?: string
}

const wrapInLI: any = (data: data, type: 'ol' | 'ul' = 'ul') => {
  if (typeof data === 'string') return <li>{data}</li>
  else return data.map(x => (type === 'ol' ? <ol>{wrapInLI(x, type)}</ol> : <ul>{wrapInLI(x, type)}</ul>))
}

export default function Main({ data, type, className, ...props }: props) {
  className = 'mp-list ' + (className || '')
  data = wrapInLI(data, type)

  return (
    <div className={className} {...props}>
      {data}
    </div>
  )
}
