import { Docs } from 'components'
import * as snippets from './snippets'
import { MD } from 'lib'

export default function Main() {
  const content = '# Title\n\nHello there!'

  return (
    <Docs name='markdown'>
      <Docs.Showcase title='Render markdown as HTML' code={snippets.s1}>
        <MD>{content}</MD>
      </Docs.Showcase>

      <Docs.Props title='Markdown' type='component' fields={[{ name: '..', usage: 'All div element props' }]} />

      <Docs.Showcase title='Fetch markdown file' code={snippets.s2} onlyCode />

      <Docs.Showcase title='Add JSON meta data in markdown content' code={snippets.s3} lang='text' onlyCode />

      <Docs.Showcase title='Parse content & meta data from a markdown content' code={snippets.s4} onlyCode />
    </Docs>
  )
}
