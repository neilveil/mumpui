import { Code, Message } from 'lib'
import mutils from 'lib/mutils'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer'
import s from './styles.module.scss'

interface main {
  children?: any
  type: 'Component' | 'Helper' | 'Style'
  name: string
  test?: any
}

export default function Main(props: main) {
  return (
    <div className={s.main}>
      <div>
        <div className={s.header}>
          <div className={s.back} onClick={() => window.history.back()}>
            <span className='icon'>west</span> Back
          </div>

          <Link to='/home'>
            <div className={s.back} style={{ marginLeft: '1.5rem' }}>
              <span className='icon'>home</span> Home
            </div>
          </Link>

          <div onClick={() => mutils.theme.toggle(true)} className={s.title}>
            {['MumpUI', props.type, props.name].join(' / ')}
          </div>
        </div>

        {props.children}

        <div style={{ height: '2rem' }} />
      </div>

      <Footer />
    </div>
  )
}

Main.Info = Info
function Info({ children }: { children?: any }) {
  return <div className={s.info}>{children}</div>
}

Main.Showcase = Showcase
function Showcase({ children, info, code }: { children?: any; info?: any; code?: string }) {
  const [viewCode, setViewCode] = useState(false)

  code = (code || '').trim()

  return (
    <div className={s.showcase}>
      {!!info && <Main.Info>{info}</Main.Info>}

      {!!code && (
        <div className={s.switch}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(code || '')
              Message.info('Copied!')
            }}
          >
            <span className='icon'>copy</span>
          </div>

          {viewCode ? (
            <div onClick={() => setViewCode(!viewCode)}>
              <span className='icon'>code_off</span>&nbsp;&nbsp;Hide code
            </div>
          ) : (
            <div onClick={() => setViewCode(!viewCode)}>
              <span className='icon'>code</span>&nbsp;&nbsp;Show code
            </div>
          )}
        </div>
      )}

      <div className={s.element}>{children}</div>

      {!!viewCode && <Code snippet={code} lang='jsx' />}
    </div>
  )
}

type field = {
  name?: string
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'function' | 'jsx' | 'any'
  customType?: string
  usage?: any
  required?: boolean
}

interface props {
  title?: any
  fields?: field[]
  type?: 'component' | 'function' | 'object'
}

const typeMap = {
  component: 'component props',
  function: 'function arguments',
  object: 'object keys'
}

Main.Props = Props
function Props(props: props) {
  return (
    <div>
      <div className={s.props}>
        {props.title} {props.type ? typeMap[props.type] : null}
      </div>

      <div className={'mp-table ' + s.table}>
        <table>
          <thead>
            <tr>
              <th className={s.required}></th>
              <th className={s.name}>Name</th>
              <th className={s.type}>Type</th>
              <th className={s.usage}>Usage</th>
            </tr>
          </thead>

          <tbody>
            {props.fields?.map((x, i) => (
              <tr key={i}>
                <td className={s.required}>{x.required ? '*' : ''}</td>

                <td className={s.name}>
                  <code>{x.name}</code>
                </td>

                <td className={s.type}>{!!(x.type || x.customType) && <code>{x.type || x.customType}</code>}</td>
                <td className={s.usage}>{x.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

type component = {
  name: string
  link: string
}

interface related {
  components: component[]
}

Main.Related = Related
function Related({ components = [] }: related) {
  return (
    <div className={s.related}>
      <div className={s.title}>Related Components</div>

      <ul>
        {components.map((x, i) => (
          <li key={i}>
            <Link to={x.link}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
