let MyDate = new Date();
// console.log(MyDate)                         // 2026-06-07T04:49:35.130Z
// console.log(MyDate.toString())              // 2026-06-07T04:49:35.130Z
// console.log(MyDate.toDateString())          // Sun Jun 07 2026
// console.log(MyDate.toISOString())           // 2026-06-07T04:51:21.877Z
// console.log(MyDate.toJSON())                // 2026-06-07T04:51:53.352Z
// console.log(MyDate.toLocaleDateString())    // 6/7/2026
// console.log(MyDate.toLocaleString())        // 6/7/2026, 4:52:53 AM
// console.log(MyDate.toLocaleTimeString())    // 4:53:17 AM
// console.log(MyDate.toTimeString())          // 04:53:37 GMT+0000 (Coordinated Universal Time)
// console.log(MyDate.toUTCString())           // Sun, 07 Jun 2026 04:53:59 GMT
// console.log(MyDate.getTimezoneOffset())     // 0

// console.log(typeof MyDate); // obj

// let MyCreatedDate = new Date(2026, 2, 25); // note :   month is started from 0 to 11 means 0 is january
// console.log(MyCreatedDate.toDateString());

// let MyCreatedDate2 = new Date(2026, 2, 25, 5, 3);  
// console.log(MyCreatedDate2.toLocaleString());

// let MyCreatedDate3 = new Date( "2026-01-15");  // YY-MM-DD
// console.log(MyCreatedDate3.toLocaleString());

let MyCreatedDate4 = new Date("01-25-2026");  
// console.log(MyCreatedDate4.toLocaleString());

let myDateStamp = Date.now()
// console.log(myDateStamp)  // standard date se aaj tak ka milisec. aata hai 
// console.log(MyCreatedDate4.getTime())  // ye jo hai maine create kiya tha date waha se iska milisec. aayaa hai 

// console.log(Math.floor(Date.now()/1000))   /// abb ye second mai aaya hai 

let NewDate = new Date()
console.log(NewDate)
console.log(NewDate.getDate())
console.log(NewDate.getMonth())  // 0 is januaray
console.log(NewDate.getMonth()+1)   // means now 1 is januarary 
console.log(NewDate.getDay())  // 0 is sunday
console.log(NewDate.getDay()+1)  // now 1 is sunday

 // string interpulation means backtick (``)  `{$}`

 console.log(` the month is ${NewDate.getMonth()+1} and the day is ${NewDate.getDay()+1}`)

 NewDate.toLocaleString('default',{
     weekday : "long",
     dateStyle : "full",
      
 })
 console.log(NewDate)