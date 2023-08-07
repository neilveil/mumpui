import { Docs } from 'components'
import { Code, Field, Fields, Textarea } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [value, setValue] = useState('Hello there,\nHow are you?\nThis is the 3rd row.')

  return (
    <Docs type='Component' name='Textarea'>
      <Docs.Showcase
        info={<span>Textarea type input field</span>}
        code={`
`}
      >
        <Fields>
          <Field label='Textarea'>
            <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type here..' />
          </Field>

          <Field label='Textarea with 2 auto rows'>
            <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type here..' autoRows={2} />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Textarea'
        fields={[
          { name: '..', usage: 'All input element props' },
          {
            name: 'autoRows',
            type: 'number',
            usage: 'Default rows in textarea after which automatically increase the size'
          },
          { name: 'status', type: 'string', usage: "'success' | 'error' | 'warning' | 'info'" }
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
