import React, { useEffect, useRef } from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

export default function Main({ children = '', className = '', ...props }: props) {
  className = `mumpui mp-md ${className || ''})`

  const ref: any = useRef()

  useEffect(() => {
    ref.current.innerHTML = window.marked.parse(children)

    ref.current.querySelectorAll('iframe[data-youtube]').forEach((el: any) => {
      el.setAttribute('allowfullscreen', '')
      el.setAttribute('frameBorder', '0')
      el.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      )

      const aspectRatio = el.getAttribute('data-ar') || 1920 / 1080

      el.style.width = '100%'
      el.style.aspectRatio = aspectRatio
      el.style.margin = '2rem 0'
    })

    ref.current.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((el: any) => {
      el.id = el.innerHTML.toString().replaceAll(' ', '-').toLowerCase().trim()
    })

    ref.current.querySelectorAll('ul,ol').forEach((el: any) => {
      el.classList.add('mumpui')
      el.classList.add('mp-list')
    })

    ref.current.querySelectorAll('a').forEach((el: any) => {
      el.target = '_blank'
      el.rel = 'noreferrer'
    })

    wrap(ref.current, 'table', ['mumpui', 'mp-table'])
    wrap(ref.current, 'pre', ['mumpui', 'mp-code'])

    document.querySelectorAll('.mp-code').forEach(el => {
      const codeEl = el.querySelector('code')
      if (!codeEl) return

      const lang = codeEl.getAttribute('class') || 'language-text'

      codeEl.removeAttribute('class')
      codeEl.setAttribute('lang', lang)

      const langClean = lang.split('language-')[1]

      codeEl.innerHTML = window.Prism.highlight(codeEl.innerText, window.Prism.languages[langClean], langClean)
    }, [])

    window.Prism.highlightAll()

    setTimeout(() => {
      const scrollToTitleId = new URL(window.location.href).hash
      if (!scrollToTitleId) return
      const el = document.querySelector(scrollToTitleId)
      if (scrollToTitleId && el) el.scrollIntoView()
    }, 100)
  }, [children])

  return <div {...props} className={className} ref={ref}></div>
}

Main.fetch = async (url: string) => await (await fetch(url)).text()

Main.parse = (content: string, delimeter: string = '<!-- meta-break -->') => {
  const meta = content.includes(delimeter)
    ? JSON.parse(content.split(delimeter)[0].trim().replaceAll('```', '') || '{}')
    : {}
  content = content.includes(delimeter) ? content.split(delimeter)[1].trim() : content
  return { content, meta }
}

const wrap = (root: any, tag: any, className: string | string[]) => {
  root.querySelectorAll(tag).forEach((el: any) => {
    const _el = el.cloneNode(true)
    const divEl = document.createElement('div')
    if (!Array.isArray(className)) className = [className]
    className.forEach(x => divEl.classList.add(x))
    divEl.appendChild(_el)
    el.replaceWith(divEl)
  })
}
