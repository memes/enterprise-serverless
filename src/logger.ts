// Exports a logger for use in other functions

import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: process.env.NODE_ENV === 'test' ?
    format.simple() :
    /* istanbul ignore next: coverage always runs with NODE_ENV as 'test' */
    format.json(),
  level: process.env.NODE_ENV === 'test' ?
    'fatal' :
    /* istanbul ignore next: coverage always runs with NODE_ENV as 'test' */
    'info',
  transports: [
    new transports.Console(),
  ],
});
