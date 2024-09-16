const fs = require('fs');
const path = require('path');

const directory = path.join( '../sample_input_for_students');
const file = 'sample_01.txt';

const filePath = path.join(directory, file);

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err){
        console.error("Error reading file: ", err);
        return;
    }
    const message = 'Data before sorting:\n'
    console.log(message + data);
});

