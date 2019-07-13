const ghpages = require('gh-pages')
const { version } = require('../package.json')

console.log('deploying...')
ghpages.publish(
  'dist/index',
  {
    tag: 'v' + version
  },
  err => {
    if (err) {
      console.log('deploy error!')
      console.log(err.message)
    }

    console.log('deploy success!')
  }
)
