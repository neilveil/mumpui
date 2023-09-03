import { Docs } from 'components'
import { Field, Input } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [color, setColor] = useState('#000000')

  return (
    <Docs type='Component' name='Input'>
      <Docs.Showcase
        code={`
<Input type='color' placeholder='Select color..' value={color} onValue={value => setColor(value)} />
`}
      >
        <div className='flex-center'>
          <Field label='Select color'>
            <Input type='color' placeholder='Select color..' value={color} onValue={value => setColor(value)} />
          </Field>
        </div>
      </Docs.Showcase>

      <Docs.Props
        title='Input'
        fields={[
          { name: '..', usage: 'All input element props' },
          { name: 'status', type: 'string', usage: '"error" | "info" | "success" | "warning"' },
          {
            name: 'onValue',
            type: 'string',
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
