import home from './home'
import setup from './setup'
import typography from './typography'
import markdown from './markdown'

import colorPicker from './docs/colorPicker'
import docs_button from './docs/button'
import docs_chain from './docs/chain'
import docs_checkbox from './docs/checkbox'
import docs_code from './docs/code'
import docs_confirm from './docs/confirm'
import docs_dashboard from './docs/dashboard'
import docs_datetime from './docs/datetime'
import docs_divider from './docs/divider'
import docs_field from './docs/field'
import docs_file from './docs/file'
import docs_form from './docs/form'
import docs_icons from './docs/icons'
import docs_input from './docs/input'
import docs_list from './docs/list'
import docs_loader from './docs/loader'
import docs_md from './docs/md'
import docs_menu from './docs/menu'
import docs_message from './docs/message'
import docs_modal from './docs/modal'
import docs_multiSelect from './docs/multiSelect'
import docs_note from './docs/note'
import docs_pagination from './docs/pagination'
import docs_placeholder from './docs/placeholder'
import docs_progress from './docs/progress'
import docs_radio from './docs/radio'
import docs_range from './docs/range'
import docs_search from './docs/search'
import docs_select from './docs/select'
import docs_table from './docs/table'
import docs_tabs from './docs/tabs'
import docs_textarea from './docs/textarea'
import docs_theme from './docs/theme'
import docs_tooltip from './docs/tooltip'

import dashboard from './dashboard'
import dashboard_access from './dashboard/access'
import dashboard_blog from './dashboard/blog'
import dashboard_empty from './dashboard/empty'
import dashboard_loader from './dashboard/loader'
import dashboard_maxWidth from './dashboard/maxWidth'
import dashboard_noSidebar from './dashboard/noSidebar'
import dashboard_profile from './dashboard/profile'
import dashboard_users from './dashboard/users'
import dashboard_users_create from './dashboard/users/create'
import dashboard_users_update from './dashboard/users/update'

import debug from './debug'

interface route {
  path: string
  component: React.ComponentClass | React.FunctionComponent
}

const routes: route[] = [
  { path: '/', component: home },
  { path: '/setup', component: setup },
  { path: '/typography', component: typography },
  { path: '/markdown', component: markdown },

  // Components
  { path: '/docs/button', component: docs_button },
  { path: '/docs/chain', component: docs_chain },
  { path: '/docs/checkbox', component: docs_checkbox },
  { path: '/docs/code', component: docs_code },
  { path: '/docs/colorPicker', component: colorPicker },
  { path: '/docs/confirm', component: docs_confirm },
  { path: '/docs/dashboard', component: docs_dashboard },
  { path: '/docs/datetime', component: docs_datetime },
  { path: '/docs/divider', component: docs_divider },
  { path: '/docs/field', component: docs_field },
  { path: '/docs/file', component: docs_file },
  { path: '/docs/form', component: docs_form },
  { path: '/docs/icons', component: docs_icons },
  { path: '/docs/input', component: docs_input },
  { path: '/docs/list', component: docs_list },
  { path: '/docs/loader', component: docs_loader },
  { path: '/docs/md', component: docs_md },
  { path: '/docs/menu', component: docs_menu },
  { path: '/docs/message', component: docs_message },
  { path: '/docs/modal', component: docs_modal },
  { path: '/docs/multiSelect', component: docs_multiSelect },
  { path: '/docs/note', component: docs_note },
  { path: '/docs/pagination', component: docs_pagination },
  { path: '/docs/placeholder', component: docs_placeholder },
  { path: '/docs/progress', component: docs_progress },
  { path: '/docs/radio', component: docs_radio },
  { path: '/docs/range', component: docs_range },
  { path: '/docs/search', component: docs_search },
  { path: '/docs/select', component: docs_select },
  { path: '/docs/table', component: docs_table },
  { path: '/docs/tabs', component: docs_tabs },
  { path: '/docs/textarea', component: docs_textarea },
  { path: '/docs/theme', component: docs_theme },
  { path: '/docs/tooltip', component: docs_tooltip },

  // Dashboard
  { path: '/dashboard', component: dashboard },
  { path: '/dashboard/access', component: dashboard_access },
  { path: '/dashboard/blog/*', component: dashboard_blog },
  { path: '/dashboard/profile', component: dashboard_profile },
  { path: '/dashboard/users', component: dashboard_users },
  { path: '/dashboard/users/create', component: dashboard_users_create },
  { path: '/dashboard/users/udpate', component: dashboard_users_update },
  { path: '/dashboard/maxWidth', component: dashboard_maxWidth },
  { path: '/dashboard/noSidebar', component: dashboard_noSidebar },
  { path: '/dashboard/loader', component: dashboard_loader },
  { path: '/dashboard/empty', component: dashboard_empty },

  // Debug
  { path: 'debug', component: debug }
]

export default routes
