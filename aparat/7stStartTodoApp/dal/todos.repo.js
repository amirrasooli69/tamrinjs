const baseRepo = require('./base.repo');
const mongoDb = require('mongodb');



const repo = {
    // create 
    create: (todo , next) => {
        baseRepo.connect((err , db) => {
            if(err) next(err);
            else {
                db.collection('todos').insertOne(todo , next);
            }
        })

    },
    // read
    fetchAll: next => {
        baseRepo.connect((err , db) => {
            if(err) next(err);
            else {
                db.collection('todos').find({}).toArray(next);
            }
        })
    },
    // delete
    delete: (_id , next) => {
        baseRepo.connect((err , db) => {
            if(err) next(err);
            else {
                const objId = new mongoDb.ObjectId(_id);
                db.collection('todos').deleteOne({_id: objId} , next);
            }
        })
    },
    //update
    update: (_id , todo , next ) => {
        baseRepo.connect((err , db) => {
            if(err) next(err);
            else {
                const objId = new mongoDb.ObjectId(_id);
                db.collection('todos').updateOne({_id: objId}, {$set: todo} , next)
            }
        })
    }
}

module.exports = repo;