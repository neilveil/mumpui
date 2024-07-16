import data from 'data'
import { Dashboard, Field, Form, Input, Message } from 'lib'

export default function Main() {
  const submit = () => {
    Message.success('User added!')
  }

  return (
    <Dashboard
      icon={<span className='icon'>add</span>}
      title='Add users'
      onCreate={submit}
      sidebar={data.DashboardSidebar({})}
    >
      <Form style={{ width: '100%', maxWidth: 400 }} onSubmit={submit}>
        <Field label='Name'>
          <Input placeholder='Enter name..' />
        </Field>

        <Field label='Salary'>
          <Input placeholder='Enter slary..' />
        </Field>
      </Form>
    </Dashboard>
  )
}
