const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {


    function getLetterBinaryCode(code) {
        let y = code.split('')
        const zerNum = 5 - code.length
        let binaryCode = ''
        for (let i = 0; i < 5; i++) {
            if (i < zerNum) {
                binaryCode += '00'
            } else {
                if (y[i - zerNum] === '.') {
                    binaryCode += '10'
                } else {
                    binaryCode += '11'
                }
            }
        }
        return binaryCode
    }

    const myMorseTable = { '**********': ' ' }
    let letterCode = ''
    for (let key in MORSE_TABLE) {
        letterCode = MORSE_TABLE[key]

        myMorseTable[getLetterBinaryCode(key)] = letterCode
    }

    let res = ''
    let letter
    const lettersNumber = expr.length / 10
    for (let i = 1; i <= lettersNumber; i++) {
        letter = expr.slice((i - 1) * 10, i * 10)
        res += myMorseTable[letter]

    }
    return res
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))

module.exports = {
    decode
} 