const selectRandom = (array: any[] = []) => array[Math.floor(Math.random() * array.length)]

const countries = [
  { key: 'india', label: 'India' },
  { key: 'germany', label: 'Germany' },
  { key: 'japan', label: 'Japan' },
  { key: 'switzerland', label: 'Switzerland' },
  { key: 'canada', label: 'Canada' },
  { key: 'denmark', label: 'Denmark' },
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'sweden', label: 'Sweden' },
  { key: 'united-states', label: 'United States' },
  { key: 'united-kingdom', label: 'United Kingdom' }
]

const names = [
  'Emily Smith',
  'Benjamin Johnson',
  'Olivia Martinez',
  'Ethan Brown',
  'Ava Davis',
  'Liam Anderson',
  'Sophia Rodriguez',
  'Noah Wilson',
  'Isabella Thompson',
  'James White',
  'Mia Garcia'
]

const users: object[] = []
const firstNames: string[] = []
const lastNames: string[] = []

let id = 1
for (const name of names) {
  const [firstName, lastName] = name.split(' ')
  firstNames.push(firstName)
  lastNames.push(lastName)
  users.push({
    id: id++,
    firstName,
    lastName,
    username: name.toLowerCase().replace(' ', ''),
    name,
    salary: '$' + name.length * 7 + 'K',
    country: selectRandom(countries).label
  })
}

const list = [
  'Lorem ipsum',
  'dolor sit amet',
  ['consectetur adipiscing', 'sed do eiusmod tempor', ['ut labore et dolore', 'magna aliqua']],
  'Ut enim ',
  'ad minim veniam'
]

const table: any = {
  cols: [
    { name: '#', align: 'center', width: '1rem', render: (value: any, x: any, [row]: any) => row + 1 },
    { key: 'id', name: 'ID', align: 'center', width: '1rem' },
    { name: 'Name', align: 'left', width: '100%', render: (value: any, x: any) => x.firstName + ' ' + x.lastName },
    {
      key: 'salary',
      name: 'Salary',
      align: 'right',
      render: (value: any) => <span style={{ color: 'var(--mp-c-green)' }}>${value}</span>
    }
  ],
  data: [
    { id: 24, firstName: 'Saige', lastName: 'Fuentes', salary: 1000 },
    { id: 25, firstName: 'Bowen', lastName: 'Higgins', salary: 2000 },
    { id: 31, firstName: 'Leighton', lastName: 'Kramer', salary: 3000 },
    { id: 46, firstName: 'Kylan', lastName: 'Gentry', salary: 4000 },
    { id: 57, firstName: 'Amelie', lastName: 'Griffith', salary: 2000 }
  ]
}

const chain = ['Decors', 'Lamps', 'Table Lamp']

const tabs = [
  { key: 'apple', label: 'Apple' },
  { key: 'banana', label: 'Banana' },
  { key: 'orange', label: 'Orange' },
  { key: 'grape', label: 'Grape' },
  { key: 'strawberry', label: 'Strawberry' },
  { key: 'kiwi', label: 'Kiwi' },
  { key: 'mango', label: 'Mango' },
  { key: 'pear', label: 'Pear' },
  { key: 'cherry', label: 'Cherry' },
  { key: 'pineapple', label: 'Pineapple' },
  { key: 'plum', label: 'Plum' },
  { key: 'blueberry', label: 'Blueberry' }
]

const menu = [
  {
    key: 'home',
    label: 'Home',
    icon: <span className='icon'>home</span>,
    next: []
  },
  {
    key: 'products',
    label: 'Products',
    icon: <span className='icon'>widgets</span>,
    next: []
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <span className='icon'>settings</span>,
    next: [
      {
        key: 'profile',
        label: 'Profile',
        icon: <span className='icon'>person</span>,
        next: []
      },
      {
        key: 'blogs',
        label: 'Blogs',
        icon: <span className='icon'>rss_feed</span>,
        next: [
          {
            key: 'blog-1',
            label: 'Blog 1'
          },
          {
            key: 'blog-2',
            label: 'Blog 2'
          }
        ]
      }
    ]
  }
]

const dashboardSidebarItems = [
  { name: 'Home', icon: <span className='icon'>home</span>, path: '/dashboard' },
  { name: 'Users', icon: <span className='icon'>people</span>, path: '/dashboard/users', access: 'users' },
  { name: 'Access', icon: <span className='icon'>task_alt</span>, path: '/dashboard/access', access: 'access' },
  {
    name: 'Settings',
    icon: <span className='icon'>settings</span>,
    access: ['profile', 'blogs'],
    next: [
      { name: 'Profile', icon: <span className='icon'>person</span>, path: '/dashboard/profile', access: 'profile' },
      {
        name: 'Blogs',
        icon: <span className='icon'>rss_feed</span>,
        access: 'blogs',
        next: [
          { name: 'Blog 1', path: '/dashboard/blog/1' },
          { name: 'Blog 2', path: '/dashboard/blog/2' },
          { name: 'Blog 3', path: '/dashboard/blog/3' }
        ]
      }
    ]
  }
]

export default { countries, firstNames, lastNames, users, list, table, chain, tabs, menu, dashboardSidebarItems }
