import { type option } from '.'

export default function (search: string = '', options: option[] = [], caseSensitive: boolean = false) {
  if (search)
    return options.filter(({ label }) =>
      caseSensitive ? label.includes(search) : label.toLowerCase().includes(search.toLowerCase())
    )
  else return options
}
