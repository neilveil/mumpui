import { Docs } from 'components'
import { Message, Radio } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'
import s from './styles.module.scss'

export default function Main() {
  const [theme, setTheme] = useState(
    document.querySelector('body')?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  )

  return (
    <Docs name='theme'>
      <div className={s.complexity}>
        Number of colors <span>∝</span> Design complexity
      </div>

      <Docs.Showcase title='Primary color' code={snippets.s1} lang='css'>
        <div className={s.palette}>
          <ColorPatch name='Primary' color='--mp-c-primary' />
        </div>
      </Docs.Showcase>

      <Docs.Info>
        Primary colors must be set for both light and dark theme as shown above, while the remaining colors can be used
        as default.
      </Docs.Info>

      <Docs.Showcase title='3 Font colors' code={snippets.s2} lang='css'>
        <div className={s.palette}>
          {colors
            .filter(x => x.type === 'font')
            .map(({ name, color }, i) => (
              <ColorPatch key={i} name={name} color={color} />
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

      <Docs.Showcase title='Palette colors' code={snippets.s3} lang='css'>
        <div className={s.palette}>
          {colors
            .filter(x => x.type === 'palette')
            .map(({ name, color }, i) => (
              <ColorPatch key={i} name={name} color={color} />
            ))}
        </div>

        <div className={s.coloredLines}>
          {colors
            .filter(x => x.type === 'palette')
            .map(({ name, color }, i) => (
              <div key={i} style={{ color: `var(${color})` }}>
                This is {name} color font.
              </div>
            ))}
        </div>
      </Docs.Showcase>

      <Docs.Showcase title='UI colors' code={snippets.s4} lang='css'>
        <div className={s.palette}>
          {colors
            .filter(x => x.type === 'ui')
            .map(({ name, color }, i) => (
              <ColorPatch key={i} name={name} color={color} />
            ))}
        </div>
      </Docs.Showcase>

      <Docs.Showcase title='Black & white' code={snippets.s5} lang='css'>
        <div className={s.palette}>
          <ColorPatch name='Black' color='--mp-c-black' />
          <ColorPatch name='White' color='--mp-c-white' />
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Color usage chart'
        type='table'
        fields={colors.map(({ name, color, usage }) => ({
          name: color,
          usage: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <ColorPatch name={name} color={color} />
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
          { name: 'd-{color}', usage: 'Set dashed border color (dashed)' }
        ]}
      />

      <Docs.Showcase title='Switch theme' code={snippets.s8}>
        <Radio
          checked={theme}
          options={[
            { key: 'light', label: 'Light' },
            { key: 'dark', label: 'Dark' }
          ]}
          onChange={key => {
            document.querySelector('body')?.setAttribute('data-theme', key)
            setTheme(key)
          }}
        />
      </Docs.Showcase>

      <Docs.Showcase title='More customizations' code={snippets.s6} lang='css'>
        Elements border radius, border width, dialogs background color, etc.
      </Docs.Showcase>

      <Docs.Showcase
        title={
          <span>
            Remove<code>--mp-</code> prefix from css variables
          </span>
        }
        code={snippets.s7}
        lang='html'
      >
        Add <code>mumpui</code> class in body tag.
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
    type: 'ui'
  },
  {
    name: 'Light',
    color: '--mp-c-light',
    usage: 'Hover / Card',
    type: 'ui'
  },
  {
    name: 'Border',
    color: '--mp-c-border',
    usage: 'Border color',
    type: 'ui'
  },
  {
    name: 'Transparent',
    color: '--mp-c-transparent',
    usage: 'Transparent',
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
    name: 'Red',
    color: '--mp-c-red',
    usage: 'Danger / Error',
    type: 'palette'
  },
  {
    name: 'Orange',
    color: '--mp-c-orange',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Yellow',
    color: '--mp-c-yellow',
    usage: 'Warn / Delay / Slow / Wait',
    type: 'palette'
  },
  {
    name: 'Lime',
    color: '--mp-c-lime',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Green',
    color: '--mp-c-green',
    usage: 'Success / Competition / Okay / Done',
    type: 'palette'
  },
  {
    name: 'Cyan',
    color: '--mp-c-cyan',
    usage: 'Status / Label',
    type: 'palette'
  },
  {
    name: 'Blue',
    color: '--mp-c-blue',
    usage: 'Info / Notify / Wait',
    type: 'palette'
  },
  {
    name: 'Indigo',
    color: '--mp-c-indigo',
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
    name: 'Purple',
    color: '--mp-c-purple',
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
    name: 'Link',
    color: '--mp-c-link',
    usage: 'Anchor tag',
    type: 'tag'
  },
  {
    name: 'Mark',
    color: '--mp-c-mark',
    usage: 'Mark tag',
    type: 'tag'
  },
  {
    name: 'Code',
    color: '--mp-c-code',
    usage: 'Code tag',
    type: 'tag'
  }
]

const ColorPatch = ({ color, name }: { color: string; name: string }) => (
  <div
    className={s.color}
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
)
