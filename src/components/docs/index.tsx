import { Code, Message, Table } from 'lib'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footer'
import s from './styles.module.scss'
import { SwitchTheme } from 'components'

interface main {
  children?: any
  name: string
  test?: any
}

export default function Main(props: main) {
  const navigate = useNavigate()

  return (
    <>
      <div className={s.main}>
        <div>
          <div className={s.header}>
            <div className={s.row}>
              <div className={s.icon} onClick={() => window.history.back()}>
                <span className='icon'>west</span> Back
              </div>

              <div className={s.icon} onClick={() => navigate('/home')}>
                <span className='icon'>home</span> Home
              </div>

              <div className={s.icon}>
                <SwitchTheme />
              </div>
            </div>

            <div className={s.row}>
              <div className={s.title}>{['MumpUI', props.name].join(' / ')}</div>
            </div>
          </div>

          {props.children}

          <div style={{ height: '2rem' }} />
        </div>
      </div>

      <Footer />
    </>
  )
}

Main.Info = Info
function Info({
  children,
  style = {},
  className = ''
}: {
  children?: any
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <div className={className + ' ' + s.info} style={style}>
      {children}
    </div>
  )
}

Main.Showcase = Showcase
function Showcase({
  children,
  title,
  code,
  lang = 'jsx'
}: {
  children?: any
  title?: any
  code?: string
  lang?: string
}) {
  const [viewCode, setViewCode] = useState(false)

  code = (code || '').trim()

  return (
    <div className={s.showcase}>
      {<div className={s.showcaseTitle}>{title}</div>}

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

      {!!viewCode && <Code snippet={code} lang={lang} style={{ margin: 0 }} />}
    </div>
  )
}

type field = {
  name?: string
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'function' | 'jsx' | 'symbol' | 'any'
  customType?: string
  usage?: any
  defaultValue?: string
  required?: boolean
}

interface props {
  title?: any
  fields?: field[]
  type?: 'component' | 'function' | 'object'
}

Main.Props = Props
function Props(props: props) {
  return (
    <div>
      <div className={s.props}>
        <code style={{ fontSize: '1rem' }}>{props.title}</code> {props.type ? typeMap[props.type] : null}
      </div>

      <Table
        cols={[
          { key: 'required', render: value => (value ? '*' : '') },
          { name: 'Name', key: 'name', render: value => (value ? <code>{value}</code> : null) },
          {
            name: 'Type',
            key: 'type',
            render: (value: any) =>
              value ? (
                <code style={{ color: typeColorMap[value], backgroundColor: 'transparent', padding: 0, margin: 0 }}>
                  {value}
                </code>
              ) : null
          },
          {
            name: 'Usage',
            key: 'usage',
            width: '100%',
            render: (value, x: field) =>
              x.defaultValue ? (
                <span>
                  {value} (Default: <code>{x.defaultValue}</code>)
                </span>
              ) : (
                value
              )
          }
        ]}
        data={props.fields || []}
      />
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

const typeMap = {
  component: 'component props',
  function: 'function arguments',
  object: 'object keys'
}

const typeColorMap: any = {
  string: '#6a9955',
  number: '#1976d2',
  boolean: '#d32f2f',
  object: '#fbc02d',
  array: '#f57c00',
  function: '#1976d2',
  jsx: '#795548',
  symbol: '#9c27b0',
  any: '#9e9e9e'
}
