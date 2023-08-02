import React, { useCallback } from 'react'

type props = React.FormHTMLAttributes<HTMLFormElement> & {
  children?: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
}

export default function Main(props: props) {
  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (props.onSubmit) props.onSubmit(e)
  }, [])

  return (
    <form className='mp-form ' onSubmit={onSubmit}>
      {props.children}
      <button style={{ display: 'none' }} type='submit' onClick={e => onSubmit(e)}></button>
    </form>
  )
}
