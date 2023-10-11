import { MD } from 'lib'
import { useCallback, useEffect, useState } from 'react'

declare global {
  interface Window {
    marked: any
    Prism: any
  }
}

window.marked.Renderer.prototype.paragraph = (text: string) =>
  text.startsWith('<img') ? text + '\n' : '<p>' + text + '</p>'

export default function Main() {
  const [content, setContent] = useState('')

  const init = useCallback(async () => {
    const md = await MD.fetch('/typography.md')

    const { meta, content } = MD.parse(md)

    console.log(meta)

    setContent(content)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return <MD>{content}</MD>
}
