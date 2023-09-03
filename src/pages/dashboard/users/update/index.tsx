import { Confirm, Dashboard, Field, Form, Input, Message } from 'lib'
import { useNavigate } from 'react-router-dom'
import { Icon, sidebarIcon, sidebarItems } from '../../shared'

export default function Main() {
  const navigate = useNavigate()

  const submit = () => {
    Message.success('User update!')
  }

  return (
    <div>
      <Dashboard
        icon={<Icon icon='edit' />}
        title='Update user'
        onUpdate={submit}
        onDelete={() => {
          Confirm.init({
            title: 'Are you sure you want to delete this user?',
            description: 'Once deleted, user details can not be restored!',
            onConfirm: () => {
              Message.success('User deleted!')
              window.history.back()
            },
            confirmText: 'Delete'
          })
        }}
        sidebarIcon={sidebarIcon}
        sidebarItems={sidebarItems}
        onSidebarClick={key => navigate(key)}
      >
        <Form style={{ width: '100%', maxWidth: 400 }} onSubmit={submit}>
          <Field label='Name'>
            <Input defaultValue='Jon' placeholder='Enter name..' autoFocus />
          </Field>

          <Field label='Salary'>
            <Input defaultValue='Smith' placeholder='Enter slary..' />
          </Field>
        </Form>
      </Dashboard>
    </div>
  )
}
