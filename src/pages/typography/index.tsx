import { Docs } from 'components'
import { MD } from 'lib'
import { useCallback, useEffect, useState } from 'react'

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

  return (
    <Docs name='typography'>
      <Docs.Showcase>
        <MD>{content}</MD>
      </Docs.Showcase>
    </Docs>
  )
}
