export const getTextWidthWithCanvas = (text: string, font?: string) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.font = font ?? '12px Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    return Number(ctx.measureText(text).width.toFixed(2))
  }
  return 0
}

const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'

export function randomString(length: number) {
  let result = ''
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
  return result
}

export const getPurifyHref = (href: string) => {
  if (!href)
    return ''

  return href.replace(/javascript:/ig, '').replace(/vbscript:/ig, '').replace(/data:/ig, '')
}