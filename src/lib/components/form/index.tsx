import React, { useCallback } from 'react'

type props = React.FormHTMLAttributes<HTMLFormElement> & {
  noHelp?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function Main({ noHelp = false, className = '', style = {}, onSubmit, ...props }: props) {
  const _onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      if (onSubmit) onSubmit(e)
    },
    [onSubmit]
  )

  className = 'mumpui mp-form ' + className

  return (
    <form className={className} style={style} onSubmit={_onSubmit} {...(noHelp ? noHelpConfig : {})} {...props}>
      {props.children}
      <button style={{ display: 'none' }} type='submit' onClick={e => _onSubmit(e)}></button>
    </form>
  )
}

const noHelpConfig = {
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
  spellCheck: false
}
