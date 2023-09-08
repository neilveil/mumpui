import { Docs } from 'components'
import { Divider } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Tooltip'>
      <Docs.Showcase
        title={<span></span>}
        code={`
`}
      >
        <Divider align='left'>More</Divider>
        <Divider align='center'>More</Divider>
        <Divider align='right'>More</Divider>
      </Docs.Showcase>

      <Docs.Props
        title='Tooltip'
        type='props'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'align', type: 'string', usage: 'left | right | center' }
        ]}
      />
    </Docs>
  )
}
