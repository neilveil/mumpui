import { Docs } from 'components'

export default function Main() {
  return (
    <Docs name='typography'>
      <Docs.Showcase>
        <div className='mumpui'>
          <h1>MumpUI / Typography</h1>
          <p>
            MumpUI comes prepacked with typography styling, making it ideal for rendering content, blogs, stories and
            more. Typography elements are of two types:
          </p>
          <ul>
            <li>
              Inline elements
              <ul>
                <li>
                  Bold <code>{'<b></b>'}</code>
                </li>
                <li>
                  Italics <code>{'<i></i>'}</code>
                </li>
                <li>
                  Underline <code>{'<u></u>'}</code>
                </li>
                <li>
                  Highlight <code>{'<mark></mark>'}</code>
                </li>
                <li>
                  Strike <code>{'<del></del>'}</code>
                </li>
                <li>
                  Code <code>{'<code></code>'}</code>
                </li>
                <li>
                  Link <code>{'<a></a>'}</code>
                </li>
              </ul>
            </li>
            <li>
              Block elements
              <ul>
                <li>
                  Headers <code>{'h1'}</code> <code>{'h2'}</code> <code>{'h3'}</code> <code>{'h4'}</code>
                </li>
                <li>
                  List
                  <ul>
                    <li>
                      Ordered list <code>{'<ol></ol>'}</code>
                    </li>
                    <li>
                      Unordered list <code>{'<ul></ul>'}</code>
                    </li>
                  </ul>
                </li>
                <li>
                  Table <code>{'<table></table>'}</code>
                </li>
                <li>
                  Divider <code>{'<hr />'}</code>
                </li>
                <li>
                  Blockquote <code>{'<blockquote></blockquote>'}</code>
                </li>
              </ul>
            </li>
          </ul>
          <h2>Inline elements example</h2>
          <p>
            Risus sed vulputate odio ut enim blandit volutpat. <em>Congue eu consequat</em> ac felis donec et. Arcu
            felis{' '}
            <a href='https://neilveil.github.io/mumpui' target='_blank' rel='noreferrer'>
              MumpUI
            </a>{' '}
            ut tristique et egestas.
            <mark>Senectus et netus et malesuada fames. Amet risus nullam eget felis.</mark> Est ullamcorper eget nulla
            facilisi <del>etiam</del> dignissim. Sed felis eget velit aliquet. Morbi tincidunt ornare massa eget.
          </p>
          <p>
            Orci eu lobortis elementum nibh. Euismod lacinia at quis risus. <b>Condimentum</b> lacinia quis vel eros
            donec.
          </p>
          <p>
            Pulvinar pellentesque habitant morbi tristique. Sapien <i>pellentesque habitant</i> morbi tristique. Mi eget
            <code>mauris</code> pharetra et <u>ultrices neque</u> ornare aenean euismod.
          </p>
          <h2>Block elements example</h2>

          <h3>Headers</h3>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>

          <hr />

          <h3>List</h3>

          <h4>Ordered list</h4>
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>

          <h4>Unordered list</h4>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>

          <h3>Table</h3>

          <table>
            <thead>
              <tr>
                <th>Syntax</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Header</td>
                <td>Title</td>
              </tr>
              <tr>
                <td>Paragraph</td>
                <td>Text</td>
              </tr>
            </tbody>
          </table>

          <h3>Divider</h3>

          <hr />

          <h3>Blockquote</h3>

          <blockquote>
            <p>This is an example of blockquote.</p>
          </blockquote>
        </div>
      </Docs.Showcase>
    </Docs>
  )
}
