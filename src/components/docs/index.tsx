import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { Message } from 'lib'
import { useEffect, useRef, useState } from 'react'
import Footer from '../footer'

interface main {
  children?: any
  type: 'Component' | 'Helper' | 'Style'
  name: string
  test?: any
}

export default function Main(props: main) {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <Link to='/'>
          <div className={s.back}>
            <span className='icon'>west</span> Home
          </div>
        </Link>

        <div className={s.title}>{['MumpUI', props.type, props.name].join(' / ')}</div>
      </div>

      {props.children}

      <div style={{ height: '2rem' }} />

      <Footer />
    </div>
  )
}

Main.Info = ({ children }: { children?: any }) => <div className={s.info}>{children}</div>

Main.Showcase = ({ children, info, code }: { children?: any; info?: any; code?: string }) => {
  const [viewCode, setViewCode] = useState(false)
  const ref: any = useRef()

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = window.Prism?.highlight(code, window.Prism.languages.jsx, 'jsx')
  }, [viewCode])

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

      {!!viewCode && (
        <div className='mp-code' style={{ margin: 0 }}>
          <pre>
            <code ref={ref}></code>
          </pre>
        </div>
      )}
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

Main.Props = (props: props) => (
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

type component = {
  name: string
  link: string
}

interface related {
  components: component[]
}

Main.Related = ({ components = [] }: related) => {
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
