export const s1 = `
const [files, setFiles] = useState([])

..

<Field label='Upload images'>
  <File
    accept='image/jpeg'
    onChange={e => setFiles(Array.from(e.target.files))}
    multiple
  >
    <Button>Upload</Button>
  </File>
</Field>

{!!files.length && (
  <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
    {files.map((file, i) => (
      <div key={i}>
        <img
          width='100%'
          src={URL.createObjectURL(file)}
          style={{ width: '100%', maxHeight: '10rem' }}
        />
      </div>
    ))}
  </div>
)}
`
