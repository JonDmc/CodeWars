/* Your task is to sort a given string.Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers. 

Examples:
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
    let nums = []
    let final = []

    words = words.split(" ")

    words.forEach(e => {
        e = e.split("")
        for (i = 0; i < e.length; i++) {
            if (e[i] > 0)
                nums.push(e[i])
        }
        nums = nums.sort()
    })

    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < words.length; j++) {
            if (words[j].includes(nums[i])) {
                final.push(words[j])
            }
        }
    }

    return words = final.join(" ")
}

// console.log(order("is2 Thi1s T4est 3a"))
// function order(str) {

//   let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//   // make array to hold new positions
//   let wordsArray = [];

//   // make array of individual words
//   let individualWords = str.split(" ");

//   // iterate over words and letters to find number in words
//   individualWords.forEach((word, idx) => {
//     for (let i = 0; i < word.length; i++) {

//       // add word to array using number as array position
//       if (numbers.includes(word.charAt(i))) {
//         wordsArray[parseInt(word.charAt(i)) - 1] = word;

//       }
//     }
//   });
//   // join back array into string
//   console.log(wordsArray.join(" "));
// }


console.log(order('is2 Thi1s T4est 3a'))