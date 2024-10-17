export function getUrlParam(sParam: string) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=')

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
    }
  }
  return false
}

export const isClient = typeof window !== 'undefined'
export const isServer = typeof window === 'undefined'

export const trim = (text?: string, maxLength: number = 20): string =>
  (text && text.slice(0, maxLength) + (text.length > maxLength ? '...' : '')) ?? ''
