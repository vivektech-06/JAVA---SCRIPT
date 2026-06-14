const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function(acc, currVal) {
//     console.log(`Acc : ${acc} and currVal : ${currVal}`);

//     return acc + currVal

// }, 0)
// console.log(myTotal);
const myTotal = myNum.reduce((acc, currVal) => acc + currVal, 0)
console.log(myTotal);

const shoppingCart = [
    {
    itemName: 'js course',
    price: 2999
    },
    {
    itemName: 'python course',
    price: 1999
    },
    {
    itemName: 'mobile dev course',
    price: 5999
    },
    {
    itemName: 'data science course',
    price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price , 0)
console.log(priceToPay);