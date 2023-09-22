import { Docs } from 'components'
import { List } from 'lib'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  return (
    <Docs name='List'>
      <Docs.Showcase title='Unordered list' code={snippets.s1}>
        <List items={data.list} />
      </Docs.Showcase>

      <Docs.Showcase title='Ordered list' code={snippets.s2}>
        <List type='ol' items={data.list} />
      </Docs.Showcase>

      <Docs.Props
        title='List'
        type='component'
        fields={[
          {
            name: '..',
            usage: (
              <span>
                All <code>ul</code> & <code>ol</code> element props
              </span>
            )
          },
          {
            name: 'items',
            type: 'array',
            usage: (
              <span>
                Array of <code>string</code> & <code>string[]</code>
              </span>
            )
          },
          {
            name: 'type',
            type: 'string',
            usage: (
              <span>
                <code>ul</code> | <code>ol</code>
              </span>
            ),
            defaultValue: 'ul'
          }
        ]}
      />
    </Docs>
  )
}
