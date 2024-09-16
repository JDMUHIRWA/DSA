
# Unique Integers Project

## Overview
This project is designed to read a list of integers from an input file, process them to remove duplicates, and output the list of unique integers in sorted order. I have used JS as the programming language.


### Features:
- Handles positive and negative integers.
- Skips empty lines, lines with invalid or non-integer data, and lines containing multiple integers.
- Sorts the unique integers manually using a custom sorting algorithm.
- Outputs the sorted unique integers, one per line, in the result file.

## How to Run

1. Clone this repository or download the source code.
2. Ensure that you have [Node.js](https://nodejs.org/) installed on your system.
3. Place the input files in the `/sample_inputs/` folder.
4. Run the script as follows:

```bash
node /dsa/hw01/code/src/UniqueInt.js /path/to/input/file /path/to/output/file
```

For example:

```bash
node /dsa/hw01/code/src/UniqueInt.js sample_inputs/sample_input_01.txt sample_results/sample_input_01_results.txt
```

This will generate an output file in the `sample_results/` folder with the sorted unique integers.

## Sample Input/Output

### Sample Input (sample_input_01.txt)
```
5
14
5
-9
62
-1
-9
-9
```

### Sample Output (sample_input_01_results.txt)
```
-9
-1
5
14
62
```

## Functions Overview

### `processFile(inputFilePath, outputFilePath)`
- Reads the input file line by line.
- Cleans and validates each line.
- Tracks unique integers and stores them for sorting.
- Writes the sorted unique integers to the output file.

### `readNextItemFromFile(inputFileStream)`
- Cleans up whitespace.
- Skips invalid data and malformed lines.

## Constraints
- The integers range from -1023 to 1023.
- No built-in sorting functions or libraries like `Array`, `List`, `Set`, `Sort` are used.

## Testing
Several sample input files are provided in the `/sample_inputs/` folder. Run the program with these files and compare the results in the `/sample_results/` folder to verify correctness.

## Author
Emily (Software Engineering Student)

## License
This project is licensed under the MIT License.

---