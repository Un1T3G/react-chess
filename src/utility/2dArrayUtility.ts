export const mapTo1DArray = <T>(map: T[][]): T[] => {
  let array: T[] = []

  map.forEach((e) => (array = array.concat(e)))

  return array
}
