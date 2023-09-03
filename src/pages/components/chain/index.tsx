import { Docs } from 'components'
import { Chain } from 'lib'
import { Link } from 'react-router-dom'

export default function Main() {
  const elements = [
    { key: 0, label: 'Home' },
    { key: 1, label: 'Products' },
    { key: 2, label: 'Price' }
  ]

  return (
    <Docs type='Component' name='Chain'>
      <Docs.Showcase
        info={<span></span>}
        code={`
<Chain
  elements={[
    { key: 0, label: 'Home' },
    { key: 1, label: 'Products' },
    { key: 2, label: 'Price' }
  ]}
/>
`}
      >
        <Chain elements={elements} />
      </Docs.Showcase>

      <Docs.Showcase
        info={
          <span>
            Use chain as <b>Breadcrumb</b> component
          </span>
        }
        code={`
`}
      >
        <Chain
          style={{ color: '#1677ff' }}
          elements={[
            {
              key: 0,
              label: <Link to='/'>Home</Link>
            },
            {
              key: 1,
              label: <Link to='/setup'>Setup</Link>
            }
          ]}
        />
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Different seperators</span>}
        code={`
`}
      >
        <Chain elements={elements} seperator='•' />
        <hr />
        <Chain elements={elements} seperator='◦' />
        <hr />
        <Chain elements={elements} seperator='‣' />
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

      <Docs.Props
        title='Element'
        type='object'
        fields={[
          { name: 'key', customType: 'string|number' },
          { name: 'label', type: 'string' }
        ]}
      />
    </Docs>
  )
}
