#  Caesar Cipher

This application encrypts passed string by Caesar Cipher.
Only latin symbols will be encoded or decoded. Register is saved.

## Installation

1. Download or clone this repositary
2. Change the folder in console with the folder `rc-node` with the downloaded path
3. Change branch with command `git checkout task1-caesar-cipher`
4. Install dependencies `npm i`

## Usage

Run command
`node my_caesar_cli.js options`

Options list:
* `-s, --shift` - **required, integer**. The number of sybmols shifted. Negative values accepted.
* `-a, --action` - **required**. The applied action. Accepted only values `encode` or `decode`.
* `-i, --input` - **optional**. The file path from which text should be taken. If not specified - print the text to the console.
* `-o, --output` - **optional**. The file path where encoded\decoded text should be written. If not specified - will be printed to the console.

Example:
`node my_caesar_cli.js -s 3 -a encode -i input.txt -o output.txt

## Files structure

* `my_caesar_cli.js` - executable file.
* `caesar.js` - encryption logic
* `parsing.js` - command line parser
* `transform-stream` - transform stream creator