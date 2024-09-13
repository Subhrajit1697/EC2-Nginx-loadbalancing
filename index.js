const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    // do some load intensive work
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
        // do nothing
        sum += i;
    }
    res.send(`<center> <h1>Load Balancing Test with NGINX. Current Server PORT : ${port}, and sum is ${sum} </h1> </center>`);
});

app.listen(port, () => {
    console.log(`Server listening at PORT :${port}`);
});