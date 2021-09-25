const baseRepo = require('./base.repo');



const repo = {
    // create 
    create: (todo , next) => {
        baseRepo.connect( (err , db) => {
            if(err) next(err);
            else {
                db.collection('todos').insertOne(todo , next);
            }
        })

    }
}

module.exports = repo;