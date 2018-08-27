export function remove<T> (arr: Array<T>, item: T) {
  const len = arr.length
  let shift = 0
  for (let i = 0; i < len; ++i) {
    shift += +(arr[i] === item)
    arr[i] = arr[i + shift]
  }

  arr.length -= shift
}
