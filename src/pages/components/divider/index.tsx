import { Docs } from 'components'
import { Divider } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Tooltip'>
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
