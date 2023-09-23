import { Code } from 'lib'
import * as snippets from './snippets'
import { Footer } from 'components'

export default function Main() {
  return (
    <>
      <div className='content-page'>
        <h1>MumpUI setup</h1>

        <h2>Step I - Install</h2>

        <Code snippet='npm i mumpui' lang='bash' />

        <h2>Step II - Initialize MumpUI</h2>

        <p>MumpUI need to be initialized only once at the top.</p>

        <Code snippet={snippets.init} lang='jsx' />

        <h2>Setp III - Import theme</h2>

        <Code snippet={snippets.theme} lang='jsx' />

        <br />

        <p>🎉 Voila, good to go! 🚀</p>
      </div>

      <Footer />
    </>
  )
}
