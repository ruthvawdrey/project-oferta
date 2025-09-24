// let num = 4;
// console.log(num);

// console.log(++num);

// // console.log(num++) use the variable and increment after

// button.addEventListener("click", function (){
//     this.innrHTML="Clicked" + ++count +"times";
//     console.log(count);
// });


let soup = 10;
let burger = 8;
let ice = 5;

const total = soup * 1 + burger * 3 + ice * 1;
console.log(total);

39
 soup + burguer * 3 +ice
// _________________________________________________


const meal =  soup + burguer * 3 + ice
// _________________________________________________
meal/ 3


let toaster = 18.50
let shirt = 7.50
const totalD = toaster +shirt * 2

total * 1.07825


const taxAmount = total* 0.7825

// ________________________________________________

// Order of Operations

'2+3 * 4' //----multiply first

// ________________________________________________

// Helper Functions


// IEEE 754 Standart

// ________________________________________________

15+3*2

20/4-2

(10+5)/3

function calcMealTotal(soup, burger, ice) {
    return soup * 1 + burger * 3 + ice * 1;
}

function calcMealAverage(soup, burger, ice) {
    const total = calcMealTotal(soup, burger, ice);
    return total / 3;
}

function calcTotalD(toaster, shirt) {
    return toaster + shirt * 2;
}

function calcTotalWithTax(total, taxRate = 1.07825) {
    return total * taxRate;
}

function calcTaxAmount(total, taxPercent = 0.07825) {
    return total * taxPercent;
}

// Example usage:
console.log(calcMealTotal(soup, burger, ice));
console.log(calcMealAverage(soup, burger, ice));
console.log(calcTotalD(toaster, shirt));
console.log(calcTotalWithTax(total));
console.log(calcTaxAmount(total));


// _____________________________

function calcExpression1() {
    return 15 + 3 * 2;
}

function calcExpression2() {
    return 20 / 4 - 2;
}

function calcExpression3() {
    return (10 + 5) / 3;
}

// Example usage:
console.log(calcExpression1());
console.log(calcExpression2());
console.log(calcExpression3());


// _____________________________
// Exemplee

function generateSimplePassword(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Example usage:
console.log(generateSimplePassword());




/////////////////////


function generatePass(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}


/////////////////////


   function generatePassword(length) {
      let password = "";
      for (let i = 0; i < length; i++) {
        password += getRandomChar(allChars); // Using the combined character set
      }
      return password;
    }



      let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }


    //----------


    // let password = " ";

    // const random = Math.floor(Math.random());



    // The more simple way


function generateSimplePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

//     //----------

// function getAlphaNumericSymbolPassword(length = 12) {
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         password += chars[randomIndex];
//     }
//     return password;
// }

// // Example usage:
// console.log(getAlphaNumericSymbolPassword(12));















// Generate a password of length 12 and log it to the console
const randomPassword = generateSimplePassword(12);
console.log(randomPassword);

// ____________________________


// Taxes


function callTax (amount, taxRate = 1.9990) {
    return amount (amount * taxRate);
}

console.log(callTax(amount));
// ____________________________



// ____________________________

// Area of a circle with radius 5
function getCircleArea(radius) {
    return Math.PI * radius * radius ;
}

// Example usage:
console.log(getCircleArea(5)); // Area of a circle with radius 5

// ____________________________

// Area of a circle with radius 5
function getCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Example usage:
console.log(getCircleArea(5)); // Area of a circle with radius 5

// ____________________________

// button + password




/*
Shorthand assignment operators in JavaScript:

x += y   // x = x + y
x -= y   // x = x - y
x *= y   // x = x * y
x /= y   // x = x / y
x %= y   // x = x % y
x **= y  // x = x ** y (exponentiation)

x &= y   // x = x & y (bitwise AND)
x |= y   // x = x | y (bitwise OR)
x ^= y   // x = x ^ y (bitwise XOR)
x <<= y  // x = x << y (left shift)
x >>= y  // x = x >> y (right shift)
x >>>= y // x = x >>> y (unsigned right shift)

x &&= y  // x = x && y (logical AND assignment)
x ||= y  // x = x || y (logical OR assignment)
x ??= y  // x = x ?? y (nullish coalescing assignment)
*/


// ____________________________

