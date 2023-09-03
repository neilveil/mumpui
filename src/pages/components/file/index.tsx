import { Docs } from 'components'
import { Button, Field, File, Range } from 'lib'
import { useState } from 'react'

export default function Main() {
  const [files, setFiles] = useState<any>([])

  return (
    <Docs type='Component' name='File'>
      <Docs.Showcase
        info={<span></span>}
        code={`
const [files, setFiles] = useState([])

..

<Field label='Upload image'>
  <File
    label='Select images'
    accept='image/jpeg'
    onChange={(e) => setFiles(Array.from(e.target.files))}
    multiple
  />
</Field>

<div style={{ display: 'flex', gap: '1rem' }}>
  {files.map((file) => (
    <div>
      <img width='100%' src={URL.createObjectURL(file)} alt='' />
    </div>
  ))}
</div>
`}
      >
        <File accept='image/jpeg' onChange={(e: any) => setFiles(Array.from(e.target.files))} multiple>
          <Button>Upload</Button>
        </File>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          {files.map((file: any) => (
            <div>
              <img width='100%' src={URL.createObjectURL(file)} alt='' />
            </div>
          ))}
        </div>
      </Docs.Showcase>

      <Docs.Props title='Button' fields={[{ name: '..', usage: 'All input element props' }]} />
    </Docs>
  )
}
