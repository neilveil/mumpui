import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom'
import pages from './pages'
import Bootstrap from './bootstrap'

import './styles/index.scss'

function Redirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(pages[0].path, { replace: true })
  }, [navigate])

  return <></>
}

pages.push({ path: '*', component: Redirect })

class Main extends React.Component {
  render() {
    const router = pages.map(({ path, component }, i) => (
      <Route key={i} path={path} Component={() => <ScrollToTop Component={component} />} />
    ))

    return (
      <>
        <Bootstrap />
        <RouterProvider router={createBrowserRouter(createRoutesFromElements(router), { basename: '/mumpui' })} />
      </>
    )
  }
}

function ScrollToTop({ Component }: { Component?: any }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Component />
}

createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
