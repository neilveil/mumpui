import React from 'react'
import './styles.scss'

export default class Main extends React.Component {
  render = () => {
    return (
      <div className='mp-loader'>
        <svg viewBox='25 25 50 50'>
          <circle cx='50' cy='50' r='20'></circle>
        </svg>
      </div>
    )
  }
}
