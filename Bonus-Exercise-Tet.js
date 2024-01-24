//---------------ví dụ slide 2-----------------

const x = 100;
let result ;

if (x < 1000) {
    result = "nhỏ hơn 1000"
}else{
    result = "lớn hơn 1000"

}

// rút gọn 
const v = 100;
const result1 = (x < 1000) ?  "nhỏ hơn 1000" :  "lớn hơn 1000";

// ví dụ slide 3

let variable2 ;
if (variable1 !== null || variable1 !== undefined || variable1 !== "") {
    variable2 = variable1;
} else {
    variable2 = "";
}

//rút gọn

const variable = variable1 || "";

// ví dụ slide 4
let a;
let b;
let c = 3;
// rút gọn

let a, b, c = 3;
if (isTurnOn === true) {
    
}
// rút gọn

if (isTurnOn) {
    
}
// ví dụ slide 5
for (let i = 0; i < sampleArray.length; i++) {
    
}
// rút gọn
for(let item in sampleArray)


for (let i = 0; i < 100000; i++) {
    
}
// rút gọn
for (let i = 0; i < 1e5 ; i++) {
    
}
// giá trị các biểu thức sau đều là true
1e0 === 1;
1e1 === 10;
1e2 === 1000;
1e3 === 10000;
1e4 === 100000;
1e5 === 1000000;

// ví dụ slide 6
const x=1, y=2;
const obj = {
    x : x
    y : y
};
//rút gọn
const x=1, y=2;
const obj = {x,y}

// ví dụ slide 7
function sayHello(name) {
    console.log('Hello', name);
}

setTimeout(function() {
    console.log('Loaded')
}, 2000);

list.forEach(function(item){
console.log(item);
});
//rút gọn 
sayHello = name => console.log('Hello', name);
setTimeout(() => console.log('Loader'), 2000)
list.forEach(item => console.log(item));

// ví dụ slide 8

function getValue(a,b,c) {
    if (a === undefined) {
        a= 3;
    }
    if (b === undefined) {
        b= 4;
    }
    return a*b + c;
    
}
//rút gọn
getValue = (a,b,c)=> (a*b+c)

// ví dụ slide 9
const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t' 
+ 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
+ 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
+ 'veniam, quis nostrud exercitation ullamco laboris\n\t'
+ ' nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
+ 'irure dolor in reprehenderit in voluptate velit esse.\n\t' 
//rút gọn 
const lorem = `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.`;

    // ví dụ slide 10
const action = require('lib/action')
const service = require('lib/service')

const form = this.props.form;
const errors = this.props.errors;
const entity = this.props.entity;
const controler = this.props.controler;
const component = this.props.component;
//rút gọn 
import {action, service} from 'lib';
const {form, errors, entity, controler, component} = this.props;

// ví dụ slide 11
 const odd = [1,3,5];
 const nums = [2,4,6].concat(odd);


 const arr = [1,2,3,4];
 const arr2 = arr.slice();
 //rút gọn 
 const odd = [1, 3, 5];
const nums = [2, 4, 6, ...odd];

const arr = [1, 2, 3, 4];
const arr2 = [...arr];

const odd = [1, 3, 5];
const nums = [2,..., 4, 6];

// ví dụ slide 12
function sample(param1) {
    if (param1 === undefined) {
        throw new Error('thiếu tham số!');
    }
    return param1;
}
// rút gọn
mandatory = () => {throw new Error('thiếu tham số!');}
sample = (param1 = mandatory()) => param1

// ví dụ slide 13

const employees = [
    {name: 'Emp A', age: 25},
    {name: 'Emp B', age: 28},
    {name: 'Emp C', age: 35},
]
function findEmp(name) {
    for (let i = 0; i < employees.length; i++) {
if (employees[i].name === name) {


    return employees[i];
}        
    }
}
const name = 'Emp A';
emp = findEmp(name);

//rút gọn 
const name = 'Emp A';
emp = employees.find(item => item.name === name)

// ví dụ slide 14
function validate(fullName) {
    if (!fullName.firstName) {
        return false;
    }
    if (!fullName.lastName) {
        return false;
    }
    return true;
    
}
console.log(validate({firstName: 'Duy', lastName: 'Buffet'}));

// ví dụ slide 15

const rule = {
    firstName: {
        require: true
    },
    lastName: {
        require: true
    }
}

const validate = (rule, values) =>{
    for( prop in rule){
        if(rule[prop].required){
            if(!values[prop]){
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule, {firstName: 'Duy'}));
console.log(validate(rule, {firstName: 'Duy', lastName: 'Buffet'}));

// ví dụ slide 16
Math.floor(6.9) === 6
// rút gọn 
~~6.9 === 6 