import { Docs } from 'components'
import { Field, Fields, Input } from 'lib'
import * as snippets from './snippets'
import related from '../related'

export default function Main() {
  return (
    <Docs name='Field & Fields'>
      <Docs.Showcase title='Field' code={snippets.s1}>
        <Field label='Name'>
          <Input placeholder='Enter name..' style={{ maxWidth: '20rem' }} />
        </Field>
      </Docs.Showcase>

      <Docs.Showcase title='Fields' code={snippets.s2}>
        <Fields>
          <Field label='Name'>
            <Input placeholder='Enter name..' />
          </Field>

          <Field label='Location'>
            <Input placeholder='Enter location..' />
          </Field>
        </Fields>

        <Fields autoCol>
          <Field label='Phone'>
            <Input placeholder='Enter phone..' />
          </Field>

          <Field label='Mobile'>
            <Input placeholder='Enter mobile..' />
          </Field>

          <Field label='Email'>
            <Input placeholder='Enter email..' />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Info>
        <code>autoCol</code> in the second row is set to <code>true</code> which means if rendered in a device with
        screen width less than or equal to <code>1080px</code> i.e. mobile devices, then the elements inside will be
        rendered in a column.
      </Docs.Info>

      <Docs.Info>
        To debug <code>autoCol</code>, do not forget to refresh after opening the developer tools in the browser.
      </Docs.Info>

      <Docs.Props
        title='Field'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'label', type: 'string' }
        ]}
      />

      <Docs.Props
        title='Fields'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          {
            name: 'autoCol',
            type: 'boolean',
            usage: (
              <span>
                To render elements inside in a column if screen width is less than <code>colBreakPoint</code>
              </span>
            )
          },
          {
            name: 'colBreakPoint',
            type: 'number',
            usage: (
              <span>
                To change default break point used in <code>autoCol</code>
              </span>
            ),
            defaultValue: '1080'
          }
        ]}
      />

      <Docs.Related components={[related.form, related.input]} />
    </Docs>
  )
}
