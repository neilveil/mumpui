import { Docs } from 'components'
import { Loader, Note } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='loader'>
      <Note type='red' style={{ fontSize: '.8rem' }}>
        Kindly take note that the displayed component itself is a loader, rather than indicating that something is in
        the process of loading.
      </Note>

      <Docs.Showcase code={snippets.s1}>
        <Loader />
      </Docs.Showcase>

      <Docs.Showcase title='Custom text' code={snippets.s2}>
        <Loader>Connecting..</Loader>
      </Docs.Showcase>

      <Docs.Showcase title='Empty' code={snippets.s3}>
        <Loader empty />
      </Docs.Showcase>

      <Docs.Props
        title='Loader'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'empty', type: 'boolean', defaultValue: 'false' }
        ]}
      />
    </Docs>
  )
}
