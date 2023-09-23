import { Docs } from 'components'
import { Button, Confirm, Message } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  const common = {
    title: 'Are you sure that you want to continue?',
    description: 'Once confirmed, this action can not be reverted.',
    onConfirm: () => Message.success('Confirmed!'),
    onCancel: () => Message.info('Canceled!')
  }

  return (
    <Docs name='Confirm'>
      <Docs.Showcase title={<span>Confirm modal before taking an action</span>} code={snippets.s1}>
        <Button
          onClick={() =>
            Confirm.init({
              title: 'Are you sure that you want to continue?',
              description: 'Once confirmed, this action can not be reverted.',
              onConfirm: () => {
                Message.success('Confirmed!')
              },
              onCancel: () => {
                Message.info('Canceled!')
              }
            })
          }
        >
          Done
        </Button>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Confirm types</span>} code={snippets.s2}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={() => Confirm.init({ ...common, type: 'success' })}>Success</Button>

          <Button onClick={() => Confirm.init({ ...common, type: 'error' })}>Error</Button>

          <Button onClick={() => Confirm.init({ ...common, type: 'warn' })}>Warn</Button>

          <Button onClick={() => Confirm.init({ ...common, type: 'info' })}>Info</Button>
        </div>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Nested confirm</span>} code={snippets.s3}>
        <Button
          onClick={() =>
            Confirm.init({
              title: 'Click next to continue.',
              confirmText: 'Next',
              onConfirm: () => {
                Confirm.init({
                  title: 'Example of nested confirm!',
                  onConfirm: () => {
                    Message.success('Confirmed!')
                    Confirm.clear()
                  }
                })
              }
            })
          }
        >
          Confirm
        </Button>
      </Docs.Showcase>

      <Docs.Props
        title={
          <span>
            <code>Confirm.init</code>
          </span>
        }
        type='function'
        fields={[
          { name: 'title', type: 'string', usage: '' },
          { name: 'description', type: 'string', usage: '' },
          { name: 'onConfirm', type: 'function', usage: '' },
          { name: 'onCancel', type: 'function', usage: '' },
          { name: 'confirmText', type: 'string', usage: 'Confirm button text' },
          { name: 'cancelText', type: 'string', usage: 'Cancel button text' },
          {
            name: 'type',
            type: 'string',
            usage: (
              <span>
                <code>success</code>
                <code>error</code>
                <code>warn</code>
                <code>info</code>
              </span>
            )
          }
        ]}
      />

      <Docs.Props
        title={
          <span>
            <code>Confirm.clear</code>
          </span>
        }
        type='function'
        fields={[
          {
            usage: 'Empty'
          }
        ]}
      />

      <Docs.Info>Close all confirm modals</Docs.Info>
    </Docs>
  )
}
