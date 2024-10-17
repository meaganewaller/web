import type { FC } from 'react'
import tw, { styled } from 'twin.macro'

export interface NoteProps {
  children?: React.ReactNode
  title?: string
  type: 'info' | 'warning' | 'error' | 'success'
}

const NoteContainer = styled.div`
  ${tw`m-5 max-w-2xl`}
`

const NoteTitle = styled.span(({ type }: { type: string }) => [
  tw`absolute py-0 px-[0.5em] ml-1 -mt-[10px] bg-pink-200 font-mono text-xs font-bold tracking-wide text-pink-200 uppercase border border-solid rounded-lg`,
  type === 'info' &&
    tw`border-teal-500 dark:border-teal-500 dark:text-teal-500 dark:bg-teal-50 text-teal-900 bg-teal-200`,
  type === 'warning' && tw`border-red-500 text-red-500`,
  type === 'error' && tw`border-orange-500 text-orange-500`,
  type === 'success' && tw`border-green-500 text-green-500`,
])

const NoteContent = styled.div(({ type }: { type: string }) => [
  tw`p-6 border border-solid rounded-lg font-sans tracking-wide text-lg`,
  type === 'info' &&
    tw`border-teal-500 bg-teal-200/50 dark:border-teal-200 dark:bg-teal-200/90 dark:text-teal-900 text-teal-900`,
  type === 'warning' && tw`border-red-500 bg-red-200/50`,
  type === 'error' && tw`border-orange-500 bg-orange-200/50`,
  type === 'success' && tw`border-green-500 bg-green-200/50`,
])

const Note: FC<NoteProps> = ({ children, title, type = 'info' }) => {
  return (
    <NoteContainer>
      <NoteTitle type={type}>{title}</NoteTitle>
      <NoteContent type={type}>{children}</NoteContent>
    </NoteContainer>
  )
}

export default Note
