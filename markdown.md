```
{
  "name": "markdown"
}
```

<!-- meta-break -->

# Markdown

## Inline elements example

Risus sed vulputate odio ut enim blandit volutpat. <em>Congue eu consequat</em> ac felis donec et. Arcu felis [MumpUI](https://neilveil.github.io/mumpui) ut tristique et egestas. <mark>Senectus et netus et malesuada fames. Amet risus nullam eget felis.</mark> Est ullamcorper eget nulla facilisi <del>etiam</del> dignissim. Sed felis eget velit aliquet. Morbi tincidunt ornare massa eget.

Orci eu lobortis elementum nibh. Euismod _lacinia_ at quis risus. <b>Condimentum</b> lacinia quis vel eros donec.

Pulvinar pellentesque habitant morbi tristique. Sapien <i>pellentesque habitant</i> morbi tristique. Mi eget `mauris` pharetra et <u>ultrices neque</u> ornare aenean euismod.

- Bold `**demo**` `__demo__` `<b>demo</b>`
- Italics `*demo*` `_demo_` `<i>demo</i>`
- Underline `<u>demo</u>`
- Highlight `<mark>demo</mark>`
- Strike `~~demo~~` `<del>demo</del>`
- Code `<code>demo</code>`
- Link `[Alt](link)`

## Block elements example

### Headers

# H1

## H2

### H3

#### H4

---

### List

#### Ordered list

1. First item
2. Second item
3. Third item

#### Unordered list

- First item
- Second item
- Third item

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Image & caption

![](/image.jpeg)

<div class="caption">Risus sed vulputate odio ut enim blandit volutpat. Risus sed vulputate odio ut enim blandit volutpat.</div>

## Slider

### Default

<div class="slider">
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
</div>

### x2

<div class="slider x2">
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
</div>

### x3

<div class="slider x3">
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
</div>

### x4

<div class="slider x4">
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
  <img src="/image.jpeg" />
</div>

## Youtube video integration

<iframe data-youtube src="https://www.youtube.com/embed/xbhCPt6PZIU" style="border-radius: 1rem"></iframe>

## Break

<div class="break">*****</div>

## Spacing

<div class="spacing">
  Hello there!
</div>

## Line break

<br />
<br />
<br />

## Code block

```jsx
export default function Main() {
  return <div>Hello there!</div>
}
```

<style>
  .mp-code {
    max-height: 50vh;
    overflow: auto;
  }
</style>

## Comment

<!-- Hello there! -->

<br />
<br />
<br />

[Source code →](/mumpui/markdown.md)
