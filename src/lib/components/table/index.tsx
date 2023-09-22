import React from 'react'

interface col {
  name?: string
  key?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  render?: (value: string, x: object, index: [row: number, col: number]) => void
}

type props = React.HTMLAttributes<HTMLDivElement> & {
  cols: col[]
  data: object[]
  className?: string
}

export default function Main({ cols, data, className = '', ...props }: props) {
  className = 'mumpui mp-table ' + className

  return (
    <div {...props} className={className}>
      <table>
        <thead>
          <tr>
            {cols.map((x, i) => (
              <th align={x.align || 'left'} style={{ width: x.width }} key={i}>
                {x.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((x: any, i) => (
            <tr key={i}>
              {cols.map((y: any, j) => (
                <td style={{ width: y.width, textAlign: y.align }} key={j}>
                  {y.render ? y.render(x[y.key], x, [i, j]) : x[y.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
