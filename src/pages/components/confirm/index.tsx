import { Docs } from 'components'
import { Button, Confirm, Message } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Confirm'>
      <Docs.Showcase
        title={<span>Confirm before taking a critical action</span>}
        code={`
<Button
  onClick={() =>
    Confirm.init({
      title: 'Are you sure that you want to continue?',
      description: 'Once confirmed, this action can not be reverted.',
      onConfirm: () => Message.success('Confirmed!'),
      onCancel: () => Message.info('Canceled!'),
      type: 'primary'
    })
  }
>
  Confirm
</Button>
`}
      >
        <Button
          onClick={() =>
            Confirm.init({
              title: 'Are you sure that you want to continue?',
              description: 'Once confirmed, this action can not be reverted.',
              onConfirm: () => Message.success('Confirmed!'),
              onCancel: () => Message.info('Canceled!'),
              type: 'primary'
            })
          }
        >
          Confirm
        </Button>
      </Docs.Showcase>

      <Docs.Showcase
        title={<span>Nested confirm</span>}
        code={`
<Button
  onClick={() =>
    Confirm.init({
      title: 'Click next to continue.',
      confirmText: 'Next',
      onConfirm: () => {
        Confirm.init({
          title: 'Example of nested confirm!',
          type: 'primary',
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
`}
      >
        <Button
          onClick={() =>
            Confirm.init({
              title: 'Click next to continue.',
              confirmText: 'Next',
              onConfirm: () => {
                Confirm.init({
                  title: 'Example of nested confirm!',
                  type: 'primary',
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
            <code>Confirm.init({'{}'})</code>
          </span>
        }
        type='args'
        fields={[
          { required: true, name: 'title', type: 'string', usage: '' },
          { name: 'description', type: 'string', usage: '' },
          { required: true, name: 'onConfirm', type: 'function', usage: '' },
          { name: 'onCancel', type: 'function', usage: '' },
          { name: 'confirmText', type: 'string', usage: 'Confirm button text' },
          { name: 'cancelText', type: 'string', usage: 'Cancel button text' },
          { name: 'confirmFG', type: 'string', usage: 'Confirm button foreground color' },
          { name: 'confirmBG', type: 'string', usage: 'Confirm button background color' },
          { name: 'type', type: 'string', usage: 'default | primary | danger' }
        ]}
      />

      <Docs.Props
        title={
          <span>
            <code>Confirm.clear()</code>
          </span>
        }
        type='args'
        fields={[]}
      />
    </Docs>
  )
}
