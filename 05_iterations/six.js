// const coding = ['JS', 'JAVA', 'RB', 'CPP', 'PYTHON']


// const values = coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values)

const myNum = [ 1,2,3,4,5,6,7,8,9,10]
// const newNum = myNum.filter((num)=> num>4)
// console.log(newNum);
// const newNum = myNum.filter((num)=> {        // agar scope open krte hai to return keyword use kran padega
//     return     num>4                        // explicit return  
// })
// console.log(newNum);
 
// same thing using for each
// const  newNum = []
// myNum.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);
  

const books = [
    {title : 'Book One' , genre : 'fiction',publish : 1981, edition:2004}
    {title : 'Book Two' , genre : 'Non-fiction',publish : 1992, edition:2008}
    {title : 'Book Three' , genre : 'fiction',publish : 1981, edition:2007}
    {title : 'Book Four' , genre : 'Non-fiction',publish : 1999, edition:2010}
    {title : 'Book FIve' , genre : 'Science',publish : 1989, edition:2014}
    {title : 'Book Six' , genre : 'History',publish : 2009, edition:2010}
    {title : 'Book Seven' , genre : 'fiction',publish : 1987, edition:1996}
    {title : 'Book Eight' , genre : 'NOn-fiction',publish : 1986, edition:2016}
    {title : 'Book Nine' , genre : 'History',publish : 2011, edition:1989}
    
]
//let userBooks = books.filter((bk)=> bk.genre==='History')
let userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"

})
console.log(userBooks);
