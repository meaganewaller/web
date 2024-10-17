'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Select from '@/components/Select'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'

import cn from '@/utils/cn'

const subjects = [
  {
    label: 'Select a Subject',
    value: 'select-a-subject',
    disabled: true,
    selected: true,
  },
  {
    label: 'General Inquiry',
    value: 'general-inquiry',
    disabled: false,
    selected: false,
  },
  {
    label: 'Tech-related Question',
    value: 'tech-question',
    disabled: false,
    selected: false,
  },
  {
    label: 'Blog Post Ideas',
    value: 'blog-ideas',
    disabled: false,
    selected: false,
  },
  {
    label: 'Collaboration Opportunity',
    value: 'collaboration',
    disabled: false,
    selected: false,
  },
  {
    label: 'Guest Post Submission',
    value: 'guest-post',
    disabled: false,
    selected: false,
  },
  {
    label: 'Social Media Connection',
    value: 'social-media',
    disabled: false,
    selected: false,
  },
  {
    label: 'Other',
    value: 'other',
    disabled: false,
    selected: false,
  },
]

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState(subjects[0])
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    const data = {
      name,
      email,
      subject,
      message,
    }

    fetch(`/api/contact`, {
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
        setSubject(subjects[0])
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
          hey there! got questions, ideas, or just want to chat? fill out the form below and i&apos;ll get back to you
          as soon as i can.
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
            <div>
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
              <label htmlFor="subject">subject</label>
            </div>
            <div className="mt-1">
              <Select
                name="subject"
                onChange={(e) => {
                  setSubject(e)

                  subjects.forEach((subject) => {
                    if (subject.value === e) {
                      subject.selected = true
                    } else {
                      subject.selected = false
                    }
                  })
                }}
                options={subjects}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message">what would you like to talk about?</label>
            <div className="mt-1">
              <Textarea
                rows={4}
                name="message"
                required={true}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                placeholder="i have a question about your blog post on the how to ..."
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
                'dark:border-lime-900',
                'dark:focus:ring-lime-500 dark:focus:ring dark:focus:ring-offset-1 dark:focus:ring-offset-lime-700',
                'transition-all duration-300 ease-in-out cursor-pointer',
                'dark:bg-lime-400 dark:text-lime-900 dark:hover:bg-lime-500 dark:data-[pressed]:bg-lime-700 dark:active:bg-lime-700',
                'hover:border-violet-600 hover:bg-violet-400',
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
