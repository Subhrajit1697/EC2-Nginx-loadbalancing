const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send(`<center> <h1>Load Balancing Test with NGINX. Current Server PORT : ${port}</h1> </center>`);
});

app.listen(port, () => {
    console.log(`Server listening at PORT :${port}`);
});