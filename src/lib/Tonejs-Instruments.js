/**
 * @fileoverview A sample library and quick-loader for tone.js
 *
 * @author N.P. Brosowsky (nbrosowsky@gmail.com)
 * https://github.com/nbrosowsky/tonejs-instruments
 */

import Tone from 'tone'

document.querySelector('body').addEventListener(
    'click',
    () => {
        // hack AudioContext 自动初始化问题
        // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
        Tone.start()
    },
    false
)

const NotesMap = {
    C2: 'a49.mp3',
    D2: 'a50.mp3',
    E2: 'a51.mp3',
    F2: 'a52.mp3',
    G2: 'a53.mp3',
    A2: 'a54.mp3',
    B2: 'a55.mp3',
    C3: 'a56.mp3',
    D3: 'a57.mp3',
    E3: 'a48.mp3',
    F3: 'a81.mp3',
    G3: 'a87.mp3',
    A3: 'a69.mp3',
    B3: 'a82.mp3',
    C4: 'a84.mp3',
    D4: 'a89.mp3',
    E4: 'a85.mp3',
    F4: 'a73.mp3',
    G4: 'a79.mp3',
    A4: 'a80.mp3',
    B4: 'a65.mp3',
    C5: 'a83.mp3',
    D5: 'a68.mp3',
    E5: 'a70.mp3',
    F5: 'a71.mp3',
    G5: 'a72.mp3',
    A5: 'a74.mp3',
    B5: 'a75.mp3',
    C6: 'a76.mp3',
    D6: 'a90.mp3',
    E6: 'a88.mp3',
    F6: 'a67.mp3',
    G6: 'a86.mp3',
    A6: 'a66.mp3',
    B6: 'a78.mp3',
    C7: 'a77.mp3',
    'C#2': 'b49.mp3',
    'D#2': 'b50.mp3',
    'F#2': 'b52.mp3',
    'G#2': 'b53.mp3',
    'A#2': 'b54.mp3',
    'C#3': 'b56.mp3',
    'D#3': 'b57.mp3',
    'F#3': 'b81.mp3',
    'G#3': 'b87.mp3',
    'A#3': 'b69.mp3',
    'C#4': 'b84.mp3',
    'D#4': 'b89.mp3',
    'F#4': 'b73.mp3',
    'G#4': 'b79.mp3',
    'A#4': 'b80.mp3',
    'C#5': 'b83.mp3',
    'D#5': 'b68.mp3',
    'F#5': 'b71.mp3',
    'G#5': 'b72.mp3',
    'A#5': 'b74.mp3',
    'C#6': 'b76.mp3',
    'D#6': 'b90.mp3',
    'F#6': 'b67.mp3',
    'G#6': 'b86.mp3',
    'A#6': 'b66.mp3'
}

