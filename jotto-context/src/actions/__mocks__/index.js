// mocking getSecretWord globally
module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  // TODO: update return value Redux / context implementation
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
}