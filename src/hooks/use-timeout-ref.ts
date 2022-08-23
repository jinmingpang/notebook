import { map } from 'lodash'
import { useEffect, useMemo, useRef } from 'react'
import { helper } from '../utils'

type TimeoutType = {
  run: (time: number, cb: any) => void
  clear: () => void
}
type UseTimeoutRefRes = {
  timer: TimeoutType
  [key: string]: TimeoutType
}
const useTimeoutRef = (timers: string[] = []) => {
  const timerArr = timers.length ? timers : ['timer']

  const allTimers: any = useMemo(() => {
    let result = {}
    timerArr.forEach((item) => {
      result[item] = helper.genTimeout()
    })
    return result
  }, [])

  const allTimerRef = useRef<UseTimeoutRefRes>(allTimers)

  useEffect(() => {
    return () => {
      map(allTimerRef.current, (item) => {
        item.clear()
      })
    }
  }, [])

  return allTimerRef.current
}

export default useTimeoutRef
