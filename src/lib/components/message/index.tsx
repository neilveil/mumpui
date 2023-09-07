import React from 'react'
import * as icons from './icons'

type icon = React.ReactNode
type text = string
type duration = number

type message = {
  id: symbol
  icon: icon
  type: string
  text: text
  expiry: duration
}

interface state {
  messages: message[]
}

export default class Main extends React.Component {
  static props = {}
  state: state = { messages: [] }
  static _this: InstanceType<typeof Main>

  static max = 3
  static duration = 3000

  static info = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.info, text, duration })
  static warning = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.warn, text, duration })
  static success = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.success, text, duration })
  static error = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.error, text, duration })
  static loading = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.loading, text, duration })
  static clear = (id?: symbol) =>
    Main._this.setState({ messages: id ? Main._this.state.messages.filter(x => x.id !== id) : [] })

  static pushMessage = ({ icon, text, duration }: { icon: icon; text: text; duration?: duration }) => {
    if (duration === 0) duration = 5000000000000

    if (!duration) duration = Main.duration

    const message: message = {
      id: Symbol(),
      icon: icon,
      type: 'info',
      text,
      expiry: Date.now() + duration
    }

    Main._this.setState({ messages: Main._this.state.messages.concat(message) })

    if (duration) setTimeout(Main.messageCleaner, duration)

    return message.id
  }

  static messageCleaner = () =>
    Main._this.setState({ messages: Main._this.state.messages.filter(x => x.expiry > Date.now()).slice(-Main.max) })

  componentDidMount = () => (Main._this = this)

  render = () => {
    return (
      <div className='mumpui mp-message'>
        {this.state.messages.slice(-Main.max).map((x, i) => (
          <Message key={i} {...x} />
        ))}
      </div>
    )
  }
}

const Message = ({ icon, text }: { icon: icon; text: text }) => (
  <div>
    <div className='mp-message-box'>
      <div className='mp-message-icon'>{icon}</div>
      <div className='mp-message-text'>{text}</div>
    </div>
  </div>
)
