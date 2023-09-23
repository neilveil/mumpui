export const init = `
import MumpUI from 'mumpui'

function App() {
  return (<div>
    {/* Initialize MumpUI */}
    <MumpUI />

    ..

    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" />
        ..
      </Routes>
    </BrowserRouter>
  </div>)
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
`

export const theme = `
import 'mumpui/styles/index.scss'
`
