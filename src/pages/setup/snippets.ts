export const init = `
import MumpUI from 'mumpui'

function App() {
  return (<div>
    {/* Initialize MumpUI */}
    <MumpUI />

    ..

    <BrowserRouter>
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
import 'mumpui/dist/styles/index.css'
`

export const body = `
<!doctype html>
<html>
  <head>
    ..
  </head>
  <body class="mumpui">
    ..
  </body>
</html>
`
