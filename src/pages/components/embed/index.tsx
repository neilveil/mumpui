import { Docs } from 'components'
import { Embed } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Embed'>
      <Docs.Showcase
        title={<span>Embed youtube</span>}
        code={`
`}
      >
        <Embed platform='youtube' source='aircAruvnKk' aspectRatio={16 / 9} />
      </Docs.Showcase>

      <Docs.Props
        title='Embed'
        fields={[
          { name: 'platform', type: 'string', usage: 'youtube' },
          { name: 'source', type: 'string', usage: 'Content ID' },
          { name: 'aspectRatio', type: 'number' },
          { name: 'className', type: 'string' },
          { name: 'style', type: 'object' }
        ]}
      />
    </Docs>
  )
}
