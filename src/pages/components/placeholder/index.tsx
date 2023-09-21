import { Docs } from 'components'
import { Placeholder } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Placeholder'>
      <Docs.Showcase title='Default placeholder' code={snippets.s1}>
        <Placeholder />
      </Docs.Showcase>

      <Docs.Showcase title='Custom text' code={snippets.s2}>
        <Placeholder>No data yet!</Placeholder>
      </Docs.Showcase>
    </Docs>
  )
}
