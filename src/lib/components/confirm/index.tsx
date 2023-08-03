import React from 'react'
import Button from '../button'
import s from './styles.module.scss'

interface data {
  id: number
  title: string
  info?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  confirmFG?: string
  confirmBG?: string
  type?: 'default' | 'primary' | 'danger'
}

interface state {
  data: data[]
}

export default class Main extends React.Component {
  state: state = {
    data: []
  }
  static _this: InstanceType<typeof Main>
  static init = ({ title, info, confirmText, cancelText, onConfirm, onCancel, type }: Omit<data, 'id'>) => {
    Main._this.setState({
      data: Main._this.state.data.concat({
        id: Math.random(),
        title,
        info,
        confirmText: confirmText || 'Confirm',
        cancelText: cancelText || 'Cancel',
        onConfirm,
        onCancel,
        type: type || 'default'
      })
    })
  }

  componentDidMount = () => (Main._this = this)
  close = (id: number) => this.setState({ data: this.state.data.filter(x => x.id !== id) })
  render = () => {
    return this.state.data.map((x, i) => (
      <div
        key={i}
        className={s.main}
        onClick={e => {
          e.stopPropagation()
          this.close(x.id)
        }}
      >
        <div className={s.dialog} onClick={e => e.stopPropagation()}>
          <div className={s.content}>
            <div className={s.title}>{x.title}</div>
            <div className={s.info}>{x.info}</div>
          </div>

          <div className={s.buttons}>
            <Button label={x.cancelText || ''} onClick={() => this.close(x.id)} />
            <Button
              label={x.confirmText || ''}
              onClick={() => this.close(x.id)}
              style={{ marginLeft: '1rem' }}
              type={x.type}
            />
          </div>
        </div>
      </div>
    ))
  }
}
