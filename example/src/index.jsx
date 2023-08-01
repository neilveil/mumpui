import { createRoot } from 'react-dom/client'
import { Dummy } from 'mumpui'

function App() {
  return (
    <div>
      <div>Hello there!</div>
      <Dummy label='abc' />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
