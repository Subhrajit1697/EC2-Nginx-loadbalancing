const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    userId: {
        type: Number,
    },
    id:{
        type: Number,
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todos = mongoose.model('todos', todoSchema);

module.exports = Todos;

