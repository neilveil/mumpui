import React, { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Prism: any
  }
}

type props = React.HTMLAttributes<HTMLDivElement> & {
  snippet?: string
  lang?: string
}

export default function Main({ snippet = '', lang = 'text', className, ...props }: props) {
  const ref: any = useRef()

  useEffect(() => {
    if (ref.current && snippet && lang && window.Prism) {
      setTimeout(
        () => (ref.current.innerHTML = window.Prism.highlight(snippet.trim(), window.Prism.languages[lang], lang))
      )
    }
  }, [lang, snippet])

  className = 'mumpui mp-code ' + (className || '')

  return (
    <div {...props} className={className}>
      <pre>
        <code ref={ref}></code>
      </pre>
    </div>
  )
}
