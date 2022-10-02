/* 
The goal of this exercise is to convert a string to a new string where each character in the new string
is '(' if that character appears only once in the original string, or '(' if that character appears
more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("

*/
function duplicateEncode(word) {
    word = word.toLowerCase().split('')
    let dup = {}
    let duplicate = []

    word.forEach(e => {
        if (dup[e])
            dup[e] += 1
        else
            dup[e] = 1
    })

    for (prop in dup) {
        if (dup[prop] > 1)
            duplicate.push(prop)
    }

    word = word.map(e => {
        if (duplicate.includes(e))
            return ')'
        else
            return '('
    })
    return word.join("")

}

console.log(duplicateEncode('Success'))
console.log(duplicateEncode('bin'))