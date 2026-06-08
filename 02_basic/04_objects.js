//const tinderUser = new Object()    // singleton object 
const tinderUser = {}                // Non singleton object 
tinderUser.id = "123abc"
tinderUser.name = "Sammy "
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usersfullName: {
            firstname: "vivek",
            lastname: "kumar"
        }
    }
}


// console.log(regularUser.email);
// console.log(regularUser.fullname.usersfullName.firstname);
// console.log(regularUser.fullname.usersfullName.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }      // we want to merge two objects obj1 and obj2 into obj3 so hum directly obj3 = {obj1, obj2} nahi kar sakte hai kyuki isse hume ek nested object milega jisme obj1 and obj2 as a key honge aur unke andar ke values honge 
//const obj3 = { ...obj1, ...obj2 }   // spread operator   without spread operator we have to do like this  const obj3 = Object.assign({}, obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2) // 2nd way to merge two obj {} show karta hai ki hum ek emty obj create kr rhe jisme obj1 and obj2 ja rha 
//console.log(obj3);

const user = [  // array of objects meanss aray ke andar bahut sare object hai
    {
        id: 1,
        name: "vivek ",
        email: "vivek@gmail.com"
    },
    {
        id : 1,
        name: "vivek ",
        email: "vivek@gmail.com"
    },
    {
        id: 1,
        name: "vivek ",
        email: "vivek@gmail.com"
    }
]

//console.log(user[1].email); // array ke andar ke object ke email ko access karne ke liye hum is tarah se kar sakte hai  user[1].email  isse hume

console.log(tinderUser);
console.log((Object.keys(tinderUser)));
const keys = Object.keys(tinderUser)  // Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
console.log(keys);
console.log(typeof keys);
console.log((Object.values(tinderUser)));  // Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

console.log((Object.entries(tinderUser)));  // Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
