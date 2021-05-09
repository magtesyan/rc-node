import { Transform } from 'stream';
import caesar from './caesar.js';

const createTransformStream = (shift, action) => {
  return new Transform({
    transform(chunk, enc, cb) {
      const caesarCli = caesar(chunk, shift, action);
      cb(null, caesarCli);
    }
  });
};

export default createTransformStream;