import { Docs } from 'components'
import { ColorPicker, Field } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [color, setColor] = useState('#0A94FF')

  return (
    <Docs name='Color Picker'>
      <Docs.Showcase code={snippets.s1}>
        <div className='flex-center'>
          <Field label='Select color'>
            <ColorPicker
              placeholder='Select color..'
              value={color}
              onValue={value => setColor(value)}
              style={{ maxWidth: '15rem' }}
            />
          </Field>
        </div>
      </Docs.Showcase>

      <Docs.Info>
        <b>MumpUI Color Picker</b> is designed in manner that it can be easily used in a form. It uses native input
        field for better user experience in mobile devices. It supports HSL, Hex & RGB input and a UI color picker tool.
      </Docs.Info>

      <Docs.Props
        title='ColorPicker'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
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

      <Docs.Related components={[{ name: 'Form', link: '/component/form' }]} />
    </Docs>
  )
}
