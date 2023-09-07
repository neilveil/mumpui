import { Docs } from 'components'
import { Divider, Placeholder } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Placeholder'>
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
