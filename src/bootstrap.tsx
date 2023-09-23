import MumpUI from 'lib'

export default function Main() {
  let preferredTheme = 'light'
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) preferredTheme = 'dark'

  const savedTheme = window.localStorage.getItem('MP_THEME') || preferredTheme

  if (['light', 'dark'].includes(savedTheme)) document.body.setAttribute('data-theme', savedTheme)

  return (
    <>
      <MumpUI />
    </>
  )
}
