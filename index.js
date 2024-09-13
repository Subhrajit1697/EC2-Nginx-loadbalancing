const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    // do some load intensive work
    for (let i = 0; i < 10000; i++) {
        // do nothing
    }
    res.send(`<center> <h1>Load Balancing Test with NGINX. Current Server PORT : ${port}</h1> </center>`);
});

app.listen(port, () => {
    console.log(`Server listening at PORT :${port}`);
});