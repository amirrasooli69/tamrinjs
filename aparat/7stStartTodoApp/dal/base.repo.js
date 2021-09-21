const mongoDb = require('mongodb');

const connection = () => {
    const connectionString = 'mongodb://localhost:27017/todoApp';    

    mongoDb.connect(connectionString, (err , client) => {
        if(err){
            console.log(err , client);
        }
    });
}
module.exports = connection;