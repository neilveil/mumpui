import { Docs } from 'components'
import { Tooltip } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Tooltip'>
      <Docs.Showcase
        title={<span></span>}
        code={`
`}
      >
        <div className='flex-wrap'>
          <Tooltip label='Left tooltip' position='left'>
            <div style={{ background: '#f8f8f8', padding: '1rem' }}>Left</div>
          </Tooltip>
          <Tooltip label='Top tooltip' position='top'>
            <div style={{ background: '#f8f8f8', padding: '1rem' }}>Top</div>
          </Tooltip>
          <Tooltip label='Bottom tooltip' position='bottom'>
            <div style={{ background: '#f8f8f8', padding: '1rem' }}>Bottom</div>
          </Tooltip>
          <Tooltip label='Right tooltip' position='right'>
            <div style={{ background: '#f8f8f8', padding: '1rem' }}>Right</div>
          </Tooltip>
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Tooltip'
        type='props'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'label', type: 'string', usage: 'Tooltip text' },
          { name: 'position', type: 'string', usage: 'top | right | bottom | left' }
        ]}
      />
    </Docs>
  )
}
