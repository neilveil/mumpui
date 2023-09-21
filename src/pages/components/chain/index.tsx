import { Docs } from 'components'
import { Chain } from 'lib'
import * as snippets from './snippets'
import { Link } from 'react-router-dom'

export default function Main() {
  const data = ['Decors', 'Lamps', 'Table Lamp']

  return (
    <Docs name='Chain'>
      <Docs.Showcase title={<span></span>} code={snippets.s1}>
        <Chain data={data} />
      </Docs.Showcase>

      <Docs.Showcase title='Examples' code={snippets.s1}>
        <Chain data={data} seperator='•' />
        <Chain
          data={data}
          seperator={
            <div
              style={{
                width: '.25rem',
                height: '.25rem',
                backgroundColor: '#888',
                margin: '0 .25rem',
                borderRadius: '50%'
              }}
            ></div>
          }
        />

        <Chain
          data={data.map(x => (
            <Link key={x} to={x} style={{ color: 'var(--c-link)' }}>
              {x}
            </Link>
          ))}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Chain'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          {
            name: 'data',
            type: 'array',
            usage: (
              <span>
                Array of <code>string</code> or <code>jsx</code>
              </span>
            )
          },
          {
            name: 'seperator',
            type: 'array',
            usage: (
              <span>
                Array of <code>string</code> or <code>jsx</code>
              </span>
            ),
            defaultValue: '/'
          }
        ]}
      />
    </Docs>
  )
}
