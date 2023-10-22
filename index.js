const express = require('express');
// const morgan = require('morgan');
const server = express();
// const logger = require('morgan');
// const products = require('./data');
// server.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1><a href="/api/phone">Phone</a>');
// })
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
// server.get('/api/v1/query', (req, res) => {
//     console.log(req.query);
//     let shortedProduct = [...products];
//     const { search, limit } = req.query;
//     if (search) {
//         shortedProduct = shortedProduct.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
//     }
//     if (limit) {
//         shortedProduct = shortedProduct.slice(0, Number(limit));
//     }
//     res.set('Content-Type', 'application/json');
//     res.json(shortedProduct);

//     res.send("Hello");
// })



//middlewares
// const logger = (req, res, next) => {
//     console.log(`${new Date()}, Request[${req.method}], [${req.url}]`);
//     next();
// }
// server.use(logger);
// server.use(morgan('dev'));
// server.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1><a href="/api/phone">Phone</a>');
// })
// server.get('/about', (req, res) => {
//     res.send('<h1>About</a>');
// })
// server.get('/contact', (req, res) => {
//     res.send('<h1>Contact</a>');
// })


//Post on forms
server.use(express.urlencoded({ extended: false }));
let books = [
    {
        id: 1,
        title: 'Book-1',
        author: 'Author-1'
    }, {
        id: 2,
        title: 'Book-2',
        author: 'Author-2'
    }
]
server.get('/books', (req, res) => {
    res.json(books);
})
server.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    books.push(newBook);
    res.status(201).json(newBook);
    console.log(req.body);
})
server.use(express.static('public'));
server.listen(8080, () => {
    console.log("Server is running on port 8080");
})