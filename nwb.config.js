module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'flowhubUI',
      externals: {
        react: 'React'
      }
    }
  }
}
