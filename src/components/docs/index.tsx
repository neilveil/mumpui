import { SwitchTheme } from 'components'
import { SetMeta } from 'helpers'
import { Code, Message, Table } from 'lib'
import metagraph from 'metagraph'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer'
import s from './styles.module.scss'

interface main {
  children?: any
  name: keyof typeof metagraph
}

export default function Main(props: main) {
  const { name, description, keywords, related, img, type } = metagraph[props.name]

  const title = ['MumpUI', type, name].filter(x => x).join(' / ')

  const _graph: any = metagraph
  const _related: any = related.map(x => ({ name: _graph[x].name, link: _graph[x].link }))

  useEffect(() => {
    SetMeta({ title, description, keywords, img })
  }, [title, description, keywords, img, related])

  return (
    <>
      <div className={s.main}>
        <div>
          <div className={s.header}>
            <div className={s.row}>
              <Link to='/'>
                <div className={s.icon}>
                  <span className='icon'>west</span> Home
                </div>
              </Link>

              <div className={s.icon}>
                <SwitchTheme />
              </div>
            </div>

            <div className={s.row}>
              <div className={s.title}>{title}</div>
            </div>
          </div>
          {props.children}

          <div className={s.issue}>
            <a
              href={`https://github.com/neilveil/mumpui/issues/new?title=${encodeURIComponent(props.name)}&body=`}
              target='_blank'
              rel='noreferrer'
            >
              Report an issue&nbsp;&nbsp;<span className='icon'>east</span>
            </a>
          </div>

          {!!_related.length && <Related components={_related} />}
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
  className = '',
  title = false
}: {
  children?: any
  style?: React.CSSProperties
  className?: string
  title?: boolean
}) {
  return (
    <div
      className={className + ' ' + s.info}
      style={Object.assign(style, title ? { marginTop: '4rem', fontSize: '1rem', color: 'var(--mp-font-dark)' } : {})}
    >
      {children}
    </div>
  )
}

Main.Showcase = Showcase
function Showcase({
  children,
  title,
  code,
  lang = 'jsx',
  onlyCode = false
}: {
  children?: any
  title?: any
  code?: string
  lang?: string
  onlyCode?: boolean
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

          {!onlyCode && (
            <>
              {viewCode ? (
                <div onClick={() => setViewCode(!viewCode)}>
                  <span className='icon'>code_off</span>&nbsp;&nbsp;Hide code
                </div>
              ) : (
                <div onClick={() => setViewCode(!viewCode)}>
                  <span className='icon'>code</span>&nbsp;&nbsp;Show code
                </div>
              )}
            </>
          )}
        </div>
      )}

      {!onlyCode && <div className={s.element}>{children}</div>}

      {(!!viewCode || onlyCode) && <Code snippet={code} lang={lang} style={{ margin: 0 }} />}
    </div>
  )
}

type field = {
  name?: string
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'function' | 'jsx' | 'symbol' | 'any'
  usage?: any
  defaultValue?: string
}

interface props {
  title?: any
  fields?: field[]
  type?: 'component' | 'function' | 'object' | 'table'
}

Main.Props = Props

function Props(props: props) {
  const hasType = props.fields?.filter(x => x.type).length

  return (
    <div>
      <div className={s.props}>
        {props.type === 'table' ? props.title : <code style={{ fontSize: '1rem' }}>{props.title}</code>}&nbsp;
        {props.type ? typeMap[props.type] : null}
      </div>

      <Table
        cols={[
          // { key: 'required', render: value => (value ? '*' : '') },
          {
            name: 'Name',
            key: 'name',
            render: (value: any) => (value ? <code style={{ whiteSpace: 'pre' }}>{value}</code> : null)
          },
          !hasType
            ? {}
            : {
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
            render: (value: any, x: field) =>
              x.defaultValue ? (
                <span>
                  {value} (Default: <code>{x.defaultValue}</code>)
                </span>
              ) : (
                value
              ),
            wrap: true
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

function Related({ components = [] }: related) {
  return (
    <div className={s.related}>
      <div className={s.title}>Related content</div>

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

Main.Setup = Setup
function Setup() {
  return (
    <Info>
      <Link to='/setup'>
        <div
          className='c-blue'
          style={{ marginTop: '.5rem', display: 'inline-block', fontWeight: 'var(--mp-fw-bold)' }}
        >
          MumpUI Setup →
        </div>
      </Link>
    </Info>
  )
}

const typeMap = {
  component: 'component props',
  function: 'function arguments',
  object: 'object keys',
  table: ''
}

const typeColorMap: any = {
  string: '#6a9955b8',
  number: '#1976d2b8',
  boolean: '#d32f2fb8',
  object: '#fbc02db8',
  array: '#f57c00b8',
  function: '#762ad6b8',
  jsx: '#795548b8',
  symbol: '#9c27b0b8',
  any: '#9e9e9eb8'
}
