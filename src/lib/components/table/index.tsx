interface col {
  name?: string
  key?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  render?: (value: string, x: object, index: [row: number, col: number]) => void
}

type props = React.TableHTMLAttributes<HTMLTableElement> & {
  cols: col[]
  data: object[]
  className?: string
  style?: React.CSSProperties
}

export default function Main({ cols, data, className = '', style = {}, ...props }: props) {
  className = 'mumpui mp-table ' + className

  return (
    <div className={className} style={style}>
      <table {...props}>
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
