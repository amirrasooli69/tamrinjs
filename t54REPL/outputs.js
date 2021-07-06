// console.log('My name is %s','Amir'); // %d= baraye number %i=baraye integer %o= baraye object
// //--------

// console.trace(); // trace barname log mikonad
// //--------

// // console.clear();
// //--------

// const doSomething = function() {
//     console.log('hello');
// }

// const duringTime = function() {
//     console.time('doSomething()');

//     doSomething();

//     console.timeEnd('doSomething()');
// }

// duringTime();
// //--------

// const chalk = require('chalk');

// console.log(chalk.blue('hello'));

// console.log(chalk.underline.bgBlue('hello amir') + '!!!');
// console.log(chalk.italic.underline.bold.red('hello amir') + '!!!');
// //---------

var ProgressBar = require('progress');

const doSomething = function() {

const bar = new ProgressBar(':bar', { total: 50 });

var timer = setInterval(function () {
    bar.tick();
    if(bar.complete){
        console.log('\n finish \n');
        clearInterval(timer);
    }
},100);
}




const duringTime = function() {
    console.time('doSomething()');

    doSomething();

    console.timeEnd('doSomething()');
}

duringTime();