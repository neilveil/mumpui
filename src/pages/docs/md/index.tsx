import { Docs } from 'components'
import { Code, MD } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  const content = `
  # Title
  Hello there!
  `

  return (
    <Docs name='markdown'>
      <Docs.Info>
        <a href='https://marked.js.org'>MarkedJS</a> is required for markdown rendering. Import the script as shown
        below
      </Docs.Info>

      <Code snippet={snippets.s1} lang='html' />

      <Docs.Showcase title='Render markdown as HTML' code={snippets.s2}>
        <MD content={content} />
      </Docs.Showcase>

      <Docs.Props
        title='Markdown'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'content', type: 'string' }
        ]}
      />

      <Docs.Showcase title='Fetch markdown file' code={snippets.s3} onlyCode />

      <Docs.Showcase title='Add JSON meta data in markdown content' code={snippets.s4} lang='text' onlyCode />

      <Docs.Showcase title='Parse content & meta data from a markdown content' code={snippets.s5} onlyCode />
    </Docs>
  )
}
