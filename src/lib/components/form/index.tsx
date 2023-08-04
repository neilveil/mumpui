import React, { useCallback } from 'react'

type props = React.FormHTMLAttributes<HTMLFormElement> & {
  children?: any
  onSubmit?: (e: React.FormEvent) => void
}

export default function Main({ children, onSubmit, ...props }: props) {
  const _onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(e)
  }, [])

  const className = 'mp-form ' + (props.className || '')
  const style = Object.assign({}, props.style)

  return (
    <form className={className} style={style} onSubmit={_onSubmit} {...props}>
      {children}
      <button style={{ display: 'none' }} type='submit' onClick={e => _onSubmit(e)}></button>
    </form>
  )
}

// autoComplete: 'off',
// autoCorrect: 'off',
// autoCapitalize: 'off',
// spellCheck: 'false'
