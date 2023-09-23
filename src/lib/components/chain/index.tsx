type x = string | number | JSX.Element

type props = React.HTMLAttributes<HTMLDivElement> & {
  items?: x[]
  seperator?: x
  className?: string
}

export default function Main({ className = '', items = [], seperator = '/', ...props }: props) {
  className = 'mumpui mp-chain ' + className

  return (
    <div {...props} className={className}>
      {items.map((x, i) => [
        <div key={'l' + i} className='mp-chain-element'>
          {x}
        </div>,
        items.length - 1 !== i && (
          <div key={'s' + i} className='mp-chain-seperator'>
            {seperator}
          </div>
        )
      ])}
    </div>
  )
}
