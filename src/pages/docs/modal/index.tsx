import { Docs } from 'components'
import { Button, Modal } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [visible, setVisible] = useState(false)

  return (
    <Docs name='modal'>
      <Docs.Showcase code={snippets.s1}>
        <Button onClick={() => setVisible(true)}>Open</Button>

        <Modal
          title='Demo Modal'
          leftButtons={[
            <Button key='close' onClick={() => setVisible(false)}>
              Close
            </Button>
          ]}
          buttons={[
            <Button key='done' className='f-green c-bg' onClick={() => setVisible(false)}>
              Done
            </Button>
          ]}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div style={{ fontSize: '.8rem' }}>This is dummy modal. You can render anything inside.</div>
        </Modal>
      </Docs.Showcase>

      <Docs.Props
        title='Modal'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'title', type: 'jsx', usage: 'Modal title' },
          { name: 'buttons', type: 'jsx', usage: 'Modal action buttons' },
          { name: 'visible', type: 'boolean', usage: 'To set the modal visibility' },
          { name: 'onClose', type: 'function', usage: 'To close modal on background click' },
          { name: 'width', type: 'string', usage: 'To change modal width', defaultValue: '600px' },
          { name: 'noScrollbar', type: 'boolean', usage: 'Hide scrollbar on scrollable modals', defaultValue: 'false' },
          { name: 'noCross', type: 'boolean', usage: 'Hide cross icon from modal header', defaultValue: 'false' }
        ]}
      />
    </Docs>
  )
}
