/* 
Create a function taking a positive integer as its parameter and returning a string containing
the Roman Numeral representation of that integer.

Example:
    solution(1000); //should return 'M'
*/

function solution(number) {
    // convert the number to a roman numeral
    const symbols = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    }

    number = number.toString().split("")

    for (i = 0; i < number.length; i++) {
        number[i] = number[i] * Math.pow(10, (number.length - 1) - i)
    }

    for (i = 0; i < number.length; i++) {
        for (prop in symbols) {
            if (number[i] === symbols[prop]) {
                number[i] = prop
            }
            else if (number[i] === 0)
                number[i] = ''
        }
    }

    for (i = 0; i < number.length; i++) {
        if (number[i] > 1 && number[i] < 10) {
            if (number[i] > 5)
                number[i] = 'V' + 'I'.repeat(number[i] - 5)
            else
                number[i] = 'I'.repeat(number[i])
        }
        else if (number[i] / 10 > 1 && number[i] / 10 < 10) {
            if (number[i] / 10 > 5)
                number[i] = 'L' + 'X'.repeat((number[i] / 10) - 5)
            else
                number[i] = 'X'.repeat(number[i] / 10)
        }
        else if (number[i] / 100 > 1 && number[i] / 100 < 10) {
            if (number[i] / 100 > 5)
                number[i] = 'D' + 'C'.repeat((number[i] / 100) - 5)
            else
                number[i] = 'C'.repeat(number[i] / 100)
        }
        else if (number[i] / 1000 > 1 && number[i] / 1000 < 5)
            number[i] = 'M'.repeat(number[i] / 1000)
    }

    return number.join('')
    // console.log(number)
}

solution(2)
solution(1000)
solution(1104)
solution(1994)
solution(1944)
solution(1234)
solution(2234)
solution(3167)
