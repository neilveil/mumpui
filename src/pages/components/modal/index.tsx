import { Docs } from 'components'
import { Button, Modal } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [visible, setVisible] = useState(false)

  return (
    <Docs name='Modal'>
      <Docs.Showcase
        title={<span></span>}
        code={`
`}
      >
        <Button onClick={() => setVisible(true)}>Open</Button>

        <Modal visible={visible} onClose={() => setVisible(false)}>
          <div style={{ fontSize: '1.25rem' }}>Demo Modal</div>
          <div style={{ fontSize: '.8rem', marginTop: '.5rem' }}>
            This is dummy modal. You can render anything inside.
          </div>
          <div className='flex-end' style={{ marginTop: '2rem' }}>
            <Button type='primary' onClick={() => setVisible(false)}>
              Close
            </Button>
          </div>
        </Modal>
      </Docs.Showcase>

      <Docs.Props
        title='Modal'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'visible', type: 'boolean' },
          { name: 'onClose', type: 'function' }
        ]}
      />
    </Docs>
  )
}
