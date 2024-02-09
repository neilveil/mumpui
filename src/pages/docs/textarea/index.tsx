import { Docs } from 'components'
import { Field, Fields, Textarea } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('Hello there,\nHow are you?\nThis is the 3rd row.')

  return (
    <Docs name='textarea'>
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

      <Docs.Showcase code={snippets.s2}>
        <Fields className='col-in-mob'>
          <Field label='Textarea'>
            <Textarea
              value={value}
              onValue={value => setValue(value)}
              maxLength={50}
              placeholder='Type here..'
              autoHeight
            />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Textarea'
        type='component'
        fields={[
          { name: '..', usage: 'All textarea element props' },
          {
            name: 'autoHeight',
            type: 'boolean',
            usage: 'To automatically increase height with content'
          },
          { name: 'maxLength', type: 'number', usage: 'Maximum characters allowed' },
          { name: 'parentClassName', type: 'string', usage: 'To add class on wrapper div' },
          { name: 'parentStyle', type: 'object', usage: 'To add styling on wrapper div' }
        ]}
      />
    </Docs>
  )
}
