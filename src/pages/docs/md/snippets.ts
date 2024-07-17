export const s1 = `
<html>
  <head>
    ..
  </head>
  <body>
    ..
    <script src="https://cdn.jsdelivr.net/npm/marked@12.0.2/lib/marked.umd.min.js"></script>
  </body>
</html>
`

export const s2 = `
const content = '# Title\\n\\nHello there!'

..

<MD content={content} />
`

export const s3 = `
const md = await MD.fetch('/typography.md')
`

export const s4 = `
\`\`\`
{
  "name": "markdown"
}
\`\`\`

<!-- meta-break -->

# Title

Hello there!
`

export const s5 = `
const { meta, content } = MD.parse(md)
`
