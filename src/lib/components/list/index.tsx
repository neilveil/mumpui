import React from 'react'

type data = string | data[]
type type = 'ul' | 'ol'

type props = React.HTMLAttributes<HTMLUListElement> & {
  data?: data[]
  type?: 'ul' | 'ol'
}

function ListMaker({ data = [], type = 'ul', isTop = false }: { data: data[]; type: type; isTop: boolean }) {
  const list = data.map((x: data, i: number) =>
    typeof x === 'string' ? <li key={i}>{x}</li> : <ListMaker key={i} data={x} type={type} isTop={false} />
  )

  if (isTop) return list

  return type === 'ul' ? <ul>{list}</ul> : <ol>{list}</ol>
}

export default function Main({ data = [], type = 'ul', className = '', ...props }: props) {
  className = `mumpui mp-list ${className}`

  const list = <ListMaker data={data} type={type} isTop={true} />

  return type === 'ul' ? (
    <ul className={className} {...props}>
      {list}
    </ul>
  ) : (
    <ol className={className} {...props}>
      {list}
    </ol>
  )
}
