export const main = `
const [input, setInput] = useState('')

..

<Input
  value={input}
  onChange={e => setInput(e.target.value)}
  placeholder='Type something..'
/>

// or

<Input
  value={input}
  onValue={value => setInput(value)} // Added prop for simplicity
  placeholder='Type something..'
/>
`
