import cn from '@/utils/cn'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TableProps = DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>

export default function Table({ children, className, ...rest }: TableProps) {
  return (
    <div className="w-full overflow-scroll">
      <table className={cn('table-auto', className)} {...rest}>
        {children}
      </table>
    </div>
  )
}

export function TableHead({ children, className, ...rest }: TableProps) {
  return <thead className={cn('table-auto', className)} {...rest} />
}

export function TableBody({ children, className, ...rest }: TableProps) {
  return <tbody className={cn('table-auto', className)} {...rest} />
}

export function TableRow({ children, className, ...rest }: TableProps) {
  return <tr className={cn('table-auto', className)} {...rest} />
}

export function TableData({ children, className, ...rest }: TableProps) {
  return (
    <td className={cn('border px-4 py-2', className)} {...rest}>
      {children}
    </td>
  )
}
