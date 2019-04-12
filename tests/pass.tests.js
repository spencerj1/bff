const { test } = require('..')
const { html } = require('common-tags')

test(`
  A
  test
  with
  a
  multiline
  name
`)(ctx => {
  ctx.expect('ok').toBeTruthy()
})

test('strict equality', ({ expect }) => {
  const thing = 1
  expect(thing).toBe(1)
})

test('parseInt after a 1 second timeout', ({ expect }) => {
  const one = '1'
  return new Promise(resolve => {
    setTimeout(() => {
      expect(parseInt(one, 10)).toBe(1)
      resolve()
    }, 1000)
  })
})

test('manual pass', ({ pass }) => pass())

test('beforeEach', ({ pass }) => pass())

test('registration', ({ pass }) => pass())

test('snapshot pass', ({ expect }) => {
  const markup = html`
    <html>
      <head>
        <title>Demo</title>
      </head>
      <body>
        <main>
          <h1>Demo</h1>
        </main>
      </body>
    </html>
  `
  expect(markup).toMatchSnapshot()
})
