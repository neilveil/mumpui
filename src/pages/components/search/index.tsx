import { Docs } from 'components'
import { Search } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('')

  return (
    <Docs name='Search'>
      <Docs.Showcase
        title={<span>Customizable search</span>}
        code={`
const [value, setValue] = useState('')

..

<Search value={value} onChange={e => setValue(e.target.value)} placeholder='Search..'>
  <div style={{ padding: '1rem' }}>
    <div>You can put anything in the dropdown..</div>

    {['A1', 'B2', 'C3'].map((x, i) => (
      <div
        key={i}
        style={{ display: 'inline-block', padding: '1rem', margin: '1rem 1rem 0 0', backgroundColor: '#eee' }}
        onClick={() => setValue(x)}
      >
        {x}
      </div>
    ))}
  </div>
</Search>
`}
      >
        <Search value={value} onChange={e => setValue(e.target.value)} placeholder='Search..'>
          <div style={{ padding: '1rem' }}>
            <div>You can put anything in the dropdown..</div>

            {['A1', 'B2', 'C3'].map((x, i) => (
              <div
                key={i}
                style={{ display: 'inline-block', padding: '1rem', margin: '1rem 1rem 0 0', backgroundColor: '#eee' }}
                onClick={() => setValue(x)}
              >
                {x}
              </div>
            ))}
          </div>
        </Search>
      </Docs.Showcase>

      <Docs.Props
        title='Textarea'
        fields={[
          { name: '..', usage: 'All input element props' },
          { name: 'children', type: 'jsx', usage: 'Dropdown content' }
        ]}
      />
    </Docs>
  )
}

// const snippet = `
// const snippet = \`
// function fun () {
//   return (
//     <div>Hello there!</div>
//   )
// }\`

// <Code snippet={snippet} lang='jsx' />
// `
