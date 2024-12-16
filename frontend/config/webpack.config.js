// next.config.js
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@/components'] = path.join(__dirname, 'Components');
    return config;
  },
};
