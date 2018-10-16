import pipe from 'callbag-pipe'
import { willBe } from '@jeetiss/callbag-testing-utils'

import timer from '../src'

const values = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
}

test('works with number', () =>
  pipe(
    timer(10),
    willBe('--a--|', values),
  ))

test('works with Date', () => {
  const now = Date.now()

  return pipe(
    timer(new Date(now + 10)),
    willBe('--a--|', values),
  )
})

test('works with period argument', () =>
  pipe(
    timer(20, 10),
    willBe('--a--b--c--d--e--', values),
  ))
