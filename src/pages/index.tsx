import home from './home'
import setup from './setup'
import typography from './typography'

import colorPicker from './docs/colorPicker'
import component_button from './docs/button'
import component_chain from './docs/chain'
import component_checkbox from './docs/checkbox'
import component_code from './docs/code'
import component_confirm from './docs/confirm'
import component_dashboard from './docs/dashboard'
import component_datetime from './docs/datetime'
import component_divider from './docs/divider'
import component_field from './docs/field'
import component_file from './docs/file'
import component_form from './docs/form'
import component_input from './docs/input'
import component_list from './docs/list'
import component_loader from './docs/loader'
import component_menu from './docs/menu'
import component_message from './docs/message'
import component_modal from './docs/modal'
import component_multiSelect from './docs/multiSelect'
import component_note from './docs/note'
import component_pagination from './docs/pagination'
import component_placeholder from './docs/placeholder'
import component_radio from './docs/radio'
import component_range from './docs/range'
import component_search from './docs/search'
import component_select from './docs/select'
import component_table from './docs/table'
import component_tabs from './docs/tabs'
import component_textarea from './docs/textarea'
import component_theme from './docs/theme'
import component_tooltip from './docs/tooltip'

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

interface route {
  path: string
  component: React.ComponentClass | React.FunctionComponent
}

const routes: route[] = [
  { path: '/', component: home },
  { path: '/setup', component: setup },
  { path: '/typography', component: typography },

  // Components
  { path: '/docs/button', component: component_button },
  { path: '/docs/chain', component: component_chain },
  { path: '/docs/checkbox', component: component_checkbox },
  { path: '/docs/code', component: component_code },
  { path: '/docs/colorPicker', component: colorPicker },
  { path: '/docs/confirm', component: component_confirm },
  { path: '/docs/dashboard', component: component_dashboard },
  { path: '/docs/datetime', component: component_datetime },
  { path: '/docs/divider', component: component_divider },
  { path: '/docs/field', component: component_field },
  { path: '/docs/file', component: component_file },
  { path: '/docs/form', component: component_form },
  { path: '/docs/input', component: component_input },
  { path: '/docs/list', component: component_list },
  { path: '/docs/loader', component: component_loader },
  { path: '/docs/menu', component: component_menu },
  { path: '/docs/message', component: component_message },
  { path: '/docs/modal', component: component_modal },
  { path: '/docs/multiSelect', component: component_multiSelect },
  { path: '/docs/note', component: component_note },
  { path: '/docs/pagination', component: component_pagination },
  { path: '/docs/placeholder', component: component_placeholder },
  { path: '/docs/radio', component: component_radio },
  { path: '/docs/range', component: component_range },
  { path: '/docs/search', component: component_search },
  { path: '/docs/select', component: component_select },
  { path: '/docs/table', component: component_table },
  { path: '/docs/tabs', component: component_tabs },
  { path: '/docs/textarea', component: component_textarea },
  { path: '/docs/theme', component: component_theme },
  { path: '/docs/tooltip', component: component_tooltip },

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
  { path: '/dashboard/empty', component: dashboard_empty }
]

export default routes
