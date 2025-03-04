import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function dateFromDaysAgo(date: string) {
  const result = dayjs(date).fromNow()
  return result
}
