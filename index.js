const prepack = require('prepack')

function prepackPlugin (filePath, options) {
  return {
    name: 'prepack',
    transformBundle (fileContents) {
      try {
        const { code } = prepack.prepackSources([
          {
            fileContents,
            filePath
          }
        ], options)

        return code
      } catch (err) {
        throw err
      }
    }
  }
}

module.exports = prepackPlugin
