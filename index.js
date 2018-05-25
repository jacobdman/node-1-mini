var express = require('express');
const bodyParser = require('body-parser')
const bc = require('./server/books_controller')

const app = express();
app.use(bodyParser.json())

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

