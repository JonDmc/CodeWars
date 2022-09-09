/* Write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".charAt

Note: 'y' is not considered a vowel. */

function disemvowel(str) {

    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    str = str.split('')

    for (i = 0; i < vowels.length; i++) {
        str = str.filter(e => {
            if (e != vowels[i])
                return true
            else
                return false
        })
    }
    str = str.join('')

    return str;
}