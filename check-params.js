import fs from 'fs';

const exitWithMessage = (message) => {
  process.stderr.write(message);
  process.exit(1);
}

const checkFiles = (filePathName) => {
  if (filePathName !== undefined) {
    if(!fs.existsSync(filePathName) || !fs.lstatSync(filePathName).isFile()) {
      exitWithMessage(`Error: the file ${filePathName} is not found`);
    } else {
      fs.open(filePathName, 'r', (err) => {
        if (err) {
          exitWithMessage(`Error: no access to ${filePathName}`);
        }
      });
    };
  }
};

const checkParams = (shift, action, input, output) => {
  if ((!shift && shift !== 0) || !action) {
    exitWithMessage('Error: shift and action are required parameters');
  }

  if (!Number.isInteger(Number(shift)) && !(/^\d+$/.test(shift))) {
    exitWithMessage('Error: shift should be an integer');
  }

  if (action !== 'encode' && action !== 'decode') {
    exitWithMessage('Error: action should be "encode" or "decode"');
  }

  if (input === output) {
    exitWithMessage('Error: Please select different input and output files');
  }

  checkFiles(input);
  checkFiles(output);
}

export default checkParams;