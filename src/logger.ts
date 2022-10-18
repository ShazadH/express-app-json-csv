const { createLogger, format, transports } = require('winston');
const { combine } = format;

const logger = createLogger({
  transports: [
    new transports.Console({
    level: "info",
    format:
      process.env.NODE_ENV == "production"
        ? format.simple()
        : combine(format.colorize(), format.simple())
  })],
});

logger.info("winston initialized");

module.exports = logger;
