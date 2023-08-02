import React from 'react'
import * as icons from './icons'
import s from './styles.module.scss'

type icon = React.ReactNode
type text = string
type duration = number

type message = {
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
  static duration = 3

  static info = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.info, text, duration })
  static warn = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.warn, text, duration })
  static success = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.success, text, duration })
  static error = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.error, text, duration })
  static loading = (text = '', duration?: duration) => Main.pushMessage({ icon: icons.loading, text, duration })
  static destroy = () => Main._this.setState({ messages: [] })

  static pushMessage = ({ icon, text, duration }: { icon: icon; text: text; duration?: duration }) => {
    if (duration === 0) duration = 5000000000000

    if (!duration) duration = Main.duration

    duration = duration * 1000

    const message: message = {
      icon: icon,
      type: 'info',
      text,
      expiry: Date.now() + duration
    }

    Main._this.setState({
      messages: Main._this.state.messages.concat(message)
    })

    if (duration) setTimeout(Main.messageCleaner, duration)
  }

  static messageCleaner = () =>
    Main._this.setState({ messages: Main._this.state.messages.filter(x => x.expiry > Date.now()).slice(-Main.max) })

  componentDidMount = () => (Main._this = this)

  render = () => {
    return (
      <div className={s.main}>
        {this.state.messages.slice(-Main.max).map((x, i) => (
          <Message key={i} {...x} />
        ))}
      </div>
    )
  }
}

const Message = ({ icon, text }: { icon: icon; text: text }) => (
  <div>
    <div className={s.message}>
      <div className={s.icon}>{icon}</div>
      <div className={s.text}>{text}</div>
    </div>
  </div>
)
