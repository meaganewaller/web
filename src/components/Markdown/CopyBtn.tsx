import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import copy from 'copy-to-clipboard'

const StyledButton = styled.button(({ isCopied }: { isCopied: boolean }) => [
  tw`border-pink-300/50 absolute bottom-12 right-3 flex h-8 w-12 items-center justify-center rounded-lg border bg-pink-300/20 text-pink-600 dark:bg-purple-400/20 dark:text-purple-100 transition-all`,
  isCopied && tw`border-pink-300/50 translate-x-0 w-20`,
])

const CopyButton = ({ text }: { text: string }) => {
  const [values, setValues] = useState({ copied: false, text })

  const toggleDisabled = (): void => {
    setValues({ ...values, copied: true })
    setTimeout(() => setValues({ ...values, copied: false }), 5000)
  }

  const onClick = (): void => {
    copy(text)
    toggleDisabled()
  }

  return (
    <StyledButton
      className="code-block-copy-button"
      onClick={onClick}
      isCopied={values.copied}
    >
      {values.copied ? 'Copied!' : 'Copy'}
    </StyledButton>
  )
}

export default CopyButton
