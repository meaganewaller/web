'use client';

import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };

    fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSuccess(true);
        setError(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError(true);
      }
    });
  };

  return (
    <>
      <div className="mt-8">
        <p className="mx-auto mb-10 w-5/6 text-justify">
          hey there! got questions, ideas, or just want to chat? fill out the form below and i&apos;ll get back to you
          as soon as i can.
        </p>
        {success && (
          <div
            className="border-turquoise-400 bg-turquoise-50 text-turquoise-700 mb-4 flex items-center border-l-4 p-4 text-sm"
            role="alert"
          >
            <span className="sr-only">Success:</span>
            <div>
              <span className="font-bold">Success!</span> Your message has been sent.
            </div>
          </div>
        )}
        {error && (
          <div
            className="border-coral-400 bg-coral-50 text-coral-700 mb-4 flex items-center border-l-4 p-4 text-sm"
            role="alert"
          >
            <span className="sr-only">Error:</span>
            <div>
              <span className="font-bold">Error!</span> There was an error sending your message.
            </div>
          </div>
        )}
      </div>

      <div>
        <form>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="name" className="block text-sm font-medium">
                name
              </label>
            </div>
            <div className="mt-1">
              <input
                value={name}
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block w-full rounded-md border-pink-300 bg-pink-50 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="Darlene Alderson"
                required={true}
                aria-describedby="name-required"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="email" className="block text-sm font-medium">
                email
              </label>
            </div>
            <div className="mt-1">
              <input
                value={email}
                type="email"
                name="email"
                id="email"
                required={true}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="block w-full rounded-md border-pink-300 bg-pink-50 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="dolores.haze@virtualrealty.com"
                aria-describedby="email-required"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="subject" className="block text-sm font-medium">
                subject
              </label>
            </div>
            <div className="mt-1">
              <select
                value={subject}
                id="subject"
                name="subject"
                required={true}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="block w-full rounded-md border-pink-300 bg-pink-50 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                aria-describedby="subject-required"
              >
                <option disabled={true}>Select one</option>
                <option>General Inquiry</option>
                <option>Tech-related Question</option>
                <option>Blog Post Ideas</option>
                <option>Collaboration Opportunity</option>
                <option>Guest Post Submission</option>
                <option>Social Media Connection</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              what would you like to talk about?
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="message"
                required={true}
                value={message}
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="block w-full rounded-md border-pink-300 bg-pink-50 text-pink-900 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                placeholder="i have a question about your blog post on the how to ..."
                aria-describedby="message-required"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type='submit'
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="focus:ring-turquoise-500 text-md justify-center rounded-md border border-transparent bg-pink-200 px-4 py-2 font-medium text-pink-700 hover:bg-pink-400 hover:text-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
