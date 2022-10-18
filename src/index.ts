import express from 'express';
require('express-async-errors');

const logger = require('./logger');

const app = express();

app.set('port', process.env.PORT || '3102');

// import filegen from './modules/filegen';
const filegen = require("./modules/filegen");
app.use('/filegen', filegen);


app.listen(app.get('port'), function () {
  logger.info('Startup - server listening', { port: app.get('port') });
});
