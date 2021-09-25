const fs = require('fs');
const path = require('path');
const todosRepo = require('../../dal/todos.repo');

// const todosFilePath = path.resolve(__dirname , '../../data/todos.json');

const controller = {
    // create todos
    create: (req , res) => {
        const todo = {text} = req.body;
    
        if(!todo) {
            res.status(400).send({message: 'text is required.'})
        }
    
        // read save data
        todosRepo.create(todo , (err , result) => {
            if(err) {
                res.status(500).send (err);
            } else {
                res.send(result);
            }
        });
    
    },
    // featch all data or refresh data
    featchAll: (req, res) => {
        todosRepo.fetchAll((err , data ) => {
            if(err) res.status(500).send(err);
            else {
                res.send(data);
            }
        })
    },
    // delete todos
    delete: (req, res) => {
        const todo =  { _id , text} = req.body;
        // read todo file
        todosRepo.delete(todo._id , (err , result) => {
            if(err) res.status(500).send(err);
            else res.send(result);
        })
    },
    // update todos
    update: (req, res) => {
    const todo = { _id , text} = req.body;
    todosRepo.update(todo._id , {text: todo.text} , (err , result) => {
        if(err) res.status(500).send(err);
        else res.send(result);
    })

    }
}

module.exports = controller;