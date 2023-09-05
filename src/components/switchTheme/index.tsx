import { useState } from 'react'

export default function Main({ style = {}, className = '' }: { style?: React.CSSProperties; className?: string }) {
  const [_, rerender] = useState(true)

  const storedTheme = window.localStorage.getItem('MP_THEME')

  let theme: string = ''
  if (storedTheme && ['light', 'dark'].includes(storedTheme)) theme = storedTheme
  else if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches) theme = 'dark'
  else 'light'

  const altTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <div
      onClick={() => {
        window.localStorage.setItem('MP_THEME', altTheme)
        document.body.setAttribute('data-theme', altTheme)
        rerender(!_)
      }}
      style={{
        cursor: 'pointer',
        color: 'var(--mp-c-font-light)',
        display: 'inline-block',
        userSelect: 'none',
        ...style
      }}
      className={'icon' + className}
    >
      {altTheme}_mode
    </div>
  )
}
