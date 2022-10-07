const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const { notStrictEqual } = require('assert')

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('assets'))

//add get routes

//get route for home directory 
//app.get('/', (req, res) => {
//res.sendFile(path.join(_dirname, 'insert directory name here to get inputted data'))
//})

// repeat above for multiple get routes

//add post routes

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))