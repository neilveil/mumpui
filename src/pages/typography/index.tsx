import React from 'react'
import s from './styles.module.scss'

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
        <div id='content' className='mp-content'></div>
      </div>
    )
  }
}
