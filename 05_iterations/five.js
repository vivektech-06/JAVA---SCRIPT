const coding = ['JS', 'JAVA', 'RB', 'CPP', 'PYTHON']

// callback function ke form mai
// coding.forEach(function  (item){
//     console.log(item)
// })

// call back function ke form abb arrow function
coding.forEach(item => {
  // console.log(item)
})

// function printMe(item ){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr)
// })

const myCoding = [
  {
    langaugeName: 'java Script',
    languageFileName: 'JS'
  },
  {
    langaugeName: 'java',
    languageFileName: 'java'
  },
  {
    langaugeName: 'python ',
    languageFileName: 'py'
  }
]

myCoding.forEach(item => {
  console.log(item.langaugeName)
})
