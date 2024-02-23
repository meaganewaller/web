import tw, { styled, css } from "twin.macro"
import type { FC, ReactElement } from 'react'
import { useState, useRef } from 'react'

interface CodeProps {
  children: ReactElement
  language?: string
  showLines?: boolean
  showCopyButton?: boolean
  showFooter: boolean
  fileName?: string
}

export const CodeContainer = styled.div(({ showFooter }: { showFooter: boolean }) => [
  tw`font-mono rounded-lg relative overflow-auto my-2 mx-0 py-6 px-4 pr-0`,
  showFooter && tw`mb-8`
])

export const CodeStyled = styled.pre`
  ${tw`rounded-md bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto`}
`

export const CodeFooter = styled.div`
  ${tw`flex justify-between items-center text-xs text-gray-500`}
`

export const CopyBtn = styled.button(({ isCopied }: { isCopied: boolean }) => [
  tw`border-pink-300/50 absolute bottom-12 right-3 flex h-8 w-12 items-center justify-center rounded-lg border bg-pink-300/20 text-pink-600 dark:bg-purple-400/20 dark:text-purple-100 transition-all`,
  isCopied && tw`border-pink-300/50 translate-x-0 w-20`,
])

const Code: FC<CodeProps> = ({ children, language, showLines, showCopyButton, showFooter, fileName }) => {
  const codeRef = useRef<HTMLPreElement>(null)
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      const content = codeRef.current?.textContent || ''
      await navigator.clipboard.writeText(content)

      if (!isCopied) {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1000)
      }
    } catch (err) {
      setIsCopied(false)
    }
  }

  const selected = language === 'plaintext' ? 'plaintext' : undefined

  const footerProps = {
    lines: showLines ? children.props.children.split('\n').length : undefined,
    language,
    selected,
  } as const

  return (
    <CodeContainer showFooter={showFooter}>
      {showCopyButton && (
        <CopyBtn
          isCopied={isCopied}
          type='button'
          onClick={copyToClipboard}
          title="Copy to Clipboard"
          aria-label="Copy to Clipboard"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </CopyBtn>
      )}
      <CodeStyled ref={codeRef}>{children}</CodeStyled>
      {showFooter && (
        <CodeFooter>
          {fileName && (
            <div tw="flex items-center">
              {fileName}
            </div>
          )}
          <div tw="flex items-center">
            {language}
          </div>
          <div tw="flex items-center">
            {footerProps.lines} lines
          </div>
        </CodeFooter>
      )}
    </CodeContainer>
  )
}

export default Code

// import { PropsWithChildren, useRef, useState } from "react"
// import { cn } from "@/utils/cn"

// import {
//   PiFileCode,
//   PiFileCss,
//   PiFileHtml,
//   PiFileJs,
//   PiFileJsx,
//   PiFileTs,
//   PiFileTsx,
//   PiFileText,
//   PiTerminalWindow,
//   PiCheckCircle,
//   PiCopy,
// } from "react-icons/pi"

// interface CodeFooterProps {
//   lines?: number
//   language?: string
//   selected?: string
// }

// function CodeFooter({
//   lines,
//   language,
//   selected,
// }: CodeFooterProps) {
//   return (
//     <div tw="flex justify-between items-center text-xs text-gray-500">
//       {selected && (
//         <div className={cn('flex items-center', selected === 'plaintext' && 'hidden')}>
//           Selected: {selected}
//         </div>
//       )}
//       {language && (
//         <div className={cn('flex items-center', language === 'plaintext' && 'hidden')}>
//           {language}
//         </div>
//       )}
//       {lines && (
//         <div className={cn('flex items-center', lines === 0 && 'hidden')}>
//           {lines} lines
//         </div>
//       )}
//     </div>
//   )
// }

// export type CodeProps = CodeFooterProps & {
//   withCopyButton?: boolean
//   withFooter?: boolean
// }

// const CodeStyled = styled.pre`
//   ${tw`rounded-md bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto`}
// `

// const CodeBlockContainer = styled.div(({ withFooter }: { withFooter: boolean}) => [
//   tw`font-mono rounded-lg relative overflow-auto my-2 mx-0 py-6 px-4 pr-0`,
//   withFooter && tw`mb-4`
// ])

// const CopyBtn = styled.button(({ isCopied }: { isCopied: boolean }) => [
//   tw`border-pink-300/50 absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg border bg-pink-300/20 text-pink-600 dark:bg-purple-400/20 dark:text-purple-100 transition-all`,
//   isCopied && tw`border-pink-300/50 translate-x-0`,
// ])

// function Code({
//   withCopyButton = true,
//   withFooter = true,
//   children,
// }: PropsWithChildren<CodeProps>) {
//   const codeRef = useRef<HTMLPreElement>(null)
//   const [isCopied, setIsCopied] = useState(false)

//   const language = /language-(\w+)/.exec(props.className || '')?.[1]

//   const copyToClipboard = async () => {
//     try {
//       const content = codeRef.current?.textContent || ''
//       await navigator.clipboard.writeText(content)

//       if (!isCopied) {
//         setIsCopied(true)
//         setTimeout(() => setIsCopied(false), 1000)
//       }
//     } catch (err) {
//       setIsCopied(false)
//     }
//   }

//   return (
//     <CodeBlockContainer withFooter={withFooter}>
//       {withCopyButton && (
//         <CopyBtn
//           isCopied={isCopied}
//           type='button'
//           onClick={copyToClipboard}
//           title="Copy to Clipboard"
//           aria-label="Copy to Clipboard"
//         >
//           {isCopied ? <PiCheckCircle className="text-green-800" /> : <PiCopy />}
//         </CopyBtn>
//       )}
//       <div className={`rounded-md bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto`}>
//         <CodeStyled ref={codeRef}>{children}</CodeStyled>
//       </div>
//       {withFooter && (
//         <CodeFooter language={language} />
//       )}
//     </CodeBlockContainer>
//   )
// }

// export default Code
