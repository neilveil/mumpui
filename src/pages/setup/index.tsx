import { Code } from 'lib'
import * as snippets from './snippets'
import { Docs } from 'components'

export default function Main() {
  return (
    <Docs name='setup'>
      <h2>Step I - Install</h2>

      <Code snippet='npm i mumpui' lang='bash' />

      <h2>Step II - Initialize MumpUI</h2>

      <Docs.Info>MumpUI need to be initialized only once at the top.</Docs.Info>

      <Code snippet={snippets.init} lang='jsx' />

      <h2>Setp III - Import theme</h2>

      <Code snippet={snippets.theme} lang='jsx' />

      <br />

      <p>🎉 Voila, good to go! 🚀</p>
    </Docs>
  )
}
