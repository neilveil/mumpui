export const s1 = `
<Fields>
  <Field label="Textarea">
    <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type here..' />
  </Field>

  <Field label="Textarea with auto height">
    <Textarea value={value} onChange={e => setValue(e.target.value)} placeholder='Type here..' autoHeight />
  </Field>
</Fields>
`
