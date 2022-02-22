"use strict"
//1 task
function getMaxDigit(number) {
   const stringNumber = number.toString()
   let maxNumber = 0;

   for (let i = 0; i < stringNumber.length; i++) {
      if (stringNumber[i] > maxNumber) {
         maxNumber = stringNumber[i];
      }
   }

   return maxNumber;
}

//2 task
function exponent(a, b) {
   if (b === 0) return 1
   let result = a;
   for (let i = 1; i < b; i++) {
      result *= a;
   }
   return result;
}

//3 task
function toPascalCase(str) {
   if (!str) return str; // если ничего нет в строке - в консоли пустая строка
   return str[0].toUpperCase() + str.substring(1).toLowerCase()
}

//4 task
function getWage(money) {
   return money - (money / 100 * (18 + 1.5))
}

//5 task
function getRandomNumber(min, max) {
   return Math.round(min + Math.random() * (max - min))
}

//6 task
function countLetter(letter, word) {
   return word.toLowerCase().split(letter).length - 1
}

//7 task
function convertCurrency(cash) {
   const EXCHANGE_RATE = 25
   let dollar = cash.substring(cash.length - 1).toLowerCase()
   let hrivna = cash.substring(cash.length - 3).toLowerCase()

   if (dollar === "$") {
      return Number(cash.substring(0, cash.length - 1)) * EXCHANGE_RATE
   } else if (hrivna === "uah") {
      return Number(cash.substring(0, cash.length - 3)) / EXCHANGE_RATE
   } else {
      return "Эта валюта не конвертируется"
   }
}

//9 task
function getRandomPassword(length) {
   return Math.round(Math.random() * Math.pow(10, length))
}

//11 task
function deleteLetters(letter, word) {
   return word.toLowerCase().replaceAll(letter, "")
}

//12 task
function palindrome(str) {
   let newStr = str.toLowerCase().replaceAll(" ", "")

   return newStr == newStr.split("").reverse().join("")
}

//13 task
function deleteDuplicateLetter(str) {
   let array = str.toLowerCase()

   for (let i = 0; i < array.length; i++) {
      if (countLetter(array[i], str) <= 1) continue
      str = deleteLetters(array[i], str)
   }
   return str
}

//console output
console.log(`Функція №1 maxDigit:  ${getMaxDigit(1236)}`)
console.log(`Функція №2 exponent:  ${exponent(2, 4)}`)
console.log(`Функція №3 pascalCase:  ${toPascalCase("влАД")}`)
console.log(`Функція №4 getWage:  ${getWage(1000)}`)
console.log(`Функція №5 randomNumber:  ${getRandomNumber(1, 10)}`)
console.log(`Функція №6 countLetter:  ${countLetter("а", "абракадабра")}`)
console.log(`Функція №7 uah за 100$:  ${convertCurrency("100 $")}`)
console.log(`Функція №7 2500uah в $:  ${convertCurrency("2500 uah")}`)
console.log(`Функція №9 randomPassword:  ${getRandomPassword(8)}`)
console.log(`Функція №11 deleteLetters: ${deleteLetters('a', "blAblAbla")}`)
console.log(`Функція №12 паліндром: ${palindrome("мадам")}`)
console.log(`Функція №12 паліндром: ${palindrome("кокос")}`)
console.log(`Функція №12 паліндром: ${palindrome("Я несу гусеня")}`)
console.log(`Функція №13 deleteDuplicateLette: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`)