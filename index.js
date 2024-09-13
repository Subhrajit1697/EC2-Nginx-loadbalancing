const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('port:', port);
    next();
});

app.get('/', (req, res) => {
    // do some load intensive work
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        // do nothing
        sum += i;
    }
    console.log(`sum is ${sum}`);
    res.send(`<center> <h1>Load Balancing Test with NGINX. Current Server PORT : ${port}, and sum is ${sum} </h1> </center>`);
});

app.listen(port, () => {
    console.log(`Server listening at PORT :${port}`);
});