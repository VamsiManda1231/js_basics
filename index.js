console.log('hemanth');
//getting familiar with the datatypes in js
//number
let x = 64;
console.log(x);
//character
let y = 'a';
console.log(y);
//string
let name ='abhi';
console.log(name);
//boolean
let t = true;
console.log(t);
console.log(typeof(t));
//refrence datatypes--->obejets,array,function
//object
console.log('Using object:');
let person ={name:'abhi',age:21};
person.age=31;
person['name']='abhii';
let colors=['red','blue','white'];
console.log(person);
console.log(colors);
//function
console.log('Use of funcyions!');
function greet(name){
    console.log("Hello!"+name);
}
greet(name);
//array
let array1=[101,102,103];
console.log(array1);
console.log('Use of list');
//list ---> can be the list of heterogeneous objects
let list1=[{name1:"abhi",age1:20},{name2:"aarya",age2:21},{name3:"arjun",age3:22}];
console.log(list1);

//loops in js
console.log('loops:');
console.log('Use of for loop');
for(let i=0;i<5;i++){
    console.log("for loop!!");
}
for(let i=5;i>=1;i--){
    if(i%2!=0) console.log(i);
}
//for(variable of iterable )--arrays
//it iterate through items in collections like arrays
console.log(" ");
const numbers=[1,2,3,4,5];
for(let num of numbers){
    console.log(num);
}
//for(variable in object)--obj
console.log(" ");  
const posts={'id':1,'title':'arya','body':'movie'};
for(let post in posts){
    console.log(posts[post]);
}
//switch
console.log('use of switch');
let day='weekday';
switch(day){
    case 'weekday':
        console.log('work day');
        break;
    case 'weekend':
        console.log('holiday');
}
//while loop
console.log('use of while loop');
let i=0;
while(i<=5){
    console.log(i);
    i++;
}

//do while
console.log('Using do while');
do {
    console.log(i);
    i++;
}while(i<=3);

//conditional statements
console.log('use of if-else');
let price = 50;
if(price<25){
    shippingcost=5;
}else if(price==25){
    shippingcost=4;
}else{
    shippingcost=7;
}
console.log(shippingcost);