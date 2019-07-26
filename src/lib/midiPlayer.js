import { Player } from 'midi-player-js'
import { Events } from './events'
// const { Player } = require('midi-player-js')
// var fs = require('fs')
// const { parseMidi } = require('midi-file')

// const file = process.cwd() + '/src/assets/star.mid'
// const input = fs.readFileSync(file)

const events = new Events()
const player = new Player()
const playerEvents = ['fileLoaded', 'playing', 'midiEvent', 'endOfFile']
let currentMidi = ''
const starDataUri =
  'data:audio/midi;base64,TVRoZAAAAAYAAQAFAGBNVHJrAAAAEwD/WAQEAmAIAP9RAwhSrgD/LwBNVHJrAAABigD/AxRNZWxvZHkgICAgICAgICAgICAgIACxAAAAwQMA/1gEBAJgCAD/UQMIUq4AkUhrSIFIQBiRSGtIgUhAGJFPa0iBT0AYkU9rSIFPQBiRUWRIgVFAGJFRa0iBUUAYkU9rgSiBT0AYkU1rSIFNQBiRTWtIgU1AGJFMa0iBTEAYkUxrSIFMQBiRSmtIgUpAGLEyAwCRSmtIgUpAGJFIa3iBSEBIkU9rSIFPQBiRT2tIgU9AGJFNa0iBTUAYkU1rSIFNQBiRTGtIgUxAGJFMa0iBTEAYkUprgRCBSkAwkU9rSIFPQBiRT2tIgU9AGJFNa0iBTUAYkU1rSIFNQBiRTGtIgUxAGJFMa0iBTEAYkUprgRCBSkAwkUhrSIFIQBiRSGtIgUhAGJFPa0iBT0AYkU9rSIFPQBiRUWtIgVFAGJFRa0iBUUAYkU9rfoFPQEKRTWtIgU1AGJFNa0iBTUAYkUxrSIFMQBiRTGtIgUxAGJFKa0iBSkAYkUprSIFKQBiRSGuBQIFIQAD/LwBNVHJrAAADIwD/AxRCYXNzICAgICAgICAgICAgICAgIACyAAAAwkAA/1gEBAJgCAD/UQMIUq4AkjBOMJI3QwGCMEAvkjROAoI3QC6SN0YKgjRAJpIwTgWCN0ArkjdHCIIwQCiSNEYGgjdAKpI3RhuCNEAVkjBSBYI3QCuSOUYGgjBAKpI1VASCOUAskjlMD4I1QCCCOUABkjBOMJI3TRmCMEAXkjRMBoI3QCqSN00DgjRAKoI3QAOSK04wkjVJD4IrQCGSMlQGgjVAKIIyQAKSNUwvgjVAAZIwRDCSN0wTgjBAHZI0TgWCN0AqgjRAAZI3RjCSL0kDgjdALZI3ThGCL0AfkjJSBYI3QCuSN0YGgjJAKpIwUgaCN0Aqkjc8F4IwQBmSNFECgjdALII0QAKSN1QugjdAApIrTjCSMFIJgitAJ5I0UgeCMEApkjBSDII0QCSSK1IBgjBAL5IyVAeCK0ApkjVUBYIyQCuSMlMGgjVAKpIrUgGCMkAvkjBUBoIrQCqCMEAAkjRRMJIwTAeCNEAjgjBABpIrRzCSL00MgitAJIIvQACSMlEvgjJAAZIvUjCSK1EJgi9AJ5IwVAaCK0AqkjRTAoIwQC6SME4BgjRAL5IrVASCMEAskjJUCIIrQCiSNVIBgjJAL5IyUgiCNUAokitNAYIyQC+SMFEGgitAKpI0VwGCMEAvkjBTF4I0QBeCMEACkitTMJIvSQuCK0AlkjJMA4IvQCyCMkABki9QF4IvQBmSMFQwkjc8E4IwQB2SNFIEgjdALJI3SQSCNEAqgjdAApIwVDCSN0cYgjBAGJI0TAiCN0AokjdRCII0QCiCN0AAkjBOMJI5TAyCMEAkkjVSCYI5QCeSOVIJgjVAJoI5QAGSMFMwkjdDEYIwQB+SNE4KgjdAJpI3SQyCNEAkkis8AJItSQSCN0AAgi1ALJI1VA2CK0AjkjJUBYI1QCmCMkACkjVTMJIwVAKCNUAukjc+HYIwQBOSNE4IgjdAKII0QACSN0wwki9SBoI3QCqSNU4Tgi9AHZIyTAWCNUArkjVRBIIyQCySMFQEgjVAgTyCMEAA/y8ATVRyawAABJMA/wMUQ2hvcmRzICAgICAgICAgICAgICAAswAAAMMCAP9YBAQCYAgA/1EDCFKuAJNATgCTQ00wkzxHBYNAQAGDQ0Aqk0BRAJNDTAGDPEAvkzw8A4NAQAGDQ0Ask0BRAJNDUQaDPEAqkzxGA4NAQAuDQ0AggzxAApNAUQCTQ1Qwkzw+AoNAQBCDQ0Aek0FXAJNFVgiDPEAokzxJA4NBQAaDRUAnk0FTAJNFUwyDPEAkkzxMD4NBQAaDRUAbk0BRAJNDUgmDPEAnkzxJCINDQAGDQEAnk0NNAJNAUwmDPEAnkzxJB4NAQAGDQ0AhgzxAB5M+VwCTQVcwkzlMBYM+QAWDQUAmkz5WAJNBVgiDOUAokzlSBYM+QAuDQUATgzlADZNAUwCTQ1Iwg0NAAJM8RwODQEAtk0BZAJNDUQqDPEAmkzxJBoNAQBODQ0ATgzxABJM+UwCTQVIwkztSA4M+QAGDQUAskz5TAJNBVwiDO0AokztTCINBQAGDPkAnkzxQAJNAVAODO0AtkzdQBIM8QAmDQEAjkzxRAJNAUwqDN0Amg0BAAJM3TgKDPEAlgzdACZNASQCTQ04ug0BAApM8TgSDQ0Ask0NZAJNAVwqDPEAmkzxMAoNAQBWDQ0AXgzxAApM+TQCTQVYYkzdHF4M+QASDQUAigzdAC5M+VACTQVYwkzdOB4M+QACDQUApkzxTAJNAUgaDN0AqkzdJAoNAQAGDPEAtk0BWAJM8UguDN0AlkzdSB4NAQAaDPEAjkztRAJM+UwKDN0AukzVUBYM+QAODO0AokztQAJM+VgWDNUArkzVTBIM+QAODO0AegzVAC5NDVACTQFYtg0BAA5M8UAmDQ0Ank0BXAJNDTgyDPEAkkzxUDINAQBqDQ0AEgzxABpM+UwCTQVgvgz5AAINBQAGTO0kwk0FbAJM+UwiDO0AokztRA4NBQAaDPkAhgztABpNAWACTPFQsgzxABINAQACTN0gwkzxjAJNAXQyDN0AkkzdQAYM8QBiDQEAXkztYAJM+VwWDN0ArkzdDBIM7QAODPkApkztSAJM+UwWDN0ArkzdMBIM+QASDO0AokzxWAJNAUwODN0AtkzdMAoNAQAGDPEAtkzxUAJNAVwWDN0ArkzdRBYNAQAGDPEAqk0BDAJNDTQSDN0AskzxSAYNAQAqDQ0Alk0BXAJNDUwSDPEAskzxSBoNAQAGDQ0AhgzxACJNBVgCTRVIwkzlSAYNBQAeDRUAok0FXAJNFUguDOUAlkzlRCINBQCODOUAFk0BTAJNDVAODRUAtkzxSAYNAQAODQ0Ask0BUAJNDUgWDPEArkzxRA4NDQAWDQEAokz5SAJNBUwSDPEAskzlRBYM+QAiDQUAjkz5XAJNBVweDOUApkzlUAoNBQAKDPkAhgzlAC5M8TgCTQFIYkzdJGIM8QASDQEAggzdADJM8WwCTQFswkzdOBoM8QAmDQEAhkztdAJM+VwWDN0ArkzdRA4M+QAGDO0AogzdABJM7UwCTPlYwkzdUCIM7QAKDPkAkgzdAApM8VACTQFmBQIM8QACDQEAA/y8ATVRyawAAASYA/wMURmlsbHMgICAgICAgICAgICAgICAAtAAAAMQNAP9YBAQCYAgA/1EDCFKujXCUSDoThEhABZRKPRCESkAIlExJD4RMQCGUTUkRhE1AH5RPUnWET0B7lFZHEIRWQAiUVEAQhFRACJRTIg+EU0AJlFFDD4RRQAmUT0kMhE9AghSUSEMOhEhACpRKQBGESkAHlExDEYRMQB+UTUMRhE1AH5RPRXmET0B3lE9JEIRPQAiUUT8UhFFABJRTQxeEU0ABlFQ/FoRUQAKUVkwPhFZAgTGUVEkRhFRAH5RPPgqET0AmlFhFDYRYQCOUVD0NhFRAI5RbUg+EW0CBMZRRVxKEUUAelE1DEIRNQCCUVFIOhFRAIpRPUhCET0AglFRJD4RUQAD/LwA='

export default {
  load(dataUri = starDataUri) {
    if (currentMidi !== dataUri) {
      // Load a MIDI file
      player.loadDataUri(dataUri)
      currentMidi = dataUri

      return player.tracks.length
    }

    // return player.getTracks()
  },
  isPlaying() {
    return player.isPlaying()
  },
  play() {
    player.play()
  },
  toggle() {
    if (player.isPlaying()) {
      player.pause()
    } else {
      player.play()
    }
  },
  pause() {
    // 自定义暂停事件
    player.triggerPlayerEvent('pause')
    player.pause()
  },
  on(name, cb) {
    player.on(name, cb)
    // if (playerEvents.indexOf(name) > -1) {
    //   player.on(name, cb)
    // } else {
    //   events.on(name, cb)
    // }
  },
  stop() {
    player.stop()
  }
}

// fs.writeFileSync('startBuffer.json', input.toString('base64'), {
//   encoding: 'utf-8'
// })
// console.log(parseMidi(input))
