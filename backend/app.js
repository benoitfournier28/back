const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = http.createServer(app);

const Products = require("./Routes/product_route");

app.set('port', process.env.PORT || 3030);

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api", Products);

// app.use((req, res) => {
//     res.json({ message : "ok"});
// })


server.listen(process.env.PORT || 3030);