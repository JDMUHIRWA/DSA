const fs = require("fs");
const path = require("path");

// Function for reading file
const readFile = (callback) => {
  const directory = path.join("../sample_input_for_students");
  const file = "small_sample_input_04.txt";
  const filePath = path.join(directory, file);

  //Check for .txt extension and read the file. Otherwise, skip the file
  if (path.extname(filePath) !== ".txt") {
    console.error("This is not a text file:", file);
    return;
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      return;
    }
    callback(data);
  });
};

let uniqueintegers = {};

// Function for reading and processing file content
const readNextItemFromFile = (data) => {
  const lines = data.split("\n"); // Split the data into lines

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim(); // Trim each line to remove extra spaces

    if (line === "") {
      continue; // Skip empty lines
    }

    const splitLine = line.split(/\s+/); // Split line by any whitespace

    if (splitLine.length > 1) {
      console.error("Skipping line with multiple integers: ", line); // Skip lines with two integers
      continue;
    }

    const number = parseInt(splitLine[0], 10); // Convert the line to an integer

    if (isNaN(number)) {
      console.error("Invalid number: ", line); // Handle invalid numbers
    } else if (number < -9999 || number > 9999) {
      console.error("Over 32-bits: ", line); // Skip numbers outside the 4-digit range
    } else {
      uniqueintegers[number] = true; // Store unique integers
    }
  }

  let uniqueintegerslist = Object.keys(uniqueintegers).map(Number); // Store the unique integers in an array of numbers
  uniqueintegerslist = sorting(uniqueintegerslist); // Sort the unique integers

  console.log(uniqueintegerslist); // Print the sorted unique integers
  writeToNewDirectory(
    uniqueintegerslist,
    "small_sample_input_04.txt_results.txt"
  ); // Write sorted integers to a new file
};

// Function to sort integers (Bubble Sort)
const sorting = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Function to write the sorted integers to a new directory
const writeToNewDirectory = (uniqueintegerslist, outputFile) => {
  let outputDirectory = path.join("../sample_results");

  const outputFilePath = path.join(outputDirectory, outputFile);
  const dataToWrite = uniqueintegerslist.join("\n"); // Convert sorted integers to a newline-separated string

  // Write the sorted integers to a new file
  fs.writeFile(outputFilePath, dataToWrite, (err) => {
    if (err) {
      console.error("Error writing file: ", err);
    } else {
      console.log(`Sorted integers have been written to: ${outputFilePath}`);
    }
  });
};

readFile(readNextItemFromFile);