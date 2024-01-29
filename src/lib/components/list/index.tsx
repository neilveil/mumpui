import React from 'react'

type items = string | JSX.Element | items[]
type type = 'ul' | 'ol'

type props = React.HTMLAttributes<HTMLUListElement> & {
  items?: items[]
  type?: 'ul' | 'ol'
}

function ListMaker({ items = [], type = 'ul', isTop = false }: { items: items[]; type: type; isTop: boolean }) {
  const list = items.map((x: items, i: number) =>
    typeof x === 'string' ? <li key={i}>{x}</li> : <ListMaker key={i} items={x} type={type} isTop={false} />
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
