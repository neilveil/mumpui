import { Footer, SwitchTheme } from 'components'
import Fuse from 'fuse.js'
import { Modal, Placeholder } from 'lib'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import showcases from './showcases'
import groups from './groups'
import s from './styles.module.scss'
import themes from './themes'

export default class Main extends React.Component {
  state = {
    expanded: true,
    search: '',
    isSearchFocused: false,
    customize: true
  }
  logoRotation = 0
  componentDidMount(): void {
    window.addEventListener('keyup', this.focusSearch)
  }
  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.focusSearch)
  }
  focusSearch = (e: any) => {
    if (e.key === '/' && !this.state.isSearchFocused) {
      const searchEl: any = document.querySelector('#search')
      if (!searchEl) return
      searchEl.focus()
      this.scrollToSearch()
    }
  }
  scrollToSearch = () => {
    const searchEl = document.querySelector('#search')
    if (!searchEl) return

    window.scrollTo(
      0,
      window.scrollY +
        searchEl.getBoundingClientRect().top -
        parseFloat(getComputedStyle(document.documentElement).fontSize)
    )
  }
  render = () => {
    const fuse = new Fuse(Object.values(showcases), { keys: ['name', 'docs', 'tags'] })
    const searchResults = this.state.search ? fuse.search(this.state.search).map(({ item }) => item) : []

    return (
      <div>
        <div className={s.header}>
          <div className={s.content}>
            <div className={s.logoAndInfo}>
              <div className={s.left}>
                <img
                  src='/logo.png'
                  onClick={(e: any) => {
                    this.logoRotation += 360
                    e.target.style.transform = `rotate(${this.logoRotation}deg)`

                    const theme = window.localStorage.getItem('MP_THEME') === 'light' ? 'dark' : 'light'
                    window.localStorage.setItem('MP_THEME', theme)
                    document.body.setAttribute('data-theme', theme)
                  }}
                />
              </div>

              <div className={s.right}>
                <div className={s.info}>Welcome to</div>

                <div className={s.name}>MumpUI</div>
                <div className={s.info}>
                  A light-weight flexible & elegant
                  <br />
                  design system for developers.
                </div>

                {/* <div className={s.inspired}>
                  Inspired by&nbsp;
                  <a href='https://www.joahquin.com' target='_blank' rel='noreferrer'>
                    <span>Upasana</span>
                  </a>
                </div> */}

                <div className={s.links}>
                  {['Setup'].map(x => (
                    <Link key={x} to={'/' + x.toLowerCase()}>
                      <div>{x}</div>
                    </Link>
                  ))}

                  <SwitchTheme />

                  <span onClick={() => this.setState({ customize: !this.state.customize })} className='icon'>
                    brush
                  </span>

                  {/* <span className='icon'>brush</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          style={{ padding: 0, maxWidth: 800 }}
          visible={this.state.customize}
          onClose={() => this.setState({ customize: false })}
        >
          <Customize />
        </Modal>

        <div className={s.container}>
          <div className={s.content}>
            <div className={s.search}>
              <div className={s.searchInput} onClick={this.scrollToSearch}>
                <input
                  id='search'
                  onFocus={() => this.setState({ search: '', isSearchFocused: true })}
                  onKeyUp={(e: any) => {
                    if (e.key === 'Escape') {
                      window.scrollTo(0, 0)
                      e.target.blur()
                      this.setState({ search: '' })
                    } else this.scrollToSearch()
                  }}
                  onBlur={() => this.setState({ isSearchFocused: false })}
                  value={this.state.search}
                  onChange={e => this.setState({ search: e.target.value })}
                  placeholder='Lightning search..'
                />

                <div className={s.searchShortcut}>{this.state.isSearchFocused ? 'Esc' : '/'}</div>
              </div>

              {!this.state.search && (
                <span
                  onClick={() => this.setState({ expanded: !this.state.expanded })}
                  className={'icon ' + s.foldUnfold}
                >
                  {this.state.expanded ? 'expand_more' : 'chevron_right'}
                </span>
              )}
            </div>

            {this.state.search ? (
              <div>{searchResults.length ? <Showcases data={searchResults} expanded={true} /> : <Placeholder />}</div>
            ) : (
              <>
                {groups.map(({ name, showcases }, i) => (
                  <Group key={i} title={name} showcases={showcases} expanded={this.state.expanded} />
                ))}
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

interface groups {
  title: string
  showcases: element[]
  expanded: boolean
}

const Group = (props: groups) => {
  const [localExpanded, setLocalExpanded] = useState(props.expanded)

  useEffect(() => {
    setLocalExpanded(props.expanded)
  }, [props.expanded])

  return (
    <div className={s.groups}>
      <div className={s.title} onClick={() => setLocalExpanded(!localExpanded)}>
        <div>
          {props.title}
          <span className={s.count}>{props.showcases.length} components</span>
        </div>
        <div className='icon' style={{ color: 'var(--mp-c-font-light)' }}>
          {localExpanded ? 'expand_more' : 'chevron_right'}
        </div>
      </div>

      <>
        <Showcases data={props.showcases} expanded={localExpanded} />
      </>
    </div>
  )
}

type element = {
  name: string
  Component: any
  docs: string
}

const Showcases = ({ data, expanded }: { data: element[]; expanded: boolean }) => {
  return (
    <div className={s.showcases}>
      {data.map((x, i) => (
        <div
          key={i}
          className={s.showcase}
          style={{
            animationDelay: i * 200 + 'ms',
            zIndex: x.name === 'Modal' ? 1000 : data.length - i
          }}
        >
          {!!expanded && <div className={s.component}>{<x.Component />}</div>}

          <Link to={x.docs} className={s.nameLink}>
            <div className={s.name} style={{ borderTop: expanded ? '' : 'none' }}>
              {x.name}
              <span className={'icon ' + s.icon}>east</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

function Customize() {
  return (
    <div className={s.customizeTheme}>
      <div className={s.themes}>
        {Object.entries(themes).map(([key, x]: any) => (
          <div
            style={{ color: x['--mp-c-primary'], background: x['--mp-c-primary'] + '18' }}
            key={key}
            onClick={() => {
              Object.keys(x).forEach(style => document.body.style.setProperty(style, x[style]))
            }}
          >
            {x['--theme-name']}
          </div>
        ))}
      </div>

      <div className={s.body}>
        <div className={s.title}>
          Customize theme <span className='icon'>copy</span> <span className='icon'>refresh</span>
        </div>

        <div className={s.editor}>
          {Object.entries(config).map(([key, { value, usage }]) => (
            <div key={key}>
              <div className={s.usage}>{usage}</div>

              <div className={s.keyValue}>
                <div className={s.key}>{key}</div>

                <input
                  defaultValue={value}
                  onChange={e => {
                    document.body.style.setProperty(key, e.target.value)
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const config = {
  '--mp-c-primary': { value: '#000000', usage: 'Primary color' },
  '--mp-c-bg': { value: '#ffffff', usage: 'Background color' },

  '--mp-c-hover': { value: '#f8f8f8', usage: 'Elements color on hover before selection' },
  '--mp-c-border': { value: '#e8e8e8', usage: 'Elements border color' },
  '--mp-border-radius': { value: '8px', usage: 'Elements border radius' },
  '--mp-border-width': { value: '1px', usage: 'Elements border width' },
  '--mp-c-overlay-bg': { value: '#0004', usage: 'Popup elements background color' },
  '--mp-pop-up-shadow': {
    value: '0 8px 16px 8px #00000018',
    usage: 'Tooltip, select dropdown & search dropdown components shadow'
  },

  '--mp-input-border-width': { value: '1px', usage: 'Input fields border width' },
  '--mp-c-input-border': { value: '#e8e8e8', usage: 'Input fields border color' },
  '--mp-c-input-border-hover': { value: '#d8d8d8', usage: 'Input fields border color on hover' },
  '--mp-c-input-border-active': { value: '#b8b8b8', usage: 'Input fields border color on active' },
  '--mp-input-box-shadow': { value: '0 0 2px 0px #0001', usage: 'Input fields box shadow' },
  '--mp-input-box-shadow-hover': { value: '0 0 4px 0px #0001', usage: 'Input fields box shadow on hover' },
  '--mp-input-box-shadow-active': { value: '0 0 4px 0px #0002', usage: 'Input fields box shadow on active' },

  '--mp-c-font-dark': { value: '#282828', usage: 'Font color dark' },
  '--mp-c-font': { value: '#484848', usage: 'Font color default' },
  '--mp-c-font-light': { value: '#888888', usage: 'Font color light' },
  '--mp-c-placeholder': { value: '#b8b8b8', usage: 'Font color of input field placeholder' }
}
