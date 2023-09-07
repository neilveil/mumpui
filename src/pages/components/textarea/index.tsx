import { Docs } from 'components'
import { Field, Fields, Textarea } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [value, setValue] = useState('Hello there,\nHow are you?\nThis is the 3rd row.')

  return (
    <Docs name='Textarea'>
      <Docs.Showcase
        title={<span>Textarea type input field</span>}
        code={`
`}
      >
        <Fields>
          <Field label='Textarea'>
            <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type here..' />
          </Field>

          <Field label='Textarea with auto height'>
            <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type here..' autoHeight />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Textarea'
        fields={[
          { name: '..', usage: 'All input element props' },
          {
            name: 'autoHeight',
            type: 'boolean',
            usage: 'To automatically increase height with content'
          }
        ]}
      />
    </Docs>
  )
}
