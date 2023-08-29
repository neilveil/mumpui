import { Button, Field, Fields, File, Form, Input, Jinie, mutils } from 'lib'
import { useState } from 'react'
import s from './styles.module.scss'

export default function Main() {
  const [img1, setImg1] = useState('')
  const [img1Cropped, setImg1Cropped] = useState('')

  return (
    <div style={{ width: '100%', maxWidth: 600, margin: 'auto', padding: '1rem' }}>
      <Form onSubmit={() => console.log('Submit!')}>
        <Field label='Logo'>
          <File
            accept='image/*'
            onChange={async (e: any) => {
              const file = e.target.files[0]

              // const widthHeightBefore = await mutils.getImageWidthHeight(file)
              // const dataURL = await mutils.blobToDataURL(file)

              Jinie.init({
                img: file,
                minWidth: 100,
                minHeight: 100,
                aspectRatio: 1,
                maxSize: 1000000,
                onReady: img => console.log(img)
              })

              // const blob = await mutils.dataURLToBlob(dataURL)
              // const objectURL = await mutils.blobToObjectURL(blob)
              // const widthHeightAfter = await mutils.getImageWidthHeight(blob)

              // console.log(file, dataURL, blob, objectURL, widthHeightBefore, widthHeightAfter)
            }}
          >
            <div className='mp-input-template'>
              <div className='mp-input-value'>Upload file 1</div>
            </div>
          </File>
        </Field>

        <Field label='Name'>
          <Input placeholder='Enter name..' />
        </Field>

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

        <Field label='Files'>
          <div className={s.images}>
            <File
              onChange={(e: any) => {
                setImg1(URL.createObjectURL(e.target.files[0]))
              }}
            >
              <div className={s.box}>Add</div>
            </File>

            <div className={s.box}>Add</div>
          </div>
        </Field>

        <Fields>
          <Button>Cancel</Button>
          <Button type='primary'>Submit</Button>
        </Fields>
      </Form>

      <div style={{ marginTop: '2rem' }}>
        <img width='100%' src={img1Cropped} />
      </div>
    </div>
  )
}
