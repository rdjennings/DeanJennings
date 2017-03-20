webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(1)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/hero.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-38315b2d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-38315b2d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] hero.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-38315b2d!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hero.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-38315b2d!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hero.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.heroBG {\n\tbackground-image: url(" + __webpack_require__(4) + ");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\theight: 100%;\n}\n.smallNav a,\n.smallNav a:hover {\n\ttext-decoration: none !important;\n}\n.tag-line-flex {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n.tag-line-flex-item\t{\n\tcolor: #fff;\n\tfont-size: 2em;\n\theight: 2em;\n\tposition: relative;\n}\n.tag-line-flex-item.tag-line-separator {\n\tdisplay:none !important;\n}\n.flex-container {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n\t-webkit-flex-direction: column;\n   flex-direction: column;\n}\n.flex-sub-container {\n  -webkit-align-items: center;\n  align-items: center;\n\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n.flex-item {\n\tborder: 2px solid #fff;\n\tmargin-right: 20px;\n}\n.flex-item a {\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-weight: 900;\n\tpadding: 10px 5px;\n}\n.flex-item a,\n.flex-item a:hover {\n\ttext-decoration: none !important;\n}\n@media (max-width: 770px) {\n.flex-sub-container {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n\n    width: auto;\n}\n.flex-item {\n\t\tmargin-bottom: 20px;\n}\n.tag-line-flex-item\t{\n\t\ttop: 0em;\n}\n}\n@media (max-width: 992px) {\n.side-nav li a {\n\t\tfont-size: 1em;\n}\n.side-nav li {\n\t\tmargin-bottom: 25px;\n}\n.tag-line-flex {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n}\n.tag-line-flex-item\t{\n\t\tmargin: auto auto 1.5em;\n}\n}\n\n", "", {"version":3,"sources":["/./src/components/hero.vue?6c1732fd"],"names":[],"mappings":";AAqCA;CACA,gDAAA;CACA,2BAAA;CACA,6BAAA;CACA,aAAA;CACA;AAEA;;CAEA,iCAAA;CACA;AAGA;CACA,sBAAA;CACA,cAAA;;CAEA,gCAAA;GACA,wBAAA;CACA;AAEA;CACA,YAAA;CACA,eAAA;CACA,YAAA;CACA,mBAAA;CACA;AAEA;CACA,wBAAA;CACA;AAEA;CACA,sBAAA;CACA,cAAA;;CAEA,gCAAA;GACA,wBAAA;CACA,+BAAA;GACA,uBAAA;CACA;AAEA;EACA,4BAAA;EACA,oBAAA;;CAEA,sBAAA;CACA,cAAA;;CAEA,gCAAA;GACA,wBAAA;CACA;AAEA;CACA,uBAAA;CACA,mBAAA;CACA;AAEA;CACA,YAAA;CACA,eAAA;CACA,iBAAA;CACA,kBAAA;CACA;AAEA;;CAEA,iCAAA;CACA;AAEA;AACA;EACA,+BAAA;IACA,uBAAA;;IAEA,YAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,SAAA;CACA;CACA;AAEA;AACA;EACA,eAAA;CACA;AAEA;EACA,oBAAA;CACA;AACA;EACA,+BAAA;IACA,uBAAA;CACA;AAEA;EACA,wBAAA;CACA;CACA","file":"hero.vue","sourcesContent":["<template>\n\t<div class=\"heroBG\">\n\t\t<navigation></navigation>\n\t\t<div class=\"flex-container\">\n\t\t\t<div class=\"tag-line-flex\">\n\t\t\t\t<div class=\"tag-line-flex-item\">\n\t\t\t\t\tDean Jennings -&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tag-line-flex-item tag-line-separator\">\n\t\t\t\t\t&nbsp;-&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tag-line-flex-item\">\n\t\t\t\t\tBuilder of user interfaces\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex-sub-container\">\n\t\t\t\t<router-link tag=\"div\" class=\"flex-item overview_button\" to=\"/overview\" exact>\n\t\t\t\t  <a>Overview</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"div\" class=\"flex-item contact_button\" to=\"/contactme\" exact>\n\t\t\t\t  <a>Contact Me</a>\n\t\t\t\t</router-link>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\n\timport Navigation from './smallnav.vue'\n\texport default {\n\t\tcomponents: {\n\t\t\t'Navigation': Navigation\n\t\t},\n\t}\n</script>\n\n<style>\n.heroBG {\n\tbackground-image: url('../images/code.png');\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\theight: 100%;\n}\n\n.smallNav a,\n.smallNav a:hover {\n\ttext-decoration: none !important;\n}\n\n\n.tag-line-flex {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n\n.tag-line-flex-item\t{\n\tcolor: #fff;\n\tfont-size: 2em;\n\theight: 2em;\n\tposition: relative;\n}\n\n.tag-line-flex-item.tag-line-separator {\n\tdisplay:none !important;\n}\n\n.flex-container {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n\t-webkit-flex-direction: column;\n   flex-direction: column;\n}\n\n.flex-sub-container {\n  -webkit-align-items: center;\n  align-items: center;\n\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n\n.flex-item {\n\tborder: 2px solid #fff;\n\tmargin-right: 20px;\n}\n\n.flex-item a {\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-weight: 900;\n\tpadding: 10px 5px;\n}\n\n.flex-item a,\n.flex-item a:hover {\n\ttext-decoration: none !important;\n}\n\n@media (max-width: 770px) {\n\t.flex-sub-container {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n\n    width: auto;\n\t}\n\n\t.flex-item {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t.tag-line-flex-item\t{\n\t\ttop: 0em;\n\t}\n}\n\n@media (max-width: 992px) {\n\t.side-nav li a {\n\t\tfont-size: 1em;\n\t}\n\n\t.side-nav li {\n\t\tmargin-bottom: 25px;\n\t}\n\t.tag-line-flex {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n\t}\n\n\t.tag-line-flex-item\t{\n\t\tmargin: auto auto 1.5em;\n\t}\n}\n\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/code.png";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _smallnav = __webpack_require__(7);
	
	var _smallnav2 = _interopRequireDefault(_smallnav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		components: {
			'Navigation': _smallnav2.default
		}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(8)
	
	/* script */
	__vue_exports__ = __webpack_require__(10)
	
	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/smallnav.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-22dc376f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-22dc376f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] smallnav.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-22dc376f!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./smallnav.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-22dc376f!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./smallnav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\nnav.smallNav {\n\tbackground-color: transparent;\n}\nnav i {\n\tfont-size: 4em !important;\n}\n", "", {"version":3,"sources":["/./src/components/smallnav.vue?378079f6"],"names":[],"mappings":";AA2CA;CACA,8BAAA;CACA;AAEA;CACA,0BAAA;CACA","file":"smallnav.vue","sourcesContent":["<template>\n\t<nav class='smallNav'>\n\t\t<div class=\"nav-wrapper\">\n<!--\t\t\t<div class=\"col s2 offset-s2\">\n\t\t\t\t<a href=\"/#hero\" class=\"brand-logo rdj-logo\">Dean Jennings</a>\n\t\t\t</div> -->\n\t\t\t<a style=\"display: inline;\" href=\"#\" data-activates=\"hero-menu\" class=\"button-collapse\"><i class=\"material-icons menu-icon\">menu</i></a>\n      <!-- Flyout menu -->\n      <ul class=\"side-nav left\" id=\"hero-menu\">\n\t\t\t\t<router-link tag=\"li\" to=\"/overview\" exact>\n\t\t\t\t  <a>Overview</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/aboutme\" exact>\n\t\t\t\t  <a>About Me</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/contactme\" exact>\n\t\t\t\t  <a>Contact Me</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/recentclients\" exact>\n\t\t\t\t  <a>Recent Clients</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/skills\" exact>\n\t\t\t\t  <a>Skills</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/blog\" exact>\n\t\t\t\t  <a>Blog</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/resume\" exact>\n\t\t\t\t  <a>Resume</a>\n\t\t\t\t</router-link>\n      </ul>\n\t\t</div>\n\t</nav>\n</template>\n\n<script>\n\texport default {\n\t\tcreated: function(){\n\t\t}\n\t}\n</script>\n\n<style>\nnav.smallNav {\n\tbackground-color: transparent;\n}\n\nnav i {\n\tfont-size: 4em !important;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		created: function created() {}
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('nav', {
	    staticClass: "smallNav"
	  }, [_c('div', {
	    staticClass: "nav-wrapper"
	  }, [_vm._m(0), _vm._v(" "), _c('ul', {
	    staticClass: "side-nav left",
	    attrs: {
	      "id": "hero-menu"
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/overview",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Overview")])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/aboutme",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("About Me")])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/contactme",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Contact Me")])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/recentclients",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Recent Clients")])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/skills",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Skills")])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/blog",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Blog")])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "tag": "li",
	      "to": "/resume",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Resume")])])], 1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('a', {
	    staticClass: "button-collapse",
	    staticStyle: {
	      "display": "inline"
	    },
	    attrs: {
	      "href": "#",
	      "data-activates": "hero-menu"
	    }
	  }, [_c('i', {
	    staticClass: "material-icons menu-icon"
	  }, [_vm._v("menu")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-22dc376f", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "heroBG"
	  }, [_c('navigation'), _vm._v(" "), _c('div', {
	    staticClass: "flex-container"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "flex-sub-container"
	  }, [_c('router-link', {
	    staticClass: "flex-item overview_button",
	    attrs: {
	      "tag": "div",
	      "to": "/overview",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Overview")])]), _vm._v(" "), _c('router-link', {
	    staticClass: "flex-item contact_button",
	    attrs: {
	      "tag": "div",
	      "to": "/contactme",
	      "exact": ""
	    }
	  }, [_c('a', [_vm._v("Contact Me")])])], 1)])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "tag-line-flex"
	  }, [_c('div', {
	    staticClass: "tag-line-flex-item"
	  }, [_vm._v("\n\t\t\t\tDean Jennings - \n\t\t\t")]), _vm._v(" "), _c('div', {
	    staticClass: "tag-line-flex-item tag-line-separator"
	  }, [_vm._v("\n\t\t\t\t - \n\t\t\t")]), _vm._v(" "), _c('div', {
	    staticClass: "tag-line-flex-item"
	  }, [_vm._v("\n\t\t\t\tBuilder of user interfaces\n\t\t\t")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-38315b2d", module.exports)
	  }
	}

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZXJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZXJvLnZ1ZT8zMWFiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlcm8udnVlPzRiZjIiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvZGUucG5nIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy9oZXJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbWFsbG5hdi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlPzdmODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlP2E2YjYiLCJ3ZWJwYWNrOi8vL3NtYWxsbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbWFsbG5hdi52dWU/Yjk2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZXJvLnZ1ZT8yY2EwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDO0FBQ0Qsa0NBQWlDOztBQUVqQzs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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SUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImJ1aWxkLWFwcC0tYzMxZTUxNmJlYWU2MDI4Mjg0MzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzgzMTViMmQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hlcm8udnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9oZXJvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzgzMTViMmQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGVyby52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9yZGovc3JjL2NvbXBvbmVudHMvaGVyby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM4MzE1YjJkXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM4MzE1YjJkXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaGVyby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlcm8udnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzgzMTViMmQhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hlcm8udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zODMxNWIyZCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaGVyby52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zODMxNWIyZCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaGVyby52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zODMxNWIyZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2hlcm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhlcm9CRyB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy9jb2RlLnBuZ1wiKSArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuLnNtYWxsTmF2IGEsXFxuLnNtYWxsTmF2IGE6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4udGFnLWxpbmUtZmxleCB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhZy1saW5lLWZsZXgtaXRlbVxcdHtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YWctbGluZS1mbGV4LWl0ZW0udGFnLWxpbmUtc2VwYXJhdG9yIHtcXG5cXHRkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuLmZsZXgtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC1zdWItY29udGFpbmVyIHtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZsZXgtaXRlbSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5mbGV4LWl0ZW0gYSB7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweDtcXG59XFxuLmZsZXgtaXRlbSBhLFxcbi5mbGV4LWl0ZW0gYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xcbi5mbGV4LXN1Yi1jb250YWluZXIge1xcblxcdFxcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGV4LWl0ZW0ge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50YWctbGluZS1mbGV4LWl0ZW1cXHR7XFxuXFx0XFx0dG9wOiAwZW07XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4uc2lkZS1uYXYgbGkgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxZW07XFxufVxcbi5zaWRlLW5hdiBsaSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLnRhZy1saW5lLWZsZXgge1xcblxcdFxcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRhZy1saW5lLWZsZXgtaXRlbVxcdHtcXG5cXHRcXHRtYXJnaW46IGF1dG8gYXV0byAxLjVlbTtcXG59XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvY29tcG9uZW50cy9oZXJvLnZ1ZT82YzE3MzJmZFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUNBO0NBQ0EsZ0RBQUE7Q0FDQSwyQkFBQTtDQUNBLDZCQUFBO0NBQ0EsYUFBQTtDQUNBO0FBRUE7O0NBRUEsaUNBQUE7Q0FDQTtBQUdBO0NBQ0Esc0JBQUE7Q0FDQSxjQUFBOztDQUVBLGdDQUFBO0dBQ0Esd0JBQUE7Q0FDQTtBQUVBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUVBO0NBQ0Esd0JBQUE7Q0FDQTtBQUVBO0NBQ0Esc0JBQUE7Q0FDQSxjQUFBOztDQUVBLGdDQUFBO0dBQ0Esd0JBQUE7Q0FDQSwrQkFBQTtHQUNBLHVCQUFBO0NBQ0E7QUFFQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7O0NBRUEsc0JBQUE7Q0FDQSxjQUFBOztDQUVBLGdDQUFBO0dBQ0Esd0JBQUE7Q0FDQTtBQUVBO0NBQ0EsdUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBRUE7Q0FDQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLGlCQUFBO0NBQ0Esa0JBQUE7Q0FDQTtBQUVBOztDQUVBLGlDQUFBO0NBQ0E7QUFFQTtBQUNBO0VBQ0EsK0JBQUE7SUFDQSx1QkFBQTs7SUFFQSxZQUFBO0NBQ0E7QUFFQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLFNBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0EsK0JBQUE7SUFDQSx1QkFBQTtDQUNBO0FBRUE7RUFDQSx3QkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcImhlcm8udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJoZXJvQkdcXFwiPlxcblxcdFxcdDxuYXZpZ2F0aW9uPjwvbmF2aWdhdGlvbj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmbGV4LWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFnLWxpbmUtZmxleFxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFnLWxpbmUtZmxleC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHREZWFuIEplbm5pbmdzIC0mbmJzcDtcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ0YWctbGluZS1mbGV4LWl0ZW0gdGFnLWxpbmUtc2VwYXJhdG9yXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQmbmJzcDstJm5ic3A7XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFnLWxpbmUtZmxleC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRCdWlsZGVyIG9mIHVzZXIgaW50ZXJmYWNlc1xcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZsZXgtc3ViLWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwiZGl2XFxcIiBjbGFzcz1cXFwiZmxleC1pdGVtIG92ZXJ2aWV3X2J1dHRvblxcXCIgdG89XFxcIi9vdmVydmlld1xcXCIgZXhhY3Q+XFxuXFx0XFx0XFx0XFx0ICA8YT5PdmVydmlldzwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdFxcdDxyb3V0ZXItbGluayB0YWc9XFxcImRpdlxcXCIgY2xhc3M9XFxcImZsZXgtaXRlbSBjb250YWN0X2J1dHRvblxcXCIgdG89XFxcIi9jb250YWN0bWVcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+Q29udGFjdCBNZTwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL3NtYWxsbmF2LnZ1ZSdcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0Y29tcG9uZW50czoge1xcblxcdFxcdFxcdCdOYXZpZ2F0aW9uJzogTmF2aWdhdGlvblxcblxcdFxcdH0sXFxuXFx0fVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uaGVyb0JHIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jb2RlLnBuZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc21hbGxOYXYgYSxcXG4uc21hbGxOYXYgYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi50YWctbGluZS1mbGV4IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFnLWxpbmUtZmxleC1pdGVtXFx0e1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhZy1saW5lLWZsZXgtaXRlbS50YWctbGluZS1zZXBhcmF0b3Ige1xcblxcdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LXN1Yi1jb250YWluZXIge1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcblxcdG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmZsZXgtaXRlbSBhIHtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdHBhZGRpbmc6IDEwcHggNXB4O1xcbn1cXG5cXG4uZmxleC1pdGVtIGEsXFxuLmZsZXgtaXRlbSBhOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxuXFx0LmZsZXgtc3ViLWNvbnRhaW5lciB7XFxuXFx0XFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICB3aWR0aDogYXV0bztcXG5cXHR9XFxuXFxuXFx0LmZsZXgtaXRlbSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRhZy1saW5lLWZsZXgtaXRlbVxcdHtcXG5cXHRcXHR0b3A6IDBlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcblxcdC5zaWRlLW5hdiBsaSBhIHtcXG5cXHRcXHRmb250LXNpemU6IDFlbTtcXG5cXHR9XFxuXFxuXFx0LnNpZGUtbmF2IGxpIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcdH1cXG5cXHQudGFnLWxpbmUtZmxleCB7XFxuXFx0XFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudGFnLWxpbmUtZmxleC1pdGVtXFx0e1xcblxcdFxcdG1hcmdpbjogYXV0byBhdXRvIDEuNWVtO1xcblxcdH1cXG59XFxuXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM4MzE1YjJkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvaGVyby52dWVcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY29kZS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvY29kZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImhlcm9CR1wiPlxuXHRcdDxuYXZpZ2F0aW9uPjwvbmF2aWdhdGlvbj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1jb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0YWctbGluZS1mbGV4XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWctbGluZS1mbGV4LWl0ZW1cIj5cblx0XHRcdFx0XHREZWFuIEplbm5pbmdzIC0mbmJzcDtcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWctbGluZS1mbGV4LWl0ZW0gdGFnLWxpbmUtc2VwYXJhdG9yXCI+XG5cdFx0XHRcdFx0Jm5ic3A7LSZuYnNwO1xuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInRhZy1saW5lLWZsZXgtaXRlbVwiPlxuXHRcdFx0XHRcdEJ1aWxkZXIgb2YgdXNlciBpbnRlcmZhY2VzXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1zdWItY29udGFpbmVyXCI+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJkaXZcIiBjbGFzcz1cImZsZXgtaXRlbSBvdmVydmlld19idXR0b25cIiB0bz1cIi9vdmVydmlld1wiIGV4YWN0PlxuXHRcdFx0XHQgIDxhPk92ZXJ2aWV3PC9hPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwiZGl2XCIgY2xhc3M9XCJmbGV4LWl0ZW0gY29udGFjdF9idXR0b25cIiB0bz1cIi9jb250YWN0bWVcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5Db250YWN0IE1lPC9hPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9zbWFsbG5hdi52dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnTmF2aWdhdGlvbic6IE5hdmlnYXRpb25cblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmhlcm9CRyB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2NvZGUucG5nJyk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbWFsbE5hdiBhLFxuLnNtYWxsTmF2IGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4udGFnLWxpbmUtZmxleCB7XG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogZmxleDtcblxuXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWctbGluZS1mbGV4LWl0ZW1cdHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMmVtO1xuXHRoZWlnaHQ6IDJlbTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFnLWxpbmUtZmxleC1pdGVtLnRhZy1saW5lLXNlcGFyYXRvciB7XG5cdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZmxleC1zdWItY29udGFpbmVyIHtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0ZGlzcGxheTogZmxleDtcblxuXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4LWl0ZW0ge1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mbGV4LWl0ZW0gYSB7XG5cdGNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0cGFkZGluZzogMTBweCA1cHg7XG59XG5cbi5mbGV4LWl0ZW0gYSxcbi5mbGV4LWl0ZW0gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzcwcHgpIHtcblx0LmZsZXgtc3ViLWNvbnRhaW5lciB7XG5cdFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB3aWR0aDogYXV0bztcblx0fVxuXG5cdC5mbGV4LWl0ZW0ge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblxuXHQudGFnLWxpbmUtZmxleC1pdGVtXHR7XG5cdFx0dG9wOiAwZW07XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cdC5zaWRlLW5hdiBsaSBhIHtcblx0XHRmb250LXNpemU6IDFlbTtcblx0fVxuXG5cdC5zaWRlLW5hdiBsaSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0fVxuXHQudGFnLWxpbmUtZmxleCB7XG5cdFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblxuXHQudGFnLWxpbmUtZmxleC1pdGVtXHR7XG5cdFx0bWFyZ2luOiBhdXRvIGF1dG8gMS41ZW07XG5cdH1cbn1cblxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaGVyby52dWU/NmMxNzMyZmQiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMjJkYzM3NmYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NtYWxsbmF2LnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc21hbGxuYXYudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMmRjMzc2ZiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zbWFsbG5hdi52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9yZGovc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMmRjMzc2ZlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMmRjMzc2ZlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNtYWxsbmF2LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjJkYzM3NmYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NtYWxsbmF2LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjJkYzM3NmYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NtYWxsbmF2LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTIyZGMzNzZmIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zbWFsbG5hdi52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yMmRjMzc2ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbm5hdi5zbWFsbE5hdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbm5hdiBpIHtcXG5cXHRmb250LXNpemU6IDRlbSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlPzM3ODA3OWY2XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyQ0E7Q0FDQSw4QkFBQTtDQUNBO0FBRUE7Q0FDQSwwQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJzbWFsbG5hdi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxuYXYgY2xhc3M9J3NtYWxsTmF2Jz5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJuYXYtd3JhcHBlclxcXCI+XFxuPCEtLVxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbCBzMiBvZmZzZXQtczJcXFwiPlxcblxcdFxcdFxcdFxcdDxhIGhyZWY9XFxcIi8jaGVyb1xcXCIgY2xhc3M9XFxcImJyYW5kLWxvZ28gcmRqLWxvZ29cXFwiPkRlYW4gSmVubmluZ3M8L2E+XFxuXFx0XFx0XFx0PC9kaXY+IC0tPlxcblxcdFxcdFxcdDxhIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmU7XFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWFjdGl2YXRlcz1cXFwiaGVyby1tZW51XFxcIiBjbGFzcz1cXFwiYnV0dG9uLWNvbGxhcHNlXFxcIj48aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMgbWVudS1pY29uXFxcIj5tZW51PC9pPjwvYT5cXG4gICAgICA8IS0tIEZseW91dCBtZW51IC0tPlxcbiAgICAgIDx1bCBjbGFzcz1cXFwic2lkZS1uYXYgbGVmdFxcXCIgaWQ9XFxcImhlcm8tbWVudVxcXCI+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwibGlcXFwiIHRvPVxcXCIvb3ZlcnZpZXdcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+T3ZlcnZpZXc8L2E+XFxuXFx0XFx0XFx0XFx0PC9yb3V0ZXItbGluaz5cXG5cXHRcXHRcXHRcXHQ8cm91dGVyLWxpbmsgdGFnPVxcXCJsaVxcXCIgdG89XFxcIi9hYm91dG1lXFxcIiBleGFjdD5cXG5cXHRcXHRcXHRcXHQgIDxhPkFib3V0IE1lPC9hPlxcblxcdFxcdFxcdFxcdDwvcm91dGVyLWxpbms+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwibGlcXFwiIHRvPVxcXCIvY29udGFjdG1lXFxcIiBleGFjdD5cXG5cXHRcXHRcXHRcXHQgIDxhPkNvbnRhY3QgTWU8L2E+XFxuXFx0XFx0XFx0XFx0PC9yb3V0ZXItbGluaz5cXG5cXHRcXHRcXHRcXHQ8cm91dGVyLWxpbmsgdGFnPVxcXCJsaVxcXCIgdG89XFxcIi9yZWNlbnRjbGllbnRzXFxcIiBleGFjdD5cXG5cXHRcXHRcXHRcXHQgIDxhPlJlY2VudCBDbGllbnRzPC9hPlxcblxcdFxcdFxcdFxcdDwvcm91dGVyLWxpbms+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwibGlcXFwiIHRvPVxcXCIvc2tpbGxzXFxcIiBleGFjdD5cXG5cXHRcXHRcXHRcXHQgIDxhPlNraWxsczwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdFxcdDxyb3V0ZXItbGluayB0YWc9XFxcImxpXFxcIiB0bz1cXFwiL2Jsb2dcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+QmxvZzwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdFxcdDxyb3V0ZXItbGluayB0YWc9XFxcImxpXFxcIiB0bz1cXFwiL3Jlc3VtZVxcXCIgZXhhY3Q+XFxuXFx0XFx0XFx0XFx0ICA8YT5SZXN1bWU8L2E+XFxuXFx0XFx0XFx0XFx0PC9yb3V0ZXItbGluaz5cXG4gICAgICA8L3VsPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvbmF2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0Y3JlYXRlZDogZnVuY3Rpb24oKXtcXG5cXHRcXHR9XFxuXFx0fVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5uYXYuc21hbGxOYXYge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5uYXYgaSB7XFxuXFx0Zm9udC1zaXplOiA0ZW0gIWltcG9ydGFudDtcXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTIyZGMzNzZmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cblx0PG5hdiBjbGFzcz0nc21hbGxOYXYnPlxuXHRcdDxkaXYgY2xhc3M9XCJuYXYtd3JhcHBlclwiPlxuPCEtLVx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczIgb2Zmc2V0LXMyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvI2hlcm9cIiBjbGFzcz1cImJyYW5kLWxvZ28gcmRqLWxvZ29cIj5EZWFuIEplbm5pbmdzPC9hPlxuXHRcdFx0PC9kaXY+IC0tPlxuXHRcdFx0PGEgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCIgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cImhlcm8tbWVudVwiIGNsYXNzPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZW51LWljb25cIj5tZW51PC9pPjwvYT5cbiAgICAgIDwhLS0gRmx5b3V0IG1lbnUgLS0+XG4gICAgICA8dWwgY2xhc3M9XCJzaWRlLW5hdiBsZWZ0XCIgaWQ9XCJoZXJvLW1lbnVcIj5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvb3ZlcnZpZXdcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5PdmVydmlldzwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvYWJvdXRtZVwiIGV4YWN0PlxuXHRcdFx0XHQgIDxhPkFib3V0IE1lPC9hPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi9jb250YWN0bWVcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5Db250YWN0IE1lPC9hPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi9yZWNlbnRjbGllbnRzXCIgZXhhY3Q+XG5cdFx0XHRcdCAgPGE+UmVjZW50IENsaWVudHM8L2E+XG5cdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL3NraWxsc1wiIGV4YWN0PlxuXHRcdFx0XHQgIDxhPlNraWxsczwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvYmxvZ1wiIGV4YWN0PlxuXHRcdFx0XHQgIDxhPkJsb2c8L2E+XG5cdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL3Jlc3VtZVwiIGV4YWN0PlxuXHRcdFx0XHQgIDxhPlJlc3VtZTwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cbiAgICAgIDwvdWw+XG5cdFx0PC9kaXY+XG5cdDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNyZWF0ZWQ6IGZ1bmN0aW9uKCl7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxubmF2LnNtYWxsTmF2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbm5hdiBpIHtcblx0Zm9udC1zaXplOiA0ZW0gIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNtYWxsbmF2LnZ1ZT8zNzgwNzlmNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCduYXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic21hbGxOYXZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtd3JhcHBlclwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaWRlLW5hdiBsZWZ0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJoZXJvLW1lbnVcIlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJsaVwiLFxuICAgICAgXCJ0b1wiOiBcIi9vdmVydmlld1wiLFxuICAgICAgXCJleGFjdFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiT3ZlcnZpZXdcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwibGlcIixcbiAgICAgIFwidG9cIjogXCIvYWJvdXRtZVwiLFxuICAgICAgXCJleGFjdFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiQWJvdXQgTWVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwibGlcIixcbiAgICAgIFwidG9cIjogXCIvY29udGFjdG1lXCIsXG4gICAgICBcImV4YWN0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIFtfdm0uX3YoXCJDb250YWN0IE1lXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL3JlY2VudGNsaWVudHNcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIlJlY2VudCBDbGllbnRzXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL3NraWxsc1wiLFxuICAgICAgXCJleGFjdFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiU2tpbGxzXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL2Jsb2dcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIkJsb2dcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwibGlcIixcbiAgICAgIFwidG9cIjogXCIvcmVzdW1lXCIsXG4gICAgICBcImV4YWN0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIFtfdm0uX3YoXCJSZXN1bWVcIildKV0pXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24tY29sbGFwc2VcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCIsXG4gICAgICBcImRhdGEtYWN0aXZhdGVzXCI6IFwiaGVyby1tZW51XCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBtZW51LWljb25cIlxuICB9LCBbX3ZtLl92KFwibWVudVwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMmRjMzc2ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjJkYzM3NmYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZXJvQkdcIlxuICB9LCBbX2MoJ25hdmlnYXRpb24nKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4LWNvbnRhaW5lclwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmxleC1zdWItY29udGFpbmVyXCJcbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4LWl0ZW0gb3ZlcnZpZXdfYnV0dG9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwiZGl2XCIsXG4gICAgICBcInRvXCI6IFwiL292ZXJ2aWV3XCIsXG4gICAgICBcImV4YWN0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIFtfdm0uX3YoXCJPdmVydmlld1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4LWl0ZW0gY29udGFjdF9idXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJkaXZcIixcbiAgICAgIFwidG9cIjogXCIvY29udGFjdG1lXCIsXG4gICAgICBcImV4YWN0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIFtfdm0uX3YoXCJDb250YWN0IE1lXCIpXSldKV0sIDEpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWctbGluZS1mbGV4XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnLWxpbmUtZmxleC1pdGVtXCJcbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdERlYW4gSmVubmluZ3MgLcKgXFxuXFx0XFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnLWxpbmUtZmxleC1pdGVtIHRhZy1saW5lLXNlcGFyYXRvclwiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTCoC3CoFxcblxcdFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZy1saW5lLWZsZXgtaXRlbVwiXG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRCdWlsZGVyIG9mIHVzZXIgaW50ZXJmYWNlc1xcblxcdFxcdFxcdFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zODMxNWIyZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzgzMTViMmQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2hlcm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9