import { Button, Checkbox, Divider, Field, Fields, Input, Message } from 'lib'
import { Form } from 'react-router-dom'

export default function Main() {
  return (
    <div style={{ margin: 'auto', maxWidth: 600, padding: '1rem' }}>
      <h2>Form example</h2>
      <Form>
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

        <Divider>Dimensions</Divider>

        <Fields autoCol>
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

        <Field label='Status'>
          <Checkbox label='Active' />
        </Field>

        <Fields style={{ justifyContent: 'flex-end' }}>
          <Button onClick={() => Message.info('Cancel!')}>Cancel</Button>

          <Button primary>Submit</Button>
        </Fields>
      </Form>
    </div>
  )
}
