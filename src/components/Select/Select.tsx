import { Listbox, Transition } from '@headlessui/react'
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2'
import { Fragment, forwardRef } from 'react'
import cn from '@/utils/cn'

interface SelectProps {
  name: string
  className?: string
  defaultValue?: string
  onChange: (value: any) => any
  options?: {
    disabled?: boolean
    helper?: string
    label: string
    selected?: boolean
    value: number | string
  }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select({
  className,
  defaultValue,
  onChange,
  options,
  name,
}) {
  const selected = options?.find((option) => option.selected) || options?.[0]

  return (
    <Listbox value={defaultValue || selected?.value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button
          id={name}
          className={cn(
            'flex w-full rounded-xl border px-3 py-2 text-left outline-none font-extra text-xl',
            'items-center justify-between',
            'bg-violet-300 border-violet-700 text-violet-900',
            'transition-all duration-300 ease-in-out cursor-pointer',
            'focus:ring-violet-500 focus:ring focus:ring-offset-1 focus:ring-offset-violet-700',
            'active:ring-violet-500 active:ring active:ring-offset-1 active:ring-offset-violet-700',
            'dark:bg-lime-300 dark:border-lime-700 dark:ring-lime-600 dark:text-lime-900 dark:placeholder-lime-500',
            selected?.disabled ? 'text-violet-700 dark:text-lime-700' : '',
            className,
          )}
        >
          <span className="text-md">{selected?.label}</span>
          <HiChevronUpDown className="mr-1 size-5" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options
            className={cn(
              'overscroll-contain absolute z-[5] mt-2 max-h-60 w-full overflow-auto rounded-xl border shadow-sm focus:outline-none',
              'border-violet-700 bg-violet-300 font-extra text-xl',
              'focus:ring-violet-500 focus:ring focus:ring-offset-1 focus:ring-offset-violet-700',
              'dark:bg-lime-300 dark:border-lime-700 dark:ring-lime-600 dark:text-lime-900 dark:placeholder-lime-500',
            )}
            id={name}
          >
            {options?.map((option, id) => (
              <Listbox.Option
                className={({ active }: { active: boolean }) =>
                  cn(
                    { 'dropdown-active': active },
                    'm-2 cursor-pointer rounded-lg',
                    option.disabled ? 'opacity-50 cursor-not-allowed italic' : '',
                    'text-violet-900 hover:text-violet-800',
                    'dark:text-lime-900 dark:hover:text-lime-800',
                  )
                }
                disabled={option.disabled}
                key={id}
                value={option.value}
              >
                {({ selected }) => (
                  <div
                    className={cn(
                      'flex flex-col space-y-0 px-2 py-1.5',
                      option.disabled && 'hover:bg-transparent hover:cursor-not-allowed',
                    )}
                  >
                    <span className="flex w-full items-center justify-between space-x-3">
                      <span className={cn('block truncate', option.disabled && '')}>{option.label}</span>
                      {selected ? <HiCheck className="size-5" /> : null}
                    </span>
                    {option.helper ? <span className="text-xs">{option.helper}</span> : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
})

export default Select
