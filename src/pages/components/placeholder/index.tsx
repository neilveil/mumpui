import { Docs } from 'components'
import { Divider, Placeholder } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Placeholder'>
      <Docs.Showcase
        title={<span></span>}
        code={`
`}
      >
        <Placeholder />

        <Divider />

        <Placeholder>No data yet!</Placeholder>
      </Docs.Showcase>
    </Docs>
  )
}
