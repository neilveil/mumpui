import React from 'react'
import s from './styles.module.scss'
import { theme } from 'lib/helpers/utils'

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

    this.wrap(el, 'table', 'mp-table')
    this.wrap(el, 'pre', 'mp-code')

    setTimeout(() => {
      const scrollToTitleId = new URL(window.location.href).hash
      if (scrollToTitleId) document.querySelector('#' + scrollToTitleId)?.scrollIntoView()
    }, 100)
  }

  wrap = (root: any, tag: any, className: string) => {
    root.querySelectorAll(tag).forEach((el: any) => {
      const _el = el.cloneNode(true)
      const divEl = document.createElement('div')
      divEl.classList.add(className)
      divEl.appendChild(_el)
      el.replaceWith(divEl)
    })
  }

  render = () => {
    return (
      <div className={s.main} onClick={() => theme.toggle()}>
        <div id='content' className='mp-container'></div>
      </div>
    )
  }
}
