import React, { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { Link } from 'react-router-dom'
import { Placeholder } from 'lib'
import Fuse from 'fuse.js'
import showcase from './showcase'
import { Footer } from 'components'
import { theme } from 'lib/helpers/utils'
import elements from './elements'

export default class Main extends React.Component {
  state = {
    expanded: true,
    search: ''
  }
  logoRotation = 0
  render = () => {
    const fuse = new Fuse(Object.values(elements), { keys: ['name', 'docs', 'tags'] })
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
                    theme.toggle(true)
                  }}
                />
              </div>

              <div className={s.right}>
                <div className={s.info}>Welcome to</div>

                <div className={s.name}>MumpUI</div>
                <div className={s.info}>
                  A Lightweight & Flexible
                  <br />
                  Design System for Developers.
                  <br />& It's clean!
                </div>

                {/* <div className={s.inspired}>
                  Inspired by&nbsp;
                  <a href='https://www.joahquin.com' target='_blank'>
                    <span>Upasana</span>
                  </a>
                </div> */}

                <div className={s.links}>
                  {['Setup', 'Stories'].map(x => (
                    <Link key={x} to={'/' + x.toLowerCase()}>
                      <div>{x}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.container}>
          <div className={s.content}>
            <div
              className={s.search}
              onClick={() => {
                const searchEl = document.querySelector('#search')
                if (!searchEl) return

                window.scrollTo(
                  0,
                  window.scrollY +
                    searchEl.getBoundingClientRect().top -
                    parseFloat(getComputedStyle(document.documentElement).fontSize)
                )
              }}
            >
              <input
                id='search'
                value={this.state.search}
                onChange={e => this.setState({ search: e.target.value })}
                placeholder='Lightning search..'
              />

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
              <div>{searchResults.length ? <Components data={searchResults} expanded={true} /> : <Placeholder />}</div>
            ) : (
              <>
                {showcase.map(({ name, elements }, i) => (
                  <Showcase key={i} title={name} elements={elements} expanded={this.state.expanded} />
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

type element = {
  name: string
  component: any
  docs?: string
}

interface showcase {
  title: string
  elements: element[]
  expanded: boolean
}

const Components = ({ data, expanded }: { data: element[]; expanded: boolean }) => {
  const pairs: element[][] = []

  var pair: element[] = []

  for (const x of data) {
    pair.push(x)
    if (pair.length === 2) {
      pairs.push(pair)
      pair = []
    }
  }

  if (pair.length) pairs.push(pair)

  const name = (name: any) => (
    <div className={s.name} style={{ borderTop: expanded ? '' : 'none' }}>
      {name}
      <span className={'icon ' + s.icon}>east</span>
    </div>
  )

  return (
    <div className={s.components}>
      {pairs
        .map((pair, i) => (
          <div key={i} className={s.componentPair}>
            {pair.map((x, j) => (
              <div
                key={j}
                className={s.component}
                style={{
                  animationDelay: (i + j) * 200 + 'ms',
                  zIndex: data.length - (i + j)
                }}
              >
                {!!expanded && <div className={s.element}>{<x.component />}</div>}

                {x.docs ? <Link to={x.docs}>{name(x.name)}</Link> : name(x.name)}
              </div>
            ))}
          </div>
        ))
        .flat()}
    </div>
  )
}

const Showcase = (props: showcase) => {
  const [localExpanded, setLocalExpanded] = useState(props.expanded)

  useEffect(() => {
    setLocalExpanded(props.expanded)
  }, [props.expanded])

  return (
    <div className={s.showcase}>
      <div className={s.title} onClick={() => setLocalExpanded(!localExpanded)}>
        <div>
          {props.title}
          <span className={s.count}>{props.elements.length} components</span>
        </div>
        <div className='icon' style={{ color: 'var(--mp-c-font-light)' }}>
          {localExpanded ? 'expand_more' : 'chevron_right'}
        </div>
      </div>

      {/* {!!localExpanded && (
          )} */}
      <>
        <Components data={props.elements} expanded={localExpanded} />
      </>
    </div>
  )
}
