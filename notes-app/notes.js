const fs = require('fs')

// Read notes.txt
function getNotes() {
    return fs.readFileSync('notes.txt', 'utf8')
}


module.exports = { 
    getNotes
}
