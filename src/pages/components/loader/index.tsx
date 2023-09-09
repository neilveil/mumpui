import { Docs } from 'components'
import { Loader, Note } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Loader'>
      <Docs.Showcase
        title={<span></span>}
        code={`
`}
      >
        <Loader />
        <Loader>Connecting..</Loader>
      </Docs.Showcase>

      <Note type='red'>
        Kindly take note that the displayed component itself is a loader, rather than indicating that something is in
        the process of loading.
      </Note>
    </Docs>
  )
}
