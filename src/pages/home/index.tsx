import React from 'react'
import s from './styles.module.scss'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Dropdown, Field, Fields, File, Form, Input, Radio, Range, Textarea } from 'lib'

export default class Main extends React.Component {
  state = {
    dropdown: null,
    dropdownOptions: options,
    multiselect: [],
    multiselectOptions: options,
    textarea: '',
    color: '#000000',
    checkbox: [1, 2],
    radio: 1,
    files: []
  }

  componentDidMount = async () => {}

  render = () => {
    console.log(this.state)

    return (
      <div className={s.main}>
        <div className={s.header}>
          <img src='/logo.png' />

          <div className={s.info}>Welcome to</div>
          <div className={s.name}>MumpUI</div>
          <div className={s.info}>
            A lightweight flexible
            <br />
            Design System for Developers
          </div>

          <div className={s.info}>
            Inspired by{' '}
            <a href='https://www.joahquin.com' target='_blank'>
              <span>Upasana</span>
            </a>
          </div>

          <div className={s.install}>npm i mumpui</div>

          <div className={s.links}>
            {['Typography', 'Components', 'Helpers', 'Stories'].map(x => (
              <Link key={x} to={'/' + x.toLowerCase()}>
                <div>{x}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className='mp-content'>
          <div className={s.showcase}>
            <div className={s.title}>Date Input</div>

            <Form onSubmit={() => console.log('Submit!')}>
              <div className={s.info}>General input text field</div>

              <Field label='Name'>
                <Input placeholder='Enter name..' />
              </Field>

              <div className={s.info}>Field group of input type tel, password & number</div>

              <Fields>
                <Field label='Mobile'>
                  <Input type='tel' placeholder='Enter mobile..' />
                </Field>

                <Field label='Password'>
                  <Input type='password' placeholder='Enter password..' />
                </Field>
              </Fields>

              <Fields>
                <Field label='Length'>
                  <Input type='number' placeholder='Length..' />
                </Field>
                <Field label='Width'>
                  <Input type='number' placeholder='Width..' />
                </Field>
                <Field label='Height'>
                  <Input type='number' placeholder='Height..' />
                </Field>
              </Fields>
            </Form>

            <div className={s.info}>Input field of type email & url</div>

            <Fields>
              <Field label='Email'>
                <Input type='email' placeholder='Enter email..' />
              </Field>

              <Field label='URL'>
                <Input type='url' placeholder='Enter url..' />
              </Field>
            </Fields>

            <div className={s.info}>Datetime input fields</div>

            <Fields>
              <Field label='Time'>
                <Input
                  type='time'
                  placeholder='Enter time..'
                  onChange={e => console.log(e.target.value)}
                  defaultValue='00:00'
                />
              </Field>

              <Field label='Date'>
                <Input
                  type='date'
                  placeholder='Enter date..'
                  onChange={e => console.log(e.target.value)}
                  defaultValue='2020-01-01'
                />
              </Field>

              <Field label='Month'>
                <Input
                  type='month'
                  placeholder='Enter month..'
                  onChange={e => console.log(e.target.value)}
                  defaultValue='2020-01'
                />
              </Field>
            </Fields>

            <div className={s.info}>Expandables</div>

            <Fields>
              <Field label='Dropdown'>
                <Dropdown
                  value={this.state.dropdown}
                  onSelect={dropdown => this.setState({ dropdown })}
                  options={options}
                  placeholder='Select..'
                />
              </Field>

              <Field label='Dropdown searchable'>
                <Dropdown
                  value={this.state.dropdown}
                  onSelect={dropdown =>
                    this.setState({
                      dropdown,
                      dropdownOptions: options
                    })
                  }
                  options={this.state.dropdownOptions}
                  placeholder='Select..'
                  onSearch={search =>
                    this.setState({
                      dropdownOptions: Dropdown.search(search, options)
                    })
                  }
                />
              </Field>
            </Fields>

            <Fields>
              <Field label='Multi-Select'>
                <Dropdown
                  value={this.state.multiselect}
                  onSelect={multiselect => this.setState({ multiselect })}
                  options={options}
                  placeholder='Select..'
                />
              </Field>

              <Field label='Multi-Select searchable'>
                <Dropdown
                  value={this.state.multiselect}
                  onSelect={multiselect =>
                    this.setState({
                      multiselect,
                      multiselectOptions: options
                    })
                  }
                  options={this.state.multiselectOptions}
                  placeholder='Select..'
                  onSearch={search =>
                    this.setState({
                      multiselectOptions: Dropdown.search(search, options)
                    })
                  }
                />
              </Field>
            </Fields>

            <div className={s.info}>Textarea</div>

            <Fields>
              <Field label='Textarea'>
                <Textarea
                  value={this.state.textarea}
                  onChange={e => this.setState({ textarea: e.target.value })}
                  placeholder='Enter some text here..'
                />
              </Field>

              <Field label='Textarea autorows'>
                <Textarea
                  value={this.state.textarea}
                  onChange={e => this.setState({ textarea: e.target.value })}
                  placeholder='Press enter thrice..'
                  autoRows={2}
                />
              </Field>
            </Fields>

            <div className={s.info}>Color</div>

            <Field label='Color'>
              <Input type='color' onChange={e => this.setState({ color: e.target.value })} value={this.state.color} />
            </Field>

            <div className={s.info}>Range</div>

            <Field label='Range'>
              <Range />
            </Field>

            <div className={s.info}>Checkbox & Radio</div>

            <div>
              <Field label='Checkbox'>
                <Checkbox
                  checked={this.state.checkbox}
                  options={[
                    { key: 1, label: 'Option 1' },
                    { key: 2, label: 'Option 2' },
                    { key: 3, label: 'Option 3' },
                    { key: 4, label: 'Option 4' },
                    { key: 5, label: 'Option 5' }
                  ]}
                  onChange={checkbox => this.setState({ checkbox })}
                />
              </Field>
            </div>

            <div>
              <Field label='Radio'>
                <Radio
                  selected={this.state.radio}
                  options={[
                    { key: 1, label: 'Option 1' },
                    { key: 2, label: 'Option 2' },
                    { key: 3, label: 'Option 3' },
                    { key: 4, label: 'Option 4' },
                    { key: 5, label: 'Option 5' }
                  ]}
                  onChange={radio => this.setState({ radio })}
                />
              </Field>
            </div>

            <div className={s.info}>Buttons</div>

            <Fields>
              <Button label='Submit' type='primary' />
              <Button label='Submit' type='default' />
              <Button label='Submit' type='danger' />
              <Button label='Submit' type='dashed' />
              <Button label='Submit' type='text' />
            </Fields>

            <div className={s.info}>File</div>

            <Field label='File'>
              <File
                label='Upload image'
                onChange={e => this.setState({ files: Array.from(e.target.files) })}
                accept='image/jpeg'
                multiple
              />
            </Field>

            <div className={s.preview}>
              {this.state.files.map(file => (
                <div>
                  <img src={URL.createObjectURL(file)} alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const options = Array(20)
  .fill(0)
  .map((x, i) => ({
    key: 'abc ' + (i + 1),
    label: 'This is abc ' + (i + 1)
  }))
