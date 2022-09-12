/* Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second 
    character of the final pair with an underscore('_').
    
    Example:
        * 'abc' => ['ab', 'c_']
        * 'abcdef' => ['ab','cd','ef'] */

function solution(str) {
    str = str.split('')
    let str1 = []

    if (str.length === 0) {
        return console.log(str)
    }
    else if (str.length % 2 !== 0) {
        str.push('_')
    }

    for (i = 0; i < str.length; i += 2) {
        str1.push(str[i] + str[i + 1])
    }
    console.log(str1)

}

solution('abcdefghijkl')