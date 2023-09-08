import { Docs } from 'components'
import { Field, Fields, Input } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Date, Month & Time'>
      <Docs.Showcase code={snippets.s1}>
        <Fields autoCol>
          <Field label='Date'>
            <Input type='date' defaultValue='2020-01-01' />
          </Field>

          <Field label='Month'>
            <Input type='month' defaultValue='2020-01' />
          </Field>

          <Field label='Time'>
            <Input type='time' defaultValue='18:00' />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Info>
        <b>MumpUI</b> uses default input field as using any 3rd party package always compromises with the user
        experience in mobile experience.
      </Docs.Info>

      <Docs.Props
        title='Input'
        type='component'
        fields={[
          { name: '..', usage: 'All input element props' },
          {
            name: 'onValue',
            type: 'function',
            usage: (
              <span>
                Better alternative of <code>onChange</code> listener <code>{`(value) => void`}</code>. No need to do{' '}
                <code>e.target.value</code>
              </span>
            )
          }
        ]}
      />

      <Docs.Related
        components={[
          { name: 'Form', link: '/component/form' },
          { name: 'Dropdown', link: '/component/dropdown' }
        ]}
      />
    </Docs>
  )
}
