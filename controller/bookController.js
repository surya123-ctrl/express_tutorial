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
// server.use(express.static('public'));
// server.get('/', (req, res) => {


// })
const getBooks = (req, res) => {
    res.json(books);
}

const createBook = (req, res) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(books);
}
const updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);
    }
    else {
        res.status(404).json({ error: 'Book not found' });
    }
}
const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.find(book => book.id === id);
    if (index !== -1) {
        const deletedBook = books[index];
        books.splice(index, 1);
        res.json(deletedBook);
    }
    else {
        res.status(404).json({ error: 'Book not found' });
    }
}

module.exports = {
    getBooks, createBook, updateBook, deleteBook
}




