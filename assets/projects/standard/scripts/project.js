
var pushthestate = 1;
function loadComponents() {
	var busy = 0;

	$('compontent').each(function () {

		if($(this).parents('compontent').length == 0 )
		{
			parseComponent(busy,this );
		}
	});

	if(typeof window.eyetest ==='undefined')
	{
			window.eyetest = setInterval(function () {
				if (busy == 0 && $('compontent').length > 0) {
					loadComponents();
				}
				if (busy == 0 && $('compontent').length == 0) {


				}
			}, 10);
	}

}



function parseComponent(busy ,ob )
{

  var au = $(ob).attr('au');;
	if(typeof au !=='undefined' && !eval(au) )
	{
		$(ob).remove();
	}
	else {
		busy = 1;
		var self = $(ob);
		var src = $(ob).attr('src');
		var scope = $(ob).attr('scope');
		var id = $(ob).attr('id');
		var trailing = $(ob).attr('trailing');
		var parentpath = $(ob).parents('[path]').attr('path');
		var html = $(ob).html();

		if(options.trailing === '' && trailing !=='' && trailing)
		{
			options.trailing = trailing;
		}

		var path = options.trailing
		var data = $(ob).attr('data');
		if(data)
		{
			var datajson = JSON.parse(data);
		}
		if(!scope)
		{
			scope = $(ob).parents('.included').attr('scope');
		}
		if(!scope)
		{
			scope = $(ob).parents('.componet').attr('scope');
		}
		if(!parentpath)
		{
			parentpath = $(ob).parents('.included').attr('path');
		}
		if(!parentpath)
		{
			parentpath = scope;
		}


		var rx = RegExp('.*'+scope,'i');
		var path = path.replace(rx,'');

		if(path.endsWith("/"))
		{
			path =path+'index';
		}

		src = src.replace('.html','');
		var flag = 0;
		var datatarget =  'module';
		if (src.indexOf('trailing') > -1) {
			src = src.replace('/trailing', path);
		}
		var dots = (src.match(/\./g) || []).length
		var slash = (src.match(/\//g) || []).length
		if(dots == 0 & slash == 0 )
		{
			dots = 1;
		}
		var splited = parentpath.split('/');

		var relpath = '';
		if(dots == 0 & slash > 0)
		{
			relpath ='';
		}
		else
		{
			if(dots > 2)
			{
				dots  = dots /2 ;

			}
			for(i = 0 ; i < splited.length-dots ; i++)
			{

				relpath = relpath+splited[i]+'/';

			}
		}

		src =  src.replace(/\.\.\//gm,'').replace('//','')+'.html'
		var realpath = relpath +src
		relpath = '/projectApi/' +scope+relpath
		src =  relpath+src;

		var taged = $(ob).attr('tagged');
		if(!taged)
		{

			 $(ob).attr('tagged','1');
		$.ajax({
		url: src,
		type: 'GET',
		data: {}, //blocks window close
		success: function(data) {

				 var data = parsedata(data,scope,html,datajson);
				 var comp = $(data);
				 var comp = $('<'+datatarget+'  ></'+datatarget+'>').attr('scope',scope).attr('id',id).attr('path',realpath).append(comp);;
				 var newcom = self.replaceWith(comp);
				busy = 0;
			 }
		});

		}
	}
}

function parseimage(data,projectname)
{
		data =  data.replace(/esrc="/gmi,'src="/projectApi/'+projectname +'/');
	 return data
}

 function parsedata(data,projectname,html,datajson)
{

		$('body').append('<div id="temp-eye"></div>');
		data =  data.replace(/<%(\s|\n)*html(\s|\n)*%>/i,html);
		$('#temp-eye').append($(data));


		$('#temp-eye').find('[eyerepeat]').each(function(){

				var variable = $(this).attr('eye-bind');
				var insidedatareplace = $(this).html();
				var newhtml = '';
					if(insidedatareplace)
					{
						if(datajson[variable])
						{

							$(this).empty();
							for (i = 0; i < datajson[variable].length; i++) {
								var eachdata = datajson[variable][i];
								$(this).append(insidedatareplace);

							}
							var i = 0;
							$(this).children().each(function(){
								var binded = $(this)[0].outerHTML.replace(/&lt;/gmi,'<').replace(/&gt;/gmi,'>');
								binded = parsedatasub(binded,datajson[variable][i]);
								$(this).replaceWith(binded);
								i++;
							})
						}
				}
		});

		var data =  $('#temp-eye').html().replace(/&lt;/gmi,'<').replace(/&gt;/gmi,'>');





		$('#temp-eye').remove();
		data = parsedatasub(data,datajson);
		data = parseimage(data,projectname);
	return data
}

function parsedatasub(data,datajson)
{
	var match = data.match(/<%[^<%]*%>/gm)
	if(match && datajson)
	{
		for (i = 0; i < match.length; i++) {
				var matches =  match[i];
				var variable = matches.replace('<%','').replace('%>','').trim();
				var rxvar = RegExp('<%(\\s|\\n)*'+variable+'(\\s|\\n)*%>','i');
				var obj = datajson[variable];
				if(typeof obj === 'object')
				{
						var obj = JSON.stringify(datajson[variable]);
						obj = obj.replace(/\"/g,'&quot;');
				}
				data =  data.replace(/eyehref/g, 'href');
				data =  data.replace(/eyesrc/g, 'src');
				data =  data.replace(rxvar, obj);
		};
		return data;
	}
	return data;
}


var options = {
	states:[],
	trailing:''
}

function routes()
{
	var busy = 0;
	$('routes').each(function () {




		busy = 1;
		var routeshtml = $(this).html();
		var scope = $(this).attr('scope');
		var id = $(this).attr('id');
		var trailing = $(this).attr('trailing');
		var savestate =  $(this).attr('savestate');
		if(options.trailing === '' && trailing !=='' && trailing)
		{
			options.trailing = trailing;
		}


		var path = options.trailing

		var rx = RegExp('.*'+scope,'i');
		var path = path.replace(rx,'');

		var self = $(this);
		var routeshtml = eval(routeshtml);
		var toRender = '';
		for(var x in routeshtml)
		{
			var each = routeshtml[x];
			if(each.path)
			{
					var render = each.render;
					if(each.path.indexOf('*') == -1)
					{
						if(each.path == path)
						{
							toRender = render;
							break;
						}
					}
					else {
						var re = new RegExp(each.path, "i");
						if(re.test(path))
						{
							toRender = render;
							break;
						}

					}

			}
		}

		var href = path;



			var src = '/projectApi/'+scope+toRender+'.html';
			var torender = src;
			var state = '';
			if(typeof savestate !=='undefined' && typeof options.states [id] === 'undefined'){
				var html = $(this)[0].outerHTML;
				state = 'pagebinded'
				options.states [id] = {html,scope,id,torender};
				window.history.replaceState(options.states, toRender, location.pathname);
			};

			var taged = $(this).attr('tagged');
		if(!taged)
		{
			$(this).attr('tagged',1);
			$.get(src, function (data, status) {
				var comp = $(data);
				var included = $('<page '+state+' ></page>').addClass('included').attr('scope',scope).attr('path',toRender).attr('id',id).append(comp);
				self.replaceWith(included);
				busy = 0;
			});
		}

	});


	var test = setInterval(function () {
     if (busy == 0 && $('routes').length > 0) {
			routes();
		}

	}, 10);

}




function init()
{

	window.onpopstate = function(event) {

		if(event.state)
		{
			for(x in event.state)
			{
				if(event.state[x].id)
				{
					var id  = event.state[x].id ;
					var newroute = event.state[x].html;
					$('#'+id).replaceWith(newroute);
				}
			}
		}
	};

	$(document).on('click', 'elink', function() {

		var href = $(this).attr('href');
		var target = $(this).attr('target');


		if(href == '/')
		{
			options.trailing ='/'
			href ='./';
		}
		else {
			options.trailing = '/'+href;
		}
		$(target).each(function()
		{
				var id =  $(this).attr('id');
				var toReplace  = options.states [id] ;
				var newroute = toReplace.html;
				$(this).replaceWith(newroute);

		});

		window.history.pushState(options.states, href, href);


	});

}
init();
loadComponents();
routes();
