import { Docs } from 'components'
import { List } from 'lib'

export default function Main() {
  const data = ['Item 1', 'Item 2', ['Item 3', 'Item 4', ['Item 5', 'Item 6']], 'Item 7', 'Item 8']

  return (
    <Docs type='Component' name='List'>
      <Docs.Showcase
        info={<span></span>}
        code={`
`}
      >
        <List data={data} />
      </Docs.Showcase>

      <Docs.Showcase
        info={<span></span>}
        code={`
`}
      >
        <List type='ol' data={data} />
      </Docs.Showcase>

      <Docs.Props
        title='Chain'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'elements', type: 'array', usage: 'Array of elements' },
          { name: 'seperator', customType: 'string|jsx', usage: 'Default "/"' }
        ]}
      />
    </Docs>
  )
}
