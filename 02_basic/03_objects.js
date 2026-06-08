/*   object is declared using two way literal (using lateral , singleton nahi bnta hai )and constructor(hamesa singleton bnega )

singleton   means ye apne tarh ka ek hi object hai but jab dusri tarah bannte hai to uske kai saare instance ban jate hai 

object literals 

*/
// Object.create()  ye constructor way to declare obj

const MySym = Symbol("key1")         // it is unique 


const JsUser = {                    // yaha hum key aur value both define kar sakte hai 
    name: "vivek ",
    "full name ": "Vivek Kumar ",
    [MySym]: "key1",
    age: 20,
    location: "Ghaziabad ",
    email: "vivek@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]

}

// two way to access 
// console.log(JsUser.email);   // using dot(.)  we are not able to access full name so we are use sqr bracet[]
// console.log(JsUser["email"]);   // only using this we are able to access full name 
// console.log(JsUser["full name "]);
// console.log(JsUser[MySym])

JsUser.email = "vivek@new.com"
// console.log(JsUser.email);   //  overrite 
// console.log(JsUser["email"])

// freez so other user not to change their value 
// Object.freeze(JsUser)
JsUser.email = "vivek@chatgpt.com"   // not change or over write bcz of freez the JsUser 
// console.log(JsUser);

JsUser.greeting = function(){             // object letrial 
    console.log(" Hello JS User ");
    
}
JsUser.greetingTwo = function(){
    console.log(` Hello JS User , ${this.name}` );
    
}

// console.log(JsUser.greeting);
 console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());


