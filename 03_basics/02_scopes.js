// var = 300  which means if using var for declaring the variable so very high chance to available outside the block 

let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30    // same problem is simply declare like this  c=30 

    // console.log("INNER ", a);    // block scope 

}

// node ke through scope alag hai and console ke through alag hai  



// console.log("OUTER", a);    // global scope 
// console.log(b);
// console.log(c);


function one() {
    const username = "vivek "
    function Two() {
        const website = " Youtube "
        // console.log(username);

    }
    // console.log(website);
    Two()
}
one()


if (true) {
    const username = "vivekkkkk"
    if (username === "vivekkkkk") {
        const website = "  youtube "
        // ??console.log(username + website);

    }
    // console.log(website);  //error bcz we are not able to accces outside the sccope 

}
// console.log(username);  // same this is also not able to access to outside the scope 



//  ++++++++++++++++++++++      interesting         ++++++++++++++ (two type of  declaring the function )

// addOne(5)     //  not showing an error 
function addOne(num) {
    return num + 1
}

addOne(5)

//addTwo(5)      // showing an error 
const addTwo = function (num) {    // hoisting     // expression bhi kehte hai 
    return num + 2
}

addTwo(5)
