import { Docs } from 'components'
import { Placeholder } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='placeholder'>
      <Docs.Showcase title='Default placeholder' code={snippets.s1}>
        <Placeholder />
      </Docs.Showcase>

      <Docs.Showcase title='Custom text' code={snippets.s2}>
        <Placeholder>No data yet!</Placeholder>
      </Docs.Showcase>

      <Docs.Showcase title='Empty' code={snippets.s3}>
        <Placeholder empty />
      </Docs.Showcase>

      <Docs.Props
        title='Placeholder'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'empty', type: 'boolean', defaultValue: 'false' }
        ]}
      />
    </Docs>
  )
}
