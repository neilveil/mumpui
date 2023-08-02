import React from 'react'

interface props {
  label?: string
}

export default function Main(props: props) {
  return <button>{props.label}</button>
}
