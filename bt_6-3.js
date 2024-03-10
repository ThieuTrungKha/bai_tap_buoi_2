

//---------------------------6/3---------------//closures
var sayBye =function(name){
    var text = 'Bye ' + name;
    return()=>{
        console.log(text);

    }

}

sayBye('Me');
var calledMe = sayBye('Me');
calledMe();

//-------------------Currries
function add(a,b,c) {
    return a+b+c;
}
console.log(add(1,2,3));
function addCurries(a) {
    
    return(b) =>{
        return(c) =>{
            return a+b +c;
    }
}
}

console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 =ad1(2);
const ad3 = ad2(4);
console.log(ad3);

//--------this
var student = {
    name: 'Mai Ha Thi',
    getName: function(){
        console.log(this.name);
        return this.name;
    }
};
var _deStudent = student.getName();
// ---------------- global / apply
var person1 = {name: 'Nhat Minh', age: 12};
var person2 = {name: 'Huu Trung', age: 32};

var sayHello = function(){console.log('Hello' + this.name);};
var sayGoodbye = function(){console.log('Goodbye' + this.name);};

sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);

//---------- scope chain

var te ;
function step1() {
  
    console.log(te);
    
}

function  step2() {
     te = 2;
    step1();

}

step2();
var te = "Global variable";
// ====== scope bind()

var checkNumericRange = function (value) {
    if (typeof value !== 'number') {
        return false;

        
    }else
    return value >= this.minimum && value <= this.maximum;

    
}

var range = {minimum: 10, maximum:20};

var boundCheckNummericRange = checkNumericRange.bind(range);

var result = boundCheckNummericRange(12);
console.log(result);

// ====== Lexical scope
function fouter() {
    var x  = "Hello";
    function finner() {
        x= "World";
    }
    finner();
    return x;
}
console.log(fouter());

//----
var myFuntion = function () {
    var name = 'Ha Thi';
    var myOtherFuntion = function () {
        console.log('I am' + name);
    };
    console.log(name);
    myOtherFuntion();

    
}

myFuntion();




class Pet1{
    constructor(name, method){
        this.name = name;
        this.method = method;
    }
    in(){
        return "Tôi tên là: "+this.name+".,"+this.method;

    }


}
class Pet extends Pet1{
    constructor(name, method,method_pet){
        super(name, method);
        this.method_pet = method_pet;
        
    }

}


//  sử dụng hàm tìm số chẵn trong 1 mảng dùng callback


function test(something1){
    var n1 = something1
    console.log("test: "+n1);
}
function test2(sum1, sum2,callback){
    let sum = sum1 + sum2;
    callback(sum);
}
test2(5,5,test);



function tim_so_chan(arr = []) {
    for (let index = 0; index < arr.length; index++) {
         if (arr[index]%2 == 0) { 
             console.log("so chan: "+arr[index]);
}
    }
}
function nhap_mang(callback_mang) {
 let arr = [1,2,3,4,5,6,7,8,9];
 callback_mang(arr);
}
nhap_mang(tim_so_chan)
    
// chuyển slide 36 sang dạng class
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.calcArea = function () {
            return this.w * this.h;
        }
        return this;
    }
}

var rect1 = new Rect(1, 2, 3, 4);
document.write(rect1.constructor.name + " " + rect1.constructor.prototype + " " + rect1.calcArea() + "<br/>");

var rect2 = new Rect(1, 2, 3, 4);
document.write(rect2.constructor.name + " " + rect2.constructor.prototype + " " + rect2.calcArea() + "<br/>");

document.write(window.calcArea() + "<br/>");
