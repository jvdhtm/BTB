
var project = function(app,functions){


		app.get('/projectApi/:project/*.scss', function(req, response, next) {

			var projectname = req.params.project;
			var requesturl = req.url.replace('/projectApi/'+projectname+'/','');
			var src =  'assets/projects/'+projectname+'/'+requesturl;
			var data = { layout :'' ,project : projectname, trailing:''};

			functions.getSCSS(src,data,response);

		});

		app.get('/projectApi/:project/*.js', function(req, response, next) {

			var projectname = req.params.project;
			name = projectname;
			var folder  = projectname;
			if(folder.indexOf('-') > -1)
			{
				folder = projectname.split('-')[0];
				name = projectname.split('-')[1];
			}
			var requesturl = req.url.replace('/projectApi/'+projectname+'/','');
			var src =  'assets/projects/'+folder+'/'+requesturl;
			var data = { layout :'' ,project : name, trailing:''};

			functions.getScripts(src,data,response);

		});

		app.get('/projectApi/:project/*.html', function(req, response, next) {

			var projectname = req.params.project;
			var requesturl = req.url.replace('/projectApi/'+projectname+'/','');
			var splited =  requesturl.split('/');
			var src =  'assets/projects/'+projectname+'/'+requesturl;
			var data = { layout :'' ,project : projectname, url:splited, trailing:''};

			functions.getHtml(src,data,response);

		});


		app.get('/projectApi/:project/*.(jpg|png|svg)', function(req, response, next) {

			var projectname = req.params.project;
			var requesturl = req.url.replace('/projectApi/'+projectname+'/','');
			var src =  'assets/projects/'+projectname+'/'+requesturl;

			functions.getImage(src,response);

		});

		app.get('/projectApi/:project/*.(otf|ttf|woff|woff2)', function(req, response, next) {

			var projectname = req.params.project;
			var requesturl = req.url.replace('/projectApi/'+projectname+'/','');
			var src =  'assets/projects/'+projectname+'/'+requesturl;

			functions.getFont(src,response);

		});

		app.get('/projectApi/:project/*.json', function(req, response, next) {

			var projectname = req.params.project;
			var requesturl = req.url.replace('/projectApi/'+projectname+'/','');
			var src =  'assets/projects/'+projectname+'/'+requesturl;

			functions.getImage(src,response);

		});

		app.get('/exec/:project/*', function(req, response, next) {

			var projectname = req.params.project;
			var requesturl = req.url.replace(/\?.*/gmi,'');
			var splited =  requesturl.split('/');
			var trailing = requesturl.replace('/exec/','') ;
			trailing = trailing.replace(projectname,'');
			var data = { project : projectname, url:splited,trailing:trailing};
			var src =  'views/view.html';


			functions.getHtml(src,data,response);

		});

}

module.exports = project;
