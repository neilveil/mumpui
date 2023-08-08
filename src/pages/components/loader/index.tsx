import { Docs } from 'components'
import { Loader, Note } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Loader'>
      <Docs.Showcase
        info={<span></span>}
        code={`
`}
      >
        <Loader />
        <Loader>Connecting..</Loader>
      </Docs.Showcase>

      <Note type='red'>
        Please note that the above shown component is a loader component itself, it's not like something is about to
        load there.
      </Note>
    </Docs>
  )
}
