import s from './styles.module.scss'

export default function Main() {
  return (
    <div className={s.footer}>
      Developed by{' '}
      <a href='https://github.com/neilveil' target='_blank' rel='noreferrer'>
        NeilVeil
      </a>
    </div>
  )
}
