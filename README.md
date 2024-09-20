
# Unique Integers Project

## Overview
This Node.js project reads a text file containing integers, filters out invalid and duplicate entries, sorts the valid integers in ascending order using a bubble sort algorithm, and then writes the result to a new text file in a separate directory.


### Features:
- Input Validation: The program only processes text files and ignores invalid entries, such as lines with multiple integers, non-integer - lines, and integers outside a 4-digit range (-9999 to 9999).
- Sorting: Implements a basic bubble sort algorithm to sort the unique integers.
- File Output: Sorted integers are written to a new file in a designated output directory.
- Performance Tracking: Tracks and logs the execution time and memory usage.

## How to Run

1. Clone this repository or download the source code.
2. Ensure that you have [Node.js](https://nodejs.org/) installed on your system.
3. Place the input files in the `/sample_inputs_for_students/` folder.
4. Run the script as follows:

```bash
node /dsa/hw01/code/src/mystructure.js /path/to/input/file
```

For example:

```bash
node /dsa/hw01/code/src/mysturcture.js sample_inputs_for_students/sample_01.txt
```

This will generate an output file in the `sample_results/` folder with the sorted unique integers.


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

### `readFile(callback)`
- Reads the input file line by line.

### `readNextItemFromFile(inputFileStream)`
- Cleans up whitespace.
- Skips invalid data and malformed lines.
- Convert the line to an integer
- Split the data into lines
- Store the unique integers in an array of numbers
- Sort the unique integers

## Constraints
- The integers range from -1023 to 1023.
- No built-in sorting functions or libraries like `Array`, `List`, `Set`, `Sort` are used.

## Testing
Several sample input files are provided in the `/sample_inputs/` folder. Run the program with these files and compare the results in the `/sample_results/` folder to verify correctness.

## Author
Jean de Dieu Muhirwa Harerimana (Software Engineering Student)

## License
This project is licensed under the ALU.

---