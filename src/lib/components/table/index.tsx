import React from 'react'

interface col {
  name?: string
  key?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  wrap?: boolean
  render?: (value: any, x: any, index: [row: number, col: number]) => void
  className?: string
  style?: React.CSSProperties
}

type props = React.TableHTMLAttributes<HTMLTableElement> & {
  cols: col[]
  data: object[]
  className?: string
  style?: React.CSSProperties
  parentClassName?: string
  parentStyle?: React.CSSProperties
}

export default function Main({
  cols,
  data,
  className = '',
  style = {},
  parentClassName = '',
  parentStyle = {},
  ...props
}: props) {
  parentClassName = 'mumpui mp-table-wrapper ' + parentClassName
  className = 'mumpui mp-table ' + className

  return (
    <div className={parentClassName} style={parentStyle}>
      <table className={className} style={style} {...props}>
        <thead>
          <tr>
            {cols.map((x, i) => (
              <th
                key={i}
                align={x.align || 'left'}
                style={Object.assign(
                  x.style ? x.style : {},
                  x.width ? { width: x.width } : {},
                  x.wrap ? { whiteSpace: 'normal' } : {}
                )}
                className={x.className || ''}
              >
                {x.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((x: any, i) => (
            <tr key={i}>
              {cols.map((y: any, j) => (
                <td
                  key={j}
                  style={Object.assign(
                    y.style ? y.style : {},
                    y.width ? { width: y.width } : {},
                    y.align ? { textAlign: y.align } : {},
                    y.wrap ? { whiteSpace: 'normal' } : {}
                  )}
                  className={x.className || ''}
                >
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
