const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({sounds:'like a lotta hoopla',
foo: "bar"})
});

const PORT = process.env.PORT || 5000
app.listen(PORT)