import { Docs } from 'components'
import { Button, Checkbox, Field, Fields, Form, Input, Message } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  const onSubmit = () => {
    Message.success('Done')
  }

  return (
    <Docs name='form'>
      <Docs.Showcase
        title={
          <span>
            Form components using <code>Form</code>, <code>Fields</code> & <code>Field</code>
          </span>
        }
        code={snippets.s1}
      >
        <Form onSubmit={onSubmit}>
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

            <Button primary onClick={onSubmit}>
              Submit
            </Button>
          </Fields>
        </Form>
      </Docs.Showcase>

      <Docs.Props
        title='Form'
        type='component'
        fields={[
          { name: '..', usage: 'All form element props' },
          {
            name: 'clean',
            type: 'boolean',
            usage: 'Turn off auto complete, auto correct, auto capitalize & spell check',
            defaultValue: 'false'
          }
        ]}
      />
    </Docs>
  )
}
