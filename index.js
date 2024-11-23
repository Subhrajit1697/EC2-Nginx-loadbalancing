const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const Todos = require('./model');
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://loadbalancer-nginx:subhrajit@lambda.jg0gi.mongodb.net/test',);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed');
    }
}

connectDB();

app.use((req, res, next) => {
    console.log('port:', port);
    next();
});

app.get('/', async (req, res) => {
    try {
        let sum = 0;
        const todos = await Todos.aggregate([
            {
                $match: {
                    completed: false,
                    id: { $gt: 6, $lt: 150 },
                    userId: { $ne: 7 }
                }
            },

        ]);
        for (let i = 0; i < 30000; i++) {
            // do nothing
            sum += i;
        }

        res.json({ todos, sum });
    } catch (error) {
        console.log(error);
        res.send('Error');
    }
})



// app.get('/', (req, res) => {
//     // do some load intensive work
//     let sum = 0;
//     for (let i = 0; i < 1000000; i++) {
//         // do nothing
//         sum += i;
//     }
//     console.log(`sum is ${sum}`);
//     res.send(`<center> <h1>Load Balancing Test with NGINX. Current Server PORT : ${port}, and sum is ${sum} </h1> </center>`);
// });

app.listen(port, () => {
    console.log(`Server listening at PORT :${port}`);
});