const score = 400;
// console.log(score );

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString())
// console.log(balance.toFixed(2))   // 2 denotes that 2 decimal point

const OtherNumber = 123.8966;
// console.log(OtherNumber.toPrecision(1))

const Hundreds = 10000000;
// console.log(Hundreds.toLocaleString());
// console.log(Hundreds.toLocaleString('en-IN'));

//***************************   MATH    ******************************

// console.log(Math);

// console.log(Math.abs(-4)); // abs means absolute value jo bas -ve value ko +ve kar detaa hai
// // console.log(Math.abs(4))

// console.log(Math.round(4.3)); //round means ye round off kar ke deta hai
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.3)); // means round off karne ke baad ceiling value milega (uppper)
// console.log(Math.floor(4.6)); // means round off karne ke baad floor value milega (lower )

// console.log(Math.sqrt(25)); // suare root value

// console.log(Math.min(4, 6, 8, 5, 3, 1, -1)); //minimum value return hogaa
// console.log(Math.max(4, 6, 8, 5, 3, 1, -1)); //maximum value return hoga

console.log(Math.random()); // random value b/w 0 and 1
console.log(Math.random() * 10); // isme 1 shift ho jayega and if 0.07....  then after multiply then give 0 so for aovid this
console.log(Math.random() * 10 + 1); // abb least value 1 hoga
console.log(Math.floor(Math.random() * 10) + 1); // single integer

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
