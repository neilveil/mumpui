import { Docs } from 'components'
import { Code } from 'lib'
import { useState } from 'react'

export default function Main() {
  return (
    <Docs type='Component' name='Code'>
      <p style={{ color: 'var(--c-font-dark)', padding: '2rem 1rem' }}>
        Add code snippets like below with{' '}
        <a className='link' href='https://prismjs.com' target='_blank'>
          PrismJS
        </a>
        . Create your custom theme{' '}
        <a className='link' href='https://prismjs.com/download.html#themes=prism-tomorrow' target='_blank'>
          here
        </a>{' '}
        & import the <code>JS</code> & <code>CSS</code> provided at the bottom of the page in the{' '}
        <code>index.html</code> file.
        <br />
        <br />
        <b>Note</b>: Only import languages that are actually used in your application as every language imported
        increases the size of the application.
      </p>

      <Code snippet={snippet} lang='jsx' />

      <Docs.Props
        title='Code'
        fields={[
          { name: '..', usage: 'All div element props' },
          { required: true, name: 'snippet', type: 'string' },
          {
            required: true,
            name: 'lang',
            type: 'string',
            usage: (
              <>
                Check all available languages{' '}
                <a className='link' href='https://prismjs.com/index.html#supported-languages' target='_blank'>
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

const snippet = `
const snippet = \`
function fun () {
  return (
    <div>Hello there!</div>
  )
}\`

<Code snippet={snippet} lang='jsx' />
`
