import React from 'react'
import s from './styles.module.scss'
import { Link } from 'react-router-dom'

declare global {
  interface Window {
    marked: any
    Prism: any
  }
}

window.marked.use({
  headerIds: false,
  headerPrefix: false,
  mangle: false
})

export default class Main extends React.Component {
  componentDidMount = async () => {
    const response = await fetch('/blog.md')
    const content = await response.text()

    const el = document.querySelector('#content')

    if (!el) return

    if (window.marked) el.innerHTML = window.marked.parse(content)
    if (window.Prism) window.Prism?.highlightAll()

    el.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(el => {
      el.id = el.innerHTML.toString().replaceAll(' ', '-').toLowerCase().trim()
    })

    setTimeout(() => {
      const scrollToTitleId = window.location.href.split('#').pop()
      if (scrollToTitleId) document.querySelector('#' + scrollToTitleId)?.scrollIntoView()
    }, 100)
  }

  render = () => {
    return (
      <div className={s.main}>
        <div className={s.header}>
          <img src='/logo.png' />

          <div className={s.info}>Welcome to</div>
          <div className={s.name}>MumpUI</div>
          <div className={s.info}>
            A lightweight flexible
            <br />
            Design System for Developers
          </div>

          <div className={s.info}>
            Inspired by{' '}
            <a href='https://www.joahquin.com' target='_blank'>
              <span>Upasana</span>
            </a>
          </div>

          <div className={s.install}>npm i mumpui</div>

          <div className={s.links}>
            {['Typography', 'Components', 'Helpers', 'Stories'].map(x => (
              <Link key={x} to={'/' + x.toLowerCase()}>
                <div>{x}</div>
              </Link>
            ))}
          </div>
        </div>

        <div id='content' className='content'></div>
      </div>
    )
  }
}
