const packagemiddleware = require('./index.js')

test('packages outgoing', () => {
  let packager = packagemiddleware()
  const testmessage = { test: true }
  const cb = jest.fn((err, queue, message) => {
    expect(message.data).toBe(testmessage)
    expect(message.datetime).toBeDefined()
    expect(message.type).toBe('test')
  })
  packager.handleOutgoing('test', testmessage, cb)
})

test('packages incoming', () => {
  let packager = packagemiddleware()
  const testmessage = { content: { test: true }, properties: { type: 'test' } }
  const cb = jest.fn((err, queue, message) => {
    expect(message.content.type).toBe('test')
  })
  packager.handleIncoming('test', testmessage, {}, cb)
})
