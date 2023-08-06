import { Docs } from 'components'
import { Button, Field, Fields, Form, Input } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [input, setInput] = useState('')
  const [inputType, setInputType] = useState('password')
  const [color, setColor] = useState('#000000')

  return (
    <Docs type='Component' name='Form'>
      <Docs.Showcase
        info={
          <span>
            Form components using <code>Form</code>, <code>Fields</code> & <code>Field</code>
          </span>
        }
        code={`
<Form onSubmit={() => console.log('Submit!')}>
  <Field label='Name'>
    <Input placeholder='Enter name..' />
  </Field>

  <Fields>
    <Field label='Mobile'>
      <Input type='tel' placeholder='Enter mobile..' />
    </Field>

    <Field label='Password'>
      <Input type='password' placeholder='Enter password..' />
    </Field>
  </Fields>

  <Fields>
    <Field label='Length'>
      <Input type='number' placeholder='Length..' />
    </Field>
    <Field label='Width'>
      <Input type='number' placeholder='Width..' />
    </Field>
    <Field label='Height'>
      <Input type='number' placeholder='Height..' />
    </Field>
  </Fields>
</Form>
`}
      >
        <Form onSubmit={() => console.log('Submit!')}>
          <Field label='Name'>
            <Input placeholder='Enter name..' />
          </Field>

          <Fields>
            <Field label='Mobile'>
              <Input type='tel' placeholder='Enter mobile..' />
            </Field>

            <Field label='Password'>
              <Input type='password' placeholder='Enter password..' />
            </Field>
          </Fields>

          <Fields>
            <Field label='Length'>
              <Input type='number' placeholder='Length..' />
            </Field>
            <Field label='Width'>
              <Input type='number' placeholder='Width..' />
            </Field>
            <Field label='Height'>
              <Input type='number' placeholder='Height..' />
            </Field>
          </Fields>

          <Fields>
            <Button>Cancel</Button>
            <Button type='primary'>Submit</Button>
          </Fields>
        </Form>
      </Docs.Showcase>

      <p>
        <code>Fields</code> component is used to equally divide the row in multiple input fields with proper gap in
        between.
      </p>

      <Docs.Props title='Form props' fields={[{ name: '..', usage: 'All div element props' }]} />

      <Docs.Props title='Fields props' fields={[{ name: '..', usage: 'All div element props' }]} />

      <Docs.Props
        title='Field props'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'label', type: 'string' }
        ]}
      />
    </Docs>
  )
}
