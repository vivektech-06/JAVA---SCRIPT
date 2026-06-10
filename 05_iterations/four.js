// iteration for object using for in looop

const myObject = {
  js: 'Java Script ',
  cpp: 'C++',
  rb: 'Ruby',
  swift: 'Swift by Apple '
}

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// for in loop in array but there direclty key deta hai means index number

const programming = ['JS', 'RB', 'PYTHON', 'CPP', 'JAVA']
for (const key in programming) {
  //console.log(key)
  //console.log(programming[key])
}


// map is noot iterratable
const map = new Map()
map.set('IN', 'India')
map.set('UsA', 'United dtate of India ')
map.set('Fr', 'france')
    
for (const key in map) {
    console.log(key)
}