const SampleLibrary = {
    minify: false,
    ext: '.[mp3|ogg]', // use setExt to change the extensions on all files // do not change this variable //
    baseUrl: process.env.PUBLIC_URL + '/static/media/',
    list: [
        'bass-electric',
        'bassoon',
        'cello',
        'clarinet',
        'contrabass',
        'flute',
        'french-horn',
        'guitar-acoustic',
        'guitar-electric',
        'guitar-nylon',
        'harmonium',
        'harp',
        'organ',
        'piano',
        'saxophone',
        'trombone',
        'trumpet',
        'tuba',
        'violin',
        'xylophone'
    ],
    onload: null,

    setExt: function(newExt) {
        var i
        for (i = 0; i <= this.list.length - 1; i++) {
            for (var property in this[this.list[i]]) {
                this[this.list[i]][property] = this[this.list[i]][
                    property
                ].replace(this.ext, newExt)
            }
        }
        this.ext = newExt
        return console.log('sample extensions set to ' + this.ext)
    },

    load: function(arg) {
        var t, rt, i
        arg ? (t = arg) : (t = {})
        t.instruments = t.instruments || this.list
        t.baseUrl = t.baseUrl || this.baseUrl
        t.onload = t.onload || this.onload

        // update extensions if arg given
        if (t.ext) {
            if (t.ext != this.ext) {
                this.setExt(t.ext)
            }
            t.ext = this.ext
        }

        rt = {}

        // if an array of instruments is passed...
        if (Array.isArray(t.instruments)) {
            for (i = 0; i <= t.instruments.length - 1; i++) {
                var newT = this[t.instruments[i]]
                //Minimize the number of samples to load
                if (this.minify === true || t.minify === true) {
                    var minBy = 1
                    if (Object.keys(newT).length >= 17) {
                        minBy = 2
                    }
                    if (Object.keys(newT).length >= 33) {
                        minBy = 4
                    }
                    if (Object.keys(newT).length >= 49) {
                        minBy = 6
                    }

                    var filtered = Object.keys(newT).filter(function(_, i) {
                        return i % minBy != 0
                    })
                    filtered.forEach(function(f) {
                        delete newT[f]
                    })
                }

                rt[t.instruments[i]] = new Tone.Sampler(newT, {
                    baseUrl: t.baseUrl + t.instruments[i] + '/',
                    onload: t.onload
                })
            }

            return rt

            // if a single instrument name is passed...
        } else {
            newT = this[t.instruments]

            //Minimize the number of samples to load
            if (this.minify === true || t.minify === true) {
                minBy = 1
                if (Object.keys(newT).length >= 17) {
                    minBy = 2
                }
                if (Object.keys(newT).length >= 33) {
                    minBy = 4
                }
                if (Object.keys(newT).length >= 49) {
                    minBy = 6
                }

                filtered = Object.keys(newT).filter(function(_, i) {
                    return i % minBy != 0
                })
                filtered.forEach(function(f) {
                    delete newT[f]
                })
            }

            var s = new Tone.Sampler(newT, {
                baseUrl: t.baseUrl + t.instruments + '/',
                onload: t.onload
            })

            return s
        }
    },

    'bass-electric': {
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        'A#5': 'As5.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        E5: 'E5.[mp3|ogg]',
        G2: 'G2.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G4: 'G4.[mp3|ogg]',
        G5: 'G5.[mp3|ogg]'
    },

    bassoon: {
        A3: 'A3.[mp3|ogg]',
        C2: 'C2.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        G1: 'G1.[mp3|ogg]',
        G2: 'G2.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        A1: 'A1.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]'
    },

    cello: {
        E3: 'E3.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F3: 'F3.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        G2: 'G2.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G4: 'G4.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        B2: 'B2.[mp3|ogg]',
        B3: 'B3.[mp3|ogg]',
        B4: 'B4.[mp3|ogg]',
        C2: 'C2.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]'
    },

    clarinet: {
        D3: 'D3.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        D5: 'D5.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F3: 'F3.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]'
    },

    contrabass: {
        C1: 'C1.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        D1: 'D1.[mp3|ogg]',
        E1: 'E1.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        'F#0': 'Fs0.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        G0: 'G0.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        A1: 'A1.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]',
        B2: 'B2.[mp3|ogg]'
    },

    flute: {
        A5: 'A5.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        C6: 'C6.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        E5: 'E5.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]'
    },

    'french-horn': {
        D2: 'D2.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        G1: 'G1.[mp3|ogg]',
        A0: 'A0.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        C1: 'C1.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]'
    },

    'guitar-acoustic': {
        F3: 'F3.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        G1: 'G1.[mp3|ogg]',
        G2: 'G2.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        A1: 'A1.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        'A#1': 'As1.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        B1: 'B1.[mp3|ogg]',
        B2: 'B2.[mp3|ogg]',
        B3: 'B3.[mp3|ogg]',
        C2: 'C2.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        D1: 'D1.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        E1: 'E1.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        F1: 'F1.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]'
    },

    'guitar-electric': {
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'D#5': 'Ds5.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        A5: 'A5.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        C6: 'C6.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]'
    },

    'guitar-nylon': {
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G5: 'G3.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        'G#5': 'Gs5.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        A5: 'A5.[mp3|ogg]',
        'A#5': 'As5.[mp3|ogg]',
        B1: 'B1.[mp3|ogg]',
        B2: 'B2.[mp3|ogg]',
        B3: 'B3.[mp3|ogg]',
        B4: 'B4.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        D5: 'D5.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        E5: 'E5.[mp3|ogg]'
    },

    harmonium: {
        C2: 'C2.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        D5: 'D5.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F3: 'F3.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        G2: 'G2.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G4: 'G4.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]'
    },

    harp: {
        C5: 'C5.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        D6: 'D6.[mp3|ogg]',
        D7: 'D7.[mp3|ogg]',
        E1: 'E1.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        E5: 'E5.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        F6: 'F6.[mp3|ogg]',
        F7: 'F7.[mp3|ogg]',
        G1: 'G1.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G5: 'G5.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        A6: 'A6.[mp3|ogg]',
        B1: 'B1.[mp3|ogg]',
        B3: 'B3.[mp3|ogg]',
        B5: 'B5.[mp3|ogg]',
        B6: 'B6.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]'
    },

    organ: {
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        C6: 'C6.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'D#5': 'Ds5.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        A1: 'A1.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        A5: 'A5.[mp3|ogg]',
        C1: 'C1.[mp3|ogg]',
        C2: 'C2.[mp3|ogg]'
    },

    piano: {
        A2: NotesMap['A2'],
        A3: NotesMap['A3'],
        A4: NotesMap['A4'],
        A5: NotesMap['A5'],
        A6: NotesMap['A6'],

        'A#3': NotesMap['A#3'],
        'A#4': NotesMap['A#4'],
        'A#5': NotesMap['A#5'],
        'A#6': NotesMap['A#6'],
        B2: NotesMap['B2'],
        B3: NotesMap['B3'],
        B4: NotesMap['B4'],
        B5: NotesMap['B5'],
        B6: NotesMap['B6'],
        C2: NotesMap['C2'],
        C3: NotesMap['C3'],
        C4: NotesMap['C4'],
        C5: NotesMap['C5'],
        C6: NotesMap['C6'],
        C7: NotesMap['C7'],
        'C#2': NotesMap['C#2'],
        'C#3': NotesMap['C#3'],
        'C#4': NotesMap['C#4'],
        'C#5': NotesMap['C#5'],
        'C#6': NotesMap['C#6'],
        D0: NotesMap['D0'],
        D1: NotesMap['D1'],
        D2: NotesMap['D2'],
        D3: NotesMap['D3'],
        D4: NotesMap['D4'],
        D5: NotesMap['D5'],
        D6: NotesMap['D6'],
        'D#2': NotesMap['D#2'],
        'D#3': NotesMap['D#3'],
        'D#4': NotesMap['D#4'],
        'D#5': NotesMap['D#5'],
        'D#6': NotesMap['D#6'],
        E2: NotesMap['E2'],
        E3: NotesMap['E3'],
        E4: NotesMap['E4'],
        E5: NotesMap['E5'],
        E6: NotesMap['E6'],
        F2: NotesMap['F2'],
        F3: NotesMap['F3'],
        F4: NotesMap['F4'],
        F5: NotesMap['F5'],
        F6: NotesMap['F6'],
        'F#2': NotesMap['F#2'],
        'F#3': NotesMap['F#3'],
        'F#4': NotesMap['F#4'],
        'F#5': NotesMap['F#5'],
        'F#6': NotesMap['F#6'],
        G2: NotesMap['G2'],
        G3: NotesMap['G3'],
        G4: NotesMap['G4'],
        G5: NotesMap['G5'],
        G6: NotesMap['G6'],
        'G#2': NotesMap['G#2'],
        'G#3': NotesMap['G#3'],
        'G#4': NotesMap['G#4'],
        'G#5': NotesMap['G#5'],
        'G#6': NotesMap['G#6']
    },

    saxophone: {
        'D#4': 'Ds4.[mp3|ogg]',
        E2: 'E2.[mp3|ogg]',
        E3: 'E3.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F3: 'F3.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        G2: 'G2.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G4: 'G4.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        B2: 'B2.[mp3|ogg]',
        B3: 'B3.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]'
    },

    trombone: {
        'A#2': 'As2.[mp3|ogg]',
        C2: 'C2.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]',
        'C#1': 'Cs1.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        F1: 'F1.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F3: 'F3.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]',
        'A#1': 'As1.[mp3|ogg]'
    },

    trumpet: {
        C5: 'C5.[mp3|ogg]',
        D4: 'D4.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        F3: 'F3.[mp3|ogg]',
        F4: 'F4.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        A2: 'A2.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        C3: 'C3.[mp3|ogg]'
    },

    tuba: {
        'A#1': 'As1.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        D2: 'D2.[mp3|ogg]',
        D3: 'D3.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        F0: 'F0.[mp3|ogg]',
        F1: 'F1.[mp3|ogg]',
        F2: 'F2.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]'
    },

    violin: {
        A3: 'A3.[mp3|ogg]',
        A4: 'A4.[mp3|ogg]',
        A5: 'A5.[mp3|ogg]',
        A6: 'A6.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        C6: 'C6.[mp3|ogg]',
        C7: 'C7.[mp3|ogg]',
        E4: 'E4.[mp3|ogg]',
        E5: 'E5.[mp3|ogg]',
        E6: 'E6.[mp3|ogg]',
        G4: 'G4.[mp3|ogg]',
        G5: 'G5.[mp3|ogg]',
        G6: 'G6.[mp3|ogg]'
    },

    xylophone: {
        C7: 'C7.[mp3|ogg]',
        G3: 'G3.[mp3|ogg]',
        G4: 'G4.[mp3|ogg]',
        G5: 'G5.[mp3|ogg]',
        G6: 'G6.[mp3|ogg]',
        C4: 'C4.[mp3|ogg]',
        C5: 'C5.[mp3|ogg]',
        C6: 'C6.[mp3|ogg]'
    }
}

export { SampleLibrary as default, Tone }
