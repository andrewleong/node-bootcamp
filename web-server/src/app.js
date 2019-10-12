const express = require('express')

const app = express()

// Routes
app.get('', (req, res) => {
    res.send("Hello Andrew")
})

app.get('/help', (req, res) => {
    res.send("Help")
})


app.listen('8000', () => {
    console.log("Listening to port 8000")
})