// Import file system module
const fs = require('fs')

// third party module
const chalk = require('chalk')

// custom module imports
const { getNotes } = require('./notes')

// Write a text file synchronously 
// fs.writeFileSync('notes.txt', 'Hello world, Im Andrew')


/* 
    Challenge 1: Append a message to notes.txt
    1. Use appendFileSync to append to file
    2. Run the script
    3. Check your work by opening the file
*/

// My code here
// const myMsg = ' Hey, this is the concat message!'
// fs.appendFileSync('notes.txt', myMsg)


/* 
    Challenge 2: Define and use a function in a new file 
    1. Create a new file called notes.js
    2. Create getNotes function that returns 'Your notes...'
    3. Export getNotes function 
    4. From app.js, load that func and call it, print the message to console
*/

// My code here
// const returnedNotes = getNotes()
// console.log("returnedNotes", returnedNotes)

/* 
    Challenge 3: Use the chalk library in my project
    1. NPM install chalk
    2. Import chalk into app.js
    3. Use it to print the string "Success!" to the console in green color
*/

// My code here
console.log(chalk.green('Success!', chalk.underline.bgBlue('with coolness.')));
