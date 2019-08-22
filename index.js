const logger = require('./lib/logger');

const items = [1, 2, 3, 4, 5];

const total = items.reduce((total, item) => total + item, 0);

logger.info(total);
