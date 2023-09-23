import { Docs } from 'components'
import * as snippets from './snippets'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Docs name='Dashboard Layout'>
      <Docs.Showcase code={snippets.s1}>
        <LinkRenderer title='Basic dashboard' path='/dashboard' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s2}>
        <LinkRenderer title='Data layout' path='/dashboard/users' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s3}>
        <LinkRenderer title='Form layout - Create' path='/dashboard/users/create' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s4}>
        <LinkRenderer title='Form layout - update/delete' path='/dashboard/users/udpate' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s5}>
        <LinkRenderer title='Dashboard with user acceess' path='/dashboard/access' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s6}>
        <LinkRenderer title='Max width restricted' path='/dashboard/maxWidth' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s7}>
        <LinkRenderer title='Data loading' path='/dashboard/loader' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s8}>
        <LinkRenderer title='No data' path='/dashboard/empty' />
      </Docs.Showcase>

      <Docs.Props
        title='Sidebar'
        type='component'
        fields={[
          { name: 'sidebarImg', type: 'boolean', usage: 'Sidebar image' },
          { name: 'sidebarItems', type: 'array', usage: 'Sidebar items list, check example above' },
          { name: 'onSidebarClick', type: 'function', usage: 'Sidebar item click callback' },
          { name: 'sidebarAccess', type: 'array', usage: 'Array of strings of sidebar keys to be visible' },
          { name: 'sidebarClassName', type: 'string' },
          { name: 'sidebarStyle', type: 'object' }
        ]}
      />

      <Docs.Props
        title='Header'
        type='component'
        fields={[
          { name: 'header', type: 'jsx', usage: 'Header element' },
          { name: 'title', type: 'string' },
          { name: 'icon', type: 'jsx' },
          { name: 'info', type: 'string', usage: 'Extra info after title' },
          { name: 'onAdd', type: 'function', usage: 'To show add button in header' },
          { name: 'headerSuffix', type: 'jsx' },
          { name: 'headerClassName', type: 'string' },
          { name: 'headerStyle', type: 'object' }
        ]}
      />

      <Docs.Props
        title='Body'
        type='component'
        fields={[
          { name: 'loading', type: 'boolean' },
          { name: 'empty', type: 'boolean' },
          { name: 'search', type: 'string', usage: 'Search field value' },
          { name: 'onSearch', type: 'function', usage: 'To show search field' },
          { name: 'filter', type: 'jsx', usage: 'Filter element' },
          { name: 'bodyClassName', type: 'string' },
          { name: 'bodyStyle', type: 'object' }
        ]}
      />

      <Docs.Props
        title='Footer'
        type='component'
        fields={[
          { name: 'footer', type: 'jsx', usage: 'Footer element' },
          { name: 'onDelete', type: 'function', usage: 'To show delete button' },
          { name: 'onCreate', type: 'function', usage: 'To show create button' },
          { name: 'onUpdate', type: 'function', usage: 'To show update button' },
          { name: 'onCancel', type: 'function', usage: 'To show cancel button' },
          { name: 'footerClassName', type: 'string' },
          { name: 'footerStyle', type: 'object' }
        ]}
      />

      <Docs.Props
        title='Pagination'
        type='component'
        fields={[
          { name: 'paginationPageSize', type: 'number' },
          { name: 'paginationTotalItems', type: 'number' },
          { name: 'paginationOffset', type: 'number' },
          { name: 'paginationOnChange', type: 'function' }
        ]}
      />

      <Docs.Info>
        Usage similar to <Link to='/component/pagination'>Pagination</Link> component.
      </Docs.Info>
    </Docs>
  )
}

const LinkRenderer = ({ title = '', path = '' }) => (
  <Link to={path} style={{ color: 'var(--c-link)', display: 'flex', alignItems: 'center' }} target='_blank'>
    {title}&nbsp;&nbsp;<span className='icon'>east</span>
  </Link>
)
