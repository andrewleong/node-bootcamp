// Core Modules
const path = require('path')

// NPM Modules
const express = require('express')

// Run express
const app = express()

// Public Directory Path
const publicPath = path.join(__dirname, '../public') 

// Customize server to serve static path which is public folder
app.use(express.static(publicPath))

// Routes
app.get('/help', (req, res) => {
    res.json({
        name: 'Andrew',
        age: 27
    })
})

app.listen('8000', () => {
    console.log("Listening to port 8000")
})