import { Docs } from 'components'
import { Button, Field, File } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [files, setFiles] = useState<any>([])

  return (
    <Docs name='File upload'>
      <Docs.Showcase title={<span></span>} code={snippets.s1}>
        <Field label='Upload images'>
          <File accept='image/jpeg' onChange={(e: any) => setFiles(Array.from(e.target.files))} multiple>
            <Button>Upload</Button>
          </File>
        </Field>

        {!!files.length && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            {files.map((file: any, i: number) => (
              <div key={i}>
                <img src={URL.createObjectURL(file)} style={{ width: '100%', maxHeight: '10rem' }} />
              </div>
            ))}
          </div>
        )}
      </Docs.Showcase>

      <Docs.Props title='File' type='component' fields={[{ name: '..', usage: 'All input element props' }]} />
    </Docs>
  )
}
