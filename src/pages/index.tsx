import home from './home'
import typography from './typography'
import dashboard from './dashboard'

import component_input from './components/input'
import component_form from './components/form'

interface route {
  path: string
  component: React.ComponentClass | React.FunctionComponent
}

const routes: route[] = [
  { path: '/', component: home },
  { path: '/typography', component: typography },
  { path: '/components', component: home },
  { path: '/helpers', component: home },
  { path: '/stories', component: home },
  { path: '/dashboard', component: dashboard },
  { path: '/dashboard-1', component: dashboard },
  { path: '/dashboard-2', component: dashboard },
  { path: '/dashboard-3', component: dashboard },
  { path: '/dashboard-4', component: dashboard },
  { path: '/dashboard-5', component: dashboard },
  { path: '/dashboard-6', component: dashboard },
  { path: '/dashboard-7', component: dashboard },

  // Components
  { path: '/component/input', component: component_input },
  { path: '/component/form', component: component_form }
]

export default routes
