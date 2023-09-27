import { Docs } from 'components'
import { Message } from 'lib'
import * as snippets from './snippets'
import s from './styles.module.scss'

export default function Main() {
  return (
    <Docs name='theme'>
      <div className={s.complexity}>
        Number of colors <span>∝</span> Design complexity
      </div>

      <Docs.Showcase title='Primary color' code={snippets.s1} lang='css'>
        <div className={s.palette}>
          <div
            onClick={() => Message.info(<code>{'--mp-c-primary'}</code>)}
            style={{ background: 'var(--mp-c-primary)' }}
          ></div>
        </div>
      </Docs.Showcase>

      <Docs.Info>
        Primary color must be set for both light and dark theme, while the remaining colors can be used as default.
      </Docs.Info>

      <Docs.Showcase title='3 Font colors' code={snippets.s2} lang='css'>
        <div className={s.palette}>
          {colors
            .filter(x => x.type === 'font')
            .map(({ name, color }) => (
              <div
                key={color}
                onClick={() =>
                  Message.info(
                    <span>
                      {name}: <code>{color}</code>
                    </span>
                  )
                }
                style={{ background: `var(${color})` }}
              />
            ))}
        </div>

        <h1 style={{ color: 'var(--mp-c-font-dark)', fontWeight: 400 }}>Lorem ipsum</h1>
        <h1 style={{ color: 'var(--mp-c-font)', fontWeight: 400 }}>Lorem ipsum</h1>
        <h1 style={{ color: 'var(--mp-c-font-light)', fontWeight: 400 }}>Lorem ipsum</h1>

        <p style={{ color: 'var(--mp-c-font-dark)' }}>
          Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Duis aute irure dolor in reprehenderit.
        </p>
        <p style={{ color: 'var(--mp-c-font)' }}>
          Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Duis aute irure dolor in reprehenderit.
        </p>
        <p style={{ color: 'var(--mp-c-font-light)' }}>
          Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Duis aute irure dolor in reprehenderit.
        </p>
      </Docs.Showcase>

      <Docs.Showcase title='10 palette colors' code={snippets.s3} lang='css'>
        <div className={s.palette}>
          {colors
            .filter(x => x.type === 'palette')
            .map(({ name, color }) => (
              <div
                key={color}
                onClick={() =>
                  Message.info(
                    <span>
                      {name}: <code>{color}</code>
                    </span>
                  )
                }
                style={{ background: `var(${color})` }}
              />
            ))}
        </div>
      </Docs.Showcase>

      <Docs.Showcase title='Background & border color' code={snippets.s4} lang='css'></Docs.Showcase>

      <Docs.Showcase title='Black & white' code={snippets.s5} lang='css'>
        <div className={s.palette}>
          <div
            onClick={() => Message.info(<code>{'--mp-c-black'}</code>)}
            style={{ background: 'var(--mp-c-black)' }}
          />
          <div
            onClick={() => Message.info(<code>{'--mp-c-white'}</code>)}
            style={{ background: 'var(--mp-c-white)' }}
          />
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Color usage chart'
        type='table'
        fields={colors.map(({ color, usage }) => ({
          name: color,
          usage: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className={s.color} style={{ backgroundColor: `var(${color})` }} />
              {usage}
            </div>
          )
        }))}
      />

      <Docs.Props
        title='Color classes'
        type='table'
        fields={[
          { name: 'c-{color}', usage: 'Set text color (color)' },
          { name: 'f-{color}', usage: 'Set background color (fill)' },
          { name: 'b-{color}', usage: 'Set border color (border)' },
          { name: 'd-{color}', usage: 'Set dashed border color (border)' }
        ]}
      />

      <Docs.Showcase title='More customizations' code={snippets.s6} lang='css'>
        Elements border radius, border width, dialogs background color, etc.
      </Docs.Showcase>
    </Docs>
  )
}

const colors = [
  {
    name: 'Primary',
    color: '--mp-c-primary',
    usage: 'Primary color',
    type: 'primary'
  },
  {
    name: 'Bg',
    color: '--mp-c-bg',
    usage: 'Background color',
    type: 'more'
  },
  {
    name: 'Border',
    color: '--mp-c-border',
    usage: 'Border color',
    type: 'more'
  },
  {
    name: 'Font Dark',
    color: '--mp-c-font-dark',
    usage: 'Font color dark',
    type: 'font'
  },
  {
    name: 'Font',
    color: '--mp-c-font',
    usage: 'Font color default',
    type: 'font'
  },
  {
    name: 'Font Light',
    color: '--mp-c-font-light',
    usage: 'Font color light',
    type: 'font'
  },
  {
    name: 'Green',
    color: '--mp-c-green',
    usage: 'Success / Competition / Okay / Done',
    type: 'palette'
  },
  {
    name: 'Red',
    color: '--mp-c-red',
    usage: 'Danger / Error',
    type: 'palette'
  },
  {
    name: 'Blue',
    color: '--mp-c-blue',
    usage: 'Info / Notify / Wait',
    type: 'palette'
  },
  {
    name: 'Yellow',
    color: '--mp-c-yellow',
    usage: 'Warn / Delay / Slow / Wait',
    type: 'palette'
  },
  {
    name: 'Indigo',
    color: '--mp-c-indigo',
    usage: 'Link / Clickable',
    type: 'palette'
  },
  {
    name: 'Light',
    color: '--mp-c-light',
    usage: 'Hover / Card',
    type: 'palette'
  },
  {
    name: 'Orange',
    color: '--mp-c-orange',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Pink',
    color: '--mp-c-pink',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Purple',
    color: '--mp-c-purple',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Violet',
    color: '--mp-c-violet',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Transparent',
    color: '--mp-c-transparent',
    usage: 'Transparent',
    type: 'more'
  }
]
