const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          assets: 'src/assets',
          components: 'src/components',
          containers: 'src/containers',
          reduxReducer: 'src/redux/reducers/reducer',
          reduxConstants: 'src/redux/constants',
          reduxActions: 'src/redux/actions',
          queries: 'src/utils/data',
          client: 'src/client'
        }
      }
    }
  ]
}