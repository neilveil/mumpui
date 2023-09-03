export const Icon = ({ icon = '' }) => <span className='icon'>{icon}</span>

export const sidebarIcon = '/logo.png'

export const sidebarItems = [
  { name: 'Home', icon: <Icon icon='home' />, path: '/dashboard' },
  { name: 'Users', icon: <Icon icon='people' />, path: '/dashboard/users', _access: 'users' },
  { name: 'Access', icon: <Icon icon='task_alt' />, path: '/dashboard/access', _access: 'access' },
  {
    name: 'Settings',
    icon: <Icon icon='settings' />,
    _access: ['profile', 'blogs'],
    next: [
      { name: 'Profile', icon: <Icon icon='person' />, path: '/dashboard/profile', _access: 'profile' },
      {
        name: 'Blogs',
        icon: <Icon icon='rss_feed' />,
        _access: 'blogs',
        next: [
          { name: 'Blog 1', icon: <Icon icon='rss_feed' />, path: '/dashboard/blog/1' },
          { name: 'Blog 1', icon: <Icon icon='rss_feed' />, path: '/dashboard/blog/2' },
          { name: 'Blog 1', icon: <Icon icon='rss_feed' />, path: '/dashboard/blog/3' }
        ]
      }
    ]
  }
]
