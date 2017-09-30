/* API REST. */

var functions = require('./global/functions.js');
var dblibrary = require('./global/dbms.js').load(functions);
var projectsAPi = require('./routes/project.js');
var RESTfulApi = require('./routes/Rest.js');

var routers = function (app)
{
	projectsAPi(app,dblibrary,functions);
	RESTfulApi(app,dblibrary,functions);
}

module.exports = routers;
