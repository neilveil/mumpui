import React, { useCallback } from 'react'

type props = React.FormHTMLAttributes<HTMLFormElement>

export default function Main({ className, onSubmit, ...props }: props) {
  const _onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      if (onSubmit) onSubmit(e)
    },
    [onSubmit]
  )

  className = 'mumpui mp-form ' + (className || '')

  return (
    <form className={className} onSubmit={_onSubmit} {...props}>
      {props.children}
      <button style={{ display: 'none' }} type='submit' onClick={e => _onSubmit(e)}></button>
    </form>
  )
}

// autoComplete: 'off',
// autoCorrect: 'off',
// autoCapitalize: 'off',
// spellCheck: 'false'
