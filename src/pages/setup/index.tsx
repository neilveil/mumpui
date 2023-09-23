import { Code } from 'lib'
import * as snippets from './snippets'
import { Footer } from 'components'

export default function Main() {
  return (
    <>
      <div className='content-page'>
        <h1>MumpUI setup</h1>

        <h2>Step I - Installation</h2>

        <Code snippet='npm i mumpui' lang='bash' />

        <h2>Step II - Initialize</h2>

        <p>MumpUI need to be initialized only once at the top.</p>

        <Code snippet={snippets.init} lang='jsx' />

        <h2>Setp III - Setup theme</h2>

        <Code snippet={snippets.theme} lang='jsx' />
      </div>

      <Footer />
    </>
  )
}
