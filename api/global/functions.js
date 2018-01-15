var path = require('path');
var fs = require('fs');
var glob = require("glob");
//var walk  = require('walk');

module.exports = {
	renderSass :  function (src,done,err)
	{
		var sass = require('node-sass');
		sass.render({
			file: src,
			outputStyle: 'compressed'
			}, function(error, result) { // node-style callback from v3.0.0 onwards
				if (error) {
					console.log(error.message);
					if(err)
					{
						err();
					}
				}
				else {
						done(result);
				}
			});

	},
	renderView : function (src,done,data)
	{
		var result = '';
		var err = '' ;
		src =  path.resolve(src);
		var view = fs.readFileSync(src, 'utf8');
		var regex = /{(\s|\n)*{([^@|.]*?)}(\s|\n)*}/gm;
		var matches =  view.match(regex) ;
		if(matches)
		{
			for(var i = 0 ; i < matches.length ; i++)
			{
				var key  = matches[i].replace(/{(\s|\n)*{/gm,'').replace(/}(\s|\n)*}/gm,'');

				var matcharray = key.match(/\[.*\]/gm);
				key = key.replace(/\[.*\]/gm,'')
				var rest ='';
				if(matcharray)
				{
					rest = matcharray.join();
				}
				var x = 'data.' +key.trim() +rest

				try{
					var x = eval(x);
				}
				catch(err){
					var x  ='';
				}
				view = view.replace(matches[i],x);
			}
		}
		var regex = /{(\s|\n)*{.*@.*}(\s|\n)*}/gm;
		var matches =  view.match(regex) ;
		if(matches)
		{
			for(var i = 0 ; i < matches.length ; i++)
			{
				var exploded  = matches[i].replace(/{(\s|\n)*{/gm,'').replace(/}(\s|\n)*}/gm,'').split(' ');
				var action = exploded[0].trim();
				var params = exploded[1].trim();
				var x = this.renderView(params,null,data);
				view = view.replace(matches[i],x);
			}


		}
		if(done)
		{
			done(view,err);
		}
		return view;
	},
	getScripts : function (src,data,response)
	{
		// options is optional
		var self = this;
		glob(src, [], function (er, files) {
			var sumcontent = '';
			 for (var i in files){
				 var name = files[i];
				 var contents = self.renderView(name,null,data);
				 var sumcontent = sumcontent + contents;
			 }
			response.send(sumcontent);
		});

	},
	getSCSS : function (src,data,response)
	{
		this.renderSass(src ,function (result){
			response.header("Content-type", "text/css");
			response.send(result.css.toString().replace(/url\(\//gm,'url(../'));
		},function(){
			response.send('SCSS NOT LOADED');
		});
	},
	getImage: function (src,response)
	{
		var src =  path.resolve(src);
		response.sendFile(src);
	},
	getFont: function (src,response)
	{
		var src =  path.resolve(src);
		response.sendFile(src);
	},
	getJson: function (src,response)
	{
		var src =  path.resolve(src);
		response.sendFile(src);
	},
	readJson:function (src,cb)
	{
		var self = this;
		glob(src, [], function (er, files) {

			var result = [];
			 for (var i in files){
				 var name = files[i];
				 var obj = JSON.parse(fs.readFileSync(src, 'utf8'));
				 result[i] = obj;

			 }
			 cb(result);
		});
		return obj;
	},
	getHtml : function (src,data,response)
	{
		this.renderView(src,function(res,err){
			response.send(res);
		},data);
	},
	createFile : function (path,contents,response)
	{
		var path = path,
		buffer = new Buffer(contents);

		fs.open(path, 'w', function(err, fd) {
			if (err) {
				throw 'error opening file: ' + err;
			}

			fs.write(fd, buffer, 0, buffer.length, null, function(err) {
				if (err) throw 'error writing file: ' + err;
				fs.close(fd, function() {
					console.log('file written');
				})
			});
		});
	},
	createFolder: function(path, mask, cb)
	{
		if (typeof mask == 'function') { // allow the `mask` parameter to be optional
			cb = mask;
			mask = 0777;
		}
		fs.mkdir(path, mask, function(err) {
			if (err) {
				if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
				else cb(err); // something else went wrong
			} else cb(null); // successfully created folder
		});
	}
}


/*

From humanity or gods or evolutions or classical music Iam listeing to, it really doesnt matter where it comes From,
it really doesnt matter, one could realize the music of divinity is being played in his heart and then sacrifise the divin blood for the divin dancing spirits.
let them turture me let them burry me alife let them decapitate me. Iam here, the ultimate dragon of death, burn me burn me burn me....
let me realized in every moment. Without the realization I would fall into the hell of vertues.

*/
