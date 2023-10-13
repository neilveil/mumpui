import { Docs } from 'components'
import * as snippets from './snippets'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Docs name='dashboard'>
      <Docs.Showcase code={snippets.s1}>
        <LinkRenderer title='Basic dashboard' path='/dashboard' />
      </Docs.Showcase>

      <Docs.Info title>Data management examples</Docs.Info>

      <Docs.Showcase code={snippets.s2}>
        <LinkRenderer title='Data layout' path='/dashboard/users' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s3}>
        <LinkRenderer title='Form layout - Create' path='/dashboard/users/create' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s4}>
        <LinkRenderer title='Form layout - update/delete' path='/dashboard/users/udpate' />
      </Docs.Showcase>

      <Docs.Info title>Customizations</Docs.Info>

      <Docs.Showcase code={snippets.s5}>
        <LinkRenderer title='Dashboard with user acceess' path='/dashboard/access' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s6}>
        <LinkRenderer title='No sidebar' path='/dashboard/noSidebar' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s7}>
        <LinkRenderer title='Full width' path='/dashboard/maxWidth' />
      </Docs.Showcase>

      <Docs.Info>
        <b>MumpUI</b> dashboard has default max-width of <code>1366px</code> which can be customized.
      </Docs.Info>

      <Docs.Info title>Loader & placeholder</Docs.Info>

      <Docs.Showcase code={snippets.s8}>
        <LinkRenderer title='Data loading' path='/dashboard/loader' />
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s9}>
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
          { name: 'sidebarPrefix', type: 'any', usage: 'Content to be rendered at the top in the sidebar' },
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
        Usage similar to <Link to='/docs/pagination'>Pagination</Link> component.
      </Docs.Info>

      <Docs.Showcase title='Dashboard component global configuration' code={snippets.globalConfig} onlyCode />
      <Docs.Setup />
    </Docs>
  )
}

const LinkRenderer = ({ title = '', path = '' }) => (
  <Link to={path} className='c-blue' style={{ display: 'flex', alignItems: 'center' }} target='_blank'>
    {title}&nbsp;&nbsp;<span className='icon'>east</span>
  </Link>
)
