import { Docs } from 'components'
import { MD } from 'lib'
import { useCallback, useEffect, useState } from 'react'

export default function Main() {
  const [content, setContent] = useState('')

  const init = useCallback(async () => {
    const md = await MD.fetch('/mumpui/markdown.md')
    const { content } = MD.parse(md)
    setContent(content)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return (
    <Docs name='markdownDemo'>
      <MD className='mp-content' content={content} />
    </Docs>
  )
}
