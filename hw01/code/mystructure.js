const fs = require('fs');
const path = require('path');

const readFile = (callback) => {

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

let uniqueintegers = {};

const readNextItemFromFile = (data) => {
  const lines = data.split("\n"); // Split the data into lines

  for (i = 0; i < lines.length; i++) {
    const line = lines[i].trim(); // Trim each line to remove extra spaces

    if (line === "") {
      continue; // Skip empty lines
    }
    const number = parseInt(line, 10);  // Try to convert the line to an integer

    if (isNaN(number)) {
      // This block handles valid numbers
      console.error("Invalid number: ", line); // Print error message
    } 
    else {
      uniqueintegers[number] = true; // store the unique integers
    }
  }

  let uniqueintegerslist = Object.keys(uniqueintegers).map(Number); // Store the unique integers in an array of numbers

  uniqueintegerslist = sorting(uniqueintegerslist); //Sort the unique integers

  console.log(uniqueintegerslist); // Print the sorted unique integers
};

const sorting = (arr) => {
    let n = arr.length;

    for(i = 0; i < n-1; i++) {
        for(j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    };
    return arr;
};

readFile(readNextItemFromFile);

