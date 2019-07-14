import { getUrlParam } from '../lib/util'

const isDebug = process.env.NODE_ENV === 'development' || getUrlParam('__debug')
const version = process.env.VERSION

export default { isDebug, version }
