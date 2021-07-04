const readline = require("readline");

const rl = readline.createInterface({
    "input": process.stdin,
    "output": process.stdout
});

rl.question("what's your Teacher name?", (answer) =>{
    console.log("this is your answer and our output:");
    console.log(answer);

    console.log("Please Enter student name"); // baraye inke moshkele sync hal shavad avordim dakhel
    // rl.close();
});

let students = [];
rl.on('line' , (input) => {
    if(input.length < 3){
        console.log('*** invalid name ***');
        return;
    }
    if(input == 'exit'){
        console.log('GoodBye');
        rl.close();
        return;
    }
    students.push(input);
    console.log(`add ${input} to list.`);
    console.log('we have ' + students.length + ' now');
    

});

rl.on('SIGINT', () => {
    console.log('GoodBye');
    rl.close();
});

rl.write("p",)