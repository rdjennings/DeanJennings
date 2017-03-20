webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(186)
	
	/* script */
	__vue_exports__ = __webpack_require__(189)
	
	/* template */
	var __vue_template__ = __webpack_require__(195)
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
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/Hero.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3c0bbf4d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3c0bbf4d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Hero.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(42)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3c0bbf4d!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hero.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3c0bbf4d!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hero.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.heroBG {\n\tbackground-image: url(" + __webpack_require__(188) + ");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\theight: 100%;\n}\n.smallNav a,\n.smallNav a:hover {\n\ttext-decoration: none !important;\n}\n.tag-line-flex {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n.tag-line-flex-item\t{\n\tcolor: #fff;\n\tfont-size: 2em;\n\theight: 2em;\n\tposition: relative;\n}\n.tag-line-flex-item.tag-line-separator {\n\tdisplay:none !important;\n}\n.flex-container {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n\t-webkit-flex-direction: column;\n   flex-direction: column;\n}\n.flex-sub-container {\n  -webkit-align-items: center;\n  align-items: center;\n\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n.flex-item {\n\tborder: 2px solid #fff;\n\tmargin-right: 20px;\n}\n.flex-item a {\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-weight: 900;\n\tpadding: 10px 5px;\n}\n.flex-item a,\n.flex-item a:hover {\n\ttext-decoration: none !important;\n}\n@media (max-width: 770px) {\n.flex-sub-container {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n\n    width: auto;\n}\n.flex-item {\n\t\tmargin-bottom: 20px;\n}\n.tag-line-flex-item\t{\n\t\ttop: 0em;\n}\n}\n@media (max-width: 992px) {\n.side-nav li a {\n\t\tfont-size: 1em;\n}\n.side-nav li {\n\t\tmargin-bottom: 25px;\n}\n.tag-line-flex {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n}\n.tag-line-flex-item\t{\n\t\tmargin: auto auto 1.5em;\n}\n}\n\n", "", {"version":3,"sources":["/./src/components/Hero.vue?1049af1d"],"names":[],"mappings":";AAqCA;CACA,gDAAA;CACA,2BAAA;CACA,6BAAA;CACA,aAAA;CACA;AAEA;;CAEA,iCAAA;CACA;AAGA;CACA,sBAAA;CACA,cAAA;;CAEA,gCAAA;GACA,wBAAA;CACA;AAEA;CACA,YAAA;CACA,eAAA;CACA,YAAA;CACA,mBAAA;CACA;AAEA;CACA,wBAAA;CACA;AAEA;CACA,sBAAA;CACA,cAAA;;CAEA,gCAAA;GACA,wBAAA;CACA,+BAAA;GACA,uBAAA;CACA;AAEA;EACA,4BAAA;EACA,oBAAA;;CAEA,sBAAA;CACA,cAAA;;CAEA,gCAAA;GACA,wBAAA;CACA;AAEA;CACA,uBAAA;CACA,mBAAA;CACA;AAEA;CACA,YAAA;CACA,eAAA;CACA,iBAAA;CACA,kBAAA;CACA;AAEA;;CAEA,iCAAA;CACA;AAEA;AACA;EACA,+BAAA;IACA,uBAAA;;IAEA,YAAA;CACA;AAEA;EACA,oBAAA;CACA;AAEA;EACA,SAAA;CACA;CACA;AAEA;AACA;EACA,eAAA;CACA;AAEA;EACA,oBAAA;CACA;AACA;EACA,+BAAA;IACA,uBAAA;CACA;AAEA;EACA,wBAAA;CACA;CACA","file":"Hero.vue","sourcesContent":["<template>\n\t<div class=\"heroBG\">\n\t\t<navigation></navigation>\n\t\t<div class=\"flex-container\">\n\t\t\t<div class=\"tag-line-flex\">\n\t\t\t\t<div class=\"tag-line-flex-item\">\n\t\t\t\t\tDean Jennings -&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tag-line-flex-item tag-line-separator\">\n\t\t\t\t\t&nbsp;-&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tag-line-flex-item\">\n\t\t\t\t\tBuilder of user interfaces\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex-sub-container\">\n\t\t\t\t<router-link tag=\"div\" class=\"flex-item overview_button\" to=\"/overview\" exact>\n\t\t\t\t  <a>Overview</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"div\" class=\"flex-item contact_button\" to=\"/contactme\" exact>\n\t\t\t\t  <a>Contact Me</a>\n\t\t\t\t</router-link>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\n\timport Navigation from './smallnav.vue'\n\texport default {\n\t\tcomponents: {\n\t\t\t'Navigation': Navigation\n\t\t},\n\t}\n</script>\n\n<style>\n.heroBG {\n\tbackground-image: url('../images/code.png');\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\theight: 100%;\n}\n\n.smallNav a,\n.smallNav a:hover {\n\ttext-decoration: none !important;\n}\n\n\n.tag-line-flex {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n\n.tag-line-flex-item\t{\n\tcolor: #fff;\n\tfont-size: 2em;\n\theight: 2em;\n\tposition: relative;\n}\n\n.tag-line-flex-item.tag-line-separator {\n\tdisplay:none !important;\n}\n\n.flex-container {\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n\t-webkit-flex-direction: column;\n   flex-direction: column;\n}\n\n.flex-sub-container {\n  -webkit-align-items: center;\n  align-items: center;\n\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\n\t-webkit-justify-content: center;\n   justify-content: center;\n}\n\n.flex-item {\n\tborder: 2px solid #fff;\n\tmargin-right: 20px;\n}\n\n.flex-item a {\n\tcolor: #fff;\n\tdisplay: block;\n\tfont-weight: 900;\n\tpadding: 10px 5px;\n}\n\n.flex-item a,\n.flex-item a:hover {\n\ttext-decoration: none !important;\n}\n\n@media (max-width: 770px) {\n\t.flex-sub-container {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n\n    width: auto;\n\t}\n\n\t.flex-item {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t.tag-line-flex-item\t{\n\t\ttop: 0em;\n\t}\n}\n\n@media (max-width: 992px) {\n\t.side-nav li a {\n\t\tfont-size: 1em;\n\t}\n\n\t.side-nav li {\n\t\tmargin-bottom: 25px;\n\t}\n\t.tag-line-flex {\n\t\t-webkit-flex-direction: column;\n    flex-direction: column;\n\t}\n\n\t.tag-line-flex-item\t{\n\t\tmargin: auto auto 1.5em;\n\t}\n}\n\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/code.png";

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _smallnav = __webpack_require__(190);
	
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

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(191)
	
	/* script */
	__vue_exports__ = __webpack_require__(193)
	
	/* template */
	var __vue_template__ = __webpack_require__(194)
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

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(42)(content, {});
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

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\nnav.smallNav {\n\tbackground-color: transparent;\n}\nnav i {\n\tfont-size: 4em !important;\n}\n", "", {"version":3,"sources":["/./src/components/smallnav.vue?378079f6"],"names":[],"mappings":";AA2CA;CACA,8BAAA;CACA;AAEA;CACA,0BAAA;CACA","file":"smallnav.vue","sourcesContent":["<template>\n\t<nav class='smallNav'>\n\t\t<div class=\"nav-wrapper\">\n<!--\t\t\t<div class=\"col s2 offset-s2\">\n\t\t\t\t<a href=\"/#hero\" class=\"brand-logo rdj-logo\">Dean Jennings</a>\n\t\t\t</div> -->\n\t\t\t<a style=\"display: inline;\" href=\"#\" data-activates=\"hero-menu\" class=\"button-collapse\"><i class=\"material-icons menu-icon\">menu</i></a>\n      <!-- Flyout menu -->\n      <ul class=\"side-nav left\" id=\"hero-menu\">\n\t\t\t\t<router-link tag=\"li\" to=\"/overview\" exact>\n\t\t\t\t  <a>Overview</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/aboutme\" exact>\n\t\t\t\t  <a>About Me</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/contactme\" exact>\n\t\t\t\t  <a>Contact Me</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/recentclients\" exact>\n\t\t\t\t  <a>Recent Clients</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/skills\" exact>\n\t\t\t\t  <a>Skills</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/blog\" exact>\n\t\t\t\t  <a>Blog</a>\n\t\t\t\t</router-link>\n\t\t\t\t<router-link tag=\"li\" to=\"/resume\" exact>\n\t\t\t\t  <a>Resume</a>\n\t\t\t\t</router-link>\n      </ul>\n\t\t</div>\n\t</nav>\n</template>\n\n<script>\n\texport default {\n\t\tcreated: function(){\n\t\t}\n\t}\n</script>\n\n<style>\nnav.smallNav {\n\tbackground-color: transparent;\n}\n\nnav i {\n\tfont-size: 4em !important;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 193:
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

/***/ 194:
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

/***/ 195:
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
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3c0bbf4d", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvLnZ1ZT8xNzAyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlcm8udnVlPzMxYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb2RlLnBuZyIsIndlYnBhY2s6Ly8vSGVyby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZT83ZjgyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZT9hNmI2Iiwid2VicGFjazovLy9zbWFsbG5hdi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc21hbGxuYXYudnVlP2I5NmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVyby52dWU/ZGJlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHNDQUFx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O0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3pFQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImJ1aWxkLWhlcm8tLTMzYzU2NDQ4MzYxMDA4MDFjMTZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTNjMGJiZjRkIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9IZXJvLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSGVyby52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNjMGJiZjRkIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0hlcm8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvcmRqL3NyYy9jb21wb25lbnRzL0hlcm8udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYzBiYmY0ZFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zYzBiYmY0ZFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEhlcm8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZXJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNjMGJiZjRkIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9IZXJvLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2MwYmJmNGQhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0hlcm8udnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2MwYmJmNGQhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0hlcm8udnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtM2MwYmJmNGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9IZXJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhlcm9CRyB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy9jb2RlLnBuZ1wiKSArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuLnNtYWxsTmF2IGEsXFxuLnNtYWxsTmF2IGE6aG92ZXIge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4udGFnLWxpbmUtZmxleCB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhZy1saW5lLWZsZXgtaXRlbVxcdHtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YWctbGluZS1mbGV4LWl0ZW0udGFnLWxpbmUtc2VwYXJhdG9yIHtcXG5cXHRkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuLmZsZXgtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC1zdWItY29udGFpbmVyIHtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZsZXgtaXRlbSB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5mbGV4LWl0ZW0gYSB7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRwYWRkaW5nOiAxMHB4IDVweDtcXG59XFxuLmZsZXgtaXRlbSBhLFxcbi5mbGV4LWl0ZW0gYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xcbi5mbGV4LXN1Yi1jb250YWluZXIge1xcblxcdFxcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGV4LWl0ZW0ge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50YWctbGluZS1mbGV4LWl0ZW1cXHR7XFxuXFx0XFx0dG9wOiAwZW07XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4uc2lkZS1uYXYgbGkgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxZW07XFxufVxcbi5zaWRlLW5hdiBsaSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLnRhZy1saW5lLWZsZXgge1xcblxcdFxcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRhZy1saW5lLWZsZXgtaXRlbVxcdHtcXG5cXHRcXHRtYXJnaW46IGF1dG8gYXV0byAxLjVlbTtcXG59XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvY29tcG9uZW50cy9IZXJvLnZ1ZT8xMDQ5YWYxZFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUNBO0NBQ0EsZ0RBQUE7Q0FDQSwyQkFBQTtDQUNBLDZCQUFBO0NBQ0EsYUFBQTtDQUNBO0FBRUE7O0NBRUEsaUNBQUE7Q0FDQTtBQUdBO0NBQ0Esc0JBQUE7Q0FDQSxjQUFBOztDQUVBLGdDQUFBO0dBQ0Esd0JBQUE7Q0FDQTtBQUVBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUVBO0NBQ0Esd0JBQUE7Q0FDQTtBQUVBO0NBQ0Esc0JBQUE7Q0FDQSxjQUFBOztDQUVBLGdDQUFBO0dBQ0Esd0JBQUE7Q0FDQSwrQkFBQTtHQUNBLHVCQUFBO0NBQ0E7QUFFQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7O0NBRUEsc0JBQUE7Q0FDQSxjQUFBOztDQUVBLGdDQUFBO0dBQ0Esd0JBQUE7Q0FDQTtBQUVBO0NBQ0EsdUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBRUE7Q0FDQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLGlCQUFBO0NBQ0Esa0JBQUE7Q0FDQTtBQUVBOztDQUVBLGlDQUFBO0NBQ0E7QUFFQTtBQUNBO0VBQ0EsK0JBQUE7SUFDQSx1QkFBQTs7SUFFQSxZQUFBO0NBQ0E7QUFFQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLFNBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtFQUNBLGVBQUE7Q0FDQTtBQUVBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0EsK0JBQUE7SUFDQSx1QkFBQTtDQUNBO0FBRUE7RUFDQSx3QkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcIkhlcm8udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJoZXJvQkdcXFwiPlxcblxcdFxcdDxuYXZpZ2F0aW9uPjwvbmF2aWdhdGlvbj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmbGV4LWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFnLWxpbmUtZmxleFxcXCI+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFnLWxpbmUtZmxleC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHREZWFuIEplbm5pbmdzIC0mbmJzcDtcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ0YWctbGluZS1mbGV4LWl0ZW0gdGFnLWxpbmUtc2VwYXJhdG9yXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQmbmJzcDstJm5ic3A7XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidGFnLWxpbmUtZmxleC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRCdWlsZGVyIG9mIHVzZXIgaW50ZXJmYWNlc1xcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZsZXgtc3ViLWNvbnRhaW5lclxcXCI+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwiZGl2XFxcIiBjbGFzcz1cXFwiZmxleC1pdGVtIG92ZXJ2aWV3X2J1dHRvblxcXCIgdG89XFxcIi9vdmVydmlld1xcXCIgZXhhY3Q+XFxuXFx0XFx0XFx0XFx0ICA8YT5PdmVydmlldzwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdFxcdDxyb3V0ZXItbGluayB0YWc9XFxcImRpdlxcXCIgY2xhc3M9XFxcImZsZXgtaXRlbSBjb250YWN0X2J1dHRvblxcXCIgdG89XFxcIi9jb250YWN0bWVcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+Q29udGFjdCBNZTwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL3NtYWxsbmF2LnZ1ZSdcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0Y29tcG9uZW50czoge1xcblxcdFxcdFxcdCdOYXZpZ2F0aW9uJzogTmF2aWdhdGlvblxcblxcdFxcdH0sXFxuXFx0fVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uaGVyb0JHIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jb2RlLnBuZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc21hbGxOYXYgYSxcXG4uc21hbGxOYXYgYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi50YWctbGluZS1mbGV4IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFnLWxpbmUtZmxleC1pdGVtXFx0e1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhZy1saW5lLWZsZXgtaXRlbS50YWctbGluZS1zZXBhcmF0b3Ige1xcblxcdGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGV4LXN1Yi1jb250YWluZXIge1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcblxcdG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmZsZXgtaXRlbSBhIHtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdHBhZGRpbmc6IDEwcHggNXB4O1xcbn1cXG5cXG4uZmxleC1pdGVtIGEsXFxuLmZsZXgtaXRlbSBhOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxuXFx0LmZsZXgtc3ViLWNvbnRhaW5lciB7XFxuXFx0XFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICB3aWR0aDogYXV0bztcXG5cXHR9XFxuXFxuXFx0LmZsZXgtaXRlbSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHR9XFxuXFxuXFx0LnRhZy1saW5lLWZsZXgtaXRlbVxcdHtcXG5cXHRcXHR0b3A6IDBlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcblxcdC5zaWRlLW5hdiBsaSBhIHtcXG5cXHRcXHRmb250LXNpemU6IDFlbTtcXG5cXHR9XFxuXFxuXFx0LnNpZGUtbmF2IGxpIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcdH1cXG5cXHQudGFnLWxpbmUtZmxleCB7XFxuXFx0XFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXG5cXHQudGFnLWxpbmUtZmxleC1pdGVtXFx0e1xcblxcdFxcdG1hcmdpbjogYXV0byBhdXRvIDEuNWVtO1xcblxcdH1cXG59XFxuXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNjMGJiZjRkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGVyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY29kZS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvY29kZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJoZXJvQkdcIj5cblx0XHQ8bmF2aWdhdGlvbj48L25hdmlnYXRpb24+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXgtY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFnLWxpbmUtZmxleFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFnLWxpbmUtZmxleC1pdGVtXCI+XG5cdFx0XHRcdFx0RGVhbiBKZW5uaW5ncyAtJm5ic3A7XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFnLWxpbmUtZmxleC1pdGVtIHRhZy1saW5lLXNlcGFyYXRvclwiPlxuXHRcdFx0XHRcdCZuYnNwOy0mbmJzcDtcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWctbGluZS1mbGV4LWl0ZW1cIj5cblx0XHRcdFx0XHRCdWlsZGVyIG9mIHVzZXIgaW50ZXJmYWNlc1xuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtc3ViLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwiZGl2XCIgY2xhc3M9XCJmbGV4LWl0ZW0gb3ZlcnZpZXdfYnV0dG9uXCIgdG89XCIvb3ZlcnZpZXdcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5PdmVydmlldzwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImRpdlwiIGNsYXNzPVwiZmxleC1pdGVtIGNvbnRhY3RfYnV0dG9uXCIgdG89XCIvY29udGFjdG1lXCIgZXhhY3Q+XG5cdFx0XHRcdCAgPGE+Q29udGFjdCBNZTwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vc21hbGxuYXYudnVlJ1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J05hdmlnYXRpb24nOiBOYXZpZ2F0aW9uXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5oZXJvQkcge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jb2RlLnBuZycpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4uc21hbGxOYXYgYSxcbi5zbWFsbE5hdiBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLnRhZy1saW5lLWZsZXgge1xuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFnLWxpbmUtZmxleC1pdGVtXHR7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDJlbTtcblx0aGVpZ2h0OiAyZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhZy1saW5lLWZsZXgtaXRlbS50YWctbGluZS1zZXBhcmF0b3Ige1xuXHRkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtc3ViLWNvbnRhaW5lciB7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleC1pdGVtIHtcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZmxleC1pdGVtIGEge1xuXHRjb2xvcjogI2ZmZjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG4uZmxleC1pdGVtIGEsXG4uZmxleC1pdGVtIGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KSB7XG5cdC5mbGV4LXN1Yi1jb250YWluZXIge1xuXHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgd2lkdGg6IGF1dG87XG5cdH1cblxuXHQuZmxleC1pdGVtIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cblx0LnRhZy1saW5lLWZsZXgtaXRlbVx0e1xuXHRcdHRvcDogMGVtO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuXHQuc2lkZS1uYXYgbGkgYSB7XG5cdFx0Zm9udC1zaXplOiAxZW07XG5cdH1cblxuXHQuc2lkZS1uYXYgbGkge1xuXHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XG5cdH1cblx0LnRhZy1saW5lLWZsZXgge1xuXHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cblx0LnRhZy1saW5lLWZsZXgtaXRlbVx0e1xuXHRcdG1hcmdpbjogYXV0byBhdXRvIDEuNWVtO1xuXHR9XG59XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhlcm8udnVlPzEwNDlhZjFkIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTIyZGMzNzZmIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zbWFsbG5hdi52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NtYWxsbmF2LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjJkYzM3NmYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc21hbGxuYXYudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvcmRqL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjJkYzM3NmZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjJkYzM3NmZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzbWFsbG5hdi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjJkYzM3NmYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NtYWxsbmF2LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjJkYzM3NmYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NtYWxsbmF2LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTIyZGMzNzZmIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zbWFsbG5hdi52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yMmRjMzc2ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NtYWxsbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxubmF2LnNtYWxsTmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxubmF2IGkge1xcblxcdGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvY29tcG9uZW50cy9zbWFsbG5hdi52dWU/Mzc4MDc5ZjZcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJDQTtDQUNBLDhCQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0NBQ0FcIixcImZpbGVcIjpcInNtYWxsbmF2LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFx0PG5hdiBjbGFzcz0nc21hbGxOYXYnPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIm5hdi13cmFwcGVyXFxcIj5cXG48IS0tXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sIHMyIG9mZnNldC1zMlxcXCI+XFxuXFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiLyNoZXJvXFxcIiBjbGFzcz1cXFwiYnJhbmQtbG9nbyByZGotbG9nb1xcXCI+RGVhbiBKZW5uaW5nczwvYT5cXG5cXHRcXHRcXHQ8L2Rpdj4gLS0+XFxuXFx0XFx0XFx0PGEgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZTtcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYWN0aXZhdGVzPVxcXCJoZXJvLW1lbnVcXFwiIGNsYXNzPVxcXCJidXR0b24tY29sbGFwc2VcXFwiPjxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucyBtZW51LWljb25cXFwiPm1lbnU8L2k+PC9hPlxcbiAgICAgIDwhLS0gRmx5b3V0IG1lbnUgLS0+XFxuICAgICAgPHVsIGNsYXNzPVxcXCJzaWRlLW5hdiBsZWZ0XFxcIiBpZD1cXFwiaGVyby1tZW51XFxcIj5cXG5cXHRcXHRcXHRcXHQ8cm91dGVyLWxpbmsgdGFnPVxcXCJsaVxcXCIgdG89XFxcIi9vdmVydmlld1xcXCIgZXhhY3Q+XFxuXFx0XFx0XFx0XFx0ICA8YT5PdmVydmlldzwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdFxcdDxyb3V0ZXItbGluayB0YWc9XFxcImxpXFxcIiB0bz1cXFwiL2Fib3V0bWVcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+QWJvdXQgTWU8L2E+XFxuXFx0XFx0XFx0XFx0PC9yb3V0ZXItbGluaz5cXG5cXHRcXHRcXHRcXHQ8cm91dGVyLWxpbmsgdGFnPVxcXCJsaVxcXCIgdG89XFxcIi9jb250YWN0bWVcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+Q29udGFjdCBNZTwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcblxcdFxcdFxcdFxcdDxyb3V0ZXItbGluayB0YWc9XFxcImxpXFxcIiB0bz1cXFwiL3JlY2VudGNsaWVudHNcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+UmVjZW50IENsaWVudHM8L2E+XFxuXFx0XFx0XFx0XFx0PC9yb3V0ZXItbGluaz5cXG5cXHRcXHRcXHRcXHQ8cm91dGVyLWxpbmsgdGFnPVxcXCJsaVxcXCIgdG89XFxcIi9za2lsbHNcXFwiIGV4YWN0PlxcblxcdFxcdFxcdFxcdCAgPGE+U2tpbGxzPC9hPlxcblxcdFxcdFxcdFxcdDwvcm91dGVyLWxpbms+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwibGlcXFwiIHRvPVxcXCIvYmxvZ1xcXCIgZXhhY3Q+XFxuXFx0XFx0XFx0XFx0ICA8YT5CbG9nPC9hPlxcblxcdFxcdFxcdFxcdDwvcm91dGVyLWxpbms+XFxuXFx0XFx0XFx0XFx0PHJvdXRlci1saW5rIHRhZz1cXFwibGlcXFwiIHRvPVxcXCIvcmVzdW1lXFxcIiBleGFjdD5cXG5cXHRcXHRcXHRcXHQgIDxhPlJlc3VtZTwvYT5cXG5cXHRcXHRcXHRcXHQ8L3JvdXRlci1saW5rPlxcbiAgICAgIDwvdWw+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9uYXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXG5cXHRcXHRjcmVhdGVkOiBmdW5jdGlvbigpe1xcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbm5hdi5zbWFsbE5hdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbm5hdiBpIHtcXG5cXHRmb250LXNpemU6IDRlbSAhaW1wb3J0YW50O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjJkYzM3NmYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9zbWFsbG5hdi52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCI8dGVtcGxhdGU+XG5cdDxuYXYgY2xhc3M9J3NtYWxsTmF2Jz5cblx0XHQ8ZGl2IGNsYXNzPVwibmF2LXdyYXBwZXJcIj5cbjwhLS1cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHMyIG9mZnNldC1zMlwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiLyNoZXJvXCIgY2xhc3M9XCJicmFuZC1sb2dvIHJkai1sb2dvXCI+RGVhbiBKZW5uaW5nczwvYT5cblx0XHRcdDwvZGl2PiAtLT5cblx0XHRcdDxhIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiIGhyZWY9XCIjXCIgZGF0YS1hY3RpdmF0ZXM9XCJoZXJvLW1lbnVcIiBjbGFzcz1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWVudS1pY29uXCI+bWVudTwvaT48L2E+XG4gICAgICA8IS0tIEZseW91dCBtZW51IC0tPlxuICAgICAgPHVsIGNsYXNzPVwic2lkZS1uYXYgbGVmdFwiIGlkPVwiaGVyby1tZW51XCI+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL292ZXJ2aWV3XCIgZXhhY3Q+XG5cdFx0XHRcdCAgPGE+T3ZlcnZpZXc8L2E+XG5cdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL2Fib3V0bWVcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5BYm91dCBNZTwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvY29udGFjdG1lXCIgZXhhY3Q+XG5cdFx0XHRcdCAgPGE+Q29udGFjdCBNZTwvYT5cblx0XHRcdFx0PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0PHJvdXRlci1saW5rIHRhZz1cImxpXCIgdG89XCIvcmVjZW50Y2xpZW50c1wiIGV4YWN0PlxuXHRcdFx0XHQgIDxhPlJlY2VudCBDbGllbnRzPC9hPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi9za2lsbHNcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5Ta2lsbHM8L2E+XG5cdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIHRvPVwiL2Jsb2dcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5CbG9nPC9hPlxuXHRcdFx0XHQ8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgdGFnPVwibGlcIiB0bz1cIi9yZXN1bWVcIiBleGFjdD5cblx0XHRcdFx0ICA8YT5SZXN1bWU8L2E+XG5cdFx0XHRcdDwvcm91dGVyLWxpbms+XG4gICAgICA8L3VsPlxuXHRcdDwvZGl2PlxuXHQ8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjcmVhdGVkOiBmdW5jdGlvbigpe1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbm5hdi5zbWFsbE5hdiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5uYXYgaSB7XG5cdGZvbnQtc2l6ZTogNGVtICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbWFsbG5hdi52dWU/Mzc4MDc5ZjYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnbmF2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsTmF2XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmF2LXdyYXBwZXJcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2lkZS1uYXYgbGVmdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaGVyby1tZW51XCJcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwibGlcIixcbiAgICAgIFwidG9cIjogXCIvb3ZlcnZpZXdcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIk92ZXJ2aWV3XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL2Fib3V0bWVcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIkFib3V0IE1lXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL2NvbnRhY3RtZVwiLFxuICAgICAgXCJleGFjdFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiQ29udGFjdCBNZVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJsaVwiLFxuICAgICAgXCJ0b1wiOiBcIi9yZWNlbnRjbGllbnRzXCIsXG4gICAgICBcImV4YWN0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIFtfdm0uX3YoXCJSZWNlbnQgQ2xpZW50c1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJsaVwiLFxuICAgICAgXCJ0b1wiOiBcIi9za2lsbHNcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIlNraWxsc1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJsaVwiLFxuICAgICAgXCJ0b1wiOiBcIi9ibG9nXCIsXG4gICAgICBcImV4YWN0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIFtfdm0uX3YoXCJCbG9nXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL3Jlc3VtZVwiLFxuICAgICAgXCJleGFjdFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiUmVzdW1lXCIpXSldKV0sIDEpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWNvbGxhcHNlXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImlubGluZVwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiLFxuICAgICAgXCJkYXRhLWFjdGl2YXRlc1wiOiBcImhlcm8tbWVudVwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnMgbWVudS1pY29uXCJcbiAgfSwgW192bS5fdihcIm1lbnVcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjJkYzM3NmZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTIyZGMzNzZmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9zbWFsbG5hdi52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlcm9CR1wiXG4gIH0sIFtfYygnbmF2aWdhdGlvbicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtY29udGFpbmVyXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4LXN1Yi1jb250YWluZXJcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtaXRlbSBvdmVydmlld19idXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJkaXZcIixcbiAgICAgIFwidG9cIjogXCIvb3ZlcnZpZXdcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIk92ZXJ2aWV3XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtaXRlbSBjb250YWN0X2J1dHRvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImRpdlwiLFxuICAgICAgXCJ0b1wiOiBcIi9jb250YWN0bWVcIixcbiAgICAgIFwiZXhhY3RcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIkNvbnRhY3QgTWVcIildKV0pXSwgMSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZy1saW5lLWZsZXhcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWctbGluZS1mbGV4LWl0ZW1cIlxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0RGVhbiBKZW5uaW5ncyAtwqBcXG5cXHRcXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWctbGluZS1mbGV4LWl0ZW0gdGFnLWxpbmUtc2VwYXJhdG9yXCJcbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdMKgLcKgXFxuXFx0XFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnLWxpbmUtZmxleC1pdGVtXCJcbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdEJ1aWxkZXIgb2YgdXNlciBpbnRlcmZhY2VzXFxuXFx0XFx0XFx0XCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNjMGJiZjRkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zYzBiYmY0ZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSGVyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9