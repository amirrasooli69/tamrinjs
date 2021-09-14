const fs = require('fs');

class Fibonacci {

    constructor() {
        this.prev = 0;
        this.current =1;
    }

    next() {
        const current = this.current;
        this.prev = current;
        this.current = current + this.prev;
        return current;
    }
}
    const writeStream = fs.createWriteStream('/home/amir/Dev_Project/tamrinjs/t60files/fibonacci.txt');

    writeStream.on('ready', () => {
        let f = new Fibonacci();

        for(let i = 0; i< 1000; i++) {
            const n = f.next();
            writeStream.write(String(n) + '\n', err => {

                if(err) {
                    console.error('error writing:' , err);
                }
            });
        }

        writeStream.end();
    });