const express = require('express');
const { Todo, updateTodo } = require('./types');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {   
    res.send('This is the TODO app!');
});

app.post(`addTodo`, (req, res) => {
    const todo = Todo.safeParse(req.body);
    if (!todo.success) {
        res.status(400).json({ error: "You sent the wrong data" });
    }
    return;
    
});

app.get(`getTodos`, (req, res) => { });

app.put(`updateTodo`, (req, res) => { 
    const todo = updateTodo.safeParse(req.body);
    if (!todo.success) {
        res.status(400).json({ error: "You sent the wrong data" });
    }
    return;
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});