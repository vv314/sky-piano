import wintip from 'wintip'
import config from '../config'

wintip.config({
  // 'default', 'info', 'warn', 'error'
  output: config.isDebug && 'default',
  // output: false,
  color: '#fff'
})

export default wintip
