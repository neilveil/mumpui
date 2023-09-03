import { Docs } from 'components'

export default function Main() {
  return (
    <Docs type='Component' name='Typography'>
      <Docs.Showcase
        info={<span></span>}
        code={`
`}
      >
        <div className='mp-container'>
          <h1>Typography by MumpUI</h1>
          <p>
            <b>MumpUI</b> comes with typographical styling which help in rendering beautiful content on your website.
          </p>
          <h2>Inline styling</h2>
          <p>
            This paragraph is an example of how inline styling in <b>MumpUI</b> works. Basical there are 5 major inline
            styling tags.
          </p>
          <ol>
            <li>
              <b>bold</b>
            </li>
            <li>
              <i>italics</i>
            </li>
            <li>
              <u>underline</u>
            </li>
            <li>
              <mark>mark</mark>
            </li>
            <li>
              <code>code</code>
            </li>
          </ol>

          <p>
            The above list is also an example of ordered list <code>{'<ol />'}</code>.
          </p>

          <img src='https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' />
          <p className='caption'>Example image</p>

          <h2>Table example</h2>

          <div className='table-wrapper'>
            <table>
              <thead>
                <tr>
                  <th align='left'>Company</th>
                  <th align='center'>Contact</th>
                  <th align='center'>Contact</th>
                  <th align='right'>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align='left'>Alfreds Futterkiste</td>
                  <td align='center'>Maria Anders</td>
                  <td align='center'>Maria Anders</td>
                  <td align='right'>Germany</td>
                </tr>
                <tr>
                  <td align='left'>Centro comercial Moctezuma</td>
                  <td align='center'>Francisco Chang</td>
                  <td align='center'>Francisco Chang</td>
                  <td align='right'>Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Docs.Showcase>

      <Docs.Props title='Button' fields={[{ name: '..', usage: 'All input element props' }]} />
    </Docs>
  )
}
