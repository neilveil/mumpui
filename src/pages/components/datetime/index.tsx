import { Docs } from 'components'
import { Field, Fields, Input } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [input, setInput] = useState('')
  const [inputType, setInputType] = useState('password')
  const [color, setColor] = useState('#000000')

  return (
    <Docs type='Component' name='Input'>
      <Docs.Showcase
        code={`
const [input, setInput] = useState('')

..

<Input
  value={input}
  onChange={e => setInput(e.target.value)}
  placeholder='Type something..'
/>

// or

<Input
  value={input}
  onValue={value => setInput(value)} // Added prop for simplicity
  placeholder='Type something..'
/>
`}
      >
        <div className='flex-center'>
          <Input value={input} onChange={e => setInput(e.target.value)} placeholder='Type something..' />
        </div>
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Field types</span>}
        code={`
<Fields>
  <Field label='Text'>
    <Input type='text' placeholder='Enter mobile..' />
  </Field>

  <Field label='Mobile'>
    <Input type='tel' placeholder='Enter mobile..' />
  </Field>
</Fields>

<Fields>
  <Field label='Email'>
    <Input type='email' placeholder='Enter email..' />
  </Field>
  <Field label='URL'>
    <Input type='url' placeholder='Enter url..' />
  </Field>
</Fields>

<Fields>
  <Field label='Number'>
    <Input type='number' placeholder='Enter number..' />
  </Field>

  <Field label='Password'>
    <Input type='password' placeholder='Enter password..' />
  </Field>
</Fields>

<Fields>
  <Field label='Time'>
    <Input type='time' defaultValue='18:00' placeholder='Enter time..' />
  </Field>

  <Field label='Date'>
    <Input type='date' defaultValue='2020-01-01' placeholder='Enter month..' />
  </Field>
</Fields>

<Fields>
  <Field label='Month'>
    <Input type='month' defaultValue='2020-01' placeholder='Enter month..' />
  </Field>

  <Field label='Color'>
    <Input type='color' placeholder='Select color..' value={color} onValue={value => setColor(value)} />
  </Field>
</Fields>
`}
      >
        <Fields>
          <Field label='Text'>
            <Input type='text' placeholder='Enter mobile..' />
          </Field>

          <Field label='Mobile'>
            <Input type='tel' placeholder='Enter mobile..' />
          </Field>
        </Fields>

        <Fields>
          <Field label='Email'>
            <Input type='email' placeholder='Enter email..' />
          </Field>
          <Field label='URL'>
            <Input type='url' placeholder='Enter url..' />
          </Field>
        </Fields>

        <Fields>
          <Field label='Number'>
            <Input type='number' placeholder='Enter number..' />
          </Field>

          <Field label='Password'>
            <Input type='password' placeholder='Enter password..' />
          </Field>
        </Fields>

        <Fields>
          <Field label='Time'>
            <Input type='time' defaultValue='18:00' placeholder='Enter time..' />
          </Field>

          <Field label='Date'>
            <Input type='date' defaultValue='2020-01-01' placeholder='Enter month..' />
          </Field>
        </Fields>

        <Fields>
          <Field label='Month'>
            <Input type='month' defaultValue='2020-01' placeholder='Enter month..' />
          </Field>

          <Field label='Color'>
            <Input type='color' placeholder='Select color..' value={color} onValue={value => setColor(value)} />
          </Field>
        </Fields>
      </Docs.Showcase>

      <p>
        Setting the type of input field helps in automatically setting the dedicated keyboard suitable for that type of
        field in mobile devices.
      </p>

      <p>
        <b>Note:</b> Input prefix & suffix doesn&apos;t work with color type input field.
      </p>

      <Docs.Showcase
        info={<span>Prefix & Suffix</span>}
        code={`
const [inputType, setInputType] = useState('password')

..

<Input placeholder='Enter number..' prefix={'91'} />

<Input
  type={inputType}
  placeholder='Enter password..'
  suffix={<span className='icon'>{inputType === 'password' ? 'visibility' : 'visibility_off'}</span>}
  onSuffixClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
/>
`}
      >
        <Fields>
          <Input placeholder='Enter number..' prefix={'91'} />

          <Input
            type={inputType}
            placeholder='Enter password..'
            suffix={<span className='icon'>{inputType === 'password' ? 'visibility' : 'visibility_off'}</span>}
            onSuffixClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
          />
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Success, Error, Warning & Info</span>}
        code={`
<Input placeholder='Type here..' status='success' />
<Input placeholder='Type here..' status='error' />
<Input placeholder='Type here..' status='warning' />
<Input placeholder='Type here..' status='info' />
`}
      >
        <Fields>
          <Input placeholder='Type here..' status='success' />
          <Input placeholder='Type here..' status='error' />
          <Input placeholder='Type here..' status='warning' />
          <Input placeholder='Type here..' status='info' />
        </Fields>
      </Docs.Showcase>

      <Docs.Showcase
        info={<span>Use input field styles</span>}
        code={`
<Fields>
  <div className='mp-input'>
    <div className='mp-value'>Hello there!</div>
  </div>

  <div className='mp-input'>
    <input placeholder='Type..' />
  </div>
</Fields>
`}
      >
        <Fields>
          <div className='mp-input'>
            <div className='mp-value'>Hello there!</div>
          </div>

          <div className='mp-input'>
            <input placeholder='Type..' />
          </div>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Input'
        fields={[
          { name: '..', usage: 'All input element props' },
          { name: 'status', type: 'string', usage: '"error" | "info" | "success" | "warning"' },
          { name: 'prefix', type: 'string', usage: '' },
          { name: 'onPrefixClick', type: 'function', usage: '' },
          { name: 'suffix', type: 'string' },
          { name: 'onSuffixClick', type: 'function', usage: '' },
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
