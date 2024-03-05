'use client'

import { FC, memo } from 'react'
import { useTheme } from 'next-themes'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tw, { styled } from 'twin.macro'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { atelierPlateauLight, atelierPlateauDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  language: string
  value: string
}

interface languageMap {
  [key: string]: string | undefined
}

export const languages: languageMap = {
  javascript: '.js',
  typescript: '.ts',
  jsx: '.jsx',
  tsx: '.tsx',
  css: '.css',
  html: '.html',
  plaintext: '.txt',
  shell:
    '.sh',
  bash: '.sh',
  json: '.json',
  markdown: '.md',
  python: '.py',
  graphql: '.graphql',
  yaml: '.yaml',
  yml: '.yaml',
  sql: '.sql',
  docker: '.dockerfile',
  ruby: '.rb',
  go: '.go',
  php: '.php',
  'c++': '.cpp',
  'c#': '.cs',
  swift: '.swift',
  'objective-c': '.m',
  rust: '.rs',
  haskell: '.hs',
  lua: '.lua'
}

export const generateRandomString = (length: number, lowercase = false) => {
  const characters = lowercase ? 'abcdefghijklmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLength = characters.length
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const Code: FC<Props> = memo(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const syntaxColor = currentTheme === 'dark' ? atelierPlateauDark : atelierPlateauLight

  const downloadAsFile = () => {
    if (typeof window === 'undefined') {
      return
    }

    const fileExtension = languages[language] || '.file'
    const suggestedFileName = `code-${generateRandomString(5)}${fileExtension}`
    const fileName = window.prompt('Save as', suggestedFileName)

    if (!fileName) {
      return
    }

    const blob = new Blob([value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const onCopy = () => {
    if (isCopied) {
      return
    }
    copyToClipboard(value)
  }

  return (
    <div className="relative w-full font-sans bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <span className="text-xs lowercase">{language}</span>
        <div className="flex items-center space-x-1">
          <button
            className="hover:bg-pink-700 focus-visible:ring-1 focus-visible:ring-pink-500"
            onClick={downloadAsFile}
          >
            <span className="sr-only">Download</span>
          </button>
          <button
            className="text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
            onClick={onCopy}
          >
            {isCopied ? <FiCheck /> : <FiCopy />}
            <span className="sr-only">Copy code</span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={syntaxColor}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem",
        }}
        className="rounded w-full aspect-[1/2] lg:aspect-[2/1]"
        codeTagProps={{ style: { fontSize: "0.9rem", fontFamily: "var(--font-monospace)" } }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
})

export { Code }

