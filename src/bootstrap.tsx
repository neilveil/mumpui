import MumpUI from 'lib'

export default function Main() {
  const savedTheme = window.localStorage.getItem('MP_THEME') || 'light'
  if (['light', 'dark'].includes(savedTheme)) document.body.setAttribute('data-theme', savedTheme)

  return (
    <>
      <MumpUI />
    </>
  )
}
