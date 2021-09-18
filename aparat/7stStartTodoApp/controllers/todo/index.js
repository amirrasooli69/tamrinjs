const fs = require('fs');
const path = require('path');

const todosFilePath = path.resolve(__dirname , '../../data/todos.json');

const controller = {
    // create todos
    create: (req , res) => {
        const todo = {text} = req.body;
    
        if(!todo) {
            res.status(400).send({message: 'text is required.'})
        }
    
        // read save data
        fs.readFile(todosFilePath , (err, data) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            //add new todo to save data
    
            data = JSON.parse(data);
            data.push(todo);
            data = JSON.stringify(data);
            
            // save the new data
    
            fs.writeFile(todosFilePath , data , err => {
                //send the result to user
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.send(todo);
                    console.log('create data' + todo);
                }
            })
        })
    
    },
    // featch all data or refresh data
    featchAll: (req, res) => {
    
        fs.readFile(todosFilePath, (err, data) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
    
            // send data to user
    
            data = JSON.parse(data);
            res.send(data);
        })
    },
    // delete todos
    delete: (req, res) => {
        const todo =  {text} = req.body;
        // read todo file
        fs.readFile(todosFilePath, (err, data) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            // convert to json
            data = JSON.parse(data);
            // remove requested todo from todos
            data = data.filter(d => {
                return d.text != todo.text;
            })
            // convert data to string
    
            data = JSON.stringify(data);
            // save data to json file
    
            fs.writeFile(todosFilePath, data , err => {
                if(err) {
                    res.status(500).send(err);
                } else {
                    // send  ok response to user
    
                    res.end();
    
                }
            })
        });
    },
    // update todos
    update: (req, res) => {
    const oldTodo = {text} = req.body.oldTodo;
    const newTodo = {text} = req.body.newTodo;

    // read toods file
    fs.readFile(todosFilePath, (err, data) => {

        //convert data to json object
        data = JSON.parse(data);
        //update todos file
        data.forEach((t, i) => {
            if(t.text === oldTodo.text) {
                data[i] =  newTodo;
            }
        });

        // convert data to string
        data = JSON.stringify(data);

        // save data  to json file

        fs.writeFile(todosFilePath, data ,err => {
            
            // send result to user
            if(err) {
                res.status(500).send(err);
                return;
            }

            res.send(newTodo);
        })
    })

    }
}

module.exports = controller;