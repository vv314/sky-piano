const chalk = require('chalk')
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
      console.log(chalk.red('deploy error!'))
      console.log(chalk.red(err.message))
    }

    console.log(chalk.green('deploy success!'))
  }
)
