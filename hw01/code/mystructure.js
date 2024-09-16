const fs = require('fs');
const path = require('path');

const processFile = (callback) => {

    const directory = path.join( '../sample_input_for_students');
    const file = 'sample_01.txt';

    const filePath = path.join(directory, file);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err){
            console.error("Error reading file: ", err);
            return;
        }
        callback(data);
    });
}

const readNextItemFromFile = (data) => {
    const lines = data.split('\n');

    const uniqueintegers = {};

    for (i=0; i<lines.length; i++){
        const line = lines[i].trim();
        if (line === ''){
            continue;
        }
        const number = parseInt(line, 10);
        if (isNaN(number)){
            console.error('Invalid number: ', line);
            continue;
        }
    }
    console.log('Unique integers: ', Object.keys(uniqueintegers));
}

processFile(readNextItemFromFile);
