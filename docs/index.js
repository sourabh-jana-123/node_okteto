const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const security = require('./security');
const todo = require('./todo');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...security,
    ...todo
};