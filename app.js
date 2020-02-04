//require libraries
const express = require('express')

//app setup
const app = express()

//middleware

//routes
app.get('/', (req, res) => {
    res.send('Hello Squirrel World')
})

//start server
app.listen(3000, () => {
    console.log('Gif Search listening on port 3000!')
})