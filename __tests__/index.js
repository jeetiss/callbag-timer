import pipe from 'callbag-pipe'
import { willBe } from '@jeetiss/callbag-marble-tester'

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
    timer(30),
    willBe('--(a|)'),
  ))

test('works with Date', () =>
  pipe(
    timer(new Date(Date.now() + 30)),
    willBe('--(a|)'),
  ))

test('works with Date', () =>
  pipe(
    timer(new Date(Date.now() + 50)),
    willBe('----(a|)'),
  ))

// test('works with period argument', () =>
//   pipe(
//     timer(20, 10),
//     willBe('--a--b--c--d--e--', values),
//   ))
