// Import file system module
const fs = require('fs')

// Write a text file synchronously 
// fs.writeFileSync('notes.txt', 'Hello world, Im Andrew')


/* 
    Challenge 1: Append a message to notes.txt
    1. Use appendFileSync to append to file
    2. Run the script
    3. Check your work by opening the file
*/

// My code here
const myMsg = ' Hey, this is the concat message!'
fs.appendFileSync('notes.txt', myMsg)