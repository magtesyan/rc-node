import fs from 'fs';
import { pipeline } from 'stream';
import checkParams from './check-params.js';
import parse from './parsing.js';
import createTransformStream from './transform-stream.js';

const { shift, action, inputFile, outputFile } = parse();

checkParams(shift, action, inputFile, outputFile);

const readStream = inputFile ? fs.createReadStream(inputFile, 'utf-8') : process.stdin;
const writeStream = outputFile ? fs.createWriteStream(outputFile, {flags: 'a'}) : process.stdout;
const transformStream = createTransformStream(Number(shift), action);

pipeline(
  readStream,
  transformStream,
  writeStream,
  (err) => {
    if (err) {
      process.stderr.write(console.log(err))
    }
  }
);