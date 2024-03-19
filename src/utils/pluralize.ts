export default function pluralize(word: string, progress: number) {
  let suffix = ''
  if (word.lastIndexOf('y') === word.length - 1) {
    if (progress !== 1) {
      word = word.slice(0, -1)
    }
    suffix = 'ies'
  } else {
    suffix = 's'
  }

  return `${word}${progress === 1 ? '' : suffix}`
}
