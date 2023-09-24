import { Footer, SwitchTheme } from 'components'
import Fuse from 'fuse.js'
import { Code, Modal, Placeholder } from 'lib'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import showcases from './showcases'
import groups from './groups'
import s from './styles.module.scss'
import * as snippets from './snippets'
import { SetMeta } from 'helpers'

export default class Main extends React.Component {
  state = {
    expanded: true,
    search: '',
    isSearchFocused: false,
    customize: false
  }
  logoRotation = 0
  componentDidMount(): void {
    window.addEventListener('keyup', this.focusSearch)
    SetMeta({
      title: 'MumpUI - A light-weight Flexible & Elegant Design System for Developers',
      description:
        'MumpUI is a powerful ReactJS design system that empowers developers to create captivating and feature-rich web applications effortlessly. With customizable, lightweight components, MumpUI offers a seamless user experience on any device. Say goodbye to mundane UI development and hello to extraordinary interfaces with MumpUI.',
      keywords: [
        'library',
        'ui',
        'components',
        'design',
        'reactjs',
        'development',
        'web',
        'frontend',
        'customizable',
        'responsive',
        'open-source',
        'elegant',
        'lightweight',
        'flexible',
        'interactive',
        'mobile-optimized',
        'user-interface',
        'creative',
        'feature-rich',
        'developer-friendly'
      ]
    })
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
    const fuse = new Fuse(Object.values(showcases), { keys: ['keywords'] })
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

                  <a href='https://github.com/neilveil/mumpui' target='_blank' rel='noreferrer'>
                    <div className={s.github}>
                      <img src='/github.png' alt='' />
                    </div>
                  </a>

                  {/* <span className='icon'>brush</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          style={{ padding: 0, maxWidth: 1080 }}
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
  link: string
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

          <Link to={x.link} className={s.nameLink}>
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
      <div className={s.title}>Customize theme</div>
      <Code snippet={snippets.theme} lang='css' style={{ width: '100%', margin: 0 }} />
    </div>
  )
}
