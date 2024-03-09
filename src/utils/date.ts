import { format, formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { match, P } from 'ts-pattern'
import isDate from 'lodash/isDate'

export const getYearDiffWithMonth = (startDate: Date, endDate: Date) => {
  const ms = endDate.getTime() - startDate.getTime()

  const date = new Date(ms)

  return Math.abs(date.getUTCFullYear() - 1969)
}

export const dateFormatLong = (date: any) => {
  const d = isDate(date) ? date : new Date(date)
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const dateFullLong = (date: any) => {
  const d = isDate(date) ? date : new Date(date)
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export const dateFormatMicroformat = (date: any) => {
  const d = isDate(date) ? date : new Date(date)
  return d.toISOString()
}

export const getDateISO = () => new Date().toISOString()
export const formatDateToISO = (date: Date) => date.toISOString()

const getActualDate = (date: string | Date) => {
  return match(date)
    .with(P.string, (value) => new Date(value))
    .with(P.instanceOf(Date), (value) => value)
    .exhaustive()
}

export const formatDate = (date: string | Date, type?: 'full' | 'day-month' | 'month-year') => {
  const token = match(type)
    .with('month-year', () => 'MMMM yyyy')
    .with('day-month', () => 'dd MMMM')
    .otherwise(() => 'eeee, MMMM dd, yyyy')

  const actualDate = getActualDate(date)
  return format(actualDate, token, { locale: enUS })
}

export const formatDistance = (date: string | Date) => {
  const actualDate = getActualDate(date)
  return formatDistanceToNow(actualDate, { locale: enUS })
}
