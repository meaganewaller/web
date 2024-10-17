import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

const useMinPendingTime = (timeMs: number = 1000) => {
  let { pending } = useFormStatus()
  let [locked, setLocked] = useState(pending)
}
