// //• Tests for equality and inequality with strings
// console.log('====================================');
// console.log('• Tests for equality and inequality with strings');
// let _string = '0';
// // EQUALITY
// console.log('[EQUALITY]._string == 0', _string == 0); // true -> WITHOUT TYPE CHECKING
// console.log('[EQUALITY]._string === 0', _string === 0); // false -> WITH TYPE CHECKING
// console.log("[EQUALITY]._string === '0'", _string === '0'); // true -> WITH TYPE CHECKING

// // IN-EQUALITY
// console.log('[IN-EQUALITY]._string !== 0', _string !== 0); // true
// console.log("[IN-EQUALITY]._string !== '0'", _string !== '0'); // false
// console.log('[IN-EQUALITY]._string != 0', _string != 0); // true

// // • Tests using the lower case function
// console.log('====================================');
// console.log('• Tests using the lower case function');
// let user_name = 'MuDasSir';
// console.log(`${user_name}`.toLowerCase() == 'mudassir'); // true

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// console.log('====================================');
// console.log('•  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to');
// let _num = 5;
// console.log("_num == '5'", _num == '5'); // true
// console.log("_num === '5'", _num === '5'); // false
// console.log("_num === 5", _num === 5); // true
// console.log("_num > '5'", _num > 5); // false
// console.log("_num >= '5'", _num >= 5); // true
// console.log("_num < '5'", _num < 5); // false
// console.log("_num >= '5'", _num <= 5); // true


//• Tests using "and" and "or" operators
console.log('====================================');
console.log('• Tests using "and" and "or" operators');

let a = true,
    b = false;
console.log(a && b) // true
console.log(a || b) // true
console.log(!a || b) // true
console.log(!a && b) // false
console.log(a && !b) // false
console.log(a || !b) // true



//• Test whether an item is in a array
console.log('====================================');
console.log('• Test whether an item is in a array');
let _array = [1, 2, 3, 4, 5];
// * Array.indexOf(index) this methid either will return the index of a given element or return -1
console.log(_array.indexOf(1) >= 0); // true
console.log(_array.indexOf(3) >= 0); // true
console.log(_array.indexOf(5) >= 0); // true

//• Test whether an item is not in a array
console.log('====================================');
console.log('• Test whether an item is not in a array');
// * Array.indexOf(index) this methid either will return the index of a given element or return -1
console.log(_array.indexOf(7) >= 0); // false
console.log(_array.indexOf(6) >= 0); // false
console.log(_array.indexOf(0) >= 0); // false



