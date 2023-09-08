import { Docs } from 'components'
import { Field, Fields, Textarea } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('Hello there,\nHow are you?\nThis is the 3rd row.')

  return (
    <Docs name='Textarea'>
      <Docs.Showcase code={snippets.s1}>
        <Fields className='col-in-mob'>
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
          { name: '..', usage: 'All textarea element props' },
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
