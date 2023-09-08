import { Docs } from 'components'
import { Search } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('')

  {
    /* Change in home showcase too */
  }

  return (
    <Docs name='Search'>
      <Docs.Showcase code={snippets.s1}>
        <Search value={value} onChange={value => setValue(value)} placeholder='Search..'>
          <div style={{ padding: '1rem' }}>
            <div>You can put anything in the dropdown..</div>

            {['A1 red box', 'B2 green circle', 'C3 hexagon']
              .filter(x => x.toLowerCase().includes(value.toLowerCase().trim()))
              .map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-block',
                    padding: '1rem',
                    margin: '1rem 1rem 0 0',
                    backgroundColor: 'var(--mp-c-hover)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setValue(x)}
                >
                  {x}
                </div>
              ))}

            {!!value && (
              <div onClick={() => setValue('')} style={{ display: 'inline-block', cursor: 'pointer' }}>
                Clear
              </div>
            )}
          </div>
        </Search>
      </Docs.Showcase>

      <Docs.Props
        title='Textarea'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'value', type: 'string', usage: '' },
          { name: 'onChange', type: 'function', usage: '' },
          { name: 'placeholder', type: 'string', usage: '' },
          { name: 'closeOnClick', type: 'boolean', usage: '' },
          { name: 'disabled', type: 'boolean', usage: '' }
        ]}
      />
    </Docs>
  )
}
