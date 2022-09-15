/* Write a function that takes in a string of one or more words, and return the
same string, but with all five or more letter words reversed.

Strings passed in will consist of only letters and spaces.Spaces will be included 
only when more than one word is present. 

    Examples:
spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
spinWords("This is a test") => returns "This is a test" */

function spinWords(string) {
    //TODO Have fun :)
    string = string.split(" ")

    for (i = 0; i < string.length; i++) {
        if (string[i].length >= 5) {
            string[i] = string[i].split("").reverse().join("")
        }
    }
    return string.join(" ")
}

console.log(spinWords("Just kidding there is still one more"))

/* Other solution to ponder:

function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
} */