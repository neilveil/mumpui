import React from 'react'

type item = string | JSX.Element | item[]
type type = 'ul' | 'ol'

type props = React.HTMLAttributes<HTMLUListElement> & {
  items?: item[]
  type?: 'ul' | 'ol'
}

function ListMaker({ items = [], type = 'ul', isTop = false }: { items: item[]; type: type; isTop: boolean }) {
  const list = items.map((x: item, i: number) =>
    Array.isArray(x) ? <ListMaker key={i} items={x} type={type} isTop={false} /> : <li key={i}>{x}</li>
  )

  if (isTop) return <>{list}</>

  return type === 'ul' ? <ul>{list}</ul> : <ol>{list}</ol>
}

export default function Main({ items = [], type = 'ul', className = '', ...props }: props) {
  className = `mumpui mp-list ${className}`

  const list = <ListMaker items={items} type={type} isTop={true} />

  return type === 'ul' ? (
    <ul {...props} className={className}>
      {list}
    </ul>
  ) : (
    <ol {...props} className={className}>
      {list}
    </ol>
  )
}
