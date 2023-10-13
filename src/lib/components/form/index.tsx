import React, { useCallback } from 'react'

type props = React.FormHTMLAttributes<HTMLFormElement> & {
  clean?: boolean
  className?: string
  style?: React.CSSProperties
}

Main.clean = true

export default function Main({ clean = false, className = '', style = {}, onSubmit, ...props }: props) {
  const _onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      if (onSubmit) onSubmit(e)
    },
    [onSubmit]
  )

  className = 'mumpui mp-form ' + className

  return (
    <form
      {...props}
      className={className}
      style={style}
      onSubmit={_onSubmit}
      {...(clean || Main.clean ? cleanConfig : {})}
    >
      {props.children}
      <button style={{ display: 'none' }} type='submit' onClick={e => _onSubmit(e)}></button>
    </form>
  )
}

const cleanConfig = {
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
  spellCheck: false
}
