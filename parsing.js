import { Command } from 'commander';

const parse = () => {
  const program = new Command();

  program
    .option('-s, --shift <shift>')
    .option('-i, --input <input>')
    .option('-o, --output <output>')
    .option('-a, --action <action>')
    .parse(process.argv);

  const params = program.opts();

  const shift = params.shift;
  const action = params.action;
  const inputFile = params.input;
  const outputFile = params.output;

  return {shift, action, inputFile, outputFile}
}

export default parse;