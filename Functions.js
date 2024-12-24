//1. Functions withour input and without return:
function add(){
    var a = 10;
    var b = 20;
    console.log("Addition is:",a+b);
}
add();

//2. Functions with input and without return
function sub(x,y){
    console.log("subtraction is:",x-y);
}
sub(200,100)

//Functions without input and with return
function mul() {
    var p = 300;
    var q = 100;
    return p * q;
}
let result = mul();
console.log("Multiplication is:",result);

//Division
function div(){
    var m = 3000;
    var n = 100;
    return m / n;
}
let res = div();
console.log("Division is:",res);