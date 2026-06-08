function sayMyName() {
    // console.log("V");
    // console.log("I");
    // console.log("V");
    // console.log("E");
    // console.log("K");
}

sayMyName(); // function call karne ke liye hum function ka naam likhte hai aur uske baad parenthesis lagate hai  sayMyName()  isse hum function ko call kar sakte hai  agar hum sayMyName likhte hai to ye reference de rhe function ka but if sayMyName() to ye ececution kehlata hai

function sumTwoNumbers(nums1,nums2){
    // console.log(nums1 + nums2 );
    // let result = nums1 +nums2 
    // return result  // return keyword se hum function ke andar ke value ko bahar le ja sakte hai  isse hum function ke andar ke value ko use kar sakte hai function ke bahar bhi
   
    return nums1 + nums2  // hum directly bhi return kar sakte hai bina variable banaye
}
const result = sumTwoNumbers(5,10)
// console.log("result:",result)


function loginUserMessage (username){
    if(username === undefined ){
        return "Please enter valid username"
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("vivek"))  // vivek just logged in;
// console.log(loginUserMessage())  // Please enter valid username


// shoping cart  jisme hame ye nhi pta hotahai ki kitne item add honge to hum rest parameter ka use karte hai  rest parameter se hum function ke andar ke arguments ko array ke form me le sakte hai  isse hum function ke andar ke arguments ko easily access kar sakte hai 

function calculateCartPrice(...num1){   // rest parameter se hum function ke andar ke arguments ko array ke form me le sakte hai  isse hum function ke andar ke arguments ko easily access kar sakte hai  isme humne num1 ko rest parameter banaya hai to ye num1 ek array ban jayega jisme humare sare arguments honge
    return num1                         // ... ko hi spread and rest operator kahte hai but ye only apne use case pr depend krta hai 

}

// console.log(calculateCartPrice(200,300,400,500));



function calculateCartPrice(val1 , val2, ...num1){      // yaha pr 200 to gya val1 pr same val2 pr 300 gya aur baki num1 mai gya ek array ban gaya jisme 400 and 500 hai  isme humne num1 ko rest parameter banaya hai to ye num1 ek array ban jayega jisme humare sare arguments honge
    return num1                        
            
}

// console.log(calculateCartPrice(200,300,400,500, 2000));

const user = {
    username: "vivek",
    price : 199
}

function handleObject(anyObject){
    console.log(`username ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    username : "shivam",
    price: 15,
})


const myNewArray =[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1] // getArray ek array hai jisme humare sare arguments honge to hum getArray[1] se second value ko access kar sakte hai        

}

console.log(returnSecondValue(myNewArray)); //using function to access second value of an array  isme humne myNewArray ko function ke parameter me pass kiya hai to ye getArray ban jayega jisme myNewArray ke sare values honge to hum getArray[1] se second value ko access kar sakte hai  isme humne myNewArray ko function ke parameter me pass kiya hai to
