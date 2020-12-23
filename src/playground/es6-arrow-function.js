
// const username='Hamza Ansari'
// const getfirstname=(username) => {
//     return username.split(' ')[0];
// }
// console.log(getfirstname(username))

// const firstname=(username) => username.split(' ')[0];
// console.log(firstname(username))
// function add(a,b){
//     console.log(arguments)
//     return a+b
// }
// console.log(add(2,3,3,2,5,4))
const multiplier = {
    numbers : [1,2,3,4,5],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((l)=> l*this.multiplyBy);
    }

}
console.log(multiplier.multiply()); 