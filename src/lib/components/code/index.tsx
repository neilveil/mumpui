import React, { useEffect, useRef } from 'react'

type props = React.HTMLAttributes<HTMLDivElement> & {
  snippet: string
  lang: string
}

export default function Main({ snippet, lang, className, ...props }: props) {
  const ref: any = useRef()

  useEffect(() => {
    if (ref.current && snippet && lang)
      ref.current.innerHTML = window.Prism.highlight(snippet.trim(), window.Prism.languages[lang], lang)
  }, [])

  className = 'mp-code ' + (className || '')

  return (
    <div className={className} {...props}>
      <pre>
        <code ref={ref}></code>
      </pre>
    </div>
  )
}
