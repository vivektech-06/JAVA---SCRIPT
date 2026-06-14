const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //const NewNum = myNumber.map((num) => num + 10) // without scope open kiye hue {}
    // console.log(NewNum);
    //const NewNum = myNumber.map((num) => { return num + 10 }) // with scope open kiye hue undefined deta hai  so we are use return keyword
    //console.log(NewNum);

// chaining means using two or more method simultaneously like .map().map().filter()
const newNum = myNumber
    .map((num) => num * 10)  // yaha pr sabhi return hoga
    .map((num) => num + 1)
    .filter((num)=>num>=40)   // true false wala game hai jo sahi hai wahi return hoga
console.log(newNum);