import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'

import useTheme from '@/hooks/use-theme'

type ButtonOrAnchorClickEvent = MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>

interface ILogo {
  onClick: (event: ButtonOrAnchorClickEvent) => void
}

const Logo = ({ onClick }: ILogo) => {
  const [isHovering, setIsHovering] = useState(false)
  const { theme, mounted, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const onMouseEnter = () => setIsHovering(true)
  const onMouseLeave = () => setIsHovering(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHovering(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Link href="/" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      {isHovering ? (
        <Image
          alt="Meagan Waller - A Software Development Blog"
          height={350}
          width={300}
          sizes="10vw"
          src={isDark ? '/images/dark-logo-hover.svg' : '/images/logo-hover.svg'}
          className="mr-6 inline-block"
          priority
        />
      ) : (
        <Image
          alt="Meagan Waller - A Software Development Blog"
          height={350}
          width={300}
          sizes="10vw"
          src={isDark ? '/images/dark-logo.svg' : '/images/logo.svg'}
          className="mr-6 inline-block"
          priority
        />
      )}
    </Link>
  )
}

export default Logo
