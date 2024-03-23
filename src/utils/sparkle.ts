import confetti from 'canvas-confetti'
import { cache } from 'react'

export const sparkleConfetti = cache((origin: { x: number, y: number }) => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin,
  })
})
