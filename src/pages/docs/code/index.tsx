import { Docs } from 'components'
import { Code } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='code'>
      <Docs.Info>
        <a href='https://prismjs.com'>PrismJS</a> is required for code highlighting. Select the required languages from{' '}
        <a
          href='https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>{' '}
        and import the script as shown below
      </Docs.Info>

      <Code snippet={snippets.s1} lang='html' />

      <Docs.Info>
        Import code styling from <b>MumpUI</b>
      </Docs.Info>

      <Code snippet={snippets.s2} lang='css' />

      <Docs.Info>Usage example</Docs.Info>

      <Code snippet={snippets.s3} lang='jsx' />

      <br />
      <b>Note</b>
      <ul style={{ fontSize: '.8rem' }}>
        <li>
          Do not import the CSS provided by <b>PrismJS</b> as styling is already setup in <b>MumpUI</b>.
        </li>
        <li>
          Only import <b>PrismJS</b> languages that are actually used in your application as every language imported
          increases the build size.
        </li>
      </ul>

      <Docs.Props
        title='Code'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'snippet', type: 'string', usage: 'Code to be rendered' },
          {
            name: 'lang',
            type: 'string',
            usage: (
              <>
                Check all available languages{' '}
                <a href='https://prismjs.com/index.html#supported-languages' target='_blank' rel='noreferrer'>
                  here
                </a>
              </>
            )
          }
        ]}
      />
    </Docs>
  )
}
