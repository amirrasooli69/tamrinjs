const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// bataye inke zir file va folderhaye zir majmooe adres ra beshnasad mesle ax ya file css
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname , 'public/index.html'));
})

const todosFilePath = path.resolve(__dirname , 'data/todos.json');

app.post('/todos' , (req , res) => {
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
            }
        })
    })

})
// fill todo when start page
app.get('/todos', (req, res) => {
    
    fs.readFile(todosFilePath, (err, data) => {
        if(err) {
            res.status(500).send(err);
            return;
        }

        // send data to user

        data = JSON.parse(data);
        res.send(data);
    })
})

app.delete('/todos', (req, res) => {
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
})


app.listen(8080);
console.log('server power on port 8080');