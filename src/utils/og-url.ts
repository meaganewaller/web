export default function ogUrl({
  title = "meagan waller",
  description = "a web log",
  image = {}
} = {}) {
  const ogBaseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`

  const ogTitle = encodeURIComponent(title.replace(/'/g, ''));
  const ogDescription = encodeURIComponent(description.replace(/'/g, ''));

  const ogImage = '';
  const ogURLParts = [
    `title=${ogTitle}`,
    ...(ogDescription ? [`description=${ogDescription}`] : []),
    ...(ogImage ? [`image=${ogImage}`] : [])
  ]

  return `${ogBaseUrl}?${ogURLParts.join('&')}`
}
