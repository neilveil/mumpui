import Button from '../button'
import * as icons from '../message/icons'

interface data {
  id: number
  title?: string
  onConfirm?: () => void
  description?: string
  confirmText?: string
  cancelText?: string
  onCancel?: () => void
  type?: 'info' | 'error' | 'success' | 'warn'
}

interface state {
  data: data[]
}

export default class Main extends React.Component {
  state: state = {
    data: []
  }
  static _this: InstanceType<typeof Main>
  static init = ({ title = '', description, confirmText, cancelText, onConfirm, onCancel, type }: Omit<data, 'id'>) => {
    Main._this.setState({
      data: Main._this.state.data.concat({
        id: Math.random(),
        title,
        description,
        confirmText: confirmText || 'Confirm',
        cancelText: cancelText || 'Cancel',
        onConfirm,
        onCancel,
        type
      })
    })
  }
  static clear = () => Main._this.setState({ data: [] })

  componentDidMount = () => (Main._this = this)
  close = (id: number) => this.setState({ data: this.state.data.filter(x => x.id !== id) })
  render = () => {
    return this.state.data.map((x, i) => (
      <div
        key={i}
        className='mumpui mp-confirm'
        onClick={e => {
          e.stopPropagation()
          this.close(x.id)
        }}
      >
        <div className='mp-confirm-dialog' onClick={e => e.stopPropagation()}>
          <div className='mp-confirm-title'>
            {!!x.type && icons[x.type]}
            {x.title}
          </div>
          <div className='mp-confirm-description'>{x.description}</div>

          <div className='mp-confirm-buttons'>
            <Button
              onClick={() => {
                this.close(x.id)
                if (x.onCancel) x.onCancel()
              }}
              style={{ border: 'none' }}
            >
              {x.cancelText || ''}
            </Button>

            <Button
              onClick={() => {
                this.close(x.id)
                if (x.onConfirm) x.onConfirm()
              }}
              style={{ marginLeft: '1rem' }}
              primary
            >
              {x.confirmText || ''}
            </Button>
          </div>
        </div>
      </div>
    ))
  }
}
