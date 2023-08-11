import { Dashboard, Field, Form, Input, Message } from 'lib'
import { useNavigate } from 'react-router-dom'
import { Icon, sidebarIcon, sidebarItems } from '../../shared'

export default function Main() {
  const navigate = useNavigate()

  const submit = () => {
    Message.success('User added!')
  }

  return (
    <div>
      <Dashboard
        icon={<Icon icon='add' />}
        title='Add users'
        onCreate={submit}
        sidebarIcon={sidebarIcon}
        sidebarItems={sidebarItems}
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
    </div>
  )
}
