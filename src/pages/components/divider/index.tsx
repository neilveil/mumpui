import { Docs } from 'components'
import { Divider } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='divider'>
      <Docs.Showcase title={<span></span>} code={snippets.s1}>
        <Divider align='left'>More</Divider>
        <Divider>More</Divider>
        <Divider align='right'>More</Divider>
      </Docs.Showcase>

      <Docs.Props
        title='Divider'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          {
            name: 'align',
            type: 'string',
            usage: (
              <span>
                <code>left</code>
                <code>right</code>
                <code>center</code>
              </span>
            )
          }
        ]}
      />
    </Docs>
  )
}
