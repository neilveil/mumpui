export const s1 = `
const content = '# Title\\n\\nHello there!'

..

<MD>{content}</MD>
`

export const s2 = `
const md = await MD.fetch('/typography.md')
`

export const s3 = `
\`\`\`
{
  "name": "markdown"
}
\`\`\`

<!-- meta-break -->

# Title

Hello there!
`

export const s4 = `
const { meta, content } = MD.parse(md)
`
