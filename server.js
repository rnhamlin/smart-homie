const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('assets'))

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`))