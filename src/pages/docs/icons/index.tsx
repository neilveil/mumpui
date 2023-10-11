import { Docs } from 'components'
import { Code } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='icons'>
      <Docs.Info>
        <b>MumpUI</b> comes with{' '}
        <a href='https://fonts.google.com/icons?icon.set=Material+Icons' target='_blank' rel='noreferrer'>
          Google Icons
        </a>{' '}
        but it is not imported with core stylesheet.
      </Docs.Info>

      <Docs.Info>
        Import icons stylesheet from <b>MumpUI</b>
      </Docs.Info>

      <Code snippet={snippets.s1} lang='css' />

      <Docs.Info>Usage example</Docs.Info>

      <Code snippet={snippets.s2} lang='html' />

      <Docs.Info>
        <a
          href='https://fonts.google.com/icons?icon.set=Material+Icons'
          target='_blank'
          rel='noreferrer'
          className='c-indigo'
        >
          All Icons →
        </a>
      </Docs.Info>
    </Docs>
  )
}
