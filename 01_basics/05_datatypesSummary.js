/* premitive
 7 types : String , Number , boolean , null , undefined ,  symbol, BigInt
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint


 reference type ( non primitive )   Array , Object , Function
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const OutSideTemp = null
// let userEmail ;

// const ID = Symbol('123')
// const AnotherID = Symbol('123')

// console.log(ID == AnotherID);

// const BigNumber = 3456145627578946512n

// console.log(typeof BigNumber);

// const heros = [ "Saktiman" , "doga" , "Naagraj" ]  // arrays
// let myObj =  {
//     name = "vivek",
//     age = 22,
// }  // obj

// const myFunction = function(){
//     console.log("hello world ");
    
// }  // function





//***************  memory ******** //
//   stack(primitive ) and heap (non primitive )

let myYoutubename = "vivekkumar.com"
let anotherName = myYoutubename
anotherName = "chaiAurCode" 
console.log(anotherName);
console.log(myYoutubename);
 
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
     
}

let userTwo = userOne

userTwo.email = "vivek@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/* Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/

