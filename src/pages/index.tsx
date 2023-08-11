import home from './home'
import stories from './stories'
import story from './story'
import setup from './setup'

import typography from './typography'

import dashboard from './dashboard'
import dashboard_access from './dashboard/access'
import dashboard_blog from './dashboard/blog'
import dashboard_profile from './dashboard/profile'
import dashboard_users from './dashboard/users'
import dashboard_users_create from './dashboard/users/create'
import dashboard_users_update from './dashboard/users/update'

import component_input from './components/input'
import component_color from './components/color'
import component_datetime from './components/datetime'
import component_form from './components/form'
import component_field from './components/field'
import component_dropdown from './components/dropdown'
import component_code from './components/code'
import component_textarea from './components/textarea'
import component_search from './components/search'
import component_button from './components/button'
import component_checkbox from './components/checkbox'
import component_radio from './components/radio'
import component_range from './components/range'
import component_file from './components/file'
import component_typography from './components/typography'
import component_message from './components/message'
import component_confirm from './components/confirm'
import component_note from './components/note'
import component_menu from './components/menu'
import component_tabs from './components/tabs'
import component_pagination from './components/pagination'
import component_chain from './components/chain'
import component_table from './components/table'
import component_tooltip from './components/tooltip'
import component_embed from './components/embed'
import component_divider from './components/divider'
import component_loader from './components/loader'
import component_md from './components/md'
import component_placeholder from './components/placeholder'
import component_modal from './components/modal'
import component_list from './components/list'

interface route {
  path: string
  component: React.ComponentClass | React.FunctionComponent
}

const routes: route[] = [
  { path: '/', component: home },
  { path: '/typography', component: typography },
  { path: '/components', component: home },
  { path: '/helpers', component: home },
  { path: '/setup', component: setup },
  { path: '/stories', component: stories },
  { path: '/story/*', component: story },

  { path: '/dashboard/', component: dashboard },
  { path: '/dashboard/access', component: dashboard_access },
  { path: '/dashboard/blog/*', component: dashboard_blog },
  { path: '/dashboard/profile', component: dashboard_profile },
  { path: '/dashboard/users', component: dashboard_users },
  { path: '/dashboard/users/create', component: dashboard_users_create },
  { path: '/dashboard/users/udpate', component: dashboard_users_update },

  // Components
  { path: '/component/input', component: component_input },
  { path: '/component/form', component: component_form },
  { path: '/component/field', component: component_field },
  { path: '/component/dropdown', component: component_dropdown },
  { path: '/component/code', component: component_code },
  { path: '/component/textarea', component: component_textarea },
  { path: '/component/search', component: component_search },
  { path: '/component/button', component: component_button },
  { path: '/component/checkbox', component: component_checkbox },
  { path: '/component/radio', component: component_radio },
  { path: '/component/range', component: component_range },
  { path: '/component/file', component: component_file },
  { path: '/component/typography', component: component_typography },
  { path: '/component/message', component: component_message },
  { path: '/component/confirm', component: component_confirm },
  { path: '/component/note', component: component_note },
  { path: '/component/menu', component: component_menu },
  { path: '/component/tabs', component: component_tabs },
  { path: '/component/pagination', component: component_pagination },
  { path: '/component/chain', component: component_chain },
  { path: '/component/table', component: component_table },
  { path: '/component/tooltip', component: component_tooltip },
  { path: '/component/embed', component: component_embed },
  { path: '/component/divider', component: component_divider },
  { path: '/component/loader', component: component_loader },
  { path: '/component/md', component: component_md },
  { path: '/component/placeholder', component: component_placeholder },
  { path: '/component/modal', component: component_modal },
  { path: '/component/color', component: component_color },
  { path: '/component/datetime', component: component_datetime },
  { path: '/component/list', component: component_list }
]

export default routes
