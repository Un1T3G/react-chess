export const cn = (
  defaultClassName: string,
  object?: Object,
  ...args: (string | undefined)[]
): string => {
  let result = defaultClassName

  if (object) {
    for (const a of Object.entries(object)) {
      if (a[1]) {
        result = [result, a[0]].join(' ')
      }
    }
  }

  result = [result, ...args.filter((e) => !!e)].join(' ')

  return result
}
