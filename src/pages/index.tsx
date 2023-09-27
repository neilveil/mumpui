import home from './home'
import setup from './setup'

import colorPicker from './components/colorPicker'
import component_button from './components/button'
import component_chain from './components/chain'
import component_checkbox from './components/checkbox'
import component_code from './components/code'
import component_confirm from './components/confirm'
import component_dashboard from './components/dashboard'
import component_datetime from './components/datetime'
import component_divider from './components/divider'
import component_field from './components/field'
import component_file from './components/file'
import component_form from './components/form'
import component_input from './components/input'
import component_list from './components/list'
import component_loader from './components/loader'
import component_menu from './components/menu'
import component_message from './components/message'
import component_modal from './components/modal'
import component_multiSelect from './components/multiSelect'
import component_note from './components/note'
import component_pagination from './components/pagination'
import component_placeholder from './components/placeholder'
import component_radio from './components/radio'
import component_range from './components/range'
import component_search from './components/search'
import component_select from './components/select'
import component_table from './components/table'
import component_tabs from './components/tabs'
import component_textarea from './components/textarea'
import component_theme from './components/theme'
import component_tooltip from './components/tooltip'

import dashboard from './dashboard'
import dashboard_access from './dashboard/access'
import dashboard_blog from './dashboard/blog'
import dashboard_empty from './dashboard/empty'
import dashboard_loader from './dashboard/loader'
import dashboard_maxWidth from './dashboard/maxWidth'
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

  // Components
  { path: '/component/button', component: component_button },
  { path: '/component/chain', component: component_chain },
  { path: '/component/checkbox', component: component_checkbox },
  { path: '/component/code', component: component_code },
  { path: '/component/colorPicker', component: colorPicker },
  { path: '/component/confirm', component: component_confirm },
  { path: '/component/dashboard', component: component_dashboard },
  { path: '/component/datetime', component: component_datetime },
  { path: '/component/divider', component: component_divider },
  { path: '/component/field', component: component_field },
  { path: '/component/file', component: component_file },
  { path: '/component/form', component: component_form },
  { path: '/component/input', component: component_input },
  { path: '/component/list', component: component_list },
  { path: '/component/loader', component: component_loader },
  { path: '/component/menu', component: component_menu },
  { path: '/component/message', component: component_message },
  { path: '/component/modal', component: component_modal },
  { path: '/component/multiSelect', component: component_multiSelect },
  { path: '/component/note', component: component_note },
  { path: '/component/pagination', component: component_pagination },
  { path: '/component/placeholder', component: component_placeholder },
  { path: '/component/radio', component: component_radio },
  { path: '/component/range', component: component_range },
  { path: '/component/search', component: component_search },
  { path: '/component/select', component: component_select },
  { path: '/component/table', component: component_table },
  { path: '/component/tabs', component: component_tabs },
  { path: '/component/textarea', component: component_textarea },
  { path: '/component/theme', component: component_theme },
  { path: '/component/tooltip', component: component_tooltip },

  // Dashboard
  { path: '/dashboard/', component: dashboard },
  { path: '/dashboard/access', component: dashboard_access },
  { path: '/dashboard/blog/*', component: dashboard_blog },
  { path: '/dashboard/profile', component: dashboard_profile },
  { path: '/dashboard/users', component: dashboard_users },
  { path: '/dashboard/users/create', component: dashboard_users_create },
  { path: '/dashboard/users/udpate', component: dashboard_users_update },
  { path: '/dashboard/maxWidth', component: dashboard_maxWidth },
  { path: '/dashboard/loader', component: dashboard_loader },
  { path: '/dashboard/empty', component: dashboard_empty }
]

export default routes
