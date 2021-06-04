let strNumber = '0506 06132020 9 474000 25725710'

//The split() method is used to split a string into an array of substrings, and returns the new array.

let arrayOfNumber = strNumber.split('')

//slice The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end

//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string

let minute = arrayOfNumber.slice(0,2).join('')
let sec = arrayOfNumber.slice(2 , 4).join('')
let month = arrayOfNumber.slice(5 , 7).join('')
let day = arrayOfNumber.slice(7 , 9).join('')
let year = arrayOfNumber.slice(9, 13).join('')
let code = parseInt(arrayOfNumber[14])
let dialed = arrayOfNumber.slice(16, 22).join('')
let charged = arrayOfNumber.slice(23, 29).join('')
let time = parseInt(arrayOfNumber.slice(29, 31).join(''))

let objectNumber = {
  duration : sec ,
  startDate : new Date(`${year}-${month}-${day}`),
  accesCode : code ,
  dialedNumber : dialed ,
  chargedNumber : charged ,
  timeInQueue : time
}
