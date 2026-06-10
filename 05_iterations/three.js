// Array specific loop
// for of            array ke ander obj =>  [{},{},{}]   toh har iteration mai obj mai se kuch value nikalna hai

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // for of loop inn array mai direct value deta hai 
  //console.log(num)
}

const greetings = 'Hello World!'
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

//Map  // key value pair ordered and uniqe
const map = new Map()
map.set('IN', 'India')
map.set('UsA', 'United dtate of India ')
map.set('Fr', 'france')
//console.log(map)
// iteration on map
for (const [key, value] of map) {
  //console.log(key, ':-', value)
}

const  myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }

