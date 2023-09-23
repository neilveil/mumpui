export const s1 = `
const onSubmit = () => {
  Message.success('Done')
}

..

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

  <Fields style={{ justifyContent: 'flex-end' }}>
    <Button onClick={() => Message.info('Cancel!')}>Cancel</Button>
    <Button primary onClick={onSubmit}>
      Submit
    </Button>
  </Fields>
</Form>
`
