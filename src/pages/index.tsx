import home from './home'
import typography from './typography'
import dashboard from './dashboard'

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
  { path: '/dashboard-7', component: dashboard }
]

export default routes
