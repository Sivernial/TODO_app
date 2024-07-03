const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {   
    res.send('This is the TODO app!');
});

app.post(`addTodo`, (req, res) => {
});

app.get(`getTodos`, (req, res) => { });

app.put(`updateTodo`, (req, res) => { });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});