import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom'
import pages from './pages'
import Bootstrap from './bootstrap'

import './lib/styles/index.scss'
import './styles/index.scss'

function Redirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(pages[0].path)
  }, [navigate])

  return <></>
}

pages.push({ path: '*', component: Redirect })

class Main extends React.Component {
  render() {
    var router = pages.map(({ path, component }, i) => <Route key={i} path={path} Component={component} />)

    return (
      <>
        <Bootstrap />
        <RouterProvider router={createBrowserRouter(createRoutesFromElements(router))} />
      </>
    )
  }
}

const main = () => createRoot(document.getElementById('root') as HTMLElement).render(<Main />)

if (import.meta.env.DEV) main()
else window.addEventListener('SW_READY', main)
