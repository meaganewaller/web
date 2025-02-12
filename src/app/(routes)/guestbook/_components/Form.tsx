'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Button from '@/components/Button'

import Input from '@/components/Input'
import Textarea from '@/components/Textarea'

import cn from '@/utils/cn'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    const data = {
      name,
      email,
      website,
      message,
    }

    fetch(`/api/guestbook`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setName('')
        setEmail('')
        setWebsite('')
        setMessage('')
        toast.success('Message sent!')
      } else {
        toast.error('Error!')
      }
    })
  }

  return (
    <>
      <div className="mt-8">
        <p className="mx-auto mb-10 w-5/6 text-justify font-extra text-xl">
          leave a message in my guestbook! once approved, your message will be displayed above.
        </p>
      </div>
      <div>
        <form>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="name">name</label>
            </div>
            <div className="mt-1">
              <Input
                value={name}
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                placeholder="Darlene Alderson"
                required={true}
                aria-describedby="name-required"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="email">email</label>
            </div>
            <div className="mt-1">
              <Input
                value={email}
                type="email"
                name="email"
                id="email"
                required={true}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="dolores.haze@virtualrealty.com"
                aria-describedby="email-required"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="website">website</label>
            </div>
            <div className="mt-1">
              <Input
                value={website}
                id="website"
                placeholder="https://virtualrealty.com"
                type="url"
                name="website"
                required={false}
                onChange={(e) => {
                  setWebsite(e.target.value)
                }}
                aria-describedby="website-optional"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              leave a message
            </label>
            <div className="mt-1">
              <Textarea
                rows={4}
                name="message"
                required={true}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                placeholder="long time visitor, first time commenter, love your work!"
                aria-describedby="message-required"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e)
              }}
              className={cn(
                'text-xl rounded-xl bg-violet-500 px-5 py-3 font-extra uppercase text-violet-900 outline-none items-center border-violet-700 border-2',
                'focus:ring-violet-500 focus:ring focus:ring-offset-1 focus:ring-offset-violet-700',
                'transition-all duration-300 ease-in-out cursor-pointer',
                'hover:border-violet-600 hover:bg-violet-400',
                'dark:bg-lime-300 dark:border-lime-700 dark:ring-lime-600 dark:text-lime-900 dark:placeholder-lime-700',
                'dark:hover:bg-lime-400 dark:hover:border-lime-600 dark:hover:text-lime-900 dark:hover:placeholder-lime-700',
              )}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

// type FormProps = {
//   user: any;
// }
//
// const SubmitButton = () => {
//   const { pending } = useFormStatus();
//
//   return (
//     <button
//       type='submit'
//       disabled={pending}
//       className="focus:ring-turquoise-500 text-md justify-center rounded-md border border-transparent bg-pink-200 px-4 py-2 font-medium text-pink-700 hover:bg-pink-400 hover:text-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
//       aria-disabled={pending}
//     >
//       Submit
//     </button>
//   )
// }
//
// const createMessage = async (formData: FormData) => {
//   return await fetch('/api/guestbook', {
//     method: 'POST',
//     body: formData,
//   });
// }
//
// const Form = (props: FormProps) => {
//   const [name, setName] = React.useState('')
//   const [email, setEmail] = React.useState('')
//   const [website, setWebsite] = React.useState('')
//   const [message, setMessage] = React.useState('')
//
//   const { user } = props
//   const formRef = React.useRef<HTMLFormElement>(null)
//
//   const createMessageHandler = async (formData: FormData) => {
//     const toastId = toast.loading('Sending message...');
//     const result = await createMessage(formData);
//
//     toast.dismiss(toastId);
//
//     if (result.statusText === 'OK') {
//       toast.success('Message sent!');
//       formRef?.current?.reset();
//     } else {
//       toast.error(`Message failed to send: ${result.statusText}`)
//     }
//
//   }
//
//   return (
//     <form action={createMessageHandler} ref={formRef}>
//       <div className="mb-4">
//         <div className="flex justify-between">
//           <label htmlFor="name" className="block text-sm font-medium">
//             name
//           </label>
//         </div>
//         <div className="mt-1">
//           <input
//             value={name}
//             type="text"
//             name="name"
//             id="name"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             className="block w-full rounded-md border-pink-300 bg-pink-100 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
//             placeholder="Darlene Alderson"
//             required={true}
//             aria-describedby="name-required"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <div className="flex justify-between">
//           <label htmlFor="email" className="block text-sm font-medium">
//             email
//           </label>
//         </div>
//         <div className="mt-1">
//           <input
//             value={email}
//             type="email"
//             name="email"
//             id="email"
//             required={false}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             className="block w-full rounded-md border-pink-300 bg-pink-100 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
//             placeholder="dolores.haze@virtualrealty.com"
//             aria-describedby="email-optional"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <div className="flex justify-between">
//           <label htmlFor="website" className="block text-sm font-medium">
//             website
//           </label>
//         </div>
//         <div className="mt-1">
//           <input
//             value={website}
//             type="url"
//             id="website"
//             name="website"
//             required={false}
//             placeholder="https://fsociety.com"
//             onChange={(e) => {
//               setWebsite(e.target.value);
//             }}
//             className="block w-full rounded-md border-pink-300 bg-pink-100 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
//             aria-describedby="website-optional"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-sm font-medium">
//           leave a message
//         </label>
//         <div className="mt-1">
//           <textarea
//             rows={4}
//             name="message"
//             required={true}
//             value={message}
//             id="message"
//             onChange={(e) => {
//               setMessage(e.target.value);
//             }}
//             className="block w-full rounded-md border-pink-300 bg-pink-100 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
//             placeholder="long time visitor, first time commenter, love your work!"
//             aria-describedby="message-required"
//           ></textarea>
//         </div>
//       </div>
//
//       <div className="mb-2 flex gap-3">
//         <div className="flex justify-end gap-2">
//           <SubmitButton />
//         </div>
//       </div>
//     </form>
//   )
// }
//
// export default Form
