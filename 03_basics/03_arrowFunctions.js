const user = {
    username: "vivekkkk",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `);
        console.log(this);


    }
}
// user.welcomeMessage()
// user.username = " Vinay "
// user.welcomeMessage()

// console.log(this);    // jab aap node env mai ho to  apka this refer krega empty obj{}


// function chai (){
let username = " vivekkk"
//     console.log(this)
//     console.log(this.username)    // overall means this. use only in object not directly function 
// }
// chai()



// const chai = function () {
//     let username = "vinay"
//     // console.log(this)
//     console.log(this.username)
// }
// chai()
  

// arrow function
const chai =  () => {
    let username = "vinay"
    console.log(this)
    console.log(this.username)
}
chai()


//basic arrow fun(explicit )

// const addTwo = (num1 , num2 ) => {

//     return num1 + num2
// }


//implicit return 
// const addTwo = (num1 , num2 ) => num1 + num2  
//const addTwo = (num1 , num2 ) => ( num1 + num2  ) // agar parenthesis hai to return nhi likhna hai is parenthesis nhi hai to return likhna hai 

const addTwo = (num1 , num2 ) => ( { username : "vivek"}  ) 
console.log(addTwo(3,4))



// const myArray = [2,5,8,6,7]
// // myArray.forEach(function () {})

// myArray.forEach(() => {})