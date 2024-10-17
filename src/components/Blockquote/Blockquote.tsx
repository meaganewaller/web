import { styled } from 'twin.macro'
import { m } from 'framer-motion'
import { parentVariants } from '@/utils/animations'

const BlockQuote = ({ children, title, invertColor }: Props) => {
  return (
    <Container className="stack" $invert={invertColor}>
      {title}
      <m.p variants={parentVariants}>{children}</m.p>
    </Container>
  )
}

type Props = {
  children?: React.ReactNode
  title?: React.ReactNode
  invertColor?: boolean
}

type ContainerProps = {
  $invert?: boolean
}

const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  width: 100%;
  min-height: 50vh;
  margin: 0 auto;
  padding: 0 2rem 200px 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 0 var(--sitePadding);
  }
  & > p {
    width: clamp(200px, 1200px, 100%);
  }
`

export default BlockQuote
