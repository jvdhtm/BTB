(function(window) {
	var define = {
		amd: false
	}! function(e) {
		if ("function" == typeof define && define.amd) define(e);
		else if ("object" == typeof exports) module.exports = e();
		else {
			var n = window.Cookies,
				o = window.Cookies = e();
			o.noConflict = function() {
				return window.Cookies = n, o
			}
		}
	}(function() {
		function e() {
			for (var e = 0, n = {}; e < arguments.length; e++) {
				var o = arguments[e];
				for (var t in o) n[t] = o[t]
			}
			return n
		}

		function n(o) {
			function t(n, i, r) {
				var c;
				if ("undefined" != typeof document) {
					if (arguments.length > 1) {
						if (r = e({
								path: "/"
							}, t.defaults, r), "number" == typeof r.expires) {
							var a = new Date;
							a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires), r.expires = a
						}
						try {
							c = JSON.stringify(i), /^[\{\[]/.test(c) && (i = c)
						} catch (s) {}
						return i = o.write ? o.write(i, n) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", i, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure" : ""].join("")
					}
					n || (c = {});
					for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < p.length; f++) {
						var u = p[f].split("="),
							l = u.slice(1).join("=");
						'"' === l.charAt(0) && (l = l.slice(1, -1));
						try {
							var m = u[0].replace(d, decodeURIComponent);
							if (l = o.read ? o.read(l, m) : o(l, m) || l.replace(d, decodeURIComponent), this.json) try {
								l = JSON.parse(l)
							} catch (s) {}
							if (n === m) {
								c = l;
								break
							}
							n || (c[m] = l)
						} catch (s) {}
					}
					return c
				}
			}
			return t.set = t, t.get = function(e) {
				return t(e)
			}, t.getJSON = function() {
				return t.apply({
					json: !0
				}, [].slice.call(arguments))
			}, t.defaults = {}, t.remove = function(n, o) {
				t(n, "", e(o, {
					expires: -1
				}))
			}, t.withConverter = n, t
		}
		return n(function() {})
	});
	window.SG_Cookies = window.Cookies;
	! function(e, t) {
		typeof module != "undefined" && module.exports ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : this[e] = t()
	}("bowser", function() {
		function t(t) {
			function n(e) {
				var n = t.match(e);
				return n && n.length > 1 && n[1] || ""
			}

			function r(e) {
				var n = t.match(e);
				return n && n.length > 1 && n[2] || ""
			}
			var i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
				s = /like android/i.test(t),
				o = !s && /android/i.test(t),
				u = /CrOS/.test(t),
				a = n(/edge\/(\d+(\.\d+)?)/i),
				f = n(/version\/(\d+(\.\d+)?)/i),
				l = /tablet/i.test(t),
				c = !l && /[^-]mobi/i.test(t),
				h;
			/opera|opr/i.test(t) ? h = {
				name: "Opera",
				opera: e,
				version: f || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
			} : /yabrowser/i.test(t) ? h = {
				name: "Yandex Browser",
				yandexbrowser: e,
				version: f || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
			} : /windows phone/i.test(t) ? (h = {
				name: "Windows Phone",
				windowsphone: e
			}, a ? (h.msedge = e, h.version = a) : (h.msie = e, h.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? h = {
				name: "Internet Explorer",
				msie: e,
				version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
			} : u ? h = {
				name: "Chrome",
				chromeBook: e,
				chrome: e,
				version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
			} : /chrome.+? edge/i.test(t) ? h = {
				name: "Microsoft Edge",
				msedge: e,
				version: a
			} : /chrome|crios|crmo/i.test(t) ? h = {
				name: "Chrome",
				chrome: e,
				version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
			} : i ? (h = {
				name: i == "iphone" ? "iPhone" : i == "ipad" ? "iPad" : "iPod"
			}, f && (h.version = f)) : /sailfish/i.test(t) ? h = {
				name: "Sailfish",
				sailfish: e,
				version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
			} : /seamonkey\//i.test(t) ? h = {
				name: "SeaMonkey",
				seamonkey: e,
				version: n(/seamonkey\/(\d+(\.\d+)?)/i)
			} : /firefox|iceweasel/i.test(t) ? (h = {
				name: "Firefox",
				firefox: e,
				version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
			}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (h.firefoxos = e)) : /silk/i.test(t) ? h = {
				name: "Amazon Silk",
				silk: e,
				version: n(/silk\/(\d+(\.\d+)?)/i)
			} : o ? h = {
				name: "Android",
				version: f
			} : /phantom/i.test(t) ? h = {
				name: "PhantomJS",
				phantom: e,
				version: n(/phantomjs\/(\d+(\.\d+)?)/i)
			} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? h = {
				name: "BlackBerry",
				blackberry: e,
				version: f || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
			} : /(web|hpw)os/i.test(t) ? (h = {
				name: "WebOS",
				webos: e,
				version: f || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
			}, /touchpad\//i.test(t) && (h.touchpad = e)) : /bada/i.test(t) ? h = {
				name: "Bada",
				bada: e,
				version: n(/dolfin\/(\d+(\.\d+)?)/i)
			} : /tizen/i.test(t) ? h = {
				name: "Tizen",
				tizen: e,
				version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || f
			} : /safari/i.test(t) ? h = {
				name: "Safari",
				safari: e,
				version: f
			} : h = {
				name: n(/^(.*)\/(.*) /),
				version: r(/^(.*)\/(.*) /)
			}, !h.msedge && /(apple)?webkit/i.test(t) ? (h.name = h.name || "Webkit", h.webkit = e, !h.version && f && (h.version = f)) : !h.opera && /gecko\//i.test(t) && (h.name = h.name || "Gecko", h.gecko = e, h.version = h.version || n(/gecko\/(\d+(\.\d+)?)/i)), !h.msedge && (o || h.silk) ? h.android = e : i && (h[i] = e, h.ios = e);
			var p = "";
			h.windowsphone ? p = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i ? (p = n(/os (\d+([_\s]\d+)*) like mac os x/i), p = p.replace(/[_\s]/g, ".")) : o ? p = n(/android[ \/-](\d+(\.\d+)*)/i) : h.webos ? p = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : h.blackberry ? p = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : h.bada ? p = n(/bada\/(\d+(\.\d+)*)/i) : h.tizen && (p = n(/tizen[\/\s](\d+(\.\d+)*)/i)), p && (h.osversion = p);
			var d = p.split(".")[0];
			if (l || i == "ipad" || o && (d == 3 || d == 4 && !c) || h.silk) h.tablet = e;
			else if (c || i == "iphone" || i == "ipod" || o || h.blackberry || h.webos || h.bada) h.mobile = e;
			return h.msedge || h.msie && h.version >= 10 || h.yandexbrowser && h.version >= 15 || h.chrome && h.version >= 20 || h.firefox && h.version >= 20 || h.safari && h.version >= 6 || h.opera && h.version >= 10 || h.ios && h.osversion && h.osversion.split(".")[0] >= 6 || h.blackberry && h.version >= 10.1 ? h.a = e : h.msie && h.version < 10 || h.chrome && h.version < 20 || h.firefox && h.version < 20 || h.safari && h.version < 6 || h.opera && h.version < 10 || h.ios && h.osversion && h.osversion.split(".")[0] < 6 ? h.c = e : h.x = e, h
		}
		var e = !0,
			n = t(typeof navigator != "undefined" ? navigator.userAgent : "");
		return n.test = function(e) {
			for (var t = 0; t < e.length; ++t) {
				var r = e[t];
				if (typeof r == "string" && r in n) return !0
			}
			return !1
		}, n._detect = t, n
	})

	function jsonsg() {
		"object" != typeof JSON_SG && (JSON_SG = {}),
			function() {
				"use strict";

				function f(a) {
					return a < 10 ? "0" + a : a
				}

				function this_value() {
					return this.valueOf()
				}

				function quote(a) {
					return rx_escapable.lastIndex = 0, rx_escapable.test(a) ? '"' + a.replace(rx_escapable, function(a) {
						var b = meta[a];
						return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
					}) + '"' : '"' + a + '"'
				}

				function str(a, b) {
					var c, d, e, f, h, g = gap,
						i = b[a];
					switch (i && "object" == typeof i && "function" == typeof i.toJSON_SG && (i = i.toJSON_SG(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
						case "string":
							return quote(i);
						case "number":
							return isFinite(i) ? String(i) : "null";
						case "boolean":
						case "null":
							return String(i);
						case "object":
							if (!i) return "null";
							if (gap += indent, h = [], "[object Array]" === Object.prototype.toString.apply(i)) {
								for (f = i.length, c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
								return e = 0 === h.length ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
							}
							if (rep && "object" == typeof rep)
								for (f = rep.length, c = 0; c < f; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
							else
								for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
							return e = 0 === h.length ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
					}
				}
				var rx_one = /^[\],:{}\s]*$/,
					rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
					rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
					rx_four = /(?:^|:|,)(?:\s*\[)+/g,
					rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
					rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
				"function" != typeof Date.prototype.toJSON_SG && (Date.prototype.toJSON_SG = function() {
					return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
				}, Boolean.prototype.toJSON_SG = this_value, Number.prototype.toJSON_SG = this_value, String.prototype.toJSON_SG = this_value);
				var gap, indent, meta, rep;
				"function" != typeof JSON_SG.stringify && (meta = {
					"\b": "\\b",
					"\t": "\\t",
					"\n": "\\n",
					"\f": "\\f",
					"\r": "\\r",
					'"': '\\"',
					"\\": "\\\\"
				}, JSON_SG.stringify = function(a, b, c) {
					var d;
					if (gap = "", indent = "", "number" == typeof c)
						for (d = 0; d < c; d += 1) indent += " ";
					else "string" == typeof c && (indent = c);
					if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON_SG.stringify");
					return str("", {
						"": a
					})
				}), "function" != typeof JSON_SG.parse && (JSON_SG.parse = function(text, reviver) {
					function walk(a, b) {
						var c, d, e = a[b];
						if (e && "object" == typeof e)
							for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
						return reviver.call(a, b, e)
					}
					var j;
					if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(a) {
							return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
						})), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
						"": j
					}, "") : j;
					throw new SyntaxError("JSON_SG.parse")
				})
			}();
	}
	jsonsg();
	window.SG_Bowser = bowser;
	var w = {
		'id': '5615234',
		'name': 'real_change_Internetexperten',
		'inherit_jQuery': 1,
		'startTime': new Date().getTime(),
		'owner': 82317013,
		'gaAccount': 'EXA22324',
		'collectData ': '',
		'heatEnc': 'db964bea1c756e4a0072f529da0e2a61',
		'cachetime': '2017-01-18 16:15:11',
		'goalCheck': '',
		'pushCheck': '',
		'previewMode': 0,
		'original_events_javascript': [],
		'original_state': [],
		'original_events': [],
		'jevent_changed_id': 0,
		'element_changed_id': 0,
		'JAVASCRIPT_replacement_events': ["addEventListener"],
		'JQSG_replacement_events': ["unload", "undelegate", "unbind", "triggerHandler", "trigger", "toggle", "submit", "select", "scroll", "resize", "ready", "one", "on", "off", "mouseup", "mouseover", "mouseout", "mousemove", "mouseleave", "mouseenter", "mousedown", "load", "live", "keyup", "keypress", "keydown", "hover", "focusout", "focusin", "focus", "error", "die", "delegate", "dblclick", "contextmenu", "click", "change", "blur", "bind"],
		'JQSG_replacement_array': ["html", "scrollTop", "text", "val", "append", "insertBefore", "prepend", "detach", "remove", "before", "after", "replaceWith", "height", "width", "css", "removeClass", "addClass", "show", "hide", "fadeIn", "fadeOut", "attr"],
		'JAVASCRIPT_replacement_array': ["textContent", "style", "appendChild", "removeChild", "setAttribute", "removeAttribute", "className", "innerHTML", "outerHTML", "insertBefore", "replaceChild", "splitText", "id", "nodeName", "nodeType", "tagName", "title", "scrollLeft", "scrollTop", "createCaption", "createTFoot", "createTHead", "deleteCaption", "deleteCell", "deleteRow", "deleteTFoot", "deleteTFoot", "deleteTHead", "insertRow", "insertCell", "disabled"],
		'editorMode': '',
		'analyticID': '',
		'uFingerPrint': '0',
		'cookieDomain': '',
		'tracker': [],
		'activeUrl': '',
		'linkMode': 'real_change_Internetexperten',
		'secondsSpentonPage': '0',
		'visitorID': '',
		'rootDomain': '',
		'aCheckMode': 1,
		'checkJQuery': 1,
		'subDomains': 'www',
		'crossDomain': 'allaboutcookies.org',
		'adom': '',
		'bdom': '',
		'elEv': [],
		'organicList': 'google,daum,eniro,naver,yahoo,msn,bing,aol,lycos,ask,altavista,netscape,cnn,SEARCH,about,mamma,alltheweb,voila,virgilio,baidu,alice,yandex,najdi.mk,aol,seznam,search,wp,onetcenter,yam,pchome,kvasir,sesam,ozu,terra,m,mynet,mynet,ekolay,rambler',
		'socialList': 'facebook,linkedin,academia,myspace,twitter,qq,whatsapp,wechat,skype,instagram,baidu,viber,tumblr,snapchat,line,weibo,vk,reddit,yy,taringa,telegram,myspace,stumbleupon,foursquare,meetme,skyrock,snapfish,delicious,kiwibox,photobucket,flickr,deviantart,fotolog,pinterest,buzznet,weheartit,reverbnation,cross,flixsterm,gaiaonline,blackplanet,care2,caringbridge,vampirefreaks,cafemom,ravelry,asmallworld,nextdoor,wayn,couchsurfing,travbuddy,cellufun,itsmy,youtube,youku,funnyordie,tout,vine,classmates,mylife,myheritage,viadeo,ryze,xing,weeworld,habbo,tuenti,xanga,solaborate,plurk,livejournal,ok,nk,twoo,studivz,friendster,51,nexopia,draugiem,glocals,cyworld,crokes',
		'g': {
			'4062': {
				'id': 4062,
				'type': 'clickGoal',
				'goalUrl': '',
				'match': 'regexp',
				'goalDefine': 'contains',
				'cgoalElement': '',
				'cgoalcontains': '',
				'cgoal': '',
				'goal': 'test'
			},
			'4378': {
				'id': 4378,
				'type': 'contentGoal',
				'goalUrl': 'test',
				'match': 'contains',
				'goalDefine': 'exact',
				'cgoalElement': 'test',
				'cgoalcontains': 'test',
				'cgoal': '',
				'goal': ''
			}
		},
		'p': {
			'192485822': {
				'id': 192485822,
				'audience': '(((pathname.indexOf(\'konverteringsoptimering\') > -1))&&((referrer.indexOf(\'google\') > -1))&& (( SG.CheckContent(\'body\',\'\') === true)) )',
				'name': 'dynamicurlhasscript',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '1',
				'owner': 82317198,
				'type': 'popup',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11247639': {
						'id': 11247639,
						'name': 'Pop Up',
						'active': 1,
						'alloc': 100,
						'code': '/* Write custom javascript / JQSG here! */\n\nfunction module_sg_el_modal_box_12937880() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_12937880_module\"] = {\"path\":\"#sg_el_modal_box_12937880\",\"coverid\":\"#sg_cover_sg_el_modal_box_12937880\",\"pathcode\":\"12937880\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_12937880\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_12937880\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_12937880_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192485822\\\" variationid=\\\"11247639\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192485822\\\" variationid=\\\"11247639\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_12937880\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_12937880\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_12937880\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_12937880\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_12937880\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192485822\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"1\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_12937880\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_12937880\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_12937880\').hide();JQSG(\'#sg_cover_sg_el_modal_box_12937880\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"0px\",\"top\":\"100px\",\"none\":\"undefined\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_12937880();',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n#sg_cover_sg_el_modal_box_12937880{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_12937880{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_12937880_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_12937880 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					}
				}
			},
			'192487956': {
				'id': 192487956,
				'audience': '(((pathname.indexOf(\'konverteringsoptimerin\') > -1))&&((pathname.indexOf(\'#test\') > -1))&&((SG.checktimeout(10000,\'==\',1,\'192487956\')))&& (( SG.CheckContent(\'h1\',\'test\',\'contains\',\'\') === true)) )',
				'name': 'mvt_test2_merg',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '1',
				'owner': 82317013,
				'type': 'mvt',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': 'ob.lib.sg_setTimeout(10000,\'192487956\',1);',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11252110': {
						'id': 11252110,
						'name': 'Original',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252111': {
						'id': 11252111,
						'name': 'Combination 1',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252112': {
						'id': 11252112,
						'name': 'Combination 2',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252113': {
						'id': 11252113,
						'name': 'variation1',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11252111',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252115': {
						'id': 11252115,
						'name': 'variation1',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11252112',
						'css': '/* Write custom CSS here! */\n#landingPageInfo{background:#e6b562 !important;}'
					},
					'11252122': {
						'id': 11252122,
						'name': 'variation2',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'#landingPageInfo\').html(\' <div class=\"pageReal\"> <div id=\"testamonial_1\"> Detta är en landningssida för dig som vill veta mer om specifikt konvertering. Vill du komma till vår vanliga hemsida? Klicka här! </div><div id=\"testamonial_1\"><br></div> </div> \');\n',
						'parentid': '11252111',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252123': {
						'id': 11252123,
						'name': 'variation2',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11252112',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252124': {
						'id': 11252124,
						'name': 'Combination3',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252125': {
						'id': 11252125,
						'name': 'variation1',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11252124',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192486289': {
				'id': 192486289,
				'audience': '(((pathname.indexOf(\'testclass\') > -1)))',
				'name': 'testforsurvey',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'survey',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '1',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11248649': {
						'id': 11248649,
						'name': 'Survey',
						'active': 1,
						'alloc': 100,
						'code': '/* Write custom javascript / JQSG here! */\n\n\nfunction module_sg_el_modal_box_26029064() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_26029064_module\"] = {\"path\":\"#sg_el_modal_box_26029064\",\"coverid\":\"#sg_cover_sg_el_modal_box_26029064\",\"pathcode\":\"26029064\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_26029064\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_26029064\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_26029064_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192486289\\\" variationid=\\\"11248649\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192486289\\\" variationid=\\\"11248649\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_26029064\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_26029064\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_26029064\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_26029064\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_26029064\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192486289\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"1\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_26029064\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_26029064\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_26029064\').hide();JQSG(\'#sg_cover_sg_el_modal_box_26029064\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"0px\",\"top\":\"100px\",\"none\":\"undefined\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_26029064();',
						'parentid': '',
						'css': '#sg_cover_sg_el_modal_box_26029064{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_26029064{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_26029064_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_26029064 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					}
				}
			},
			'192486290': {
				'id': 192486290,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/#sg-edit\'))',
				'name': 'testpopup',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'popup',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11248650': {
						'id': 11248650,
						'name': 'Pop Up',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192486416': {
				'id': 192486416,
				'audience': '(true)',
				'name': 'testfoduplicate',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11248943': {
						'id': 11248943,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11248944': {
						'id': 11248944,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192486442': {
				'id': 192486442,
				'audience': '(true)',
				'name': 'testheatmap',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'heatmap',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '1',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11248996': {
						'id': 11248996,
						'name': 'Heatmap',
						'active': 1,
						'alloc': 100,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192486423': {
				'id': 192486423,
				'audience': '( (( SG.CheckContent(\'body\',\'text\',\'contains\',\'\') === true)) &&((language==\'sv\'))&& (( SG.CheckContent(\'body\',\'sitegainer_.*\',\'regex\',\'gmi\') === true)) && (( SG.CheckContent(\'body\',\'sitegainer\',\'contains\',\'\') === true)) &&((SG.checkevent(\'body\',\'keyup\',\'all\',1))))',
				'name': 'heatmapcheck',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': 'ob.lib.sg_event_watcher(\'body\',\'keyup\',\'\',\'192486423\',1);',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11248956': {
						'id': 11248956,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11248957': {
						'id': 11248957,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192486443': {
				'id': 192486443,
				'audience': '(true)',
				'name': 'heatmaptest',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '1',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11248997': {
						'id': 11248997,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11248998': {
						'id': 11248998,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192486453': {
				'id': 192486453,
				'audience': '(true)',
				'name': 'heatmaptest--[Duplicated]',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {
					'3593': {
						'id': 3593,
						'type': 'goalPage',
						'goalUrl': '',
						'match': '',
						'goalDefine': 'contains',
						'cgoalElement': '',
						'cgoalcontains': '',
						'cgoal': '',
						'goal': 'test1'
					},
					'3594': {
						'id': 3594,
						'type': 'goalPage',
						'goalUrl': '',
						'match': '',
						'goalDefine': 'contains',
						'cgoalElement': '',
						'cgoalcontains': '',
						'cgoal': '',
						'goal': 'test2'
					},
					'3595': {
						'id': 3595,
						'type': 'goalPage',
						'goalUrl': '',
						'match': '',
						'goalDefine': 'exact',
						'cgoalElement': '',
						'cgoalcontains': '',
						'cgoal': '',
						'goal': 'test3'
					}
				},
				'v': {
					'11249019': {
						'id': 11249019,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249020': {
						'id': 11249020,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192486498': {
				'id': 192486498,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249115': {
						'id': 11249115,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249116': {
						'id': 11249116,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192486528': {
				'id': 192486528,
				'audience': '(((SG.checkevent(\'body\',\'keydown\',\'39\',1))))',
				'name': 'right',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': 'ob.lib.sg_event_watcher(\'body\',\'keydown\',\'e.which == 39\',\'192486528\',1);',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249176': {
						'id': 11249176,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249177': {
						'id': 11249177,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\ndiv:nth-child(2) h2{font-size:27px !important;}'
					}
				}
			},
			'192486529': {
				'id': 192486529,
				'audience': '(((SG.checkevent(\'body\',\'keydown\',\'37\',1))))',
				'name': 'left',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': 'ob.lib.sg_event_watcher(\'body\',\'keydown\',\'e.which == 37\',\'192486529\',1);',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249178': {
						'id': 11249178,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249179': {
						'id': 11249179,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\ndiv:nth-child(2) h2{font-size:13px !important;}'
					}
				}
			},
			'192486549': {
				'id': 192486549,
				'audience': '(true)',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249215': {
						'id': 11249215,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249216': {
						'id': 11249216,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n\n',
						'parentid': '',
						'css': '\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					},
					'11249341': {
						'id': 11249341,
						'name': 'variation3',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192486546': {
				'id': 192486546,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249207': {
						'id': 11249207,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249208': {
						'id': 11249208,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192486547': {
				'id': 192486547,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249209': {
						'id': 11249209,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249210': {
						'id': 11249210,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192486548': {
				'id': 192486548,
				'audience': '(true)',
				'name': 'ready for duplicate',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249211': {
						'id': 11249211,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11249212': {
						'id': 11249212,
						'name': 'Konverteringsoptimering',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n\nfunction module_sg_el_modal_box_51983405() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_51983405_module\"] = {\"path\":\"#sg_el_modal_box_51983405\",\"coverid\":\"#sg_cover_sg_el_modal_box_51983405\",\"pathcode\":\"51983405\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_51983405\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_51983405\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_51983405_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192486548\\\" variationid=\\\"11249212\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">text2</div> <sg-tag id=\\\"sg_el_columns2_27511368\\\" class=\\\"sg_columns2_box sg_modal_blocks\\\" style=\\\"\\\"> <sg-tag id=\\\"sg_el_columns4_row\\\" style=\\\"\\\"> <sg-tag id=\\\"sg_el_columns2_27511368_c1\\\" style=\\\"\\\" class=\\\"sg_el_columns sg_modal_blocks_showgrid\\\"> <div id=\\\"sg_el_textbox_2559930\\\" class=\\\"sg_text_box sg_modal_blocks\\\" style=\\\"\\\"><p id=\\\"P_19467704_sg_el_modal_box_51983405\\\"><strong id=\\\"b_sg_el_textbox_2559930\\\">test2</strong><!-- ICON --></p></div></sg-tag> <sg-tag id=\\\"sg_el_columns2_27511368_c2\\\" style=\\\"\\\" class=\\\"sg_el_columns sg_modal_blocks_showgrid\\\"> <sg-tag class=\\\"sg_delete_after_drop\\\" id=\\\"SG-TAG_17442332_sg_el_modal_box_51983405\\\">Drop here </sg-tag> </sg-tag> </sg-tag> </sg-tag> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192486548\\\" variationid=\\\"11249212\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b329462652_text\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanksnote\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"value...\\\" sg_type=\\\"0\\\" name=\\\"Text field\\\" style=\\\"\\\"> <p id=\\\"sg_el_formbox_5960502_sec1_b329462652_text_lbl2\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">test2</p> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_51983405\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_51983405\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_51983405\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_51983405\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_51983405\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192486548\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"5\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_51983405\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_51983405\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_51983405\').hide();JQSG(\'#sg_cover_sg_el_modal_box_51983405\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"0px\",\"top\":\"100px\",\"none\":\"undefined\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_51983405();',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n#sg_cover_sg_el_modal_box_51983405{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_51983405{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_51983405_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_51983405 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}\n#sg_el_columns2_27511368{width:100%  !important;height:auto  !important; display: table;}\n#sg_el_columns4_row{display: table-row;}\n#sg_el_columns2_27511368_c1{ display: table-cell;width: 50%;}\n#sg_el_columns2_27511368_c2{ display: table-cell;width: 50%;}\n#sg_el_textbox_2559930{max-width: 100% !important;padding:10px !important; line-height: 130% !important; font-size:14px !important; font-weight:600 !important;}\n#sg_el_formbox_5960502_sec1_b329462652_text{padding:0px 10px; margin-top:20px;}\n#sg_el_formbox_5960502_sec1_b329462652_text_lbl2{color:black; padding:0px !important; margin:0px !important;}'
					}
				}
			},
			'192486580': {
				'id': 192486580,
				'audience': '(true)',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11249275': {
						'id': 11249275,
						'name': 'Original',
						'active': 1,
						'alloc': 14,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251232': {
						'id': 11251232,
						'name': 'test',
						'active': 1,
						'alloc': 14,
						'code': '/* Write custom javascript / JQSG here! */\nJQSG(\"body\").prepend(\"test\");',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251258': {
						'id': 11251258,
						'name': 'Test1-Sub-variation1',
						'active': 1,
						'alloc': 14,
						'code': '',
						'parentid': '11251232',
						'css': ''
					},
					'11251259': {
						'id': 11251259,
						'name': 'Test1-Sub-variation2',
						'active': 1,
						'alloc': 14,
						'code': '',
						'parentid': '11251232',
						'css': ''
					},
					'11252187': {
						'id': 11252187,
						'name': 'Variation2',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192487570': {
				'id': 192487570,
				'audience': '(((pathname.indexOf(\'test\') > -1))&& (( SG.CheckContent(\'h1\',\'\',\'contains\',\'\') === true)) )',
				'name': 'MVT test1',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '1',
				'owner': 82317013,
				'type': 'mvt',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11251281': {
						'id': 11251281,
						'name': 'Original',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n\nvar _topText_h1elem= JQSG(\'.topText h1\').detach();\nJQSG(\'.topContent:nth-child(2)\').after(_topText_h1elem);',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251282': {
						'id': 11251282,
						'name': 'Combination CTA',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251313': {
						'id': 11251313,
						'name': 'variation2',
						'active': 1,
						'alloc': 10,
						'code': '',
						'parentid': '11251282',
						'css': ''
					},
					'11251451': {
						'id': 11251451,
						'name': 'variation3',
						'active': 1,
						'alloc': 10,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11251282',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251467': {
						'id': 11251467,
						'name': 'Combination3',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n\nfunction module_sg_el_modal_box_38246080() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_38246080_module\"] = {\"path\":\"#sg_el_modal_box_38246080\",\"coverid\":\"#sg_cover_sg_el_modal_box_38246080\",\"pathcode\":\"38246080\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_38246080\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_38246080\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_38246080_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192487570\\\" variationid=\\\"11251470\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192487570\\\" variationid=\\\"11251470\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_38246080\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_38246080\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_38246080\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_38246080\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_38246080\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192487570\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"9\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_38246080\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_38246080\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_38246080\').hide();JQSG(\'#sg_cover_sg_el_modal_box_38246080\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"0px\",\"top\":\"100px\",\"none\":\"undefined\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_38246080();',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251469': {
						'id': 11251469,
						'name': 'variation1',
						'active': 1,
						'alloc': 10,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11251467',
						'css': '/* Write custom CSS here! */\n#abtestinfo h1{color:#e44f4f !important;}'
					},
					'11251470': {
						'id': 11251470,
						'name': 'variation2',
						'active': 1,
						'alloc': 10,
						'code': '/* Write custom javascript / JQSG here! */\n\nfunction module_sg_el_modal_box_38246080() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_38246080_module\"] = {\"path\":\"#sg_el_modal_box_38246080\",\"coverid\":\"#sg_cover_sg_el_modal_box_38246080\",\"pathcode\":\"38246080\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_38246080\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_38246080\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_38246080_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192487570\\\" variationid=\\\"11251470\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192487570\\\" variationid=\\\"11251470\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_38246080\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_38246080\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_38246080\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_38246080\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_38246080\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192487570\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"9\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_38246080\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_38246080\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_38246080\').hide();JQSG(\'#sg_cover_sg_el_modal_box_38246080\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"0px\",\"top\":\"100px\",\"none\":\"undefined\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_38246080();',
						'parentid': '11251467',
						'css': '/* Write custom CSS here! */\n#abtestinfo h1{color:#4f68e4 !important;background:#ffffff !important;}\n#sg_cover_sg_el_modal_box_38246080{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_38246080{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_38246080_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_38246080 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					},
					'11251471': {
						'id': 11251471,
						'name': 'Combination4',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11251472': {
						'id': 11251472,
						'name': 'blue body',
						'active': 1,
						'alloc': 10,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11251471',
						'css': '/* Write custom CSS here! */\nbody{background:blue !important;}'
					},
					'11251473': {
						'id': 11251473,
						'name': 'black body',
						'active': 1,
						'alloc': 10,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '11251471',
						'css': '/* Write custom CSS here! */\nbody{\n    \n    background:black !important;\n}'
					}
				}
			},
			'192487601': {
				'id': 192487601,
				'audience': '(true)',
				'name': 'test_newdash',
				'active': 1,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11251357': {
						'id': 11251357,
						'name': 'Original',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251358': {
						'id': 11251358,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251617': {
						'id': 11251617,
						'name': 'Variation2',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252208': {
						'id': 11252208,
						'name': 'Variation2 (Clone)',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192487683': {
				'id': 192487683,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test_fromdashboard2',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'mvt',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11251538': {
						'id': 11251538,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11251539': {
						'id': 11251539,
						'name': 'Combination 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11251540': {
						'id': 11251540,
						'name': 'Combination 2',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11251645': {
						'id': 11251645,
						'name': 'variation1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '11251539',
						'css': ''
					}
				}
			},
			'192487667': {
				'id': 192487667,
				'audience': '(((pathname.indexOf("") > -1)))',
				'name': 'test_newdash--[heatmap]',
				'active': 1,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'heatmap',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '1',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '192487601',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11251502': {
						'id': 11251502,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11251503': {
						'id': 11251503,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192487780': {
				'id': 192487780,
				'audience': '(true)',
				'name': 'test_dashboard',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '1',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11251733': {
						'id': 11251733,
						'name': 'Original',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n\n\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11251920': {
						'id': 11251920,
						'name': 'Variation1',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'h1\').html(\' test\');\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252286': {
						'id': 11252286,
						'name': 'Variation2',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n\nvar h1_belem= JQSG(\'h1 b\').detach();\nJQSG(\'.topText h1\').after(h1_belem);',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11253585': {
						'id': 11253585,
						'name': 'Variation3',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'.topText h1\').html(\'<b>itytytyt</b>\');\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11253586': {
						'id': 11253586,
						'name': 'Variation4',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'h1 b\').replaceWith(\'<b>Konverteringsoytytytytytptimering</b>\');\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11253587': {
						'id': 11253587,
						'name': 'Variation5',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\nJQSG(\'h1\').addClass(\'test\');\n\nJQSG(\'h1\').attr(\'sg_addedClass\',\'test\');',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11253588': {
						'id': 11253588,
						'name': 'Variation6',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n\nfunction module_sg_el_modal_box_54725461() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_54725461_module\"] = {\"path\":\"#sg_el_modal_box_54725461\",\"coverid\":\"#sg_cover_sg_el_modal_box_54725461\",\"pathcode\":\"54725461\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_54725461\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\" sgca=\\\"42\\\" sgcr=\\\"44\\\"></div><div id=\\\"sg_el_modal_box_54725461\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\" sgca=\\\"42\\\" sgcr=\\\"43\\\"> <div id=\\\"sg_el_modal_box_54725461_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192487780\\\" variationid=\\\"11253588\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192487780\\\" variationid=\\\"11253588\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\" sgcr=\\\"48\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b368258353_select\\\" class=\\\"sg_block sg_block_input sg_modal_blocks\\\" type=\\\"select\\\" placeholder=\\\"0\\\" sg_required=\\\"1\\\" label=\\\"Question?\\\" target_name=\\\"select\\\" sg_type=\\\"0\\\" name=\\\"Multiple answers dropdown\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b368258353_select_lbl\\\" class=\\\"sg_label_modal\\\" style=\\\"\\\">Question?</div> <select id=\\\"sg_el_formbox_5960502_sec1_b368258353_select_sel\\\" class=\\\"sg_result sg_several_answers sg_select_answer\\\" style=\\\"\\\"> <option value=\\\"value1\\\" class=\\\"sg_each_answer\\\" id=\\\"sg_el_formbox_5960502_sec1_b368258353_select_option1\\\">value1</option> <option value=\\\"value2\\\" class=\\\"sg_each_answer\\\" id=\\\"sg_el_formbox_5960502_sec1_b368258353_select_option2\\\">value2</option> <option value=\\\"value3\\\" class=\\\"sg_each_answer\\\" id=\\\"sg_el_formbox_5960502_sec1_b368258353_select_option3\\\">value3</option> </select> </div><div id=\\\"sg_el_formbox_5960502_sec1_b434178457_text\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanksnote\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"value...\\\" sg_type=\\\"0\\\" name=\\\"Text field\\\" style=\\\"\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\" sgcr=\\\"47\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_54725461\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_54725461\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_54725461\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_54725461\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_54725461\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192487780\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"1\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_54725461\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_54725461\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_54725461\').hide();JQSG(\'#sg_cover_sg_el_modal_box_54725461\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"5px\",\"top\":\"100px\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_54725461();',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n#sg_cover_sg_el_modal_box_54725461{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_54725461{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_54725461_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_54725461 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}\n#sg_el_formbox_5960502_sec1_b368258353_select{color:black; padding:0px 10px; margin-top:20px;}\n#sg_el_formbox_5960502_sec1_b368258353_select_lbl{max-width: 100% !important;font-weight:600;}\n#sg_el_formbox_5960502_sec1_b368258353_select_sel{ max-width: 100% !important;padding: 12px 10px !important; margin-top: 10px !important; width: 93% !important; box-sizing: border-box !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9 !important; color: #464646 !important; float: none !important; display: inline !important; font-size: 15px !important;}\n#sg_el_formbox_5960502_sec1_b434178457_text{height:20px;max-width: 100% !important;}'
					},
					'11253589': {
						'id': 11253589,
						'name': 'Variation7',
						'active': 1,
						'alloc': 13,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192487971': {
				'id': 192487971,
				'audience': '(((SG.projectHasBeenRun(192487601,1)))&&((referrer==\'test\'))&&((SG.getinfo(\'referraltype\') == \'organic\'))&&((devicetype == 3))&&((SG.projectHasBeenRun(12345,1))))',
				'name': 'test_2_mvt_dashboard',
				'active': 1,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'mvt',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {
					'3902': {
						'id': 3902,
						'type': 'goalPage',
						'goalUrl': '',
						'match': '',
						'goalDefine': 'exact',
						'cgoalElement': '',
						'cgoalcontains': '',
						'cgoal': '',
						'goal': ''
					}
				},
				'v': {
					'11252145': {
						'id': 11252145,
						'name': 'Original',
						'active': 1,
						'alloc': 20,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252146': {
						'id': 11252146,
						'name': 'Combination 1',
						'active': 1,
						'alloc': 20,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252147': {
						'id': 11252147,
						'name': 'Combination 2',
						'active': 1,
						'alloc': 20,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252149': {
						'id': 11252149,
						'name': 'c1variation1',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'h1 b\').html(\'a 1\');\n',
						'parentid': '11252146',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252150': {
						'id': 11252150,
						'name': 'c1variation2',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'h1 b\').html(\'a 2\');\n',
						'parentid': '11252146',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252188': {
						'id': 11252188,
						'name': 'Combination 3',
						'active': 1,
						'alloc': 20,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252189': {
						'id': 11252189,
						'name': 'c3variation1 (Clone)',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'#landingPageInfo .pageReal > div\').html(\' C1\');\n',
						'parentid': '11252188',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252190': {
						'id': 11252190,
						'name': 'c3variation2 (Clone)',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'#landingPageInfo .pageReal > div\').html(\' c2\');\n',
						'parentid': '11252188',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252191': {
						'id': 11252191,
						'name': 'Combination 4',
						'active': 1,
						'alloc': 20,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252192': {
						'id': 11252192,
						'name': 'c4variation1 (Clone)',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\n',
						'parentid': '11252191',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252193': {
						'id': 11252193,
						'name': 'c4variation2 (Clone)',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'#abtestinfo h1\').html(\'d2\');\n',
						'parentid': '11252191',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252210': {
						'id': 11252210,
						'name': 'c2variation1',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'div:nth-child(2) h2\').html(\'b1\');\n',
						'parentid': '11252147',
						'css': '/* Write custom CSS here! */\n'
					},
					'11252219': {
						'id': 11252219,
						'name': 'c2variation2',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'div:nth-child(2) h2\').html(\'b2\');\n',
						'parentid': '11252147',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192488013': {
				'id': 192488013,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test_var_mvt',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'mvt',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11252273': {
						'id': 11252273,
						'name': 'Original',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252274': {
						'id': 11252274,
						'name': 'Combination 1',
						'active': 1,
						'alloc': 50,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252275': {
						'id': 11252275,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '11252274',
						'css': ''
					},
					'11252276': {
						'id': 11252276,
						'name': 'Combination 2',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252277': {
						'id': 11252277,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '11252276',
						'css': ''
					},
					'11252278': {
						'id': 11252278,
						'name': 'Combination3',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192488002': {
				'id': 192488002,
				'audience': '( (( SG.getGeo(\'countryCode\',\'SL\',\'192488002\'))) &&((SG.getinfo(\'referraltype\') == \'organic\'))&&((SG.getinfo(\'referraltype\') == \'referral\'))&&((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))&&((totalVisits> 2))&&((devicetype == 0))&&((sg_screenwidth> 2))&& (( SG.getGeo(\'query\',\'213.115.103.83\',\'192488002\'))) )',
				'name': 'test_2112016',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11252242': {
						'id': 11252242,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					},
					'11253939': {
						'id': 11253939,
						'name': 'Variation1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192488015': {
				'id': 192488015,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test_implementation',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'mvt',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11252281': {
						'id': 11252281,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '/* Write custom javascript / JQSG here! */\nJQSG(\"body\").on(\"click\",\"h1\",function(event) { // När man klickar på \".job-tile\"\n    \n      module_sg_el_modal_box_1396960();\n});\nfunction module_sg_el_modal_box_1396960() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_1396960_module\"] = {\"path\":\"#sg_el_modal_box_1396960\",\"coverid\":\"#sg_cover_sg_el_modal_box_1396960\",\"pathcode\":\"1396960\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_1396960\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_1396960\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_1396960_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192488015\\\" variationid=\\\"11252281\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192488015\\\" variationid=\\\"11252281\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_1396960\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_1396960\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_1396960\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_1396960\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_1396960\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192488015\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"1\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_1396960\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_1396960\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_1396960\').hide();JQSG(\'#sg_cover_sg_el_modal_box_1396960\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"5px\",\"top\":\"100px\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n#sg_cover_sg_el_modal_box_1396960{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_1396960{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_1396960_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_1396960 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					}
				}
			},
			'192488052': {
				'id': 192488052,
				'audience': '((pathname==\'http://www.internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test_form_url',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'popup',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11252384': {
						'id': 11252384,
						'name': 'Original',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n\n\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n.tet {\n    background:red;\n}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					},
					'11252463': {
						'id': 11252463,
						'name': 'Variation1',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11252466': {
						'id': 11252466,
						'name': 'Variation2',
						'active': 1,
						'alloc': 25,
						'code': '/* Write custom javascript / JQSG here! */\n\nfunction module_sg_el_modal_box_48287508() {\nvar sg_modal = [];\nsg_modal[\"sg_el_modal_box_48287508_module\"] = {\"path\":\"#sg_el_modal_box_48287508\",\"coverid\":\"#sg_cover_sg_el_modal_box_48287508\",\"pathcode\":\"48287508\",\"html\":\"<div id=\\\"sg_cover_sg_el_modal_box_48287508\\\" style=\\\"display: block;\\\" class=\\\"sg_modal_popup\\\"></div><div id=\\\"sg_el_modal_box_48287508\\\" class=\\\"sg_modal_popup sitegainer_modal sg_popup_main sg_drop_container\\\" style=\\\"\\\"> <div id=\\\"sg_el_modal_box_48287508_container\\\" style=\\\"height: auto;\\\" projectid=\\\"192488052\\\" variationid=\\\"11252466\\\" websiteid=\\\"5615234\\\" class=\\\"ui-sortable\\\"> <h1 id=\\\"sg_el_headerbox_82299122\\\" class=\\\"sg_headers1_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Get 10% discount today!</h1> <div id=\\\"sg_el_textbox_14063308\\\" class=\\\"sg_text_box sg_modal_blocks ui-sortable-handle\\\" style=\\\"\\\">Join our newsletter today and get a fantastic 10% discount code to use today!&nbsp;</div> <div id=\\\"sg_el_formbox_5960502\\\" style=\\\"\\\" class=\\\"sg_modal_form sg_modal_blocks ui-sortable-handle\\\" projectid=\\\"192488052\\\" variationid=\\\"11252466\\\" websiteid=\\\"5615234\\\"> <div id=\\\"sg_el_formbox_5960502_sec1\\\" class=\\\"sg_section\\\" style=\\\"display: block;\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input\\\" class=\\\"sg_block sg_block_input\\\" placeholder=\\\"Your email...\\\" sg_required=\\\"1\\\" label=\\\"value...\\\" sg_type=\\\"all\\\" type=\\\"input\\\" name=\\\"Text input\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_lbl\\\" class=\\\"sg_label_modal\\\"></div> <input class=\\\"sg_input_modal sg_result\\\" placeholder=\\\"Your email...\\\" style=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b152131011_input_inp\\\"> </div><div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"button\\\" placeholder=\\\"0\\\" sg_required=\\\"0\\\" label=\\\"Join our newsletter!\\\" sg_type=\\\"0\\\" name=\\\"Submit button\\\"> <div id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_lbl\\\" class=\\\"sg_label_modal\\\"></div> <button class=\\\"sg_button_modal_form\\\" style=\\\"\\\" onclick=\\\"\\\" id=\\\"sg_el_formbox_5960502_sec1_b222213293_button_btn\\\">Join our newsletter!</button> </div></div> <div id=\\\"sg_el_formbox_5960502_sec2\\\" style=\\\"display: none;\\\" class=\\\"sg_section sg_last_section\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou\\\" class=\\\"sg_block sg_none_input sg_modal_blocks\\\" type=\\\"Thanks note\\\" placeholder=\\\"0\\\" label=\\\"value...\\\" sg_required=\\\"1\\\" sg_type=\\\"0\\\" name=\\\"Thanks note\\\"> <div id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_lbl\\\" class=\\\"sg_label_modal\\\"></div> <p id=\\\"sg_el_formbox_5960502_sec2_b178475701_thankyou_p\\\" class=\\\"sg_p_modal\\\" style=\\\"\\\">Thanks for your email! You discount code is<b id=\\\"B_95861179_sg_el_modal_box_48287508\\\"> XXX XXX</b></p> </div></div> <div id=\\\"sg_el_formbox_5960502_divider\\\" class=\\\"action_block_divider\\\" style=\\\"\\\"></div> <div id=\\\"sg_el_formbox_5960502_action\\\" style=\\\"\\\"> <div id=\\\"sg_el_formbox_5960502_act1\\\" class=\\\"sg_action\\\"> <div class=\\\"sg_action_name\\\" id=\\\"DIV_67745210_sg_el_modal_box_48287508\\\">Send to Sitegainer</div> <div class=\\\"sg_action_url\\\" id=\\\"DIV_72753353_sg_el_modal_box_48287508\\\">//sitegainer.com/leads.php?new_lead=1</div> <div class=\\\"sg_action_html\\\" id=\\\"DIV_81555886_sg_el_modal_box_48287508\\\"> <div id=\\\"sg_el_formbox_5960502_res_value1\\\"></div> <div id=\\\"sg_el_formbox_5960502_res_value2\\\"></div> </div> <div class=\\\"sg_action_script\\\" id=\\\"DIV_15457088_sg_el_modal_box_48287508\\\"> </div> </div> </div> </div></div> </div>\",\"appendto\":\"body\",\"position\":\"center\",\"type\":\"popup\",\"action\":\"JQSG(\'body\').append(sg_pop_module.html)\",\"projectid\":\"192488052\",\"hasclose\":\"true\",\"timeout\":\"3000\",\"times\":\"1\",\"foruser\":\"unique visitor\",\"enter\":\"JQSG(\'#sg_el_modal_box_48287508\').fadeIn();JQSG(\'#sg_cover_sg_el_modal_box_48287508\').fadeIn();\",\"exit\":\"JQSG(\'#sg_el_modal_box_48287508\').hide();JQSG(\'#sg_cover_sg_el_modal_box_48287508\').hide();\",\"height\":\"auto\",\"width\":\"450px\",\"border-radius\":\"5px\",\"top\":\"100px\",\"padding\":\"0px\"};\nfunction sg_add_module(sg_pop_module)\n{\n    JQSG(sg_pop_module.path).remove();\n    var popuptimes = SG_Cookies.get(\'mdt\'+sg_pop_module.pathcode);\n function sg_call_append(sg_pop_module)\n {\n \n  function pop_resize(sg_pop_module) {\n   var sg_pw = parseInt(sg_pop_module.width);\n   var sg_dw = JQSG(document).width()\n   var sg_p =sg_dw/sg_pw*0.9;\n\n   if(parseInt(sg_pop_module.width) > JQSG(document).width()) {\n       \n       var style_sg_top =\'\';\n       var style_sg_bottom = \'\'\n       \n       if(typeof sg_pop_module.top !==\'undefined\')\n       {\n           var sg_top = parseInt(sg_pop_module.top);\n           style_sg_top = sg_top/sg_p ;\n           style_sg_top = \'top:\'+style_sg_top+\'px !important;\' ;\n       }\n                if(typeof sg_pop_module.bottom !==\'undefined\')\n       {\n           var sg_bottom =  parseInt(sg_pop_module.bottom);\n           style_sg_bottom = sg_bottom /sg_p;\n           style_sg_bottom = \'bottom:\'+style_sg_bottom+\'px !important;\' ;\n       }\n     JQSG(\'.sg_pop_size\').remove();\n     JQSG(\'head\').append(\'<style class=\"sg_pop_size\">\' + sg_pop_module.path + \' {\'+style_sg_top+style_sg_bottom+ \' transform:scale(\' + \n     sg_p + \',\' + sg_p + \'); -ms-transform:scale(\' + sg_p + \',\' + sg_p + \'); -webkit-transform:scale(\' + sg_p + \',\' + sg_p + \')}</style>\');\n   } else {\n    JQSG(\'.sg_pop_size\').remove();\n   }\n  }\n  pop_resize(sg_pop_module);\n  JQSG(window).resize(function() {pop_resize(sg_pop_module);});\n  eval(sg_pop_module.action); \n  var script = sg_pop_module.enter; \n  eval(script);\n  if(sg_pop_module.hasclose ==\'true\')\n  {\n   JQSG(sg_pop_module.path).append(\'<div id=\"sg_close_\'+sg_pop_module.pathcode+\'\" class=\"class_close_sg\" onclick=\"\'+sg_pop_module.exit+\'\">X</div>\');\n   JQSG(sg_pop_module.path).find(\'.sg_section\').hide();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').children().first().show();\n   JQSG(sg_pop_module.path).find(\'.sg_modal_form\').find(\'.sg_nps\').removeClass(\'active\');\n  }\n  \n \n  \n }\n function call_set_timeout(sg_pop_module)\n { \n \n  var sgedit = SG_Cookies.getJSON(\'sgedit\');\n \n  if(window.location.href.indexOf(\'sitegainer-editor\') == -1 || typeof sgedit === \'undefined\') \n  {\n    if(sg_pop_module.timeout != 0)\n    {\n    \n   setTimeout(function()\n   {\n    sg_call_append(sg_pop_module);\n    if( window.location.href.indexOf(\'sgpreviewmode\') > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n   \n   }, sg_pop_module.timeout,sg_pop_module);\n    }\n   else\n   {\n    sg_call_append(sg_pop_module);\n    var sgpr = SG_Cookies.getJSON(\'sgpr\');\n    if( (window.location.href.indexOf(\'sgpreviewmode\') || typeof sgpr !== \'undefined\' ) > 0 && (sg_pop_module.position == \'btmlft\' || sg_pop_module.position == \'btmrght\') )\n    {\n     var style= JQSG(sg_pop_module.path).attr(\'style\');\n     var bottom = JQSG(sg_pop_module.path).css(\'bottom\');\n     var newbottom = parseFloat(bottom)+92;\n     JQSG(sg_pop_module.path).attr(\'style\',\'bottom:\'+newbottom+\'px !important;\' + style);\n    }\n    \n   }\n  }\n  else\n  {\n   sg_call_append(sg_pop_module);\n  }\n }\n \n var sgedit = SG_Cookies.getJSON(\'sgedit\');\n var sgpr = SG_Cookies.getJSON(\'sgpr\');\n if(typeof sgedit !==\'undefined\' && sgedit.pid == sg_pop_module.projectid  || window.location.href.indexOf(\'hosted_editor\') > -1 )\n {\n  sg_call_append(sg_pop_module);\n }\n    else if( (window.location.href.indexOf(\'sgpreviewmode\') > -1 || typeof sgpr !== \'undefined\' ) && window.location.href.indexOf(sg_pop_module.projectid) > -1) \n    {\n         call_set_timeout(sg_pop_module);\n    }\n    else if( sg_pop_module.type == \'banner\' || sg_pop_module.type == \'standalone\')\n    {\n         call_set_timeout(sg_pop_module);\n    }\n else if(typeof popuptimes !==\'undefined\' &&  popuptimes < sg_pop_module.times )\n {\n      call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,parseInt(popuptimes)+1,{ expires: 90 });\n      }\n     \n }\n else if(typeof popuptimes ===\'undefined\' )\n {\n     \n     call_set_timeout(sg_pop_module);\n      if(sg_pop_module.foruser ==\'session\')\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n         SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1);\n      }\n      else\n      {\n          SG_Cookies.remove(\'mdt\'+sg_pop_module.pathcode);\n          SG_Cookies.set(\'mdt\'+sg_pop_module.pathcode,1,{ expires: 90 });\n      }\n }\n else\n {\n     \n }\n\n}\nfunction sg_add_modules(modules){for(x in modules){sg_add_module(modules[x]);}}\nsg_add_modules(sg_modal);\nJQSG(\'body\').on(\'click\',\'.sg_nps\',function(){JQSG(this).parent().find(\'.sg_nps\').removeClass(\'active\');JQSG(this).parent().find(\'.sg_nps\').removeClass(\'sg_filled\');JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');});\nJQSG(\'body\').on(\'click\',\'.sg_answer_check\',function(){if(JQSG(this).parents(\'.sg_block\').attr(\'check\') ==0){JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'active\');JQSG(this).parents(\'.sg_block\').find(\'.sg_answer_check\').removeClass(\'sg_filled\');}if(JQSG(this).hasClass(\'active\')){JQSG(this).removeClass(\'active\');JQSG(this).removeClass(\'sg_filled\');}else{JQSG(this).addClass(\'active\');JQSG(this).addClass(\'sg_filled\');}});\nJQSG.getScript( \'//sitegainer.com/neweditor/form_functions.js\', function( data ) {form_functions_init();});};\nmodule_sg_el_modal_box_48287508();',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n#sg_cover_sg_el_modal_box_48287508{max-width: 100% !important;position:fixed; top:0 !important; left:0 !important; height:100%; width:100%; background:#000;opacity:0.7;z-index:99999;}\n#sg_el_modal_box_48287508{font-size:12px;color:black;position:fixed !important;top:100px;left:50%;text-align:center;min-height:250px;width:450px;margin-left:-200px;background:transparent;z-index:99999;}\n#sg_el_modal_box_48287508_container{overflow: hidden;width: 100%;min-height:250px;background: #fff; border-radius: 5px; box-shadow:0px 2px 1px#000;}\n#sg_el_modal_box_48287508 p {margin: 0px !important;max-width: 100% !important;}\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n#sg_el_headerbox_82299122{margin: 0;padding:17px !important;background:#fffbfb !important;color:#191818 !important;max-width: 100% !important;}\n#sg_el_textbox_14063308{padding:10px !important;line-height:130% !important; font-size:14px !important; font-weight:600 !important;padding-left:20px !important;padding-right:20px !important;padding-top:10px !important;padding-bottom:10px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502{margin:auto;word-wrap: break-word;overflow: hidden; text-align: center !important; background-color: transparent; border: none; padding: 0px !important; color: black;padding-bottom:0px !important;margin-top:0px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input{padding:0px 10px; margin-top:20px;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b152131011_input_inp{float: none !important; width: 93% !important; background-color: #FCFCFC !important; line-height: 130% !important; color: #333 !important; text-align: center !important; font-size: 16px !important; padding: 10px 10px !important; font-weight: bold !important; box-shadow: inset 0px 3px 0px rgba(0, 0, 0, 0.04) !important; border: thin solid #D9D9D9; box-sizing: border-box !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec1_b222213293_button_btn{color: white !important;background:#1f66ba !important;border-radius: 3px !important;  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) !important;border: none !important;box-shadow:none !important;margin-top:16px !important;font-weight: bold !important; float:none !important;display:inline !important;margin-bottom:20px !important;font-size:16px !important; padding: 10px 20px !important;max-width: 100% !important;}\n#sg_el_formbox_5960502_sec2{display:none;}\n#sg_el_formbox_5960502_sec2_b178475701_thankyou_p{color:black;}\n#sg_el_formbox_5960502_divider{display:none;}\n#sg_el_formbox_5960502_action{display:none;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					},
					'11252469': {
						'id': 11252469,
						'name': 'Variation3',
						'active': 1,
						'alloc': 25,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192488067': {
				'id': 192488067,
				'audience': '(((pathname==\'test\')))',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '1',
				'owner': 82317013,
				'type': 'popup',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11252418': {
						'id': 11252418,
						'name': 'Pop Up',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n\n\n/* Sitegainer popup removed  - Remove this line and refresh to get the popup back  */',
						'parentid': '',
						'css': '\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					},
					'11254036': {
						'id': 11254036,
						'name': 'Variation2',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n\n/* Sitegainer popup removed  - Remove this line and refresh to get the popup back  */',
						'parentid': '',
						'css': '\n.class_close_sg{position: absolute;top:-12px;right:-12px; padding: 7px 11px;font-size: 12px;border: none;border-radius: 100px;cursor: pointer;background: #F3F3F3; box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.26);max-width: 100% !important;}\n.sg_popup_main input{display: inline;margin: auto;height: auto;}'
					}
				}
			},
			'192488823': {
				'id': 192488823,
				'audience': '(((pathname.indexOf(\'test\') > -1))&&((SG.checktimeout(10000,\'==\',1,\'192488823\'))))',
				'name': 'example my see',
				'active': 1,
				'onReady': '',
				'audienceCheckMode': '1',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': 'ob.lib.sg_setTimeout(10000,\'192488823\',1);',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {
					'4377': {
						'id': 4377,
						'type': 'contentGoal',
						'goalUrl': '//i',
						'match': 'regexp',
						'goalDefine': 'exact',
						'cgoalElement': 'test',
						'cgoalcontains': '',
						'cgoal': '',
						'goal': 'test'
					}
				},
				'v': {
					'11253973': {
						'id': 11253973,
						'name': 'Original',
						'active': 1,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n\n\nJQSG(\'.topText h1\').html(\'<b>EXAMPLE 2</b>\');\n\nJQSG(\'div:nth-child(2) h2\').html(\'EXAMPLE 2&nbsp;\');\nsetInterval(function(){\n    \n    JQSG(\"body\").prepend(\'test2\');\n\n    \n    \n    \n}, 3000);',
						'parentid': '',
						'css': '\n.sg_popup_main input{display: inline;margin: auto;height: auto;}\n#starterTop1{background:#ff004a !important;}'
					},
					'11254077': {
						'id': 11254077,
						'name': 'test',
						'active': 0,
						'alloc': 50,
						'code': '/* Write custom javascript / JQSG here! */\n',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192489103': {
				'id': 192489103,
				'audience': '(((pathname.indexOf(\'something\') > -1)))',
				'name': 'example3',
				'active': 1,
				'onReady': '',
				'audienceCheckMode': '1',
				'owner': 82317013,
				'type': 'customization',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11254534': {
						'id': 11254534,
						'name': 'Personalization',
						'active': 1,
						'alloc': 100,
						'code': '/* Write custom javascript / JQSG here! */\n\nJQSG(\'.topText h1\').html(\'<b>EXAMPLE 1</b>\');\n\nJQSG(\'.topContent h3\').html(\'EXAMPLE1\');\nsetInterval(function(){\n    \n    console.log(\'test\');\n    JQSG(\'body\').prepend(\'test1\');\n}, 3000);',
						'parentid': '',
						'css': '/* Write custom CSS here! */\n'
					}
				}
			},
			'192489197': {
				'id': 192489197,
				'audience': '((pathnameSimple==\'internetexperten.se/konverteringsoptimering/\'))',
				'name': 'duplicatetest',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {
					'4461': {
						'id': 4461,
						'type': 'contentGoal',
						'goalUrl': 'url',
						'match': '',
						'goalDefine': 'exact',
						'cgoalElement': 'test',
						'cgoalcontains': 'test',
						'cgoal': '',
						'goal': ''
					},
					'4460': {
						'id': 4460,
						'type': 'customGoal',
						'goalUrl': '',
						'match': '',
						'goalDefine': 'exact',
						'cgoalElement': '',
						'cgoalcontains': '',
						'cgoal': 'return true;',
						'goal': ''
					}
				},
				'v': {
					'11254746': {
						'id': 11254746,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11254747': {
						'id': 11254747,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192489199': {
				'id': 192489199,
				'audience': '((pathnameSimple==\'internetexperten.se/konverteringsoptimering/\'))',
				'name': 'duplicatetest--[Duplicated]',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {
					'4462': {
						'id': 4462,
						'type': 'contentGoal',
						'goalUrl': 'url',
						'match': '',
						'goalDefine': 'exact',
						'cgoalElement': 'test',
						'cgoalcontains': 'test',
						'cgoal': '',
						'goal': ''
					},
					'4463': {
						'id': 4463,
						'type': 'customGoal',
						'goalUrl': '',
						'match': '',
						'goalDefine': 'exact',
						'cgoalElement': '',
						'cgoalcontains': '',
						'cgoal': 'return true;',
						'goal': ''
					}
				},
				'v': {
					'11254749': {
						'id': 11254749,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11254750': {
						'id': 11254750,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			},
			'192489220': {
				'id': 192489220,
				'audience': '((pathnameSimple==\'internetexperten.se/konverteringsoptimering/\'))',
				'name': 'test',
				'active': 0,
				'onReady': '',
				'audienceCheckMode': '0',
				'owner': 82317013,
				'type': 'abtest',
				'forcejQuery': '',
				'activeVariation': '',
				'globalCSS': '',
				'globaljQuery': '',
				'activeUrl': '',
				'audienceResult': '',
				'audienceEventLoaded': 0,
				'customAudienceResult': 0,
				'selected': 0,
				'heatmap': '0',
				'running': 0,
				'cRunning': 0,
				'hRunning': 0,
				'preview': 0,
				'customAudience': '',
				'audienceEvents': '',
				'parentID': '',
				'hasScript': '',
				'tracking': '',
				'cookieTime': 90,
				'g': {},
				'v': {
					'11254793': {
						'id': 11254793,
						'name': 'Original',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					},
					'11254794': {
						'id': 11254794,
						'name': 'Variant 1',
						'active': 1,
						'alloc': 0,
						'code': '',
						'parentid': '',
						'css': ''
					}
				}
			}
		},
		'DynamicUrl': '1'
	}
	window.sg_ws = w;
	var ob = {
		core: {
			initialize: function() {
				var core = ob.core;
				var lib = ob.lib;
				lib.log('SiteGainer log: Start - Cache control: 2017-01-18 16:15:12 < Cache time');
				lib.log('SiteGainer log: Get domain');
				lib.getCookieDomain();
				lib.checkPreview();
				lib.log('SiteGainer log: Initializing');
				ob.lib.setUserData();
				lib.log('SiteGainer log: User object ?');
				lib.log(w.user, '');
				var root = window.location.hostname;
				var path = window.location.href;
				if (typeof w.user.maxscroll === 'undefined') {
					var body = document.body,
						html = document.documentElement;
					w.scrollMaxTemp = (window.pageYOffset || document.documentElement.scrollTop || body.scrollTop || 0) + window.innerHeight;
					w.user.maxscroll = w.scrollMaxTemp;
				}
				var isiniframe = (window.location != window.parent.location && path.indexOf(' previewmode') < -1) ? true : false;
				if (window.location.href.indexOf('sitegainer-editor') > -1 || typeof SG_Cookies.getJSON('sgedit') !== 'undefined') {
					ob.lib.log('SiteGainer log: Editor mode');
					var pid = ob.lib.getQParams('sitegainer-editor');
					if (typeof pid === 'undefined') {
						pid = SG_Cookies.getJSON('sgedit').pid;
						ob.core.runEditor(pid);
					} else {
						ob.core.runEditor(pid);
					}
				} else {
					if (window.location.href.indexOf('sgheatmap') > -1) {
						var pid = ob.lib.getQParams('sgpreviewmode');
						ob.lib.showHeatmap(pid, w, lib);
					}
					if (window.location.href.indexOf('sg-edit') > -1) {
						ob.lib.log('SiteGainer log: Detected "sg-edit" in url => Trying to load editor');
						w.editormode = 1;
						ob.lib.jsonp('//sitegainer.com/neweditor/accesscheck_2.php?websiteid=' + w.id, function(data) {
							ob.lib.log('SiteGainer log: Get answer from access check => "' + data.answer + '"');
							d = new Date();
							cb = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
							var answer = data.answer;
							if (answer == 'logged in') {
								ob.lib.getScript('//d191y0yd6d0jy4.cloudfront.net/jquery.js?cb=' + cb, function() {
									ob.lib.getScript('//sitegainer.com/neweditor/load_editor2.js', function() {
										sg_ext_func.sg_get_projects(w.id, ob.lib);
									});
								});
							}
						});
					}
					ob.lib.log('SiteGainer log: Looking for jQuery...');
					if (w.checkJQuery == 1) {
						if (document.documentElement.innerHTML.indexOf('jquery') > -1) {
							ob.lib.log('SiteGainer log: jQuery exists in DOM...');
							var a = setInterval(function() {
								if (ob.lib.jQuery_check()) {
									clearInterval(a);
									ob.core.applyJquery();
								}
							}, 10);
							if (ob.lib.jQuery_check()) {
								clearInterval(a);
								ob.core.applyJquery();
							}
						} else {
							ob.lib.log('SiteGainer log: Could not find jQuery in DOM, applying it now...');
							if (ob.lib.jQuery_check()) {
								ob.core.applyJquery();
							} else {
								window.JQSG;
								ob.core.applyJquery(0);
							}
						}
					} else {
						ob.core.applyJquery(0);
					}
				}
				ob.core.initTracking();
			},
			initTracking: function() {
				ob.lib.log("SiteGainer log:  Tracker - Initialize tracking...");
				var sg_unload = function() {
					if (w.trackerSent == 0) {
						w.trackerSent = 1;
						var ud = w.user;
						var lastVisitweb = ud.time.year + '-' + ud.time.month + '-' + ud.time.sgdate + ' ' + ud.time.hour + ':' + ud.time.minute;
						ob.lib.lsSetdata('Website', 'PersonalData', 'lastVisit', lastVisitweb);
						var rnd = Math.floor(Math.random() * 100000) + 1;
						var a = ob.core.updateJson(1);
						w.tracker = [];
						if (a.vid[0]) {
							ob.lib.log("SiteGainer log: Send tracking data -> First variation id -> " + a.vid[0]);
							ob.lib.log(a);
							var i = new Image(1, 1);
							i.src = '//sitegainer.com/visitortracker4.php?rnd=' + rnd + '&a=' + encodeURIComponent(JSON_SG.stringify(a));
						} else {
							ob.lib.log(a);
							ob.lib.log('SiteGainer log: Tracker sent [ 0 = no / 1 = yes ] ? ->  ' + w.trackerSent);
							ob.lib.log("SiteGainer log: Tracker -  No variation to send data for... ");
						}
					} else {}
				}
				w.dataSent = 0;
				window.addEventListener("pagehide", function(evt) {
					if (w.dataSent == 0) {
						w.dataSent = 1;
						sg_unload();
					}
				}, false);
				window.addEventListener("unload", function(evt) {
					if (w.dataSent == 0) {
						w.dataSent = 1;
						sg_unload();
					}
				}, false);
				ob.core.dReady(function() {
					sg_unload();
					w.trackerInterval = setInterval(function() {
						sg_unload();
					}, 5000);
				});

				function addEvent(obj, evt, fn) {
					if (obj.addEventListener) {
						obj.addEventListener(evt, fn, false);
					} else if (obj.attachEvent) {
						obj.attachEvent("on" + evt, fn);
					}
				}
				addEvent(document, "mouseout", function(e) {
					e = e ? e : window.event;
					var from = e.relatedTarget || e.toElement;
					if (!from || from.nodeName == "HTML") {
						sg_unload();
					}
				});
				sg_unload();
			},
			updateJson: function(sent) {
				var ud = w.user;
				var pids = '';
				var vids = '';
				var eids = '';
				var pn = 0;
				var maxscroll = ud.maxscroll + ud.deviceHeight;
				var rjsn = {
					"pid": {},
					"vid": {},
					"event": {},
					"clicks": {},
					"wid": "",
					"rf": "",
					"rft": "",
					"dw": "",
					"dcw": "",
					"bt": "",
					"visid": "",
					"snid": "",
					"url": "",
					"fp": "",
					"wtid": "",
					"ms": "",
					"tc": "",
					"tp": "",
					"to": "",
					"ecid": ""
				};
				if (typeof sent === 'undefined') {
					w.trackerSent = 0;
					ob.lib.log("SiteGainer log: Updated tracker content - has something to send now!");
				}
				rjsn.snt = sent;
				rjsn.rft = ud.referrer.type;
				rjsn.wid = w.id;
				rjsn.rf = ud.referrer.full;
				rjsn.rft = ud.referrer.type;
				rjsn.dw = ud.deviceWidth;
				rjsn.dcw = ud.docWidth;
				rjsn.dh = ud.deviceHeight;
				rjsn.ph = ud.deviceHeight;
				rjsn.bt = ud.browser.deviceType;
				rjsn.bn = ud.browser.name;
				rjsn.bv = ud.browser.version;
				rjsn.bo = ud.browser.os;
				rjsn.visid = ud.visitorID;
				rjsn.url = ud.path.path.replace(/\#/g, "{hsh}");
				rjsn.fp = ob.lib.getCookie('fp');
				rjsn.snid = ob.lib.getCookie('si');
				rjsn.tc = ud.totalClicks;
				rjsn.ms = w.user.maxscroll;
				rjsn.tp = w.secondsSpentonPage;
				for (var x in w.tracker) {
					if (typeof w.tracker[x].pid !== 'undefined') {
						var pid = w.tracker[x].pid;
						var gid = w.tracker[x].gid;
						var vid = w.tracker[x].vid;
						if (typeof rjsn.pid[pn] === 'undefined') {
							rjsn.pid[pn] = [];
							rjsn.vid[pn] = [];
							rjsn.event[pn] = [];
							rjsn.clicks[pn] = [];
						}
						rjsn.pid[pn].push(pid);
						rjsn.vid[pn].push(vid);
						rjsn.event[pn].push(gid);
						var pthn = 0
						for (var y in w.tracker[x].clicks) {
							var path = w.tracker[x].clicks[y];
							if (typeof path.pth !== 'undefined') {
								if (typeof rjsn.clicks[pn][pthn] === 'undefined') {
									rjsn.clicks[pn][pthn] = [];
								}
								for (var n in path) {
									var pos = path[n];
									if (typeof pos.z !== 'undefined') {
										rjsn.clicks[pn][pthn].push(n + ',' + pos.z + ',' + path.pth.replace('#', '@Ht'));
									}
								}
								pthn++;
							}
						}
					}
					pn++;
				}
				window.sg_tracker = rjsn;
				return rjsn;
			},
			applyJquery: function(x) {
				if (typeof JQSG === 'undefined' || x == 0 || (w.inherit_jQuery != 1 || !JQSG.fn.on)) {
					d = new Date();
					cb = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
					ob.lib.getScript('//d191y0yd6d0jy4.cloudfront.net/jquery.js?cb=' + cb, function() {
						ob.lib.log('SiteGainer log: jQuery below version 1.6  / Prototype -> Loading compatible jQuery (Update your jQuery above 1.6 to avoid this!)');
						if (w.crossDomain == '') {
							ob.core.loopProjects();
							ob.core.fingerPrint();
						} else {
							if (window.location.href.indexOf(w.crossDomain) == -1) {
								ob.core.loopProjects();
							}
							ob.core.fingerPrint();
							ob.core.crossDomainRun();
						}
					});
				} else {
					if (w.crossDomain == '') {
						ob.core.loopProjects();
						ob.core.fingerPrint();
					} else {
						if (window.location.href.indexOf(w.crossDomain) == -1) {
							ob.core.loopProjects();
						}
						ob.core.fingerPrint();
						ob.core.crossDomainRun();
					}
				}
			},
			prioritizeProjects: function() {
				var cci = []
				for (var pid in w.p) {
					if (w.p[pid].audienceCheckMode == 1) {
						w.p[pid].selected = 0;
					}
				}
				for (var pid in w.p) {
					ob.core.selectProject('customization', pid, cci);
				}
				for (var pid in w.p) {
					ob.core.selectProject('abtest,mvt', pid, cci);
				}
				for (var pid in w.p) {
					ob.core.selectProject('heatmap,popup,survey', pid, cci);
				}
			},
			selectProject: function(type, pid, cci) {
				if (w.p[pid].selected === 0 && type.indexOf(w.p[pid].type) > -1 && (w.p[pid].active == 1 || w.p[pid].preview == 1) && w.p[pid].parentID === '') {
					w.p[pid].selected = 1;
					if (w.p[pid].audienceCheckMode == 1) {
						if (w.p[pid].running == 1) {
							var element = document.getElementById('css_' + pid);
							if (element) {
								element.parentNode.removeChild(element);
							}
							ob.lib.log('SiteGainer log: CSS removed for: ' + pid);
							w.p[pid].running = 0;
						}
					}
					if (w.p[pid].audienceEventLoaded == 0) {
						eval(w.p[pid].audienceEvents);
						w.p[pid].audienceEventLoaded = 1;
					}
					ob.core.checkProject(pid, cci);
				}
			},
			checkProject: function(pid, cci) {
				if (w.p[pid].audience.indexOf('CheckContent') > -1) {
					ob.core.contentMode(pid, cci);
				} else {
					ob.core.runProject(pid);
				}
			},
			loopProjects: function(pid) {
				ob.lib.log('SiteGainer log: Looping projects');
				ob.core.prioritizeProjects();
				if (w.DynamicUrl == 1) {
					ob.lib.monitorInit();
					ob.lib.dynamicURL();
				}
				ob.core.dReady(function() {});
				ob.lib.log('SiteGainer log: # ANALYTICS # Run GA EVENT');
				ob.lib.gaEvent();
			},
			contentMode: function(pid) {
				ob.lib.log('SiteGainer log: Check content for project => ' + pid);
				var contentcheck = function() {
					ob.lib.log('SiteGainer log: Check content');
					var au = ob.lib.checkAudience(pid);
					if (au && w.p[pid].running === 0) {
						clearInterval(w.p[pid].sint);
						w.p[pid].cRunning = 1;
						ob.core.runProject(pid, au, 1);
					}
					if (w.p[pid].cRunning === 1) {
						clearInterval(w.p[pid].sint);
					}
				}
				contentcheck(pid);
				w.p[pid].sint = setInterval(function() {
					contentcheck(pid);
				}, 20);
				ob.core.dReady(function() {
					ob.lib.log("Clear content interval...");
					clearInterval(w.p[pid].sint);
					if (w.p[pid].running === 0) {
						ob.core.runProject(pid);
					}
				});
			},
			runProject: function(pid, au, tr) {
				var y = 0;
				if (w.p[pid].active == 1) {
					y = 'Active'
				} else {
					y = 'Paused'
				}
				ob.lib.log('SiteGainer log: Initializing project & log project object ? ' + pid + ' ' + y);
				ob.lib.log(w.p[pid], '');
				if (w.p[pid].active == 1 || w.p[pid].preview == 1) {
					ob.lib.log('SiteGainer log: ' + pid + ' is active or in preview');
					if (ob.lib.allocateProject(pid)) {
						ob.lib.log('SiteGainer log: ' + pid + ' allocated...');
						if (typeof au === 'undefined') {
							au = ob.lib.checkAudience(pid);
						}
						if (au && w.p[pid].running == 0) {
							ob.lib.log('SiteGainer log: Check and run variations for ' + w.p[pid].id);
							ob.core.runVariation(pid);
						}
					}
				}
				ob.lib.runGoalsWeb(pid);
				if (w.p[pid].preview == 1) {
					ob.lib.showPreview(pid);
				}
			},
			crossDomainSet: function(pid) {
				if (w.crossDomain !== '' && w.previewMode != 1 && window.location.href.indexOf(w.crossDomain) == -1) {
					var a = setInterval(function() {
						if (w.uFingerPrint !== 0) {
							clearInterval(a);
							var d = new Date();
							var cb = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
							var uid = w.user.visitorID;
							var vid = ob.lib.getActiveVariation(pid);
							ob.lib.log('SiteGainer log: Cross Domain sending data for => project' + pid);
							ob.lib.jsonp('//sitegainer.com/crossDomainCheck.php?setCrossDomain&fingerPrint=' + w.uFingerPrint + '&visitorID=' + uid + '&projectID=' + pid + '&variationID=' + vid + '&websiteID=' + w.id, function(data) {});
						}
					}, 10);
				}
			},
			crossDomainGet: function() {
				var ud = w.user;
				var referrer = ud.referrer.full;
				ob.lib.log('SiteGainer log: Check referrer:' + referrer + ' Second Domain:' + w.crossDomain);
				if (referrer == '' || referrer.indexOf(w.crossDomain) == -1) {
					ob.lib.jsonp('//sitegainer.com/crossDomainCheck.php?getCrossDomain&fingerPrint=' + w.uFingerPrint + '&websiteID=' + w.id, function(data) {
						ob.lib.log('SiteGainer log: Cross domain object ?');
						ob.lib.log(data);
						if (!ob.lib.isEmpty(data)) {
							for (var pid in data) {
								if (typeof w.p[pid] !== 'undefined' && w.p[pid].active == 1) {
									ob.lib.log('SiteGainer log: Cross Domain set active variation for project => ' + pid + ' VariationID  =>' + data[pid].vid + ' VisitorID  =>' + data[pid].uid);
									ob.lib.setActiveVariation(pid, data[pid].vid);
									ob.lib.setCookie('vid', data[pid].uid);
									ob.lib.runGoalsWeb(pid);
								}
							}
						}
					});
				} else {
					ob.lib.log('SiteGainer log: referrer contains the second domain. Sending data for active projects');
					for (var pid in w.p) {
						if (w.p[pid].active == 1) {
							ob.lib.runGoalsWeb(pid);
						}
					}
				}
			},
			fingerPrint: function() {
				function isInt(value) {
					return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
				}
				if (typeof ob.lib.getCookie('fp') === 'undefined' || !isInt(ob.lib.getCookie('fp'))) {
					var Fingerprint = function(a) {
						var b, c;
						b = Array.prototype.forEach, c = Array.prototype.map, this.each = function(a, c, d) {
							if (null !== a)
								if (b && a.forEach === b) a.forEach(c, d);
								else if (a.length === +a.length) {
								for (var e = 0, f = a.length; e < f; e++)
									if (c.call(d, a[e], e, a) === {}) return
							} else
								for (var g in a)
									if (a.hasOwnProperty(g) && c.call(d, a[g], g, a) === {}) return
						}, this.map = function(a, b, d) {
							var e = [];
							return null == a ? e : c && a.map === c ? a.map(b, d) : (this.each(a, function(a, c, f) {
								e[e.length] = b.call(d, a, c, f)
							}), e)
						}, "object" == typeof a ? (this.hasher = a.hasher, this.screen_resolution = a.screen_resolution, this.screen_orientation = a.screen_orientation, this.canvas = a.canvas, this.ie_activex = a.ie_activex) : "function" == typeof a && (this.hasher = a)
					};
					Fingerprint.prototype = {
						get: function() {
							var a = [];
							if (a.push(navigator.userAgent), a.push(navigator.language), a.push(screen.colorDepth), this.screen_resolution) {
								var b = this.getScreenResolution();
								"undefined" != typeof b && a.push(b.join("x"))
							}
							return a.push((new Date).getTimezoneOffset()), a.push(this.hasSessionStorage()), a.push(this.hasLocalStorage()), a.push(!!window.indexedDB), document.body ? a.push(typeof document.body.addBehavior) : a.push("undefined"), a.push(typeof window.openDatabase), a.push(navigator.cpuClass), a.push(navigator.platform), a.push(navigator.doNotTrack), a.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && a.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(a.join("###"), 31) : this.murmurhash3_32_gc(a.join("###"), 31)
						},
						murmurhash3_32_gc: function(a, b) {
							var c, d, e, f, g, h, i, j;
							for (c = 3 & a.length, d = a.length - c, e = b, g = 3432918353, h = 461845907, j = 0; j < d;) i = 255 & a.charCodeAt(j) | (255 & a.charCodeAt(++j)) << 8 | (255 & a.charCodeAt(++j)) << 16 | (255 & a.charCodeAt(++j)) << 24, ++j, i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i, e = e << 13 | e >>> 19, f = 5 * (65535 & e) + ((5 * (e >>> 16) & 65535) << 16) & 4294967295, e = (65535 & f) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
							switch (i = 0, c) {
								case 3:
									i ^= (255 & a.charCodeAt(j + 2)) << 16;
									break;
								case 2:
									i ^= (255 & a.charCodeAt(j + 1)) << 8;
									break;
								case 1:
									i ^= 255 & a.charCodeAt(j), i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i
							}
							return e ^= a.length, e ^= e >>> 16, e = 2246822507 * (65535 & e) + ((2246822507 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 13, e = 3266489909 * (65535 & e) + ((3266489909 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0
						},
						hasLocalStorage: function() {
							try {
								return !!window.localStorage
							} catch (a) {
								return !0
							}
						},
						hasSessionStorage: function() {
							try {
								return !!window.sessionStorage
							} catch (a) {
								return !0
							}
						},
						isCanvasSupported: function() {
							var a = document.createElement("canvas");
							return !(!a.getContext || !a.getContext("2d"))
						},
						isIE: function() {
							return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
						},
						getPluginsString: function() {
							return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
						},
						getRegularPluginsString: function() {
							return this.map(navigator.plugins, function(a) {
								var b = this.map(a, function(a) {
									return [a.type, a.suffixes].join("~")
								}).join(",");
								return [a.name, a.description, b].join("::")
							}, this).join(";")
						},
						getIEPluginsString: function() {
							if (window.ActiveXObject) {
								var a = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
								return this.map(a, function(a) {
									try {
										return new ActiveXObject(a), a
									} catch (a) {
										return null
									}
								}).join(";")
							}
							return ""
						},
						getScreenResolution: function() {
							var a;
							return a = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
						},
						getCanvasFingerprint: function() {
							var a = document.createElement("canvas"),
								b = a.getContext("2d"),
								c = "http://valve.github.io";
							return b.textBaseline = "top", b.font = "14px 'Arial'", b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.fillText(c, 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.fillText(c, 4, 17), a.toDataURL()
						}
					};
					var fp = new Fingerprint();
					var result = fp.get();
					w.uFingerPrint = result
					ob.lib.log('SiteGainer log: Get fingeprint => ' + w.uFingerPrint);
					ob.lib.setCookie('fp', result);
				} else {
					w.uFingerPrint = ob.lib.getCookie('fp');
					ob.lib.log('SiteGainer log: Fingerprint from Cookie  => ' + w.uFingerPrint);
				}
			},
			crossDomainRun: function() {
				if (w.crossDomain !== '' && w.previewMode != 1) {
					ob.lib.log('SiteGainer log: Cross Domain running for => ' + w.crossDomain);
					var a = setInterval(function() {
						if (w.uFingerPrint !== 0) {
							clearInterval(a);
							if (window.location.href.indexOf(w.crossDomain) > -1) {
								ob.core.crossDomainGet();
							}
						}
					}, 10);
				}
			},
			dReady: function(callBack) {
				/in/.test(document.readyState) ? setTimeout(function() {
					ob.core.dReady(callBack)
				}, 9) : callBack();
			},
			runVariation: function(pid) {
				if (w.p[pid].parentID != '') {
					if (w.p[pid].heatmap == 1 || w.p[pid].heatmap == "1") {
						ob.lib.runHeatmap(pid, a, '', '');
					}
				} else {
					var a = ob.lib.getActiveVariation(pid);
					ob.lib.log('SiteGainer log: GET THE ACTIVE VARIATION => ' + a);
					if (a) {
						if (typeof a !== 'object') {
							ob.core.execute(a, pid);
							w.p[pid].running = 1;
							if (w.p[pid].heatmap == 1 || w.p[pid].heatmap == "1") {
								ob.lib.runHeatmap(pid, a, '', '');
							}
						} else {
							ob.lib.log('SiteGainer log: Run multiple variations & log variation object ? ');
							ob.lib.log(a);
							for (var x in a) {
								ob.core.execute(a[x], pid);
							}
							if (w.p[pid].heatmap == 1 || w.p[pid].heatmap == "1") {
								ob.lib.runHeatmap(pid, a, '', '');
							}
							w.p[pid].running = 1;
						}
						ob.lib.runSubproject(pid);
					} else {
						ob.lib.log('SiteGainer log: There is no active variaiton & log variation object => ' + a);
					}
				}
			},
			execute: function(a, pid) {
				ob.lib.log('SiteGainer log: Run variation & log variation object ? ' + a);
				ob.lib.log(w.p[pid].v[a], '');
				ob.lib.executeVariation(w.p[pid].v[a], w.p[pid].id);
			},
			sendData: function(pid, vid, eid, pos, path) {
				if (eid == '') {
					eid = 0;
				}
				if (w.previewMode === 0) {
					if (typeof w.tracker[pid] === 'undefined') {
						w.tracker[pid] = [];
					}
					w.tracker[pid].vid = vid;
					if (eid != 0) {
						if (typeof w.tracker[pid].gid !== 'undefined') {
							if (typeof eid !== "undefined" && eid != "undefined" && w.tracker[pid].gid.indexOf(eid) < 0) {
								w.tracker[pid].gid = w.tracker[pid].gid + "," + eid;
							}
						} else {
							w.tracker[pid].gid = "" + eid;
						}
					}
					w.tracker[pid].pid = pid;
					if (pos === '') {
						ob.lib.log('SiteGainer log: Collecting event data =>  ' + eid + ' for project => ' + pid);
					} else {
						ob.lib.log('SiteGainer log: Collecting Heatmap data => ' + pid);
						if (typeof w.tracker[pid].clicks === 'undefined') {
							w.tracker[pid].clicks = [];
							w.tracker[pid].clicks.hsclks = 1;
						}
						if (typeof w.tracker[pid].clicks[path] === 'undefined') {
							w.tracker[pid].clicks[path] = [];
							w.tracker[pid].clicks[path].pth = path;
						}
						if (typeof w.tracker[pid].clicks[path][pos] === 'undefined') {
							w.tracker[pid].clicks[path][pos] = [];
							w.tracker[pid].clicks[path][pos].z = 1;
							w.tracker[pid].clicks[path][pos].xy = pos;
						} else {
							w.tracker[pid].clicks[path][pos].z++;
						}
					}
					ob.core.updateJson();
				}
			},
			runEditor: function(pid) {
				ob.lib.getScript('//sitegainer.com/f/jquery/jquery_editor.js', function() {
					var devmode = ob.lib.getQParams('sg_dev');
					ob.lib.getScript('//sitegainer.com/neweditor/load_editor2.js', function() {
						sg_ext_func.load_editor(pid, '', '', w.id, w.rootDomain, devmode, 1);
					});
				});
			},
		},
		lib: {
			trackClicks: function(el) {
				clickedElement = document.querySelectorAll(el);
				for (var i = 0, len = clickedElement.length; i < len; i++) {
					clickedElement[i].addEventListener('mouseup', function(event) {});
				}
			},
			getQParams: function(sParam) {
				if (window.location.href.indexOf(sParam) > -1) {
					var regex = new RegExp('(\\#|\\?|\\&)(|.)' + sParam + '?\\=([a-z]|[0-9]|,)*', 'gmi');
					var regexmatch = window.location.href.replace(window.location.origin, '').match(regex);
					if (regexmatch != null) {
						regexmatch = regexmatch[0];
						var key = regexmatch.split('=')[0];
						var value = regexmatch.split('=')[1];
						return value;
					}
					return;
				}
				return;
			},
			timetarget: function(hour, min, kind) {
				var d = new Date();
				var Seconds = d.getSeconds();
				var Hours = d.getHours();
				var Minutes = d.getMinutes();
				var min2 = Hours * 60 + Minutes;
				var min1 = hour * 60 + min;
				var script = min2 + kind + min1;
				return eval(script);
			},
			getinfo: function(arg) {
				return ob.lib.lsGetdata('Website', 'PersonalData', arg);
			},
			lsGetdata: function(key, args, secondkey) {
				var stringifiedobj = localStorage.getItem('sg_ls_object');
				if (typeof localStorage.getItem('sg_ls_object') !== 'undefined' && localStorage.getItem('sg_ls_object') != null) {
					var obj = JSON.parse(stringifiedobj);
					if (typeof obj !== 'undefined') {
						if (typeof obj[key] !== 'undefined') {
							if (typeof obj[key][args] !== 'undefined') {
								if (typeof secondkey === 'undefined') {
									return obj[key][args];
								} else {
									return obj[key][args][secondkey];
								}
							}
						}
					}
					return 0;
				}
				return 0;
			},
			lsSetdata: function(key, args, secondkey, value) {
				var result = '';
				var obj;
				if (typeof localStorage.getItem('sg_ls_object') !== 'undefined' && localStorage.getItem('sg_ls_object') != null) {
					var stringifiedobj = localStorage.getItem('sg_ls_object');
					obj = JSON.parse(stringifiedobj);
					if (typeof obj[key] !== 'undefined') {
						if (typeof obj[key][args] !== 'undefined') {
							if (typeof obj[key][args][secondkey] !== 'undefined') {
								obj[key][args][secondkey] = value;
							} else {
								obj[key][args][secondkey] = {};
								obj[key][args][secondkey] = value;
							}
						} else {
							if (typeof value === 'undefined') {
								console.log(secondkey);
								obj[key][args] = secondkey;
							} else {
								obj[key][args] = {};
								obj[key][args][secondkey] = value;
							}
						}
					} else {
						obj[key] = {};
						obj[key][args] = {};
						obj[key][args][secondkey] = value;
					}
				} else {
					obj = {};
					obj[key] = {};
					obj[key][args] = {};
					obj[key][args][secondkey] = value;
				}
				result = JSON.stringify(obj);
				try {
					localStorage.setItem('sg_ls_object', result);
				} catch (e) {
					ob.lib.failSafels(mainarg, key, args, secondkey, value);
				}
				return true;
			},
			failSafels: function(mainarg, key, args, secondkey, value) {
				var stringifiedobj = JSON.parse(localStorage.getItem('sg_ls_object'));
				var minorder = 0;
				var order;
				var result;
				if (typeof stringifiedobj.pageViews !== 'undefined' && stringifiedobj.pageViews != null) {
					var stringifiedobjpageview = stringifiedobj.pageViews;
					var i = 0;
					for (var y in stringifiedobjpageview) {
						if (i === 0) {
							minorder = stringifiedobjpageview[y].order;
						}
						order = stringifiedobjpageview[y].order;
						if (order < minorder) {
							minorder = order
						}
						i++;
					}
					var index = 0;
					for (var x in stringifiedobjpageview) {
						order = stringifiedobjpageview[x].order;
						if (order == minorder) {
							delete stringifiedobj.pageViews[x];
						}
						index++
					}
					result = JSON.stringify(stringifiedobj);
					localStorage.setItem(mainarg, result);
				}
			},
			checkevent: function(path, ev, desc, i, ec) {
				if (typeof ec === 'undefined') ec = '';
				var result;
				var eventobhtml = w.elEv[path + '_' + ev + i + ec];
				if (typeof eventobhtml === 'undefined') {
					result = false;
				} else {
					result = true;
				}
				return result;
			},
			pushTarget: function(path, ev, i, ec, dvalue) {
				var eventobhtml = w.elEv[path + '_' + ev + i + ec];
				if (typeof dvalue === 'undefined') {
					dvalue = 1;
				}
				if (typeof eventobhtml === 'undefined') {
					w.elEv[path + '_' + ev + i + ec] = dvalue;
				} else {
					w.elEv[path + '_' + ev + i + ec] = w.elEv[path + '_' + ev + i + ec] + 1;
				}
			},
			customAudience: function(pid) {
				if (w.p[pid].running == 1) {
					return true;
				} else {
					ob.lib.log('SiteGainer log: RUNNING CUSTOM AUDIENCE' + w.p[pid].customAudienceResult + ' Running ' + w.p[pid].running);
					if (w.p[pid].customAudienceResult == 0) {
						var b = w.p[pid].customAudience.replace(/return true\;/gmi, 'if(w.p[pid].running == 0){w.p[pid].customAudienceResult = 1; ob.core.runProject(pid);}');
						ob.lib.log('SiteGainer log: Custom audience string ' + 'var a = []; a = function() {' + b + '}; a();');
						eval('function a() {' + b + '}; a();');
					} else {
						return true;
					}
				}
			},
			exitIntentInit: function(pid, i) {
				function addEvent(obj, evt, fn) {
					if (obj.addEventListener) {
						obj.addEventListener(evt, fn, false);
					} else if (obj.attachEvent) {
						obj.attachEvent("on" + evt, fn);
					}
				}
				addEvent(document, "mouseout", function(e) {
					e = e ? e : window.event;
					var from = e.relatedTarget || e.toElement;
					if (!from || from.nodeName == "HTML") {
						ob.lib.pushTarget(pid, 'exitintend', i, 1, 1);
						if (w.elEv[pid + '_exitintend' + i + 1] == 1) {
							ob.core.runProject(pid);
						}
					}
				});
			},
			exitIntent: function(pid, i) {
				if (w.elEv[pid + '_exitintend' + i + 1] >= 1) return true;
				return false;
			},
			projectHasBeenRun: function(pid, i) {
				if (typeof w.p[pid] !== 'undefined') {
					if (i == 1) {
						if (typeof ob.lib.getCookie(pid) !== 'undefined' || ob.lib.getCookie(pid + '_ch') == '-1') {
							return true;
						}
						return false;
					}
					if (i == 0) {
						if (typeof ob.lib.getCookie(pid) !== 'undefined' || ob.lib.getCookie(pid + '_ch') == '-1') {
							return false;
						}
						return true;
					}
				}
				return false;
			},
			checktimeout: function(value, con, i, pid) {
				var script = '(' + w.elEv[pid + '_setTimeout' + i + value] + ' ' + con + ' ' + value + ')';
				var result = eval(script);
				return result;
			},
			checkdata: function(key, type, obj, custom) {
				var stringifiedobj = JSON.parse(localStorage.getItem('sg_ls_object'));
				var height = JQSG(document).height();
				var mainarg = 'pageViews';
				if (typeof stringifiedobj[mainarg] !== 'undefined' && stringifiedobj[mainarg] != null) {
					var stringifiedobj = stringifiedobj[mainarg];
					var result = false;
					if (type == 'exact') {
						for (var x in stringifiedobj) {
							if (x == key) {
								var pageview = stringifiedobj[x].pageview;
								var clicks = stringifiedobj[x].clicks;
								var scrollMax = stringifiedobj[x].scrollMax;
								var scrollMaxp = stringifiedobj[x].scrollMaxP;
								var order = stringifiedobj[x].order;
								if (typeof custom !== 'undefined') {
									if (custom.indexOf(',') > -1) {
										var customvar = custom.split(',');
										var customscript = '';
										for (var i = 0; i < customvar.length; i++) {
											var eachcv = customvar[i];
											customscript = customscript + ' var ' + eachcv + '= \"' + stringifiedobj[x][eachcv] + '\";';
										}
										eval(customscript);
										result = eval(obj)
									} else {
										var customscript = 'var ' + custom + '= \"' + stringifiedobj[x][custom] + '\";';
										eval(customscript);
										result = eval(obj);
									}
								} else {
									result = eval(obj);
								}
							}
						}
					}
					if (type == 'simple') {
						for (var x in stringifiedobj) {
							if (x.match(/\./g).length > 1) {
								if (x.match(/\./g).length > 1) {
									var pathnameSimple = x.replace(/.*?\./, '');
								} else {
									var pathnameSimple = x;
								}
							}
							if (pathnameSimple == key) {
								var pageview = stringifiedobj[x].pageview;
								var clicks = stringifiedobj[x].clicks;
								var scrollMax = stringifiedobj[x].scrollMax;
								var scrollMaxp = stringifiedobj[x].scrollMaxP;
								var order = stringifiedobj[x].order;
								if (typeof custom !== 'undefined') {
									if (custom.indexOf(',') > -1) {
										var customvar = custom.split(',');
										var customscript = '';
										for (var i = 0; i < customvar.length; i++) {
											var eachcv = customvar[i];
											customscript = customscript + ' var ' + eachcv + '= \"' + stringifiedobj[x][eachcv] + '\";';
										}
										eval(customscript);
										result = eval(obj);
									} else {
										var customscript = 'var ' + custom + '=\"' + stringifiedobj[x][custom] + '\";';
										eval(customscript);
										result = eval(obj);
									}
								} else {
									result = eval(obj);
								}
							}
						}
					}
					if (type == 'contains') {
						var pre = true;
						var pageview = 0;
						var clicks = 0;
						var scrollMax = 0;
						var customscript = '';
						for (x in stringifiedobj) {
							if (x.indexOf(key) > -1) {
								pageview = pageview + stringifiedobj[x].pageview;
								clicks = clicks + stringifiedobj[x].clicks;
								if (scrollMax < stringifiedobj[x].scrollMax) {
									scrollMax = stringifiedobj[x].scrollMax;
								}
								if (typeof custom !== 'undefined') {
									if (custom.indexOf(',') > -1) {
										var customvar = custom.split(',');
										for (var i = 0; i < customvar.length; i++) {
											var eachcv = customvar[i];
											customscript = customscript + ' var' + eachcv + '= \"' + eachcv + '+' + stringifiedobj[x][eachcv] + '\";';
										}
									} else {
										customscript = customscript + ' var' + custom + '=\"' + custom + '+' + stringifiedobj[x][custom] + '\";';
									}
								}
							}
						}
						var scrollMaxp = stringifiedobj[x].scrollMaxP;
						var order = stringifiedobj[x].order;
						eval(customscript);
						result = eval(obj);
					}
					if (type == 'regex') {
						var pre = true;
						var pageview = 0;
						var clicks = 0;
						var scrollMax = 0;
						var customscript = '';
						for (x in stringifiedobj) {
							var script = key + '.test(\"' + x + '\")';
							if (eval(script)) {
								pageview = pageview + stringifiedobj[x].pageview;
								clicks = clicks + stringifiedobj[x].clicks;
								if (scrollMax < stringifiedobj[x].scrollMax) {
									scrollMax = stringifiedobj[x].scrollMax;
								}
								if (typeof custom !== 'undefined') {
									if (custom.indexOf(',') > -1) {
										var customvar = custom.split(',');
										for (var i = 0; i < customvar.length; i++) {
											var eachcv = customvar[i];
											customscript = 'var ' + customscript + ';' + eachcv + '=\"' + eachcv + '+' + stringifiedobj[x][eachcv] + '\";';
										}
									} else {
										customscript = 'var ' + customscript + ';' + custom + '=\"' + custom + '+' + stringifiedobj[x][custom] + '\";';
									}
								}
							}
						}
						var scrollMaxp = stringifiedobj[x].scrollMaxP;
						var order = stringifiedobj[x].order;
						eval(customscript);
						result = eval(obj);
					}
					return result;
				} else {
					return false;
				}
			},
			isEmpty: function(obj) {
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop)) return false;
				}
				return true && JSON.stringify(obj) === JSON.stringify({});
			},
			sg_setTimeout: function(countDown, pid, i) {
				setTimeout(function() {
					ob.lib.pushTarget(pid, 'setTimeout', i, countDown, countDown);
					ob.core.runProject(pid);
				}, countDown);
			},
			checkDataLayer: function(p1, p2, type) {
				if (typeof dataLayer !== "undefined") {
					for (x in dataLayer) {
						if (typeof dataLayer[x][p1] !== 'undefined') {
							if (type == 'exact') {
								if (dataLayer[x][p1] == p2) {
									return true;
								}
							}
							if (type == 'regex') {
								var newregex = new RegExp(p2, 'gmi');
								if (newregex.test(dataLayer[x][p1])) {
									return true;
								}
							}
							if (type == 'contains') {
								if (dataLayer[x][p1].indexOf(p1) > -1) {
									return true;
								}
							}
						}
					}
				}
				return false;
			},
			getGeo: function(arg, key, pid) {
				var obj = ob.lib.lsGetdata('Website', 'geoData');
				if (typeof obj !== 'undefined' && obj != 0) {
					ob.lib.log('SiteGainer log: Goe : ' + obj[arg]);
					return key == obj[arg] ? true : false;
				} else {
					if (typeof w.getgoe === 'undefined') {
						ob.lib.jsonp('//sitegainer.com/getgeo.php', function(data) {
							ob.lib.lsSetdata('Website', 'geoData', data);
							if (w.p[pid].running === 0) {
								ob.core.runProject(pid);
							}
						});
						w.getgoe = 1;
					}
					return false;
				}
			},
			CheckContent: function(selector, str, kind, sign) {
				var ac = 0;
				if (typeof kind === 'undefined') kind = 'contains';
				var el = document.querySelectorAll(selector);
				for (var i = 0; i < el.length; ++i) {
					if (str != '') {
						if (kind == 'contains') {
							if (el[i].outerHTML.indexOf(str) > -1) {
								ac = 1;
							}
						}
						if (kind == 'regex') {
							var newregex = new RegExp(str, sign);
							if (newregex.test(el[i].outerHTML)) {
								ac = 1;
							}
						}
						if (kind == 'exact') {
							if (el[i].outerHTML == str) {
								ac = 1;
							}
						}
					} else {
						ac = 1;
					}
				}
				if (ac == 1) {
					return true;
				} else {
					return false;
				}
			},
			refreshPath: function() {
				var pathname = window.location.href;
				var pathname = pathname.replace(/(\?|\#|\&)sgpreviewmode.*/g, '');
				pathname = pathname.replace(/(\?|\#|\&)sg(\-|\_)debug/g, '');
				var pathnameSimple = (window.location.host + window.location.pathname).replace('www.', '').replace(/\/$/, "")
				w.user.path.path = pathname;
				w.user.path.simple = pathnameSimple;
			},
			checkAudience: function(pid) {
				ob.lib.refreshPath();
				var SG = [];
				var ud = w.user;
				var pathname = ud.path.path;
				var pathnameSimple = ud.path.simple;
				var referrer = ud.referrer.full;
				var referrerHost = ud.referrer.host;
				var referrerType = ud.referrer.type;
				var pageViews = ud.pageViews;
				var language = ud.language;
				var totalVisits = ud.totalVisits;
				var totalTimesite = ud.time.totalTimeOnSite;
				var totalTimeOnPage = ud.time.totalTimeOnPage;
				var day = ud.time.day;
				var Month = ud.time.day;
				var pathurl = ud.path.path;
				var devicetype = ud.browser.deviceType;
				var sg_screenwidth = ud.deviceWidth;
				var Days = new Date();
				Days = Days.getDay();
				if (Days == 0) {
					Days == 7
				}
				SG = ob.lib;
				var a = w.p[pid].audience;
				var matches = a.match(/(pathnameSimple=='.*?')/);
				if (matches) {
					for (var x = 0; x < matches.length; x++) {
						cleanMatches = matches[x].replace(/\/'$/, "'");
						a = a.replace(matches[x], cleanMatches);
					}
				}
				var matches = a.match(/(pathname=='.*?')/);
				if (matches) {
					for (var x = 0; x < matches.length; x++) {
						cleanMatches = matches[x].replace(/\/'$/, "'");
						a = a.replace(matches[x], cleanMatches);
					}
				}
				ob.lib.log('SiteGainer log: Check audience: ' + a + ' => ' + w.p[pid].id);
				ob.lib.log(pathname + " << >> " + pathnameSimple)
				try {
					w.p[pid].audienceResult = eval(a);
					if (w.p[pid].audienceResult === true) {
						ob.lib.log('SiteGainer log: Audience is true: ' + w.p[pid].id);
					} else if (typeof w.p[pid].audienceResult === 'undefined') {
						w.p[pid].audienceResult = false;
						return false;
					} else {
						ob.lib.log('SiteGainer log: Audience is false: ' + w.p[pid].id);
					}
					return w.p[pid].audienceResult;
				} catch (err) {
					ob.lib.log('SiteGainer ERROR: Error in audience tag: (' + err + ') => ' + pid);
				}
			},
			getUserData: function() {
				if (typeof bowser.mobile !== 'undefined') {
					dt = 1;
				} else if (typeof bowser.tablet !== 'undefined') {
					dt = 3;
				} else {
					dt = 0;
				}
				var d = new Date();
				var mobile;
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
					mobile = 'true';
				} else {
					mobile = 'false';
				}
				var pathname = window.location.href;
				var pathname = pathname.replace(/(\?|\#|\&)sgpreviewmode.*/g, '');
				pathname = pathname.replace(/(\?|\#|\&)sg(\-|\_)debug/g, '');
				var reftype = document.referrer;
				if (w.socialList.indexOf(reftype) > -1) {
					reftype = 3;
				} else if (w.organicList.indexOf(reftype) > -1) {
					reftype = 2;
				} else {
					reftype = 1;
				}
				var OSName = "Unknown OS";
				var userAgent = navigator.userAgent || navigator.vendor || window.opera;
				if (window.navigator.userAgent.indexOf("Windows NT 10") != -1) OSName = "Windows 10";
				if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows 8";
				if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows 7";
				if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows Vista";
				if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows XP";
				if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows 2000";
				if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
				if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
				if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
				if (/windows phone/i.test(userAgent)) {
					OSName = "Windows phone"
				}
				if (/android/i.test(userAgent)) {
					OSName = "Android";
				}
				if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
					OSName = "iOS";
				}
				var thebody = document.body,
					html = document.documentElement;
				var rf = ob.lib.getCookie('rf');
				var rfbool = typeof rf !== 'undefined' && rf != ''
				var referrer = rfbool ? rf : '';
				var referrerhost = rfbool ? rf.split('/')[2] : '';
				x = {
					referrer: {
						host: referrerhost,
						full: referrer,
						simple: referrer.replace('www.', '').replace('http://', '').replace('https://', ''),
						cookieDomain: w.cookieDomain,
						type: reftype,
					},
					browser: {
						name: SG_Bowser.name,
						version: SG_Bowser.version,
						deviceType: dt,
						os: OSName
					},
					path: {
						path: pathname.replace(/\/$/, ""),
						host: window.location.host,
						simple: (window.location.host + window.location.pathname).replace('www.', '').replace(/\/$/, "")
					},
					time: {
						totalTimeOnPage: ob.lib.getCookie('tmp'),
						totalTimeOnSite: ob.lib.getCookie('ts'),
						lastVisit: ob.lib.getCookie('lw'),
						visitStart: d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds(),
						second: d.getSeconds(),
						minute: d.getMinutes(),
						hour: d.getHours(),
						day: d.getDay(),
						month: d.getMonth() + 1,
						year: d.getFullYear(),
						sgdate: d.getDate()
					},
					deviceWidth: window.outerWidth,
					docWidth: Math.max(document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]),
					deviceHeight: Math.max(thebody.scrollHeight, thebody.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
					pageHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
					mobile: mobile,
					maxscroll: 0,
					visitorID: ob.lib.getCookie('vid'),
					sessionID: ob.lib.getCookie('si'),
					totalClicks: ob.lib.getCookie('tc'),
					totalVisits: ob.lib.getCookie('tv'),
					pageViews: ob.lib.getCookie('pw'),
					language: navigator.language || navigator.userLanguage
				}
				w.user = x;
				window.sg_user = w.user;
				return x;
			},
			setUserData: function() {
				ob.lib.getVisitorID();
				var ud = ob.lib.getUserData();
				var lastVisit = ud.time.lastVisit;
				if (typeof lastVisit === 'undefined') {
					lastVisit = ud.time.month + '-' + ud.time.sgdate + '-' + ud.time.hour + '-' + ud.time.minute;
					ob.lib.setCookie('lw', lastVisit);
				}
				lastVisit = lastVisit.split('-');
				var docreferer = ob.lib.getCookie('rf');
				if (typeof docreferer === 'undefined') {
					if (document.referrer.indexOf(location.host) == -1) {
						ob.lib.setCookie('rf', document.referrer);
					} else {
						ob.lib.setCookie('rf', '');
					}
				} else {
					if (docreferer != document.referrer && document.referrer.indexOf(location.host) == -1) {
						ob.lib.setCookie('rf', document.referrer);
					} else {
						var newVisitd = new Date(ud.time.year, ud.time.month, ud.time.sgdate, ud.time.hour, ud.time.minute, 0, 0);
						var lastVisitd = new Date(ud.time.year, lastVisit[0], lastVisit[1], lastVisit[2], lastVisit[3], 0, 0);
						var lastVisitd = new Date(lastVisitd.getTime() + 30 * 60000);;
						if (lastVisitd < newVisitd) {
							ob.lib.setCookie('rf', '');
						}
					}
				}
				var d = new Date();
				var pageViews = ob.lib.lsGetdata('pageViews', ud.path.path, 'pageview');
				if (typeof pageViews === 'undefined') {
					pageViews = 0;
				}
				pageViews++;
				ob.lib.lsSetdata('pageViews', ud.path.path, 'pageview', pageViews);
				if (ud.referrer.full.indexOf(w.rootdomain) == -1 && w.socialList.indexOf(ud.referrer.simple) > -1) {
					ob.lib.lsSetdata('Website', 'PersonalData', 'referrer', ud.referrer.full);
					ob.lib.lsSetdata('Website', 'PersonalData', 'referraltype', 'organic');
				}
				if (ud.referrer.full.indexOf(w.rootdomain) == -1 && w.socialList.indexOf(ud.referrer.simple) > -1) {
					ob.lib.lsSetdata('Website', 'PersonalData', 'referrer', ud.referrer.full);
					ob.lib.lsSetdata('Website', 'PersonalData', 'referraltype', 'social');
				}
				if (ud.referrer.full === '') {
					ob.lib.lsSetdata('Website', 'PersonalData', 'referraltype', 'referral');
				}
				var totalpageview = ob.lib.lsGetdata('Website', 'PersonalData', 'totalPageview');
				if (typeof totalpageview === 'undefined') {
					totalpageview = 1;
					ob.lib.lsSetdata('Website', 'PersonalData', 'totalPageview', totalpageview);
				} else {
					totalpageview++;
					ob.lib.lsSetdata('Website', 'PersonalData', 'totalPageview', totalpageview);
				}
				var Order = ob.lib.lsGetdata('pageViews', ud.path.path, 'order');
				if (typeof Order === 'undefined') {
					ob.lib.lsSetdata('pageViews', ud.path.path, 'order', totalpageview);
				}
				var lastVisitweb = ob.lib.lsGetdata('Website', 'PersonalData', 'lastVisit');
				if (typeof lastVisitweb === 'undefined') {
					lastVisitweb = ud.time.year + '-' + ud.time.month + '-' + ud.time.sgdate + ' ' + ud.time.hour + ':' + ud.time.minute;
					ob.lib.lsSetdata('Website', 'PersonalData', 'lastVisit', lastVisitweb);
				}
				var totalsession = ob.lib.lsGetdata('Website', 'PersonalData', 'totalsession');
				if (typeof totalsession === 'undefined') {
					totalsession = 1;
					ob.lib.lsSetdata('Website', 'PersonalData', 'totalSession', parseInt(totalsession));
				} else {
					var newVisitd = new Date(ud.time.year, ud.time.month, ud.time.sgdate, ud.time.hour, ud.time.minute, 0, 0);
					var lastVisitd = new Date(ud.time.year, lastVisit[0], lastVisit[1], lastVisit[2], lastVisit[3], 0, 0);
					var lastVisitd = new Date(lastVisitd.getTime() + 30 * 60000);;
					if (lastVisitd < newVisitd) {
						totalsession++;
						ob.lib.lsSetdata('Website', 'PersonalData', 'totalSession', parseInt(totalsession));
					}
				}
				var pageViewsc = ud.pageViews;
				if (typeof pageViewsc === 'undefined') {
					pageViewsc = 1;
					ob.lib.setCookie('pw', pageViews);
				} else {
					pageViewsc++;
					ob.lib.setCookie('pw', pageViewsc);
				}
				var totalClicks = ud.totalClicks;
				if (typeof totalClicks === 'undefined') {
					totalClicks = 0;
					ob.lib.setCookie('tc', 0);
				}
				var totalVisits = ud.totalVisits;
				if (typeof totalVisits === 'undefined') {
					totalVisits = 1;
					ob.lib.setCookie('tv', totalVisits);
				} else {
					var newVisitd = new Date(ud.time.year, ud.time.month, ud.time.sgdate, ud.time.hour, ud.time.minute, 0, 0);
					var lastVisitd = new Date(ud.time.year, lastVisit[0], lastVisit[1], lastVisit[2], lastVisit[3], 0, 0);
					var lastVisitd = new Date(lastVisitd.getTime() + 30 * 60000);
					if (lastVisitd < newVisitd) {
						totalVisits++;
						ob.lib.setCookie('tv', totalVisits);
						if (typeof ud.sessionID === 'undefined') {
							ob.lib.setCookie('si', ob.lib.makeUniqueId());
						}
						lastVisit = ud.time.month + '-' + ud.time.sgdate + '-' + ud.time.hour + '-' + ud.time.minute;
						ob.lib.setCookie('lw', lastVisit);
					} else {
						ob.lib.setCookie('si', ob.lib.makeUniqueId());
					}
				}
				document.documentElement.addEventListener('mouseup', function(e) {
					var totalClicks = w.user.totalClicks;
					if (typeof w.user.totalClicks === 'undefined') {
						w.user.totalClicks = 1;
						totalClicks = 1;
					} else {
						totalClicks++;
						w.user.totalClicks = totalClicks;
					}
					ob.lib.setCookie('tc', totalClicks);
					var lstotalclicks = ob.lib.lsGetdata('Website', 'PersonalData', 'totalClicks');
					var totalClicks2 = ob.lib.lsGetdata('pageViews', ud.path.path, 'clicks');
					if (typeof lstotalclicks === 'undefined') {
						lstotalclicks = 0;
					}
					if (typeof totalClicks2 === 'undefined') {
						totalClicks2 = 0;
					}
					lstotalclicks++;
					totalClicks2++;
					ob.lib.lsSetdata('pageViews', ud.path.path, 'clicks', totalClicks2);
					ob.lib.lsSetdata('Website', 'PersonalData', 'totalClicks', lstotalclicks);
					var tag = e.target.tagName;
					if (tag == 'IMG') {
						var imgclicks = ob.lib.lsGetdata('pageViews', ud.path.path, 'clickedimg');
						if (typeof imgclick === 'undefined') {
							imgclicks = 0;
						}
						imgclicks++;
						ob.lib.lsSetdata('pageViews', ud.path.path, 'clickedimg', imgclicks);
					}
					if (tag == 'A') {
						var aClicks = ob.lib.lsGetdata('sg_ls_object', 'pageViews', ud.path.path, 'clickedLink');
						if (typeof aClicks === 'undefined') {
							aClicks = 0;
						}
						aClicks++;
						ob.lib.lsSetdata('sg_ls_object', 'pageViews', ud.path.path, 'clickedLink', aClicks);
					}
				});
				var wheelEvt = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";

				function setMaxscroll(e) {
					var body = document.body,
						html = document.documentElement;
					var maxscroll = (window.pageYOffset || document.documentElement.scrollTop || body.scrollTop || 0) + window.innerHeight;
					var scrollMax = ob.lib.lsGetdata('pageViews', ud.path.path, 'scrollMax');
					var totalscrollMax = ob.lib.lsGetdata('Website', 'PersonalData', 'totalScroll');
					if (typeof scrollMax === 'undefined') {
						scrollMax = 0;
					}
					if (typeof totalscrollMax === 'undefined') {
						totalscrollMax = 0;
					}
					if (maxscroll > scrollMax) {
						ob.lib.lsSetdata('pageViews', ud.path.path, 'scrollMax', maxscroll);
						var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
						ob.lib.lsSetdata('pageViews', ud.path.path, 'scrollMaxP', Math.round((maxscroll / height) * 100));
						totalscrollMax = totalscrollMax + maxscroll;
						ob.lib.lsSetdata('Website', 'PersonalData', 'totalScroll', totalscrollMax);
						ud.maxscroll = maxscroll;
					}
					if (maxscroll > w.user.maxscroll) {
						w.user.maxscroll = maxscroll;
					}
				}
				window.addEventListener('scroll', function(e) {
					setMaxscroll(e);
				});
				var timespent = ob.lib.getCookie('ts');
				if (isNaN(parseInt(timespent))) {
					timespent = 0;
				}
				var timespentonpage = ob.lib.getCookie('tmp');
				if (isNaN(parseInt(timespentonpage))) {
					timespentonpage = 0;
				}
				w.secondsSpentonPage = 0;
				setInterval(function() {
					var totalTimesite = w.secondsSpentonPage + parseInt(timespent);
					var totalTimepage = w.secondsSpentonPage + parseInt(timespentonpage);
					w.secondsSpentonPage++;
					ob.lib.setCookie('ts', totalTimesite);
					ob.lib.setCookie('tmp', totalTimepage);
				}, 1000);
			},
			runGoalsWeb: function(pid) {
				if (w.p[pid].active == 1 && w.p[pid].type != 'heatmap' && typeof ob.lib.getCookie(pid) !== 'undefined') {
					ob.lib.log("Running goal events..." + pid);
					for (var key in w.g) {
						if (ob.lib.goalUrlcheck(w.g[key])) {
							ob.lib.goalEvents(w.g[key], pid);
						}
					}
					for (var key in w.p[pid].g) {
						if (ob.lib.goalUrlcheck(w.p[pid].g[key])) {
							ob.lib.goalEvents(w.p[pid].g[key], pid);
						}
					}
					ob.core.sendData(pid, ob.lib.getActiveVariation(pid), '', '');
				}
			},
			goalTrackerRemove: function(eid) {
				setTimeout(function() {
					JQSG(".gtr_" + eid).fadeOut("slow", function() {
						JQSG(this).remove();
						if (JQSG(".sg_goalTracker_item").length > -1) {
							JQSG(".sg_goalTracker").fadeOut("slow", function() {
								JQSG(this).remove();
							});
						}
					});
				}, 3000);
			},
			goalStore: function(eid, pid) {
				if (sg_ws.p[pid].preview == 1) {
					if (JQSG(".sg_goalTracker").length > 0) {
						if (JQSG(".sg_goalTracker").text().indexOf(eid) < 1) {
							JQSG(".sg_goalTracker .sg_goalTracker_content").prepend("<sg-tag class='sg_goalTracker_item gtr_" + eid + "'>Goal " + eid + " is satisfied</sg-tag>");
							ob.lib.goalTrackerRemove(eid);
						}
					} else {
						JQSG("body").append("<sg-tag class='sg_goalTracker'><sg-tag class='sg_goalTracker_header'>Goal satisfied</sg-tag><sg-tag class='sg_goalTracker_content'></sg-tag><sg-tag style='font-size:10px; color:#CCC; text-align:center;'>Will only show here in preview</sg-tag></sg-tag>");
						$(".sg_goalTracker .sg_goalTracker_content").prepend("<sg-tag class='sg_goalTracker_item  gtr_" + eid + "'>Goal " + eid + " is satisfied</sg-tag>");
						ob.lib.goalTrackerRemove(eid);
					}
				}
				if (typeof ob.lib.lsGetdata('Website', 'GSFA', eid) === 'undefined') {
					ob.lib.lsSetdata('Website', 'GSFA', eid, 1);
				} else {
					var num = ob.lib.lsGetdata('Website', 'GSFA', eid) + 1;
					ob.lib.lsSetdata('Website', 'GSFA', eid, num);
				}
				if (typeof ob.lib.lsGetdata('Website', 'GSFP' + pid, eid) === 'undefined') {
					ob.lib.lsSetdata('Website', 'GSFP' + pid, eid, 1);
				} else {
					var num = ob.lib.lsGetdata('Website', 'GSFP' + pid, eid) + 1;
					ob.lib.lsSetdata('Website', 'GSFP' + pid, eid, num);
				}
			},
			goalSatisfied: function(eid, i, arg) {
				var argvar = ''
				if (arg == 'all') {
					argvar = 'GSFA';
				} else {
					argvar = 'GSFP' + arg;
				}
				if (i == 1) {
					if (typeof ob.lib.lsGetdata('Website', argvar, eid) !== 'undefined') {
						return true;
					}
					return false;
				}
				if (i == 0) {
					if (typeof ob.lib.lsGetdata('Website', argvar, eid) === 'undefined') {
						return true;
					}
					return false;
				}
			},
			goalEvents: function(goal, pid) {
				var vid = w.p[pid].activeVariation;
				if (vid === '') {
					vid = ob.lib.getActiveVariation(pid);
				}
				if (goal.type == 'goalPage') {
					var path = w.user.path.path;
					var goalDefine = goal.goalDefine;
					var goalpage = goal.goal;
					if (goalDefine == 'exact') {
						if (path == goalpage) {
							ob.lib.goalStore(goal.id, pid);
							return true;
						}
					}
					if (goalDefine == 'contains') {
						if (path.indexOf(goalpage) > -1) {
							ob.lib.goalStore(goal.id, pid);
							return true;
						}
					}
					if (goalDefine == 'regexp') {
						var regex = new RegExp(goalpage, 'i');
						if (regex.test(path)) {
							ob.lib.goalStore(goal.id, pid);
							return true;
						}
					}
				}
				if (goal.type == 'customGoal') {
					var customGoal = goal.cgoal.replace(/(\$|jQuery)/gmi, "JQSG");
					customGoal = customGoal.replace(/return( |)true(\;|\:|\(\))/gmi, " ob.core.sendData(" + pid + "," + vid + "," + goal.id + ",'');ob.lib.goalStore(" + goal.id + "," + pid + "); ");
					ob.lib.log("Initiated custom goal " + goal.id);
					try {
						eval(customGoal);
					} catch (e) {
						if (e instanceof SyntaxError) {
							ob.lib.log("SiteGainer Log: Custom goal error -> " + e.message);
						}
					}
				}
				if (goal.type == 'clickGoal') {
					ob.lib.log("Initiated click goal " + goal.id + " -> " + goal.goal + " -> " + pid);
					var sg_dc = true;
					JQSG("body").on('touchstart', goal.goal, function(e) {
						sg_dc = true;
					});
					JQSG("body").on('touchmove', goal.goal, function(e) {
						sg_dc = false;
					});
					JQSG("body").on('click touchend', goal.goal, function(e) {
						if (sg_dc) {
							ob.lib.log('SiteGainer Log: Click goal [push] -> ' + goal.id + '->' + goal.goal + ' - ' + pid);
							ob.lib.goalStore(goal.id, pid);
							ob.core.sendData(pid, vid, goal.id, '');
							sg_dc = true;
						}
					});
				}
				if (goal.type == 'contentGoal') {
					ob.lib.log(goal);
					if (typeof w.p[pid].contentInterval == 'undefined') {
						w.p[pid].contentInterval = [];
					}
					var checkContentGoals = function(goal, pid) {
						var cgoalElement = document.querySelectorAll(goal.cgoalElement);
						for (var i = 0, len = cgoalElement.length; i < len; i++) {
							if (goal.cgoalcontains != "") {
								if (goal.goalDefine == 'contains') {
									ob.lib.log("SiteGainer Log: Content Goal - Contains match ID [" + goal.id + "]" + ' - ' + pid);
									if (cgoalElement[i].outerHTML.indexOf(goal.cgoalcontains) > -1) {
										ob.lib.log("SiteGainer Log: Content Goal -  Contains match [" + goal.cgoalElement + " -> " + goal.cgoalcontains + "] ID [" + goal.id + "]  - Send tracking" + ' - ' + pid);
										ob.lib.goalStore(goal.id, pid);
										ob.core.sendData(pid, vid, goal.id, '');
										clearInterval(w.p[pid].contentInterval[goal.id]);
										w.p[pid].contentInterval[goal.id] = 0;
										return;
									}
								}
								if (goal.goalDefine == 'exact') {
									ob.lib.log("SiteGainer Log: Content Goal - Exact match ID [" + goal.id + "]" + ' - ' + pid);
									if (cgoalElement[i].outerHTML == goal.cgoalcontains) {
										ob.lib.log("SiteGainer Log: Content Goal -  Exact match [" + goal.cgoalElement + " -> " + goal.cgoalcontains + "] ID [" + goal.id + "]  - Send tracking" + ' - ' + pid);
										ob.lib.goalStore(goal.id, pid);
										ob.core.sendData(pid, vid, goal.id, '');
										clearInterval(w.p[pid].contentInterval[goal.id]);
										w.p[pid].contentInterval[goal.id] = 0;
										return;
									}
								}
								if (goal.goalDefine == 'regexp') {
									ob.lib.log("SiteGainer Log: Content Goal - Regex match ID [" + goal.id + "]" + ' - ' + pid);
									var flags = goal.cgoalcontains.replace(/.*\/([gimy]*)$/, '$1');
									var pattern = goal.cgoalcontains.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
									var regex = new RegExp(pattern, flags);
									if (new RegExp(goal.cgoalcontains).test(cgoalElement[i].outerHTML)) {
										ob.lib.log("SiteGainer Log: Content Goal - Regex match [" + goal.cgoalElement + " -> " + goal.cgoalcontains + "] ID [" + goal.id + "]  - Send tracking" + ' - ' + pid);
										ob.lib.goalStore(goal.id, pid);
										ob.core.sendData(pid, vid, goal.id, '');
										clearInterval(w.p[pid].contentInterval[goal.id]);
										w.p[pid].contentInterval[goal.id] = 0;
										return;
									}
								}
							} else {
								ob.lib.log("SiteGainer Log: Element [" + goal.cgoalElement + "] exists. ID [" + goal.id + "]  - No contentmatching  - Send tracking" + ' - ' + pid);
								ob.lib.goalStore(goal.id, pid);
								ob.core.sendData(pid, vid, goal.id, '');
								clearInterval(w.p[pid].contentInterval[goal.id]);
								w.p[pid].contentInterval[goal.id] = 0;
								return;
							}
						}
					}
					checkContentGoals(goal, pid);
					if (w.p[pid].contentInterval[goal.id] != 0) {
						w.p[pid].contentInterval[goal.id] = setInterval(function(goal, pid) {
							checkContentGoals(goal, pid);
						}, 1000, goal, pid);
					}
				}
			},
			goalUrlcheck: function(goal) {
				if (goal.goalUrl != '') {
					var path = w.user.path.path;
					if (goal.match == 'exact') {
						if (path == goal.goalUrl) {
							return true;
						} else {
							return false;
						}
					}
					if (goal.match == 'contains') {
						if (path.indexOf(goal.goalUrl) > -1) {
							return true;
						} else {
							return false;
						}
					}
					if (goal.match == 'regexp') {
						ob.lib.log("Goal check regexp " + goal.id + " > " + path + " > " + goal.goalUrl);
						var flags = goal.goalUrl.replace(/.*\/([gimy]*)$/, '$1');
						var pattern = goal.goalUrl.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
						var regex = new RegExp(pattern, flags);
						if (regex.test(path)) {
							ob.lib.log("Goal check regexp TRUE " + goal.id + " > " + path + " > " + goal.goalUrl);
							return true;
						} else {
							ob.lib.log("Goal check regexp FALSE " + goal.id + " > " + path + " > " + goal.goalUrl);
							return false;
						}
					}
					if (goal.match == '') {
						return true;
					}
				} else {
					return true;
				}
				return false;
			},
			log: function(a, b) {
				if (w.previewMode == 1 || window.location.href.indexOf('sg-debug') > -1) {
					if (typeof a !== 'undefined') {
						if (typeof a === 'object') {
							console.log(a);
						} else {
							if (a.indexOf('SiteGainer log: Executing variation') > -1) {
								console.log('%c' + a + ' (' + (new Date().getTime() - w.startTime) + 'ms)', 'color:green;font-weight:bold;');
							} else if (a.indexOf('SiteGainer ERROR:') > -1) {
								console.log('%c' + a + ' (' + (new Date().getTime() - w.startTime) + 'ms)', 'color:red;font-weight:bold;');
							} else if (a.indexOf('SiteGainer log: Initializing project & log project') > -1 || a.indexOf('SiteGainer log: Check and run variations') > -1) {
								console.log('%c' + a + ' (' + (new Date().getTime() - w.startTime) + 'ms)', 'font-weight:bold; ');
							} else if (a.indexOf('Not logged in / No rights') > -1) {
								console.log('%c' + a + ' (' + (new Date().getTime() - w.startTime) + 'ms)', 'font-weight:bold; color:red; ');
							} else if (a.indexOf('Document is ready') > -1) {
								console.log('%c' + a + ' (' + (new Date().getTime() - w.startTime) + 'ms)', 'font-weight:bold; font-size:12px; ');
							} else {
								console.log(a + ' %c (' + (new Date().getTime() - w.startTime) + 'ms)', 'color:#888;font-weight:bold;');
							}
						}
					}
				} else {}
			},
			jQuery_check: function() {
				if (typeof window.jQuery !== 'undefined' || typeof window.JQSG !== 'undefined' || typeof window.$ !== 'undefined') {
					ob.lib.log('SiteGainer log: Found jQuery identifier');
					if (typeof $ !== 'undefined' && typeof Prototype !== 'undefined') {
						ob.lib.log("SiteGainer Log: Found prototype");
						if (typeof window.jQuery !== 'undefined' && typeof window.JQSG === 'undefined') {
							ob.lib.log('SiteGainer log: Giving jQuery to JQSG');
							window.JQSG = window.jQuery;
						}
						return true;
					} else {
						ob.lib.log("SiteGainer Log: No prototype");
						if (typeof window.jQuery === 'undefined' && typeof window.JQSG === 'undefined' && typeof window.$ !== 'undefined' && typeof window.$.fn !== 'undefined') {
							ob.lib.log('SiteGainer log: Giving $ to JQSG');
							window.JQSG = jQuery;
						}
						if (typeof window.JQSG === 'undefined') {
							ob.lib.log('SiteGainer log: Giving jQuery to JQSG');
							window.JQSG = window.jQuery;
						}
						return true;
					}
				}
			},
			checkPreview: function() {
				var vid = ob.lib.getQParams('varid');
				var pid = ob.lib.getQParams('sgpreviewmode');
				if (typeof pid === 'undefined') {
					pid = ob.lib.getCookie('pmr');
				} else {
					SG_Cookies.remove('sgedit');
				}
				try {
					if (typeof pid !== 'undefined' && parseInt(pid) !== 0) {
						w.previewMode = 1;
						ob.lib.log('SiteGainer log: Preview mode ' + pid);
						w.p[pid].preview = 1;
						ob.lib.setCookie('pmr', pid);
						if (typeof vid !== 'undefined') {
							if (vid.indexOf(',') > -1) {
								var vids = vid.split(',');
								var chsnMV = [];
								for (i = 0; i < vids.length; i++) {
									chsnMV.push(vids[i]);
								}
								ob.lib.setCookie('pm', chsnMV);
								ob.lib.log('SiteGainer log: Get varition from preview link ');
								ob.lib.setActiveVariation(pid, chsnMV);
							} else {
								ob.lib.setCookie('pm', vid);
								ob.lib.log('SiteGainer log: Get varition from preview link ' + vid);
								ob.lib.setActiveVariation(pid, vid);
							}
						}
						return true;
					}
				} catch (err) {
					ob.lib.log('SiteGainer log: Get varition from preview link ' + err);
				}
				return false;
			},
			getScript: function(source, callback) {
				var script = document.createElement('script');
				var prior = document.getElementsByTagName('script')[0];
				script.async = 1;
				prior.parentNode.insertBefore(script, prior);
				script.onload = script.onreadystatechange = function(_, isAbort) {
					if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
						script.onload = script.onreadystatechange = null;
						script = undefined;
						if (!isAbort) {
							if (callback) callback();
						}
					}
				};
				script.src = source;
			},
			jsonp: function(url, callback) {
				var callbackName = 'jsonp_callback_' + Math.round(100000000000 * Math.random());
				window[callbackName] = function(data) {
					delete window[callbackName];
					document.body.removeChild(script);
					callback(data);
				};
				var script = document.createElement('script');
				script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
				document.body.appendChild(script);
			},
			showPreview: function(pid) {
				ob.lib.log('SiteGainer log: Loading preview...');
				var vid = sg_ws.p[pid].activeVariation;
				if (vid === '') {
					vid = ob.lib.getActiveVariation(pid);
				}
				var targetresult = w.p[pid].audienceResult;
				ob.lib.getScript('//sitegainer.com/neweditor/load_preview5.js', function() {
					sg_load_preview.sg_show_preview(pid, vid, w, ob.lib)
				});
			},
			showHeatmap: function(pid, w, lib) {
				lib.jsonp('//sitegainer.com/neweditor/accesscheck_2.php?websiteid=' + w.id, function(data) {
					var answer = data.answer;
					if (answer == 'logged in') {
						var devmode = ob.lib.getQParams('sg_dev');
						if (devmode > 0) {
							ob.lib.getScript('//sitegainer.com/neweditor/heatmap' + devmode + '.js', function() {
								sgheatMap.init(pid, w, lib);
							});
						} else {
							ob.lib.getScript('//sitegainer.com/neweditor/heatmap.js', function() {
								sgheatMap.init(pid, w, lib);
							});
						}
					} else if (lib.getQParams('enc') == w.heatEnc) {
						ob.lib.getScript('//sitegainer.com/neweditor/heatmap.js', function() {
							sgheatMap.init(pid, w, lib);
						});
					} else {
						ob.lib.log('SiteGainer log: Please login for accessing the heatmap ');
					}
				});
			},
			getRelativeposition: function(e, container) {
				var pos = {},
					offset = {},
					ref;
				ref = container.offsetParent;
				pos.x = !!e.touches ? e.changedTouches[0].pageX : e.pageX;
				pos.y = !!e.touches ? e.changedTouches[0].pageY : e.pageY;
				offset.left = container.offsetLeft;
				offset.top = container.offsetTop;
				while (ref) {
					offset.left += ref.offsetLeft;
					offset.top += ref.offsetTop;
					ref = ref.offsetParent;
				}
				return {
					x: pos.x - offset.left,
					y: pos.y - offset.top,
				};
			},
			runSubproject: function(pid) {
				ob.lib.log('SiteGainer log: looking for a subproject for' + pid);
				for (var spid in w.p) {
					if (w.p[spid].parentID == pid) {
						ob.lib.log('SiteGainer log: Found a subproject ' + spid);
						ob.core.runProject(spid);
					}
				}
			},
			runHeatmap: function(pid, vid, eid, sid) {
				var parentid = w.p[pid].parentID;
				var allowed = false;
				var slp = pid;
				if (parentid !== '' && w.p[parentid].active === 1 && w.p[parentid].audienceResult) {
					allowed = true;
					vid = sg_ws.p[parentid].activeVariation;
					slp = pid;
				} else if (parentid === '') {
					allowed = true;
				}
				if (allowed && w.p[pid].preview === 0 && w.p[pid].hRunning == 0) {
					ob.lib.log('SiteGainer log: Heatmap is now running for ' + slp + ' -> ' + vid);
					var Element_path = {
						pathtried: [],
						sg_pathnorm: function(a) {
							var b = [];
							return a.each(function(a, c) {
								for (var d, e = JQSG(c); e.length;) {
									var f = e.get(0),
										g = f.localName;
									if (!g) break;
									g = g.toLowerCase();
									var h = e.parent(),
										i = h.children(g);
									if (i.length > 1) {
										allSiblings = h.children();
										var a = allSiblings.index(f) + 1;
										a > 0 && (g += ":nth-child(" + a + ")")
									}
									d = g + (d ? " > " + d : ""), e = h
								}
								b.push(d)
							}), b.join(",")
						},
						sg_path_effective: function(a, b, c) {
							if (1 == this.pathtried[b]) return ob.lib.log("We have tried this selector before :" + b), !1;
							if (this.pathtried[b] = 1, c > 10) return ob.lib.log("## CHECK PATH LEVEL  ## " + c + " PRESEL " + b + " ELEMENT " + a), ob.lib.log(a), ob.lib.log("COULD NOT FIND UNIQUE PATH FOR THIS ELEMENT - SHUTTING DOWN LOOP"), !1;
							if (c++, "HTML" == a.prop("tagName")) return !1;
							if (15 == c) return !1;
							var d = [];
							a.attr("class") && (d = a.attr("class"), d = d.replace("class_close_sg", "").replace("ui-sortable", "").replace("sg_popup_main", "").replace("sitegainer_modal", "").replace("sg_drop_container", "").split(" "));
							var f, e = [];
							if (a.attr("id")) {
								var g = a.parent();
								g.children("#" + a.attr("id")).length > 1 && (f = a.index() + 1)
							} else if (a.attr("class")) {
								var h = "",
									g = a.parent();
								for (i = 0; i < d.length; i++) "" != d[i] && (g.children("." + d[i]).length > 0 && (f = a.index() + 1), h = h + "." + d[i]);
								g.children(h).length > 1 && (f = a.index() + 1)
							} else {
								var g = a.parent();
								g.children(a.prop("tagName")).length > 1 && (f = a.index() + 1)
							}
							var j = "";
							0 == f && (f = 1), "undefined" != typeof f && (j = ":nth-child(" + f + ")");
							var k = 1,
								l = "";
							for (i = 0; i < d.length; i++) "" !== d[i] && (e[k] = "." + d[i] + j + b, l = l + "." + d[i], k++);
							this.check_duplicateid(a.attr("id")) ? e[0] = "#" + a.attr("id") + b : e[0] = "", e[k] = l + b, "" == l && (e[k] = ""), e[k + 1] = l + j + b, "" == l && (e[k + 1] = ""), e[k + 2] = a.prop("tagName").toLowerCase() + j + b, result = "", preresult = "";
							var m = 0,
								n = 0;
							for (i = 0; i < e.length; i++) e[i].indexOf("#undefined") > -1 || "" == e[i] || 1 == JQSG(e[i]).length && (0 == n ? (result = e[i], m = 1, n = 1) : (e[i].length < result.length || e[i].indexOf("#") > -1) && (result = e[i], m = 1));
							if (1 == m) return result;
							var o = "",
								p = 0;
							for (i = 0; i < e.length; i++)
								if (!(e[i].indexOf("#undefined") > -1 || "" == e[i])) {
									var s = " > " + e[i],
										t = this.sg_path_effective(a.parent(), s, c);
									if (t) {
										o = t, p = 1;
										break
									}
								}
							return 1 == p && o
						},
						sg_getpath: function(a) {
							try {
								this.pathtried = [];
								var b = this.sg_path_effective(a, "", 1);
								(JQSG(b).length > 1 || !b) && (b = this.sg_pathnorm(a));
								var c = b.split(" > "),
									d = "",
									e = "",
									f = 0;
								for (i = c.length - 2; i >= 1; i--) {
									if (1 == JQSG("html").find(c[0] + " > " + d + c[c.length - 1]).length && JQSG("html").find(b).html() == JQSG("html").find(c[0] + " > " + d + c[c.length - 1]).html()) {
										f = 1;
										break
									}
									if (1 == JQSG("html").find(c[0] + " " + d + c[c.length - 1]).length && JQSG("html").find(b).html() == JQSG("html").find(c[0] + " " + d + c[c.length - 1]).html()) {
										f = 2;
										break
									}
									d = c[i] + " " + d
								}
								if (1 == c.length) e = c[0];
								else if (1 == f) e = c[0] + " > " + d + c[c.length - 1];
								else if (2 == f) e = c[0] + " " + d + c[c.length - 1];
								else {
									var g = b.replace(/ > /, " ");
									1 == JQSG(g).length && (b = g), e = b
								}
								var h = e,
									j = e.split(" "),
									d = "";
								for (i = j.length - 1; i >= 0; i--) {
									var k = j[i].replace(/:nth-child\(.*\)/g, ""),
										l = h.replace(j[i], k);
									1 == JQSG("html").find(l).length && (h = l)
								}
								return e = h
							} catch (c) {
								var b = this.sg_pathnorm(a);
								return b
							}
						},
						check_duplicateid: function(a) {
							var b = {},
								c = !1;
							return $("[id]").each(function() {
								this.id && b[this.id] && this.id == a && b[this.id] == a && (c = !0, console.warn("Duplicated id...")), b[this.id] = a
							}), !c
						}
					};
					document.body.addEventListener('click', function(e) {
						var pos = ob.lib.getRelativeposition(e, e.target);
						var YPos = Math.round((pos.y / JQSG(e.target).height()) * 100) / 100;
						var xPos = Math.round((pos.x / JQSG(e.target).width()) * 100) / 100;
						var path = Element_path.sg_getpath(JQSG(e.target));
						if (xPos !== 0 && YPos !== 0) {
							var hm = xPos + ',' + YPos;
							ob.core.sendData(pid, vid, eid, hm, path);
						}
					});
					var documentClick;
					document.body.addEventListener('touchstart', function(e) {
						documentClick = true;
					});
					document.body.addEventListener('touchmove', function(e) {
						documentClick = false;
					});
					document.body.addEventListener('touchend', function(e) {
						if (documentClick) {
							if (w.user.deviceWidth < 769) {
								var pos = ob.lib.getRelativeposition(e, e.target);
								var YPos = Math.round((pos.y / JQSG(e.target).height()) * 100) / 100;
								var xPos = Math.round((pos.x / JQSG(e.target).width()) * 100) / 100;
								var path = Element_path.sg_getpath(JQSG(e.target));
								if (xPos !== 0 && YPos !== 0) {
									var hm = xPos + ',' + YPos
									ob.core.sendData(pid, vid, eid, hm, path);
								}
							}
						}
					});
					w.p[pid].hRunning = 1;
				}
			},
			monitorInit: function(pid) {
				ob.lib.log('SiteGainer log: sitegainer proxy initializing');
				window.intevalid = 0;
				window.original_state_function = [];
				var replacementarray = w.JQSG_replacement_array;
				var obj = [];
				for (var i = 0; i < replacementarray.length; i++) {
					var new_functionname = 'sg_' + replacementarray[i];
					var originalfunctionname = replacementarray[i];
					var jquery = 'obj[i] = {' + new_functionname + ' :function(e,s) { return ob.lib.sg_proxy_jquery(this,e,"' + originalfunctionname + '",s);}}';
					eval(jquery);
				}
				var replacementarray = w.JAVASCRIPT_replacement_array;
				for (var i = 0; i < replacementarray.length; i++) {
					var new_functionname = 'sg_' + replacementarray[i];
					var originalfunctionname = replacementarray[i];
					var javascriptnewfunction = 'Element.prototype.' + new_functionname + ' = function(e,s) { ;return ob.lib.sg_proxy_javascript(this,e,"' + originalfunctionname + '",s);}';
					eval(javascriptnewfunction);
				}
				for (var i = 0; i < obj.length; i++) {
					var f = JQSG.fn.extend(obj[i]);
				}
				var replacementarray = w.JAVASCRIPT_replacement_events;
				for (var i = 0; i < replacementarray.length; i++) {
					var new_functionname = 'sg_' + replacementarray[i];
					var originalfunctionname = replacementarray[i];
					var javascriptnewfunction = 'Element.prototype.' + new_functionname + ' = function(e,s) { return ob.lib.sg_proxy_javascript_event(this,e,s,"' + originalfunctionname + '");}';
					eval(javascriptnewfunction);
				}
				var replacementarray = w.JQSG_replacement_events;
				var obj = [];
				for (var i = 0; i < replacementarray.length; i++) {
					var new_functionname = 'sg_' + replacementarray[i];
					var originalfunctionname = replacementarray[i];
					var jquery = 'obj[i] = {' + new_functionname + ' :function(e,s,h) { return    ob.lib.sg_proxy_jquery_events(this,"' + originalfunctionname + '",e,s,h);}}';
					eval(jquery);
				}
				for (var i = 0; i < obj.length; i++) {
					var f = JQSG.fn.extend(obj[i]);
				}
				w.flagMonitor = 1;
			},
			isNode: function(o) {
				return (typeof Node === "object" ? o instanceof Node : o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string");
			},
			sg_proxy_javascript_event: function(target, e, s, action) {
				w.jevent_changed_id++;
				if (typeof w.original_events_javascript[action] === 'undefined') {
					w.original_events_javascript[action] = [];
				}
				if (typeof w.original_events_javascript[action][w.event_changed_id] === 'undefined') {
					w.original_events_javascript[action][w.jevent_changed_id] = [];
					w.original_events_javascript[action][w.jevent_changed_id]['el'] = target;
					w.original_events_javascript[action][w.jevent_changed_id]['h'] = s;
					w.original_events_javascript[action][w.jevent_changed_id]['action'] = e;
				}
				return target.addEventListener(e, s);
			},
			sg_proxy_javascript: function(target, e, action, s) {
				if (!temp.isNode(target)) {
					return target[action](e);
				} else {
					w.element_changed_id++;
					if (typeof e === 'string') {
						if (action == "style") {
							ob.lib.sg_store_original(JQSG(target).clone(true, true), action);
							JQSG(target).attr('sgcr', w.element_changed_id);
							return target[action][s] = e;
						}
						if (action == "removeAttribute" || action == "setAttribute") {
							ob.lib.sg_store_original(JQSG(target).clone(true, true), action);
							JQSG(target).attr('sgcr', w.element_changed_id);
							return target[action][e] = s;
						}
						if (action == "innerHTML" || action == "className" || action == "id" || action == "scrollTop" || action == "scrollLeft" || action == "nodeType" || action == "nodeName" || action == "disabled" || action == "tagName") {
							ob.lib.sg_store_original(JQSG(target).clone(true, true), action);
							JQSG(target).attr('sgcr', w.element_changed_id);
							return target[action] = e;
						}
						if (action == "outerHTML") {
							var cloned = target.clone(true, true);
							ob.lib.sg_store_original(cloned, action);
							return target[action]('<!-- ' + action + '++sgct="' + w.element_changed_id + '"--><! start++sgct="' + w.element_changed_id + '"-->' + e + '<!-- end++sgct="' + w.element_changed_id + '"--> ');
						}
						if (action == "textContent") {
							e = '<!-- start++sgct="' + w.element_changed_id + '"-->' + e + '<! end++sgct="' + w.element_changed_id + '"--> ';
							return target[action](e);
						}
					} else if (typeof e === 'object') {
						if (action == 'insertBefore') {
							JQSG(e).attr('sgca', w.element_changed_id);
							return target[action](e, s);
						} else if (action == 'appendChild') {
							if (e.nodeType = 1) {
								JQSG(e).attr('sgca', w.element_changed_id);
								return target[action](e);
							}
							if (e.nodeType = 3) {
								var text = e.textContent;
								e.textContent = '<!-- start++sgct="' + w.element_changed_id + '"-->' + text + '<!-- end++sgct="' + w.element_changed_id + '"--> ';
								return target[action](e);
							}
						} else if (action == 'replaceChild') {
							if (e.nodeType = 1) {
								ob.lib.sg_store_original(JQSG(s).clone(true, true), action);
								JQSG(target).attr('sgcr', w.element_changed_id);
								return target[action](e, s);
							}
							if (e.nodeType = 3) {
								var text = e.textContent;
								e.textContent = '<!-- start++sgct="' + w.element_changed_id + '"-->' + text + '<!-- end++sgct="' + w.element_changed_id + '"--> ';
								return target[action](e, s);
							}
						}
					} else if (typeof e === 'number') {
						if (action == "innerHTML" || action == "className" || action == "id" || action == "scrollTop" || action == "scrollLeft" || action == "disabled") {
							ob.lib.sg_store_original(JQSG(target).clone(true, true), action);
							JQSG(target).attr('sgcr', w.element_changed_id);
							return target[action] = e;
						}
						if (action == "style") {
							ob.lib.sg_store_original(JQSG(target).clone(true, true), action);
							JQSG(target).attr('sgcr', w.element_changed_id);
							return target[action][e] = s;
						}
						if (action == "textContent") {
							e = '<!-- start++sgct="' + w.element_changed_id + '"-->' + e + '<!-- end++sgct="' + w.element_changed_id + '"--> ';
							return target[action] = e;
						}
					} else {
						if (action == 'removeChild' || action == 'remove' || action == 'deleteTFoot' || action == 'deleteTHead' || action == 'deleteRow' || action == 'deleteCell') {
							ob.lib.sg_store_original(JQSG(e).clone(true, true), action);
							JQSG(e).after('<!-- ' + action + '++sgct="' + w.element_changed_id + '"-->');
							return target[action]();
						} else {
							ob.lib.sg_store_original(JQSG(target).clone(true, true), action);
							JQSG(target).attr('sgca', w.element_changed_id);
							return target[action][e] = s;
						}
					}
				}
			},
			sg_store_original: function(e, action) {
				w.element_changed_id++;
				w.original_state[w.element_changed_id] = [];
				w.original_state[w.element_changed_id]['el'] = e;
				w.original_state[w.element_changed_id]['action'] = action;
			},
			sg_proxy_jquery_events: function(target, action, e, s, h) {
				var callback = e;
				if (typeof h !== 'undefined') {
					callback = h;
				} else if (typeof s !== 'undefined') {
					callback = s;
				}
				w.event_changed_id++;
				if (typeof w.original_events[action] === 'undefined') {
					w.original_events[action] = [];
				}
				if (typeof w.original_events[action][w.event_changed_id] === 'undefined' && action !== 'delegate') {
					w.original_events[action][w.event_changed_id] = [];
					w.original_events[action][w.event_changed_id]['el'] = target;
					w.original_events[action][w.event_changed_id]['action'] = action;
					if (typeof s === 'undefined') {
						w.original_events[action][w.event_changed_id]['action'] = action;
					} else if (typeof h === 'undefined') {
						w.original_events[action][w.event_changed_id]['action'] = e;
					} else {
						w.original_events[action][w.event_changed_id]['action'] = e;
					}
				} else {
					w.original_events[action][w.event_changed_id] = [];
					w.original_events[action][w.event_changed_id]['el'] = target;
					w.original_events[action][w.event_changed_id]['action'] = s;
				}
				w.original_events[action][w.event_changed_id]['h'] = callback;
				var func = callback;
				if (typeof s === 'undefined') {
					return target[action](func);
				} else if (typeof h === 'undefined') {
					return target[action](e, func);
				} else {
					return target[action](e, s, func);
				}
			},
			sg_proxy_jquery: function(target, e, action, s) {
				if (!ob.lib.isNode(target[0]) || JQSG(target).prop('tagName') == 'HTML') {
					if (action == 'insertBefore') {
						target.attr('sgca', w.element_changed_id);
						return target[action](e);
					}
					if (typeof e === 'undefined') {
						return target[action]();
					} else {
						return target[action](e);
					}
				} else {
					if (typeof e === 'string') {
						if (action == 'append' || action == 'prepend' || action == 'before' || action == 'after') {
							if (e.indexOf('/>') > 0 || e.indexOf('>') > 0) {
								ob.lib.sg_store_original(e, action);
								var e = JQSG.parseHTML(e);
								var result = '';
								for (x in e) {
									if (typeof e[x] !== 'function') {
										if (typeof JQSG(e[x])[0].outerHTML !== 'undefined') {
											result = result + JQSG(e[x]).attr('sgca', w.element_changed_id)[0].outerHTML;
										}
									}
								}
								return target[action](result);
							} else {
								return target[action]('<!-- start++sgct="' + w.element_changed_id + '"-->' + e + '<!-- end++sgct="' + w.element_changed_id + '"--> ');
							}
						} else if (action == 'addClass' || action == 'removeClass') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						} else if (action == 'html' || action == 'text') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						} else if (action == 'replaceWith') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this)[action]('<!-- ' + action + '++sgct="' + w.element_changed_id + '"--><!-- start++sgct="' + w.element_changed_id + '"-->' + e + '<!-- end++sgct="' + w.element_changed_id + '"--> ');
							});
							return;
						} else if (action == 'attr') {
							if (typeof s !== 'undefined') {
								target.each(function() {
									var cloned = JQSG(this).clone(true, true);
									ob.lib.sg_store_original(cloned, action);
									JQSG(this).attr('sgcr', w.element_changed_id);
								});
								return target[action](e, s);
							} else {
								return target[action](e);
							}
						} else if (action == 'height' || action == 'width') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						} else if (action == 'css') {
							if (typeof s !== 'undefined') {
								target.each(function() {
									var cloned = JQSG(this).clone(true, true);
									ob.lib.sg_store_original(cloned, action);
									JQSG(this).attr('sgcr', w.element_changed_id);
								});
								return target[action](e, s);
							} else {
								return target[action](e);
							}
						} else if (action == 'value') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						}
					} else if (typeof e === 'object') {
						if (action == 'css') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						} else if (action == 'append' || action == 'prepend' || action == 'before' || action == 'after') {
							JQSG(e).attr('sgca', w.element_changed_id);
							return target[action](e);
						} else if (action == 'replaceWith') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						} else {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						}
					} else if (typeof e === 'number') {
						if (target[0].nodeType == 3) {
							return target[action]('<!-- start++sgct="' + w.element_changed_id + '"-->' + e + '<!-- end++sgct="' + w.element_changed_id + '"--> ');
						} else {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action](e);
						}
					} else {
						if (action == 'hide' || action == 'show' || action == 'fadeIn' || action == 'fadeOut') {
							target.each(function() {
								var cloned = JQSG(this).clone(true, true);
								ob.lib.sg_store_original(cloned, action);
								JQSG(this).attr('sgcr', w.element_changed_id);
							});
							return target[action]();
						} else if (action == 'remove' || action == 'detach') {
							target.each(function() {
								ob.lib.sg_store_original(JQSG(this), action);
								JQSG(this).after('<!-- ' + action + '++sgct="' + w.element_changed_id + '"-->');
							});
							return target[action]();
						} else {
							return target[action]();
						}
					}
				}
			},
			dynamicRefresh: function(callback) {
				ob.lib.returnToOriginalState(callback);
			},
			returnToOriginalState: function(callback) {
				for (x in window.original_state_function) {
					clearInterval(window.original_state_function[x]);
				}
				var replacementarray = w.JQSG_replacement_events;
				for (var i = 0; i < replacementarray.length; i++) {
					var handelers = w.original_events[replacementarray[i]];
					for (x in handelers) {
						var el = handelers[x]['el'];
						JQSG(el).unbind(handelers[x]['action'], handelers[x]['h']);
					}
				}
				w.original_events = [];
				var replacementarray = w.JAVASCRIPT_replacement_events;
				for (var i = 0; i < replacementarray.length; i++) {
					var handelers = w.original_events_javascript[replacementarray[i]];
					for (x in handelers) {
						var el = handelers[x]['el'];
						el.removeEventListener(handelers[x]['action'], handelers[x]['h']);
					}
				}
				w.original_events_javascript = [];
				ob.lib.removeSgca(function() {
					ob.lib.replaceSgcrRefresh(function() {
						ob.lib.replaceWithRefresh(function() {
							callback();
						});
					});
				});
			},
			removeSgca: function(callback) {
				JQSG('[sgca]').each(function() {
					JQSG(this).remove()
				});
				if (JQSG('[sgca]').length == 0) {
					callback();
				} else {
					ob.lib.removeSgca(callback);
				}
			},
			replaceSgcrRefresh: function(callback) {
				JQSG('[sgcr]').each(function() {
					var value = JQSG(this).attr('sgcr');
					var sga = '';
					if (JQSG(this).attr('sgca')) {
						var sga = JQSG(this).attr('sgca');
					}
					if (sga !== '') {
						JQSG(this).replaceWith(w.original_state[value]['el'][0].setAttribute('sgca', sga))
					} else {
						JQSG('[sgcr="' + value + '"]').replaceWith(JQSG(w.original_state[value]['el'][0]));
					}
				});
				if (JQSG('[sgcr]').length == 0) {
					callback();
				} else {
					ob.lib.replaceSgcrRefresh(callback);
				}
			},
			replaceWithRefresh: function(callback) {
				JQSG("*:not(iframe)").contents().filter(function() {
					return this.nodeType == 8;
				}).each(function(i, e) {
					if (e.nodeValue.indexOf('sgct') > -1) {
						var re = 0;
						var matchtext1 = e.nodeValue.match(/ start\+\+sgct="[0-9]*"/gmi);
						if (matchtext1) {
							var tempid = matchtext1[0].replace('start++sgct="', '').replace('"', '').trim();
							var regexout = 'end\\+\\+sgct="' + tempid + '"';
							if (re == 0) {
								re = new RegExp(regexout, "gmi");
							}
							length++;
							var x = e;
							var y = 0;
							while (x) {
								y++;
								var x = x.nextSibling;
								if (x) {
									if (x.nodeValue) {
										var matchtext2 = x.nodeValue.match(re);
									}
								}
								JQSG(x).remove();
								if (!matchtext2) {
									break;
								}
							}
							JQSG(e).remove();
						}
					}
				});
				JQSG("*:not(iframe)").contents().filter(function() {
					return this.nodeType == 8;
				}).each(function(i, e) {
					if (e.nodeValue.indexOf('sgct') > -1) {
						var re = 0;
						var matchtext1 = e.nodeValue.match(/ end\+\+sgct="[0-9]*"/gmi);
						if (matchtext1) {
							JQSG(e).remove();
						}
					}
				});
				var length = 0;
				JQSG("*:not(iframe)").contents().filter(function() {
					return this.nodeType == 8;
				}).each(function(i, e) {
					if (e.nodeValue.indexOf('sgct') > -1) {
						var match = e.nodeValue.match(/(replaceWith|remove|removeChild|detach)\+\+sgct="[0-9]*"/gmi);
						if (match) {
							var value = match[0].split('=')[1].replace(/"/gmi, '');
							JQSG(e).replaceWith(w.original_state[value]['el'].removeAttr('sgca'));
							length++;
						}
					}
				});
				callback();
			},
			monitorChanges: function(script) {
				script = script.replace(/\.(\s)+/gm, '.');
				var replacementarray = w.JQSG_replacement_array;
				for (var i = 0; i < replacementarray.length; i++) {
					var regex = '\\.(\\s)*' + replacementarray[i].trim() + '(\\s)*\\('
					var regex = new RegExp(regex, 'gmi');
					script = script.replace(regex, '.sg_' + replacementarray[i] + '(');
				}
				var scripts = script.split("\n");
				var result = '';
				for (var i = 0; i < scripts.length; i++) {
					var eachline = scripts[i];
					var eachline = ob.lib.replaceJavascript(eachline);
					var eachline = ob.lib.replaceEvent(eachline);
					result = result + eachline + '\n';
				}
				var replacementarray = w.JAVASCRIPT_replacement_array;
				for (var i = 0; i < replacementarray.length; i++) {
					var regex = '\\.(\\s)*' + replacementarray[i].trim() + '(\\s)*\\('
					var regex = new RegExp(regex, 'gmi');
					result = result.replace(regex, '.sg_' + replacementarray[i] + '(');
				}
				var result = ob.lib.replaceInterval(result);
				result = result.replace(/SG_Cookies\.sg_remove/gmi, 'SG_Cookies\.remove');
				return result;
			},
			replaceEvent: function(script) {
				var replacementarray = w.JQSG_replacement_events;
				for (var i = 0; i < replacementarray.length; i++) {
					var regex = '\\.(\\s)*' + replacementarray[i].trim() + '(\\s)*\\('
					var regex = new RegExp(regex, 'gmi');
					script = script.replace(regex, '.sg_' + replacementarray[i] + '(');
				}
				var replacementarray = w.JAVASCRIPT_replacement_events;
				for (var i = 0; i < replacementarray.length; i++) {
					var regex = '\\.(\\s)*' + replacementarray[i].trim() + '(\\s)*\\('
					var regex = new RegExp(regex, 'gmi');
					script = script.replace(regex, '.sg_' + replacementarray[i] + '(');
				}
				return script;
			},
			replaceJavascript: function(eachline) {
				var replacementarray = w.JAVASCRIPT_replacement_array;
				var script = eachline
				var scriptr = script;
				try {
					while (true) {
						scriptr = scriptr.replace(';', '!#!');
						scriptr = scriptr.replace('=', '!@!');
						var values = scriptr.match(/!@!.*!#!/gmi);
						if (values) {
							for (z = 0; z < values.length; z++) {
								var value = values[z].replace('!#!', '').replace('!@!', '').replace('\\\'', '').replace('\\\"', '');
								test = value.trim();
								if (test.lastIndexOf("'") == 0 || test.lastIndexOf('"') == 0) {
									scriptr = scriptr.replace('!#!', '!0!');
									scriptr = scriptr.replace(';', '!#!');
								}
							}
						}
						var values = scriptr.match(/!@!.*!#!/gmi);
						if (values) {
							for (z = 0; z < values.length; z++) {
								var value = values[z].replace('!#!', '').replace('!@!', '').replace('!0!', ';');
								for (var i = 0; i < replacementarray.length; i++) {
									var extra = '';
									var stylevalue = '';
									if (replacementarray[i] == 'style') {
										extra = '\..*';
									}
									var regex = '\\.(\\s)*' + replacementarray[i] + extra + '(\\s)*=(\\s)*' + value.replace('\\', '\\\\') + '(\\s)*';
									var regex = new RegExp(regex, 'gmi');
									if (extra == '') {
										script = script.replace(regex, '.sg_' + replacementarray[i] + '(' + value + ')');
									} else {
										var eachstyle = script.match(regex);
										if (eachstyle) {
											stylevalue = eachstyle[0].split('=')[0].split('.')[2].trim();
										}
										script = script.replace(regex, '.sg_' + replacementarray[i] + '(' + value + ',"' + stylevalue + '")');
									}
								}
							}
						}
						if (scriptr.indexOf('!@!') == -1) {
							break;
						}
						scriptr = scriptr.replace('!#!', '!0!');
						scriptr = scriptr.replace('!@!', '!0!');
					}
					return script;
				} catch (err) {
					return eachline;
				}
			},
			replaceInterval: function(script) {
				while (true) {
					match = script.match(/setInterval/gmi);
					match2 = script.match(/var [^;=]+=(\s)*setInterval/gm);
					if (match2) {
						var variable = match2[0].split('=')[0].trim();
						script = script.replace(match2[0], 'window.intevalid++ ;' + variable + ' = window.original_state_function[window.intevalid] = sg_tempinterval');
					} else if (match) {
						script = script.replace('setInterval', 'window.intevalid++ ;window.original_state_function[window.intevalid] = sg_tempinterval');
					} else {
						break;
					}
				}
				script = script.replace(/sg_tempinterval/gm, 'setInterval');
				return script;
			},
			executeVariation: function(variation, pid) {
				ob.lib.log('SiteGainer log: Executing variation => Variation: ' + variation.id + ', Project: ' + pid);
				if (w.p[pid].running === 0) {
					try {
						var css = variation.css;
						var head = document.head || document.getElementsByTagName('head')[0];
						var style = document.createElement('style');
						style.id = 'css_' + pid;
						style.type = 'text/css';
						if (style.styleSheet) {
							style.styleSheet.cssText = css;
						} else {
							style.appendChild(document.createTextNode(css));
						}
						head.appendChild(style);
					} catch (err) {
						ob.lib.log('SiteGainer ERROR: Error in variation CSS: (' + err + ') => ' + variation.id);
					}
				}
				if (w.p[pid].running === 0) {
					if (variation.code.indexOf('no_doc_ready') > -1) {
						ob.lib.log('SiteGainer log: No document ready');
						ob.lib.runCode(variation.code, pid);
					} else {
						ob.lib.log('SiteGainer log: Waiting for document ready');
						ob.core.dReady(function() {
							ob.lib.runCode(variation.code, pid);
						});
					}
				}
			},
			runCode: function(code, pid) {
				if (w.p[pid].audienceCheckMode == 1) {
					ob.lib.log('SiteGainer log : Forced proxy');
					code = ob.lib.monitorChanges(code);
				}
				try {
					if (code.replace(/\/\*(.|\n|\r)*?\*\//gmi, '').trim().length > 0) {
						w.p[pid].hasScript = 1;
						if (w.p[pid].forcejQuery.trim() !== '') {
							code = code.replace(/JQSG/gmi, w.p[pid].forcejQuery.trim());
							ob.lib.log('SiteGainer log : Forced jquery => convert Back');
							eval(code);
						} else {
							eval(code);
						}
					}
				} catch (err) {
					ob.lib.log('SiteGainer ERROR: Error in variation javascript: (' + err + ') => ' + pid);
				}
			},
			appendScript: function(script, id, className) {
				var script = document.createElement("script");
				script.id = id;
				script.className = className;
				script.innerHTML = "...";
				document.head.appendChild(script);
			},
			gaEvent: function() {
				ob.lib.log('SiteGainer log - # ANALYTICS # Check analytics integration' + w.gaAccount + " - ");
				if (w.gaAccount != "0") {
					ob.lib.log('SiteGainer log - # ANALYTICS # Start analytics integration');
					var sga = setInterval(function() {
						if (typeof ga !== 'undefined' && typeof ga.getAll !== 'undefined') {
							ob.lib.log('SiteGainer log - # ANALYTICS # Found Google Universal Analytics object');
							clearInterval(sga);
							ob.lib.getGaTrackerName();
						} else if (typeof _gaq !== 'undefined') {
							ob.lib.log('SiteGainer log - Found Google Classic Analytics object');
							for (var pid in w.p) {
								if (w.p[pid].running == 1) {
									var a = sg_ws.p[pid].activeVariation;
									ob.lib.sendAnalytics(pid, a, 2);
									ob.lib.lsSetdata('Website', pid, a, 2);
								}
							}
							clearInterval(sga);
						}
					}, 100);
					ob.core.dReady(function() {
						setTimeout(function() {
							clearInterval(sga);
						}, 1000);
					});
				}
			},
			getGaTrackerName: function() {
				if (JQSG("img[src*='ssl.gstatic.com/analytics/header/legacy/v1/ic_tag_manager.svg']").length < 1) {
					ob.lib.log('SiteGainer log - # ANALYTICS - GET TRACKER # Running Google Universal Analytics integration');
					w.trackerName = '';
					ga.getAll().forEach(function(tracker) {
						if (w.gaAccount != '' && w.gaAccount != 0) {
							ob.lib.log('SiteGainer log - # ANALYTICS - GET TRACKER # Match specific UA ID => ' + w.gaAccount);
						}
						if (w.gaAccount != '' && w.gaAccount != 0 && w.trackerName == '') {
							ob.lib.log('SiteGainer log - # ANALYTICS - GET TRACKER # tracking id => ' + tracker.get('trackingId'));
							if (tracker.get('trackingId') == w.gaAccount) {
								ob.lib.log('SiteGainer log - # ANALYTICS - GET TRACKER # Found tracker name in loop ' + tracker.get('name'));
								w.trackerName = tracker.get('name');
								ob.lib.googleSyncGTM_tracker();
							} else {
								ob.lib.log("SiteGainer log - # ANALYTICS - GET TRACKER # " + tracker.get('trackingId') + " does not match " + w.gaAccount + "");
							}
						}
						if ((w.gaAccount == '' || w.gaAccount == 0) && w.trackerName == '') {
							w.trackerName = tracker.get('name');
							ob.lib.log('SiteGainer log - # ANALYTICS - GET TRACKER # Nothing found in loop ');
							ob.lib.googleSyncGTM_tracker();
						}
					});
				} else {
					console.log("Running GTM preview mode - Analytics deactivated for SiteGainer");
				}
			},
			googleSyncGTM_tracker: function() {
				if (w.trackerName != '' && w.trackerName != 0) {
					ob.lib.log('SiteGainer log - # ANALYTICS # Tracker name found => ' + w.trackerName);
				} else if (w.gaAccount = !'' && w.gaAccount != 0) {
					ob.lib.log('SiteGainer log - # ANALYTICS # Predifined UA was not found in GA object => ');
				}
				for (var pid in w.p) {
					if (w.p[pid].running == 1) {
						ob.lib.log('SiteGainer log - # ANALYTICS # Found active project to track ' + pid);
						var a = sg_ws.p[pid].activeVariation;
						ob.lib.log('SiteGainer log - # ANALYTICS # Found active variation in project ' + pid + ' to track ' + a);
						var b = ob.lib.lsGetdata('Website', pid, a);
						ob.lib.log('SiteGainer log - # ANALYTICS # Check if project ' + pid + ' and variation ' + a + ' is tracked => ' + b);
						ob.lib.log('SiteGainer log - # ANALYTICS # SEND ANALYTICS FOR ' + pid + ' and variation ' + a);
						ob.lib.sendAnalytics(pid, a, 1);
						ob.lib.lsSetdata('Website', pid, a, 2);
					}
				}
			},
			sendAnalytics: function(pid, vid, at) {
				ob.lib.log('SiteGainer: Try sending analytics for VID  => ' + vid);
				if (w.p[pid].id > 192486500) {
					var varName = w.p[pid].v[vid].name + ' - ' + w.p[pid].v[vid].id;
					var proName = w.p[pid].name + ' - ' + w.p[pid].id;
				} else {
					var varName = w.p[pid].v[vid].id;
					var proName = w.p[pid].id;
				}
				if (at == 1) {
					if (w.trackerName != '') {
						ob.lib.log('SiteGainer log: Sending Google Analytics event [Specific tracker name ' + w.trackerName + '] ');
						try {
							ga(w.trackerName + ".send", 'event', 'SiteGainer Events', "'" + varName + "'", "'" + proName + "'", 0, {
								'nonInteraction': 1
							});
						} catch (err) {
							ob.lib.log('SiteGainer ERROR: Error in variation Google Analytics Sync: (' + err + ') => ' + pid);
						}
					} else {
						ob.lib.log('SiteGainer log: Sending Google Analytics event');
						try {
							ga("send", 'event', 'SiteGainer Events', varName, proName, 0, {
								'nonInteraction': 1
							});
						} catch (err) {
							ob.lib.log('SiteGainer ERROR: Error in variation Google Analytics Sync: (' + err + ') => ' + pid);
						}
					}
				}
				if (at == 2) {
					ob.lib.log('SiteGainer log: Sending Google Analytics [Classic] event');
					try {
						_gaq.push(['_trackEvent', 'SiteGainer Events', "'" + varName + "'", "'" + proName + "'", 0, true]);
					} catch (err) {
						ob.lib.log('SiteGainer ERROR: Error in variation Google Analytics Sync: (' + err + ') => ' + pid);
					}
				}
			},
			allocateProject: function(pid) {
				var sum = 0;
				var randTotal = Math.floor((Math.random() * 100) + 1);
				if (typeof ob.lib.getCookie(pid + '_ch') === 'undefined') {
					for (var x in w.p[pid].v) {
						var alloc = w.p[pid].v[x].alloc;
						sum = sum + parseInt(alloc);
					}
				}
				if (sum == 0) {
					sum = 100;
				}
				if (location.href.indexOf('sg_runallprojects') > -1) {
					console.log("Override: Full project allocation");
					sum = 100;
				}
				if (typeof ob.lib.getCookie(pid + '_ch') === 'undefined' && sum >= randTotal) {
					ob.lib.setCookie(pid + '_ch', '-1');
				} else if (typeof ob.lib.getCookie(pid + '_ch') === 'undefined' && sum < randTotal) {
					ob.lib.setCookie(pid + '_ch', '1');
				}
				if (typeof ob.lib.getCookie(pid) !== 'undefined' || ob.lib.getCookie(pid + '_ch') == '-1' || w.previewMode != 0) {
					return true;
				} else {
					return false;
				}
			},
			randomizeVariation: function(variations) {
				var sum = 0;
				var num = 0;
				var chosenNum;
				for (var x in variations) {
					if (variations[x].active == 1) {
						var alloc = variations[x].alloc;
						sum = sum + parseInt(alloc);
						num++;
					}
				}
				if (sum === 0) {
					for (var y in variations) {
						if (variations[y].active == 1) {
							variations[y].alloc = 100 / num;
						}
					}
					chosenNum = Math.random() * 100;
				} else {
					chosenNum = Math.random() * sum;
				}
				var chsnVarid = 0;
				for (var z in variations) {
					if (variations[z].active == 1) {
						var alloc = variations[z].alloc;
						if (chosenNum <= alloc) {
							chsnVarid = variations[z].id;
							return chsnVarid;
						}
						chosenNum = chosenNum - alloc;
					}
				}
				return chsnVarid;
			},
			randomizeChildren: function(children, seq) {
				chsnMV = [];
				for (var x in seq) {
					var parentid = seq[x];
					var chosenchild = 0;
					if (typeof children[parentid] !== 'undefined') {
						chosenchild = ob.lib.randomizeVariation(children[parentid]);
						if (chosenchild != 0) {
							chsnMV.push(chosenchild);
						}
					}
				}
				return chsnMV
			},
			getChildren: function(variations) {
				var children = [];
				for (var x in variations) {
					if (variations[x].active == 1) {
						if (variations[x].parentid != '') {
							if (typeof children[variations[x].parentid] === 'undefined') children[variations[x].parentid] = [];
							children[variations[x].parentid][variations[x].id] = variations[x];
						}
					}
				}
				for (var x in variations) {
					if (variations[x].active == 1) {
						if (typeof children[variations[x].id] === 'undefined' && variations[x].parentid == '') {
							children[variations[x].id] = [];
							children[variations[x].id][variations[x].id] = variations[x];
						}
					}
				}
				return children;
			},
			allocateVariation: function(variations, pid) {
				var isMulti = 0;
				var parentsWO = [];
				var parents = []
				for (var x in variations) {
					if (variations[x].active == 1) {
						if (variations[x].parentid != '') {
							isMulti = 1;
						}
						if (variations[x].parentid == '') {
							parentsWO[variations[x].id] = variations[x];
						}
						if (variations[x].parentid == '' && variations[x].name != 'Original') {
							parents[variations[x].id] = variations[x].id;
						}
					}
				}
				if (isMulti == 1) {
					var pickedparent = ob.lib.randomizeVariation(parentsWO);
					if (pickedparent != 0 && variations[pickedparent].name != 'Original') {
						var children = ob.lib.getChildren(variations);
						var chsnMV = ob.lib.randomizeChildren(children, parents);
						if (typeof chsnMV === 'undefined') {
							return false;
						} else {
							ob.lib.setActiveVariation(pid, chsnMV)
							return chsnMV;
						}
					} else {
						if (pickedparent === 0) {
							return false;
						} else {
							ob.lib.setActiveVariation(pid, pickedparent)
							return pickedparent;
						}
					}
				}
				if (isMulti == 0) {
					ob.lib.log('SiteGainer: Allocating variation for project => ' + pid);
					var chsnVarid = ob.lib.randomizeVariation(variations);
					if (chsnVarid === 0) {
						return false;
					} else {
						ob.lib.setActiveVariation(pid, chsnVarid)
						return chsnVarid;
					}
				}
			},
			setActiveVariation: function(pid, vid) {
				ob.lib.setCookie(pid, vid);
				ob.lib.log('SiteGainer: Set Active Variation in W object => ' + pid + ' ' + vid);
				w.p[pid].activeVariation = vid;
				ob.core.crossDomainSet(pid);
			},
			getActiveVariation: function(pid) {
				ob.lib.log('SiteGainer: Get active variation');
				if (typeof w.p[pid] !== 'undefined') {
					if (typeof ob.lib.getCookie(pid) !== 'undefined') {
						var vid = ob.lib.getCookie(pid);
						if (typeof vid === 'object') {
							vids = vid;
							var allocate = 0;
							var length = 0;
							for (var x in w.p[pid].v) {
								var vid = w.p[pid].v[x].id
								if (w.p[pid].v[vid].active == 1 && w.p[pid].v[x].parentid === '') {
									length++;
								}
							}
							if (vids.length < length - 1) {
								allocate = 1;
							}
							for (var x in vids) {
								var vid = vids[x];
								if (typeof w.p[pid].v[vid] === 'undefined') {
									allocate = 1;
									break;
								}
								if (typeof w.p[pid].v[vid] !== 'undefined' && w.p[pid].v[vid].active != 1) {
									allocate = 1;
									break;
								}
							}
							if (allocate == 1) {
								ob.lib.log('SiteGainer:Found new information in variations object reallocating variations => ' + pid);
								return ob.lib.allocateVariation(w.p[pid].v, pid);
							} else {
								w.p[pid].activeVariation = vids;
								return vids;
							}
						} else {
							if (typeof w.p[pid].v[vid] !== 'undefined' && w.p[pid].v[vid].active == 1) {
								w.p[pid].activeVariation = vid;
								return vid;
							} else {
								return ob.lib.allocateVariation(w.p[pid].v, pid);
							}
						}
					}
					return ob.lib.allocateVariation(w.p[pid].v, pid);
				} else {
					return false;
				}
			},
			setVisitorID: function(visid) {
				ob.lib.setCookie('vid', visid);
			},
			makeUniqueId: function() {
				var uniqueNumber = new Date().getTime();
				var d = new Date().getTime();
				var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = (d + Math.random() * 16) % 16 | 0;
					d = Math.floor(d / 16);
					return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
				});
				return uuid;
			},
			getVisitorID: function() {
				if (typeof ob.lib.getCookie('vid') === 'undefined') {
					ob.lib.setVisitorID(ob.lib.makeUniqueId());
				}
			},
			webbug: function(data) {
				var e = data;
				var n = e;
				var r = new Image(1, 1);
				r.src = n;
				JQSG('head').append(r);
				r.onload = function() {
					t();
					return true
				};
			},
			setCookie: function(args, value, short) {
				if (typeof SG_Cookies('sg_cookies') !== 'undefined') {
					c = SG_Cookies.getJSON('sg_cookies');
					if (typeof c === 'object') {
						if (typeof c[w.id] !== 'undefined') {
							c[w.id][args] = value;
						} else {
							c[w.id] = {};
							c[w.id][args] = value;
						}
					}
				} else {
					c = {};
					c[w.id] = {};
					c[w.id][args] = value;
				}
				SG_Cookies('sg_cookies', c, {
					expires: 90,
					path: '/',
					domain: w.cookieDomain
				});
			},
			getCookie: function(args) {
				if (typeof SG_Cookies('sg_cookies') !== 'undefined') {
					if (typeof SG_Cookies.getJSON('sg_cookies')[w.id] !== 'undefined') {
						if (typeof SG_Cookies.getJSON('sg_cookies')[w.id][args] !== 'undefined') {
							return SG_Cookies.getJSON('sg_cookies')[w.id][args];
						} else {
							return;
						}
					} else {
						return;
					}
				} else {
					ob.lib.log('SiteGainer log: Could not find ' + args + ' in cookie #1');
					return;
				}
			},
			getCookieDomain: function() {
				ob.lib.log('SiteGainer log: Get the domain > ' + window.location.host);
				var root = window.location.host;
				var subDomainarray = w.subDomains.split(',');
				for (var i = 0; i < subDomainarray.length; i++) {
					ob.lib.log("SiteGainer Log: Clean cookie domain  > " + subDomainarray[i]);
					if (typeof subDomainarray[i] !== 'undefined' && subDomainarray[i].trim() != '') {
						if (subDomainarray[i].indexOf('.') > -1) {
							root = root.replace(subDomainarray[i], '');
						} else {
							root = root.replace(subDomainarray[i] + '.', '');
						}
					}
				}
				var subregex = /\.se|\.nu|\.net|\.com|\.io|\.co\.uk|\.eu|\.fi|\.no|\.dk|\.de|\.gov/gmi;
				if (root.match(subregex)) {
					var temproot = root;
					if (!(temproot.match(/com\.au/gmi))) {
						temproot = temproot.replace(subregex, '');
						exludematch = temproot.match(/.*\./gmi);
						if (exludematch) {
							root = root.replace(exludematch[0], "");
						}
					}
				}
				w.cookieDomain = root;
				ob.lib.log('SiteGainer log: GET ROOT ' + w.cookieDomain);
				var store_sg_cookie = SG_Cookies.get('sg_cookies');
				var store_sg_temp = SG_Cookies.get('sg_temp');
				var store_sg_newuser = SG_Cookies.get('sg_new_user');
				if (typeof store_sg_cookie !== 'undefined') {
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/'
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: '.www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: 'www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: 'www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: 'm.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: '.m.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: '.customer.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', 0, {
						expires: 0,
						path: '/',
						domain: 'customer.' + w.cookieDomain
					});
					SG_Cookies.set('sg_cookies', store_sg_cookie, {
						expires: 90,
						path: '/',
						domain: w.cookieDomain
					});
				}
				if (typeof store_sg_temp !== 'undefined') {
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/'
					});
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/',
						domain: '.www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/',
						domain: 'www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/',
						domain: 'm.' + w.cookieDomain
					});
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/',
						domain: '.m.' + w.cookieDomain
					});
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/',
						domain: 'customer.' + w.cookieDomain
					});
					SG_Cookies.set('sg_temp', 0, {
						expires: 0,
						path: '/',
						domain: '.customer.' + w.cookieDomain
					});
					SG_Cookies.set('sg_temp', store_sg_temp, {
						path: '/',
						domain: w.cookieDomain
					});
				}
				if (typeof store_sg_newuser !== 'undefined') {
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/'
					});
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/',
						domain: '.www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/',
						domain: 'www.' + w.cookieDomain
					});
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/',
						domain: 'm.' + w.cookieDomain
					});
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/',
						domain: '.m.' + w.cookieDomain
					});
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/',
						domain: 'customer.' + w.cookieDomain
					});
					SG_Cookies.set('sg_new_user', 0, {
						expires: 0,
						path: '/',
						domain: '.customer.' + w.cookieDomain
					});
					SG_Cookies.set('sg_new_user', store_sg_newuser, {
						path: '/',
						domain: w.cookieDomain
					});
				}
			},
			dynamicURL: function() {
				ob.lib.log('SiteGainer log: Dynamic URL starts');
				w.activeUrl = window.location.href;
				setInterval(function() {
					if (w.activeUrl != window.location.href) {
						ob.lib.log('SiteGainer log: Url changed' + w.activeUrl + ' => ' + window.location.href);
						w.activeUrl = window.location.href;
						ob.lib.dynamicRefresh(function() {
							ob.lib.log('SiteGainer log: Page refreshed!');
							ob.core.prioritizeProjects();
							ob.lib.getUserData();
						});
					}
				}, 100);
			},
			eventLoad: function(e, path, ev, con, pid, i, element, load) {
				if (con !== '') {
					if (eval(con)) {
						ob.lib.pushTarget(path, ev, i, '');
						ob.core.runProject(pid);
						element.removeEventListener(ev, load);
					}
				} else {
					ob.lib.pushTarget(path, ev, i, '');
					ob.core.runProject(pid);
					element.removeEventListener(ev, load);
				}
			},
			sg_event_watcher: function(path, ev, con, pid, index) {
				ob.lib.log('SiteGainer: Watching event => ' + ev + ' for element path => ' + path + ' for project  => ' + pid);
				if (ev == 'scroll' && (path == 'html' || path == 'body' || path == 'window')) {
					document.addEventListener(ev, function load(e) {
						ob.lib.eventLoad(e, path, ev, con, pid, index, document, load);
					});
				} else {
					var el = document.querySelectorAll(path);
					for (var i = 0, len = el.length; i < len; i++) {
						var element = el[i];
						el[i].addEventListener(ev, function load2(e) {
							ob.lib.eventLoad(e, path, ev, con, pid, index, element, load2);
						});
					}
				}
			},
		},
		api: {
			pushGoal: function(gid, pid) {
				ob.lib.log('SiteGainer Log: Try to send custom goal ' + gid);
				if (gid == 'order') {
					gid = 11;
				}
				if (gid == 'checkout') {
					gid = 12;
				}
				if (gid == 'addtocart') {
					gid = 13;
				}
				if (gid == 'productpage') {
					gid = 14;
				}
				if (gid == 'product-listing') {
					gid = 15;
				}
				if (gid == 'homepage') {
					gid = 16;
				}
				if (gid == 'cartpage') {
					gid = 17;
				}
				if (gid == 'searched') {
					gid = 17;
				}
				if (gid == 'contactpage') {
					gid = 18;
				}
				if (gid == 'loggedin') {
					gid = 19;
				}
				if (typeof pid !== 'undefined') {
					var vid = w.p[pid].activeVariation;
					if (vid) {
						ob.lib.log('SiteGainer Log: Only send for specific project ' + gid + ' pid -> ' + pid);
						ob.core.sendData(pid, vid, gid, '');
					} else {
						ob.lib.log('SiteGainer Log: Could not find active project for ' + gid + ' pid -> ' + pid);
					}
				} else {
					for (var a in w.p) {
						if (w.p[a].active == 1 && typeof SG_Cookies.getJSON('sg_cookies')[w.id][w.p[a].id] !== 'undefined' && w.p[a].type != 'heatmap') {
							var vid = w.p[a].activeVariation;
							if (vid) {
								ob.lib.log('SiteGainer Log: Sent custom goal for ' + gid);
								ob.core.sendData(w.p[a].id, vid, gid, '');
							} else {
								ob.lib.log('SiteGainer Log: Could not find active variation for ' + gid + ' pid -> ' + a);
							}
						}
					}
				}
			},
			pushData: function(key, value) {
				ob.lib.lsSetdata('Website', 'PersonalData', key, value);
				return
			},
		}
	}
	ob.lib.log('SiteGainer log: Make sure dom exists');
	var x = document.body,
		html = document.documentElement;
	if (x !== null) {
		ob.lib.log('SiteGainer log: DOM Exists');
		ob.core.initialize();
		window.sg_control = "control";
		window.sitegainer = ob.api;
		window.sg_api = ob;
		window.sg_tracker = ob.core.updateJson(1);
	} else {
		var y = setInterval(function() {
			var x = document.body,
				html = document.documentElement;
			if (x !== null) {
				clearInterval(y);
				ob.lib.log('SiteGainer log: DOM Exists - after loop');
				ob.core.initialize();
				window.sitegainer = ob.api;
				window.sg_api = ob;
			}
		}, 5);
	}
	ob.core.dReady(function() {
		ob.lib.log('SiteGainer log: ROOT - Document is ready');
	});
})(window);
