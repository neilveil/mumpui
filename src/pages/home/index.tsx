import React from 'react'
import s from './styles.module.scss'
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
  componentDidMount = async () => {}

  render = () => {
    return (
      <div className={s.main}>
        <div className={s.header}>
          <img src='/logo.png' />

          <div className={s.info}>Welcome to</div>
          <div className={s.name}>MumpUI</div>
          <div className={s.info}>
            A lightweight flexible
            <br />
            Design System for Developers
          </div>

          <div className={s.info}>
            Inspired by{' '}
            <a href='https://www.joahquin.com' target='_blank'>
              <span>Upasana</span>
            </a>
          </div>

          <div className={s.install}>npm i mumpui</div>

          <div className={s.links}>
            {['Typography', 'Components', 'Helpers', 'Stories'].map(x => (
              <Link key={x} to={'/' + x.toLowerCase()}>
                <div>{x}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className='content'></div>
      </div>
    )
  }
}
