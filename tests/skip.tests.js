const { test } = require('..')

test.skip('skip no assertions', () => true)

test.skip('skip with test specified after name')(({ fail }) => fail())
