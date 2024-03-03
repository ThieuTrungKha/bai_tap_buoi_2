var sachs  = [
{
    tacgia: 'Harper Lee',
    tieuDe: 'To Kill a Mockingnird',
    namXuatBan: 2020,
    trang : true
},
{
    tacgia: 'Harper Lee',
    tieuDe: 'To Kill a Mockingnird',
    namXuatBan: 2020,
    trang : true
}

];
for (let index = 0; index < sachs.length; index++) {
    console.log (sachs[index].tacgia);    
    console.log (sachs[index].tieuDe);    
    console.log (sachs[index].namXuatBan);    
    console.log (sachs[index].trang);  


}


function mang() {
    var so = [2,3,4,5];
    var min = so[0] ;
    var max = so[0] ;
for (let index = 1; index < so.length; index++) {
    if (max < so[index]) {
        max = so[index]  ;
    }
    if (min > so[index]) {
      min =  so[index]  ;
    }
    return max, min ;

}
}
mang();
function thuy() {
    var abc = 'Co Thuy dep gai';

}

const bai2 = () =>{
    var mang2 = [2,3,5,4];
    let min = mang2[0], max= mang2[0];
    for(let i = 0; i < mang2.length ; i++){
        if(min> mang2[i]){
            min = mang2[i];
        }
        if(max < mang2[i]){
            max = mang2[i];
        }
        
    }
    return console.log(max,min);
}

bai2();

function tong() {
input1 =  0 ;
for (var i in argument) {
    res += argument ;

}
return res;
}

sayHello.call(pers)
var sayHello = function(){console.log('Hello, '+this.name);};