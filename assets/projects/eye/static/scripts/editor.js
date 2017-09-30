var eye = {
  selected: 0,
  navMode: 1,
  selectedArray: [],
  projects: [],
  loaded: true,
  token: '',
  DB: '',
  options: {

  },
  docReady: function(callback) {
    var ready = setInterval(function() {
			var body = document.getElementsByTagName("body")[0];
      if ($('routes').length == 0 && $('compontent').length == 0 && typeof body !=='undefined') {
        clearInterval(ready);
        callback();
      }
    }, 10);
  },
	getPreferences: function()
	{
			var self = this;
			var pre = self.DB.queryAll("preferences", {query: {ID: 1}});
			return pre[0];
	},
  save: function()
  {
    var self = this;
    var head = $('[path="/layout/head.html"]').html();
    var body = $('[path="/layout/body.html"]').html();
    var trailing = $('#eye--js').attr('trailing');
    var html = head + body;
    var cache = {au:"users[session['id']].role.title='admin'", path:trailing, html: html};

  },
  addUser: function(user,password,role)
  {



  },
  addRole: function (title,permissions)
  {


  },
  addPermission: function (type,path)
  {


  },
  Login: function ()
  {


  },
  checkLogin: function (user,password)
  {


    // ajax if(result ) empty createLogin
      var self = this;
      var query = 'CheckUsers'
      var model = {table:'users'};
      var data =  {user,password};



      //ajax checkLogin get sessionid
       // random based on time and place and fingerprint



  },
  init: function() {
    var self = this;
    self.DB = new localStorageDB("eye", localStorage);
    if (self.DB.isNew()) {
      self.DB.createTable("preferences", ["userid", "lang", "theme"]);
			self.DB.createTable("Drafts", ["draft"]);
      self.DB.createTable("menues", ["path", "menu"]);
			self.DB.createTable("Fingerprint",["hash","compontent"])
      self.DB.commit();
    }
		var fp = self.DB.queryAll("Fingerprint", {query: {ID: 1}});
    self.docReady(function() {
			if(fp.length == 0){
				new Fingerprint2().get(function(result, components){
					self.DB.insert("Fingerprint", {hash: result, compontent:components });
					self.DB.insert("preferences", {userid: result, lang:"en", theme:"black" });
					self.DB.commit();
				});
			}
      self.Login();
      self.save();
      self.hover();
    });
  },
  updateSelectPos: function(element) {
    var ohieght = element.outerHeight();
    var owidth = element.outerWidth();

    var left = element.offset().left;
    var top = element.offset().top;

    var normal = 1;
    element.parents().each(function() {
      if (!$(this).hasClass('site-whole')) {
        if ($(this).css('position') == 'fixed') {
          normal = 0;
        }
      }

    });
    if (element.css('position') == 'fixed') {
      normal = 0;
    }
    if (normal) {

      $('#floating-select-box').height(ohieght + 'px');
      $('#floating-select-box').width(owidth + 'px');
      $('#floating-select-box').css({
        'top': top + $('.site-whole').scrollTop(),
        'left': left,
        'position': 'absolute'
      });
    } else {
      $('#floating-select-box').height(ohieght + 'px');
      $('#floating-select-box').width(owidth + 'px');
      $('#floating-select-box').css({
        'top': top,
        'left': left,
        'position': 'fixed'
      });
    }

  },
  getCss: function(a) {

    var sheets = document.styleSheets,
      o = [];
    a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
    for (var i in sheets) {
      var rules = sheets[i].rules || sheets[i].cssRules;
      for (var r in rules) {
        if (a.matches(rules[r].selectorText)) {
          o.push(rules[r].cssText);
        }
      }
    }
    return o;
  },
  hover: function() {
    var self = this;

    $(document).on('mousemove', function(e) {
      var element = $(e.target);
      var tagname = element.prop("tagName");
      if (tagname !== 'EYE' && self.selected !== 1) {
        self.updateSelectPos(element);
      }
    });
    $(document).on('click', 'a', function(e) {
      if (self.navMode == 1) {
        return false;
      };
    });

    $(window).scroll(function() {
      if (self.selected == 1) {
        self.updateSelectPos(self.selectedArray[0]);
      }
    });
    $(document).on('click', '*', function(e) {
      self.selected = 0;
      self.hideFloatingMenu(e);
    });
    $(document).on('contextmenu', '*', function(e) {


      var element = $(e.target);
      var tagname = element.prop("tagName");
      self.selectedArray = [];
      if (tagname !== 'EYE') {
        e.preventDefault();
        self.selectedArray.push(element)
        self.updateSelectPos(self.selectedArray[0]);
        self.selected = 1;
        self.showFloatingMenu(e);
        return false;
      }


    });
  },
  showFloatingMenu: function(e) {
    var self = this;
    var top = e.pageY
    var left = e.pageX;

    $('#floating-menu').css({
      'top': top,
      'left': left
    });
    $('#floating-menu').show();
  },
  hideFloatingMenu: function(e) {
    $('#floating-menu').hide();
  },
  removeComments: function(str) {
    str = str.replace(/\/\/.*/gmi, '');

    str = ('__' + str + '__').split('');
    var mode = {
      singleQuote: false,
      doubleQuote: false,
      regex: false,
      blockComment: false,
      lineComment: false,
      condComp: false
    };
    for (var i = 0, l = str.length; i < l; i++) {

      if (mode.regex) {
        if (str[i] === '/' && str[i - 1] !== '\\') {
          mode.regex = false;
        }
        continue;
      }

      if (mode.singleQuote) {
        if (str[i] === "'" && str[i - 1] !== '\\') {
          mode.singleQuote = false;
        }
        continue;
      }

      if (mode.doubleQuote) {
        if (str[i] === '"' && str[i - 1] !== '\\') {
          mode.doubleQuote = false;
        }
        continue;
      }

      if (mode.blockComment) {
        if (str[i] === '*' && str[i + 1] === '/') {
          str[i + 1] = '';
          mode.blockComment = false;
        }
        str[i] = '';
        continue;
      }

      if (mode.lineComment) {
        if (str[i + 1] === 'n' || str[i + 1] === 'r') {
          mode.lineComment = false;
        }
        str[i] = '';
        continue;
      }

      if (mode.condComp) {
        if (str[i - 2] === '@' && str[i - 1] === '*' && str[i] === '/') {
          mode.condComp = false;
        }
        continue;
      }

      mode.doubleQuote = str[i] === '"';
      mode.singleQuote = str[i] === "'";

      if (str[i] === '/') {

        if (str[i + 1] === '*' && str[i + 2] === '@') {
          mode.condComp = true;
          continue;
        }
        if (str[i + 1] === '*') {
          str[i] = '';
          mode.blockComment = true;
          continue;
        }
        if (str[i + 1] === '/') {
          str[i] = '';
          mode.lineComment = true;
          continue;
        }
        mode.regex = true;

      }

    }
    return str.join('').slice(2, -2);
  }
}

eye.init();
