const express = require('express');
const server = express();
const products = require('./data');
server.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/phone">Phone</a>');
})
// server.get('/api/phone/:id', (req, res) => {
// const newProduct = products.map((product) => {
//     const { id, title, price, thumbnail } = product;
//     return {
//         id, title, price, thumbnail
//     };
// })
//     console.log(req.params);
//     const { id } = req.params;
//     const singleProduct = products.find((product) => product.id === Number(id))
//     if (!singleProduct) {
//         res.status(404).json({ message: 'No Product Found' });
//     }

//     res.json(singleProduct);
// })
server.listen(8080, () => {
    console.log("Server is running on port 8080");
})