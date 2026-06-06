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

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const OutSideTemp = null
let userEmail ;

const ID = Symbol('123')
const AnotherID = Symbol('123')

console.log(ID == AnotherID);

const BigNumber = 3456145627578946512n

console.log(typeof BigNumber);

const heros = [ "Saktiman" , "doga" , "Naagraj" ]  // arrays
let myObj =  {
    name = "vivek",
    age = 22,
}  // obj

const myFunction = function(){
    console.log("hello world ");
    
}  // function


