const mongoose = require('mongoose');

// mongodb+srv://Sivernial:W0Javt0NGy0v92zY@livecohort.0qptjz1.mongodb.net/

mongoose.connect('mongodb+srv://Sivernial:W0Javt0NGy0v92zY@livecohort.0qptjz1.mongodb.net/Todo')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    complete: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('Todo', todoSchema);

module.exports = {
    todo
};