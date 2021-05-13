import fs from 'fs';
import path from 'path';

const logFolder = path.join(__dirname, '..', 'logs');
const logFile = path.join(__dirname, '..', 'logs', 'access.log');

let method = '';
let accessLogConfig = {};

if (process.env.NODE_ENV === 'production') {
  method = 'combined';

  // eslint-disable-next-line no-unused-expressions
  !fs.existsSync(logFolder) && fs.mkdirSync(logFolder);

  const accessLogStream = fs.createWriteStream(logFile, {
    flags: 'a',
  });

  accessLogConfig = { stream: accessLogStream };
} else {
  method = 'dev';
}

export { method, accessLogConfig };
