import { useEffect, useLayoutEffect } from 'react'

import { isClient } from '@/utils'

const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
