import data from 'data'
import * as helpers from 'helpers'

export const s1 = `
<Dashboard
  icon={<span className='icon'>home</span>}
  title='Home'
  sidebarImg='/mumpui/logo.png'
  sidebarItems={sidebatItems}
  onSidebarClick={path => navigate(path)}
>
  <h3>Welcome to MumpUI Dashboard.</h3>

  <Link to='/'>
    <u style={{ marginTop: '2rem', fontSize: '.9rem' }}>Go back to home</u>
  </Link>
</Dashboard>

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s2 = `
<Dashboard
  icon={<span className='icon'>person</span>}
  title='Users'
  info={users.length + ' users'}
  onAdd={() => navigate('/dashboard/users/create')}
  search={search}
  onSearch={search => setSearch(search)}
  filter={
    <div style={{ display: 'flex', fontSize: '.8rem', gap: '1rem' }}>
      <div style={{ cursor: 'pointer' }} onClick={() => Message.info('F1 clicked!')}>
        F1
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => Message.warn('F2 clicked!')}>
        F2
      </div>
    </div>
  }
  paginationPageSize={10}
  paginationTotalItems={users.length}
  paginationOffset={offset}
  paginationOnChange={offset => setOffset(offset)}
  sidebarImg='/mumpui/logo.png'
  sidebarItems={sidebarItems}
  onSidebarClick={key => navigate(key)}
>
  <Table
    ..
  />
</Dashboard>

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s3 = `
const submit = () => {
  Message.success('User added!')
}

..

<Dashboard
  icon={<span className='icon'>add</span>}
  title='Add users'
  onCreate={submit}
  sidebarImg='/mumpui/logo.png'
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

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s4 = `
const submit = () => {
  Message.success('User updated!')
}

..

<Dashboard
  icon={<span className='icon'>edit</span>}
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
  sidebarImg='/mumpui/logo.png'
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

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s5 = `
<Dashboard
  icon={<span className='icon'>task_alt</span>}
  title='Access'
  sidebarImg='/mumpui/logo.png'
  sidebarItems={sidebarItems}
  onSidebarClick={key => navigate(key)}
  // Only the 'users' & 'profile' key will be visible in the sidebar
  sidebarAccess={['users', 'profile']}
>
  <div></div>
</Dashboard>

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s6 = `
<Dashboard
  icon={<span className='icon'>home</span>}
  title='Home'
  style={{ maxWidth: 1000 }}
>
  <h3>Welcome to MumpUI Dashboard.</h3>
</Dashboard>
`

export const s7 = `
<Dashboard
  icon={<span className='icon'>home</span>}
  title='Home'
  sidebarImg='/mumpui/logo.png'
  sidebarItems={sidebarItems}
  onSidebarClick={path => navigate(path)}
  style={{ maxWidth: '100%' }}
>
  <h3>Max width restricted</h3>
</Dashboard>

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s8 = `
<Dashboard
  icon={<span className='icon'>home</span>}
  title='Home'
  sidebarImg='/mumpui/logo.png'
  sidebarItems={sidebatItems}
  onSidebarClick={path => navigate(path)}
  loading
>
  <h3>Welcome to MumpUI Dashboard.</h3>
</Dashboard>

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const s9 = `
<Dashboard
  icon={<span className='icon'>home</span>}
  title='Home'
  sidebarImg='/mumpui/logo.png'
  sidebarItems={sidebatItems}
  onSidebarClick={path => navigate(path)}
  empty
>
  <h3>Welcome to MumpUI Dashboard.</h3>
</Dashboard>

..

const sidebarItems = ${helpers.iconCleaner(data.dashboardSidebarItems)}
`

export const buttons = `
import "mumpui/styles/dashboard-buttons.scss"
`

export const buttonsCSS = `
.mp-dashboard-button-cancel {}
.mp-dashboard-button-create {}
.mp-dashboard-button-update {}
.mp-dashboard-button-delete {}
.mp-dashboard-button-add {}
`
