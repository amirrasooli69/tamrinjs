var fruits = ["Apple", "Bnana", "Apple","Lemon"];
var fruits2 = ["x1","x2"];
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);
// for(var i=0; i<fruits.length ;i++){
//     console.log(fruits[i]);
// }
//-------
// fruits.forEach(function(index,value){
//     console.log(index);
//     console.log(value);
// });
//-------
// function logMyArrayItems(index,value){
//     console.log(value);
//     console.log(index);
// }

// fruits.forEach(logMyArrayItems);
//-------

// fruits.push("cocomber"); // add new item in array

// console.log(fruits);
// console.log(fruits.toString()); // convert to string with ,
// console.log(fruits.join("|*|")); // convert to string with favorite simbole for example there is |*|
// console.log(fruits.pop()); // remove last index from array
// console.log(fruits);
// console.log(fruits.concat(fruits2)); // merge 2 array
//-------
var numbers=[1,100,45,3,45];
var list = numbers.filter(function(value){
    return value >40;
});
//------
var list2=numbers.map(function(value){
    return value*2;
});
// this method see the all array
//------
var check=numbers.every(function(value){
    return value>40;
});
// is true if all index correct with condition
//-------
var some=numbers.some(function(value){
    return value>40;
});
// is true if 1 index correct with conditon
//-------
var max=numbers.reduce(function(index,value){
    return Math.max(index,value);
});
// find max number in array
//------
var min=numbers.reduce(function(index,value){
    return Math.min(index,value);
});
// find min number in array
//------
console.log(numbers);
console.log(list);
console.log(list2);
console.log("result of every: " + check)
console.log("result of some: " + some);
console.log(numbers.indexOf(100)); // return index of cell,if don't exist return -1
console.log("max number in array: " + Math.max(200,400,140));
console.log("max number in array: " + max);
console.log("min number in array: " + Math.min(200,400,140));
console.log("min number in array: " + min);

