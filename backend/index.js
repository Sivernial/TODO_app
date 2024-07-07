const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const { todo } = require('./db');
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {   
    res.send('This is the TODO app!');
});

app.post(`/Todo`, async (req, res) => {
    const createPayload=req.body;
    const payload = createTodo.safeParse(createPayload);
    if (!payload.success) {
        res.status(400).json({ error: "You sent the wrong data" });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.complete = false
    })

    res.status(201).json({ message: "Todo created" }) 
    
});

app.get(`/Todos`, async (req, res) => { 
    const todos = await todo.find({});
    res.json(todos);
});

app.put(`/completed`,async (req, res) => { 
    const createPayload=req.body;
    const payload = createTodo.safeParse(createPayload);
    if (!payload.success) {
        res.status(400).json({ error: "You sent the wrong data" });
        return;
    }
    
    await todo.updateOne({_id:req.body.id}, {completed: createPayload.complete = true});
    res.status(200).json({ message: "Todo updated" });
   
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});