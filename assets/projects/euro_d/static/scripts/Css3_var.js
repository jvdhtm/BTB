/*
TODO:
- Option to wait to apply anything until all <link>s are parsed or inject what we have and update as each <link> returns
*/
var cssVarPoly = {
  init: function() {
    if (window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)')) {
      return;
    }
    cssVarPoly.ratifiedVars = {};
    cssVarPoly.varsByBlock = {};
    cssVarPoly.oldCSS = {};

    // start things off
    cssVarPoly.findCSS();
    cssVarPoly.updateCSS();
  },

  // find all the css blocks, save off the content, and look for variables
  findCSS: function() {
    var styleBlocks = document.querySelectorAll('style:not([id*="inserted"]),link[type="text/css"],link[rel="stylesheet"]');

    // we need to track the order of the style/link elements when we save off the CSS, set a counter
    var counter = 1;

    // loop through all CSS blocks looking for CSS variables being set
    [].forEach.call(styleBlocks, function(block) {
      var theCSS;
      if (block.nodeName === 'STYLE') {
        theCSS = block.innerHTML;
        cssVarPoly.getImports(block.innerHTML, function(theCSS){
          block.innerHTML = theCSS;
          cssVarPoly.findSetters(theCSS, counter);
        });
      } else if (block.nodeName === 'LINK') {
        cssVarPoly.getLink(block.getAttribute('href'), counter, function(counter, request) {
          cssVarPoly.getImports(request.responseText, function(respCSS){
            cssVarPoly.findSetters(respCSS, counter);
            cssVarPoly.oldCSS[counter] = respCSS;
            cssVarPoly.updateCSS();
          });
        });
        theCSS = '';
      }
      // save off the CSS to parse through again later. the value may be empty for links that are waiting for their ajax return, but this will maintain the order
      cssVarPoly.oldCSS[counter] = theCSS;
      counter++;
    });
  },

  // find all the "--variable: value" matches in a provided block of CSS and add them to the master list
  findSetters: function(theCSS, counter) {
    cssVarPoly.varsByBlock[counter] = theCSS.match(/([^var\/\*])--[a-zA-Z0-9\-]+:(\s?)(.+?);/gmi);
  },

  // run through all the CSS blocks to update the variables and then inject on the page
  updateCSS: function() {
    // first lets loop through all the variables to make sure later vars trump earlier vars
    cssVarPoly.ratifySetters(cssVarPoly.varsByBlock);
    // loop through the css blocks (styles and links)
    for (var curCSSID in cssVarPoly.oldCSS) {
      var newCSS = cssVarPoly.replaceGetters(cssVarPoly.oldCSS[curCSSID], cssVarPoly.ratifiedVars);
      // put it back into the page
      // first check to see if this block exists already
      if (document.querySelector('#inserted' + curCSSID)) {
        document.querySelector('#inserted' + curCSSID).innerHTML = newCSS;
      } else {
        var style = document.createElement('style');
        style.innerHTML = newCSS;
        style.id = 'inserted' + curCSSID;
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    };
  },

  // parse a provided block of CSS looking for a provided list of variables and replace the --var-name with the correct value
  replaceGetters: function(curCSS, varList) {

    for (var theVar in varList) {
      // match the variable with the actual variable name
      var getterRegex = new RegExp('var\\(\\s*?' + theVar.trim() + '(\\)|,([\\s\\,\\w]*\\)))', 'g');
      curCSS = curCSS.replace(getterRegex, varList[theVar]);
    };


    $('*').each(function(){

        var style = $(this).attr('style');
        if(style)
        {


            for (var theVar in varList) {
              // match the variable with the actual variable name
              var getterRegex = new RegExp('var\\(\\s*?' + theVar.trim() + '(\\)|,([\\s\\,\\w]*\\)))', 'g');
              style = style.replace(getterRegex, varList[theVar]);
            };

            $(this).attr('style',style);
        }
    });
    return curCSS;
  },

  // determine the css variable name value pair and track the latest
  ratifySetters: function(varList) {
    // loop through each block in order, to maintain order specificity
    for (var curBlock in varList) {
      var curVars = varList[curBlock];
      if(curVars)
      // loop through each var in the block
      curVars.forEach(function(theVar) {
        // split on the name value pair separator
        var matches = theVar.split(/:\s*/);
        // put it in an object based on the varName. Each time we do this it will override a previous use and so will always have the last set be the winner
        // 0 = the name, 1 = the value, strip off the ; if it is there
        cssVarPoly.ratifiedVars[matches[0]] = matches[1].replace(/;/, '');
      });
    };
  },

  // get the CSS file
  getLink: function(url, counter, success) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.overrideMimeType('text/css;');
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        if (typeof success === 'function') {
          success(counter, request, url);
        }
      } else {
        // We reached our target server, but it returned an error
        console.warn('an error was returned from:', url);
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
      console.warn('we could not get anything from:', url);
    };
    request.send();
  },

  getImports: function(css, callback){
    var reg = /^(?![\/\*])@import\s.*(?:url\(["'])([a-zA-Z0-9\.:\/_-]*)["']\)?([^;]*);/gim,
      matches,
      todo = 0,
      done = 0,
      replacements = {};
    if(css.search(reg) === -1){callback(css)}
    while (matches = reg.exec(css)) {
      replacements[matches[1]] = matches;
      todo++;
      cssVarPoly.getLink(matches[1], null, function(counter, request, url){
        css = css.replace(replacements[url][0], (replacements[url][2].trim() ? ('@media ' + replacements[url][2].trim() + ' {') : '') + request.responseText + (replacements[url][2].trim() ? '}' : ''));
        done++;
        if(done === todo){callback(css)}
      });
    }
  }
};


function docReady(callback){


var ready = setInterval(function() {
  var body = document.getElementsByTagName("body")[0];
  if ($('routes').length == 0 && $('compontent').length == 0 && typeof body !=='undefined') {
    clearInterval(ready);
    callback();
  }
}, 10);

}
docReady(function(){
cssVarPoly.init();

});
