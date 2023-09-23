export const init = `
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
// Import base theme
import 'mumpui/styles/index.scss'
`
