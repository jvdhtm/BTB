/* API REST. */

var functions = require('./global/functions.js');
var projectsAPi = require('./routes/project.js');

var routers = function (app)
{
	projectsAPi(app,functions);
}

module.exports = routers;
