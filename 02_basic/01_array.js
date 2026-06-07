// Array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//   ++++++++     Array Method 

// myArr.push(7)
// console.log(myArr);
// myArr.push(8)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)   //  means 9 is add on first posn. and shift the position of all element 
// console.log(myArr);

// myArr.shift()    // 0 ko remove kr deta hai
// console.log(myArr);
// console.log(myArr.includes(9));  // give boolean value true or false 
// console.log(myArr.indexOf(9));   // if not present in given array always give -1

// const NewArr = myArr.join()
// console.log(NewArr);
// console.log(myArr);
// console.log(typeof NewArr);



//+++++++++++   slice and splice 

console.log("A ", myArr)

const myNewArr = myArr.slice(1, 3)     // slice same portion return hota last range chor krr  and original array same rehta hai 
console.log(myNewArr)
console.log("B ", myArr)

const myNewArr2 = myArr.splice(1, 3)   // splice mai vo portion return ho jta hai range tak and original array mai se vo poriton remove ho jata hai 
console.log(myNewArr2)
console.log("C ", myArr)







