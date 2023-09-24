import data from 'data'
import { Dashboard, Field, Form, Input, Message } from 'lib'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()

  const submit = () => {
    Message.success('User added!')
  }

  return (
    <Dashboard
      icon={<span className='icon'>add</span>}
      title='Add users'
      onCreate={submit}
      sidebarImg='/mumpui/logo.png'
      sidebarItems={data.dashboardSidebarItems}
      onSidebarClick={key => navigate(key)}
    >
      <Form style={{ width: '100%', maxWidth: 400 }} onSubmit={submit}>
        <Field label='Name'>
          <Input placeholder='Enter name..' autoFocus />
        </Field>

        <Field label='Salary'>
          <Input placeholder='Enter slary..' />
        </Field>
      </Form>
    </Dashboard>
  )
}
