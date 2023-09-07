import { Docs } from 'components'
import { Field, Fields, Input } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [input, setInput] = useState('')
  const [inputType, setInputType] = useState('password')

  return (
    <Docs name='Input field'>
      <Docs.Showcase code={snippets.main}>
        <div className='flex-center'>
          <Input value={input} onChange={e => setInput(e.target.value)} placeholder='Type something..' />
        </div>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Different input type fields</span>} code={snippets.main}>
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
      </Docs.Showcase>

      <Docs.Info>
        Setting the type of input field helps in automatically setting the dedicated keyboard suitable for that type of
        field in mobile devices.
      </Docs.Info>

      <Docs.Showcase title='Prefix & suffix' code={``}>
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
