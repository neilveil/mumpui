export const s1 = `
const [input, setInput] = useState('')

..

<Input
  value={input}
  onChange={e => setInput(e.target.value)}
  placeholder='Type something..'
/>
`

export const s2 = `
const [input, setInput] = useState('')

..

<Input
  value={input}
  onValue={value => setInput(value)}
  maxLength={50}
  placeholder='Type something..'
/>
`

export const s3 = `
<Fields>
  <Field label='Text'>
    <Input type='text' placeholder='Enter mobile..' />
  </Field>

  <Field label='Mobile'>
    <Input type='tel' placeholder='Enter mobile..' />
  </Field>
</Fields>

<Fields>
  <Field label='Email'>
    <Input type='email' placeholder='Enter email..' />
  </Field>

  <Field label='URL'>
    <Input type='url' placeholder='Enter url..' />
  </Field>
</Fields>

<Fields>
  <Field label='Number'>
    <Input type='number' placeholder='Enter number..' />
  </Field>

  <Field label='Password'>
    <Input type='password' placeholder='Enter password..' />
  </Field>
</Fields>
`

export const s4 = `
const [inputType, setInputType] = useState('password')

..

<Fields>
  <Input placeholder='Enter number..' prefix={'91'} />

  <Input
    type={inputType}
    placeholder='Enter password..'
    suffix={<span className='icon'>{inputType === 'password' ? 'visibility' : 'visibility_off'}</span>}
    onSuffixClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
  />
</Fields>
`
