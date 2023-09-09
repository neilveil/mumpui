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
  'Mia Garcia',
  'William Miller',
  'Charlotte Martinez',
  'Alexander Taylor',
  'Amelia Harris',
  'Michael Jones',
  'Harper Robinson',
  'Elijah Lewis',
  'Abigail Hall',
  'Daniel Wright',
  'Elizabeth Lee',
  'Matthew Martin',
  'Sofia Walker',
  'David Hill',
  'Scarlett Green',
  'Christopher Baker',
  'Grace Adams',
  'Joseph Clark',
  'Lily King',
  'Jackson Turner',
  'Avery Scott',
  'Andrew Young',
  'Madison Phillips',
  'Samuel Martinez',
  'Ella Carter',
  'Joshua Hall',
  'Victoria Mitchell',
  'Gabriel King',
  'Chloe Johnson',
  'Anthony Davis',
  'Emily Williams',
  'Christopher Nelson',
  'Zoey Turner',
  'Ryan Jackson',
  'Natalie Martinez',
  'Isaac Thompson',
  'Addison Roberts',
  'Samuel Cooper',
  'Aubrey Murphy',
  'David Reed',
  'Savannah Anderson',
  'Logan Allen',
  'Aria Perez',
  'John Rivera',
  'Penelope Wright',
  'Benjamin Foster',
  'Victoria Ward',
  'Joseph Howard',
  'Brooklyn Moore',
  'Caleb Brooks',
  'Grace Parker',
  'Luke Ross',
  'Lillian Murphy',
  'Jonathan Adams',
  'Ellie Martinez',
  'Oliver Cooper',
  'Audrey Foster',
  'Daniel Richardson',
  'Skylar Reed',
  'Matthew Simmons',
  'Ariana Butler',
  'Henry Stewart',
  'Hazel Turner',
  'Jackson Murphy',
  'Aubrey Price',
  'Wyatt Phillips',
  'Scarlett Evans',
  'Owen Foster',
  'Zoey Patterson',
  'Samuel Williams',
  'Luna Cook',
  'David Hayes',
  'Stella Bennett',
  'Christopher Simmons',
  'Claire Morris',
  'Christian Rivera',
  'Maya Collins',
  'Joseph Scott',
  'Aurora Ward',
  'Ryan Price',
  'Bella Parker',
  'Elijah Bell',
  'Amelia Peterson',
  'Liam Richardson',
  'Nora Hayes',
  'Caleb Gray',
  'Sophia Allen',
  'Ethan Russell',
  'Evelyn Cooper',
  'William Griffin'
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

export default { countries, firstNames, lastNames, users, list }
