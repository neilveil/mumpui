import { Docs } from 'components'
import { Tooltip } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Tooltip'>
      <Docs.Showcase title={<span></span>} code={snippets.s1}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Tooltip label='Left tooltip' position='left'>
            <div style={{ background: '#88888818', padding: '1rem' }}>Left</div>
          </Tooltip>

          <Tooltip label='Top tooltip' position='top'>
            <div style={{ background: '#88888818', padding: '1rem' }}>Top</div>
          </Tooltip>

          <Tooltip label='Bottom tooltip' position='bottom'>
            <div style={{ background: '#88888818', padding: '1rem' }}>Bottom</div>
          </Tooltip>

          <Tooltip label='Right tooltip' position='right'>
            <div style={{ background: '#88888818', padding: '1rem' }}>Right</div>
          </Tooltip>
        </div>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Custom delay</span>} code={snippets.s2}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Tooltip label='No delay tooltip' delay={0}>
            <div style={{ background: '#88888818', padding: '1rem' }}>0</div>
          </Tooltip>

          <Tooltip label='2 seconds wait tooltip' position='top' delay={2000}>
            <div style={{ background: '#88888818', padding: '1rem' }}>2000</div>
          </Tooltip>
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Tooltip'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'label', type: 'string', usage: 'Tooltip text' },
          {
            name: 'position',
            type: 'string',
            usage: (
              <span>
                <code>top</code>
                <code>right</code>
                <code>bottom</code>
                <code>left</code>
              </span>
            ),
            defaultValue: 'top'
          },
          { name: 'delay', type: 'number', usage: 'Tooltip delay in milliseconds', defaultValue: '300' }
        ]}
      />
    </Docs>
  )
}
