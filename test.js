//create a variable called a that equals 5
var a = 5
//display to the console log the following
console.log(a)

//the fuction below is commented out because the next randomnumber function is better written
/*  
function randomnumber(x, y){
    return x * y
} 
*/
randomnumber = (x, y) => {
    return x * y
}

console.log(randomnumber(20, 20))