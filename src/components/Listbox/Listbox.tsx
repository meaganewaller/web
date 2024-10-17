import { Fragment, useState } from 'react'
import { Listbox as L, Transition } from '@headlessui/react'
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2'
import { BsChevronExpand } from 'react-icons/bs'
import cn from '@/utils/cn'

type ListboxProps<T extends ISelectable> = {
  id: string
  name: string
  placeholder?: string
  values?: T[]
  selected: T
  setSelected?: (v: T) => void
  disabled?: boolean
  className?: string
}

export interface ISelectable {
  key: string
  displayValue: string
}

export default function Listbox<T extends ISelectable>(props: ListboxProps<T>) {
  const { id, name, className, values, selected, setSelected, disabled } = props

  return (
    <L
      as="div"
      name={name}
      className={className}
      value={selected}
      by="key"
      onChange={(v: T) => {
        setSelected && setSelected(v)
      }}
      disabled={disabled}
    >
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <L.Button
              className={cn(
                disabled
                  ? 'bg-pink-100'
                  : 'bg-pink-300 shadow-sm ring-1 ring-inset ring-pink-500 focus:ring-1 focus:ring-pink-600',
                'relative w-full cursor-default rounded-md px-2 py-2 pl-3 pr-10 text-left text-pink-900 focus:outline-none sm:text-sm sm:leading-6',
              )}
              id={`${id}-select-button`}
            >
              <div className="flex items-center">
                <span className="block truncate font-medium text-pink-600">{selected?.displayValue}</span>
                {!disabled && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiChevronUpDown className="h-5 w-5 text-pink-400" aria-hidden="true" />
                  </span>
                )}
              </div>
            </L.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <L.Options
                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-pink-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                id={`${id}-select-options`}
              >
                {values?.map((v) => (
                  <L.Option
                    key={v.key}
                    className={({ active }) =>
                      cn(
                        active ? 'bg-pink-300 text-pink-500' : 'text-pink-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={v}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={cn(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {v.displayValue}
                        </span>

                        {selected ? (
                          <span
                            className={cn(
                              active ? 'text-pink-800' : 'text-pink-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <HiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </L.Option>
                ))}
              </L.Options>
            </Transition>
          </div>
        </>
      )}
    </L>
  )
}

// interface Item {
//   name: string;
//   value: string;
// }
//
// interface Props {
//   items: Item[];
//   defaultOptionIdx?: number;
//   onSelect: (item: Item) => void;
// }
//
// export default function Listbox({ items, defaultOptionIdx = 0, onSelect }: Props) {
//   const [selected, setSelected] = useState(items[defaultOptionIdx]);
//
//   return (
//     <div className="z-50 w-48">
//       <List
//         value={selected}
//         onChange={(item: Item) => {
//           setSelected(item)
//           onSelect(item)
//         }}
//       >
//         <div className="relative">
//           <List.Button className="relative w-full cursor-pointer rounded-lg border border-solid border-pink-500 bg-pink-300 py-2  pl-3 pr-10 text-left sm:text-sm text-pink-900">
//             <span className="block truncate">{selected.name}</span>
//             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//               <BsChevronExpand
//                 className="h-4 w-4 text-pink-900"
//                 aria-hidden="true"
//               />
//             </span>
//           </List.Button>
//           <Transition
//             as={Fragment}
//             enter="transition duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100 translate-y-1"
//             leave="transition duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0 translate-y-1"
//           >
//             <List.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-pink-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {items.map((item, index) => (
//                 <List.Option
//                   key={index}
//                   className={({ active }) =>
//                     `relative cursor-pointer select-none px-4 py-2 ${active ? 'bg-pink-100 text-pink-800' : 'text-pink-900'
//                     }`
//                   }
//                   value={item}
//                 >
//                   {({ selected }) => (
//                     <span
//                       className={`block truncate ${selected ? 'font-medium' : 'font-normal'
//                         }`}
//                     >
//                       {item.name}
//                     </span>
//                   )}
//                 </List.Option>
//               ))}
//             </List.Options>
//           </Transition>
//         </div>
//       </List>
//     </div>
//   )
// }
