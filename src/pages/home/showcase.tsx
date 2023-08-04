import { Button, Divider, Field, Form, Input } from 'lib'

export default {
  input: {
    name: 'Input',
    docs: '/component/input',
    tags: [],
    component: () => <Input placeholder='Type something..' style={{ width: '100%' }} />
  },
  form: {
    name: 'Form',
    docs: '/component/form',
    tags: [],
    component: () => (
      <Form style={{ width: '100%' }}>
        <Field label='Name'>
          <Input placeholder='Enter name..' />
        </Field>

        <Button>Submit</Button>
      </Form>
    )
  },
  divider: {
    name: 'Divider',
    docs: '/component/Button',
    tags: [],
    component: () => (
      <div style={{ width: '100%' }}>
        <Divider align='left'>More</Divider>
        <Divider align='center'>More</Divider>
        <Divider align='right'>More</Divider>
      </div>
    )
  },
  button: {
    name: 'Button',
    docs: '/component/Button',
    tags: [],
    component: () => <Button>Click</Button>
  }
}
