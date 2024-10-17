'use client'
import { FC, memo, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { FiCheck, FiCopy, FiDownload } from 'react-icons/fi'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'

import Button from '@/components/Button'

interface Props {
  className?: string
  inline?: boolean
  children: string
}

interface languageMap {
  [key: string]: string | undefined
}

export const programmingLanguages: languageMap = {
  javascript: '.js',
  python: '.py',
  java: '.java',
  c: '.c',
  cpp: '.cpp',
  'c++': '.cpp',
  'c#': '.cs',
  ruby: '.rb',
  php: '.php',
  swift: '.swift',
  'objective-c': '.m',
  kotlin: '.kt',
  typescript: '.ts',
  go: '.go',
  perl: '.pl',
  rust: '.rs',
  scala: '.scala',
  haskell: '.hs',
  lua: '.lua',
  shell: '.sh',
  sql: '.sql',
  html: '.html',
  css: '.css',
}

export const generateRandomString = (length: number, lowercase = false) => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXY3456789' // excluding similar looking characters like Z, 2, I, 1, O, 0
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return lowercase ? result.toLowerCase() : result
}

const CodeBlock: FC<Props> = memo(({ className, inline, children }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy')
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const { theme } = useTheme()
  const colorTheme = theme === 'dark' ? materialDark : materialLight

  const downloadAsFile = () => {
    if (typeof window === 'undefined') {
      return
    }

    const fileExtension = programmingLanguages[language] || '.file'
    const suggestedFileName = `file-${generateRandomString(6, true)}${fileExtension}`
    const fileName = window.prompt('Enter file name' || '', suggestedFileName)

    if (!fileName) {
      return
    }

    const blob = new Blob([children], { type: 'text/plain' })
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

  const onCopy = (text: string) => {
    setCopyButtonText('Copied')
    setTimeout(() => setCopyButtonText('Copy'), 1000)
  }

  let language = className?.slice('language-'.length).toLowerCase() || ''

  if (inline || !language) {
    return (
      <code className="p-1 m-1 text-lg dark:text-lime-100 dark:bg-lime-500/30 text-purple-900 bg-purple-300/40 rounded-lg font-monoItalic">
        {children}
      </code>
    )
  }

  return (
    <div className="codeblock relative w-[95%] font-mono mx-auto">
      <div className="flex w-full items-center justify-between rounded-t-lg dark:bg-yellow-500 bg-purple-800 px-6 py-2 pr-4 text-purple-100 dark:text-yellow-1100">
        <span className="text-base lowercase font-normal font-sans">{language}</span>
        <div className="flex items-center space-x-1">
          <Button
            onClick={downloadAsFile}
            className="rounded-lg py-1 px-2"
            variant="default"
            aria-label="Download code"
          >
            <FiDownload size={20} />
            <span className="sr-only">Download</span>
          </Button>
          <Button className="rounded-lg py-1 px-2" variant="default" onClick={() => onCopy(children)}>
            {copyButtonText === 'Copy' ? <FiCopy size={20} /> : <FiCheck size={20} />}
            <span className="sr-only">{copyButtonText}</span>
          </Button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={colorTheme}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: '100%',
          padding: '1.5rem 1rem',
        }}
        codeTagProps={{
          style: {
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
})

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
