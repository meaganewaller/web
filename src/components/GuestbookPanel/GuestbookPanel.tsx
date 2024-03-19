'use client';

import type { FormEvent } from 'react';
import { useRef, useState } from 'react';

import { FaPaperPlane as PaperPlane } from 'react-icons/fa';
import Button from '@/components/Button';
import Input from '@/components/Input';
import cn from '@/utils/cn';

interface GuestbookPanelProps {
  onSendMessage: (message: string, name: string, email: string) => Promise<void>;
}

const GuestbookPanel = ({ onSendMessage }: GuestbookPanelProps) => {
  const messageInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSending) return

    setIsSending(true)

    try {
      await onSendMessage(message, name, email);
      setMessage('');
      setEmail('');
      setName('');
    } catch (err) {
      console.error('Error sending message', err);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        messageInput.current?.focus();
      }, 0);
    }
  }

  return (
    <div className="bg-gradient-to-tr from-pink-300 to-orange-200">
      <h2 className="text-2xl font-bold text-center py-4 font-monoItalic text-pink-500">Leave a message</h2>
      <form
        className={cn('px-8 pt-6 pb-8 mb-4 rounded')}
        onSubmit={handleSubmit}
      >
        <div className="mb-4 md:flex md:flex-col md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex w-full mb-4 md:mr-2 md:mb-0 gap-x-4">
              <Input
                type="text"
                placeholder="Name"
                ref={nameInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={cn('text-lg')}
                autoFocus
              />
              <Input
                type="email"
                placeholder="Email"
                ref={emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn('text-lg')}
              />
            </div>
            <Input
              type="text"
              placeholder="Message"
              ref={messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={cn('h-24 text-lg')}
            />
          </div>
          <div className="items-center my-4">
            <Button
              color="pink"
              type="submit"
              isDisabled={isSending || !message.trim() || !name.trim() || !email.trim()}
              isLoading={isSending}
            >
              <PaperPlane className={cn('rotate-45')} size={24} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default GuestbookPanel
