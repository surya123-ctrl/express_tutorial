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

//filtering content based on search and limit
server.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    let shortedProduct = [...products];
    const { search, limit } = req.query;
    if (search) {
        shortedProduct = shortedProduct.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }
    if (limit) {
        shortedProduct = shortedProduct.slice(0, Number(limit));
    }
    res.json(shortedProduct);
    res.send("Hello");
})
server.listen(8080, () => {
    console.log("Server is running on port 8080");
})