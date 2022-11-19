/*
    Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
    Leave punctuation marks untouched.
*/

function pigIt(str) {
    //Code here
    return str = str.split(' ').map(e => {
        e = e.split('')
        let first = e.shift()
        if (first >= 'A' && first <= 'Z' || first >= 'a' && first <= 'z') {
            first += 'ay'
            e.push(first)

        }
        else
            e.push(first)
        return e.join('')
    }).join(' ')
}

pigIt('Hello World')
pigIt('Hello')
pigIt('Pig latin is cool')
console.log(pigIt('O tempora o mores !'))