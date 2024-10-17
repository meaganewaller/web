import cn from '@/utils/cn'
import * as React from 'react'

interface TextareaProps {
  rows?: number
  name: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  ariaDescribedby?: string
}

function Textarea(props: TextareaProps) {
  let { rows, name, required, value, onChange, placeholder, ariaDescribedby } = props

  rows = rows || 4
  required = required || false
  placeholder = placeholder || ''
  ariaDescribedby = ariaDescribedby || ''

  return (
    <textarea
      className={cn('focus:ring-offset-violet-700 focus:ring-violet-500')}
      rows={rows}
      name={name}
      required={required}
      value={value}
      id={name}
      onChange={onChange}
      placeholder={placeholder}
      aria-describedby={ariaDescribedby}
    ></textarea>
  )
}

export default Textarea
