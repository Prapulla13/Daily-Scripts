//Function Declaration : Hoisted
function greet1(name){
    return "Hello,${name}"
}
console.log(greet1('Prapu'))

let greet2 = function(name){
    return "Hello,${name}"
}
console.log(greet2('Anu'))