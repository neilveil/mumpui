export const s1 = `
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
`

export const s2 = `
const common = {
  title: 'Are you sure that you want to continue?',
  description: 'Once confirmed, this action can not be reverted.',
  onConfirm: () => Message.success('Confirmed!'),
  onCancel: () => Message.info('Canceled!')
}

..

<Button onClick={() => Confirm.init({ ...common, type: 'success' })}>Success</Button>

<Button onClick={() => Confirm.init({ ...common, type: 'error' })}>Error</Button>

<Button onClick={() => Confirm.init({ ...common, type: 'warn' })}>Warn</Button>

<Button onClick={() => Confirm.init({ ...common, type: 'info' })}>Info</Button>
`

export const s3 = `
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
`
