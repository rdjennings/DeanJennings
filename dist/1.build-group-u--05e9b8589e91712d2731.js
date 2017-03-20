webpackJsonp([1,4],{

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(122)
	
	/* script */
	__vue_exports__ = __webpack_require__(124)
	
	/* template */
	var __vue_template__ = __webpack_require__(125)
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
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/Overview.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bc4ca068", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-bc4ca068", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Overview.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bc4ca068!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overview.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bc4ca068!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overview.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Overview.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 124:
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
	//
	
	exports.default = {};

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "rdj-panel",
	    attrs: {
	      "stye": "margin: 0 10px;"
	    }
	  }, [_c('h3', [_vm._v("Principal Web Developer / Senior User Interface Architect")]), _vm._v(" "), _c('div', {
	    staticClass: "card-panel"
	  }, [_c('p', [_vm._v("\n\t\t\tI am a highly experienced front end developer and architect with work experience with many major US and European companies in industries including finance, retail, manufacturing and insurance.\n\t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\tI have proven experience in HTML, CSS and JavaScript using major frameworks such as ReactJS and DOM based scripting libraries like jQuery and YUI.\n\t\t")])]), _vm._v(" "), _c('div', {
	    staticClass: "card-panel"
	  }, [_c('p', [_vm._v("\n\t\t\tI avoid using terms like \"dynamic\" and \"highly motivated\" to describe myself.  This stuff is just plain fun.  Whether the platform is mainframe CICS or browser/server based JavaScript, I have built user\n\t\t\tinterfaces for my entire development career.  The immediate feedback is rewarding and the challenge of probem solving in a manner that provides a comfortable user\n\t\t\texperience is satisfying.\n\t\t")])]), _vm._v(" "), _c('div', {
	    staticClass: "card-panel"
	  }, [_c('h3', [_vm._v("\n\t\t\tA note about this site.\n\t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\tI built this site when I was first learning Vue.js (at that point in time this was THE up and comming new technology).  Combined with Bootstrap/Materialize it has a specific look and feel.  It's not the most complex use of a \n\t\t\tcomplex tool like Vue.js but I did not want to simply write a series of \"Hello World\" level pages to learn so this is the result.  By combining it with\n\t\t\tPHP/MySql for the backend this is a stable site that makes no use of any third party services including the simple \"blog\" pages that provide for real-time dynamic/updated-in-place comments.\n\t\t\t"), _c('br'), _c('br'), _vm._v("\n\t\t\tI had planned to re-create the site using React/Redux but had to really learn the nuts and bolts of that platform for a string of client engagements ... and then something new came along and made React a \"second choice\"!\n\t\t\t"), _c('br'), _c('br'), _vm._v("\n\t\t\tSo, you are not seeing the top of my game but a learning experience.\n\t\t")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bc4ca068", module.exports)
	  }
	}

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(127)
	
	/* script */
	__vue_exports__ = __webpack_require__(129)
	
	/* template */
	var __vue_template__ = __webpack_require__(130)
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
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/RecentClients.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-184f502c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-184f502c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] RecentClients.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-184f502c!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecentClients.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-184f502c!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecentClients.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"RecentClients.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 129:
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
	
	exports.default = {};

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "rdj-panel"
	  }, [_c('h3', [_vm._v("A few companies for whom I have recently done work"), _c('sup', [_vm._v("*")])]), _vm._v(" "), _c('div', {
	    staticClass: "card-panel"
	  }, [_c('ul', {
	    staticClass: "browser-default"
	  }, [_c('li', [_vm._v("State Street Bank")]), _vm._v(" "), _c('li', [_vm._v("Goldman Sachs (twice)\n\t\t\t")]), _c('li', [_vm._v("Risk Management Solutions, Inc.")]), _vm._v(" "), _c('li', [_vm._v("Stanford University")]), _vm._v(" "), _c('li', [_vm._v("Asurion")]), _vm._v(" "), _c('li', [_vm._v("Bank of America / Merrill Lynch")]), _vm._v(" "), _c('li', [_vm._v("Schneider Electric")]), _vm._v(" "), _c('li', [_vm._v("FUNDTech")]), _vm._v(" "), _c('li', [_vm._v("1-800-FLOWERS/BloomNet")]), _vm._v(" "), _c('li', [_vm._v("JP Morgan Chase & Co. (multiple locations)")]), _vm._v(" "), _c('li', [_vm._v("Chubb Insurance")]), _vm._v(" "), _c('li', [_vm._v("Benchmark Solutions")]), _vm._v(" "), _c('li', [_vm._v("Community Education Centers")]), _vm._v(" "), _c('li', [_vm._v("Howard Hughes Medical Institute")]), _vm._v(" "), _c('li', [_vm._v("Morgan Stanley, Inc.")]), _vm._v(" "), _c('li', [_vm._v("LeapFrog Enterprises, Inc.")]), _vm._v(" "), _c('li', [_vm._v("Orbitz Worldwide")]), _vm._v(" "), _c('li', [_vm._v("Momentum Market Intelligence")]), _vm._v(" "), _c('li', [_vm._v("Thomson CompuMark")])])]), _vm._v(" "), _c('div', [_c('i', [_c('sup', [_vm._v("*")]), _vm._v("Please be aware that I cannot demostrate any of my work for these clients due to multiple non-disclosure agreements")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-184f502c", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdmVydmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3ZlcnZpZXcudnVlP2RiYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3ZlcnZpZXcudnVlPzk2ZTciLCJ3ZWJwYWNrOi8vL092ZXJ2aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PdmVydmlldy52dWU/OWUwZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRDbGllbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlbnRDbGllbnRzLnZ1ZT8wMDBlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VudENsaWVudHMudnVlP2MwOWIiLCJ3ZWJwYWNrOi8vL1JlY2VudENsaWVudHMudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VudENsaWVudHMudnVlPzRhMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDO0FBQ0Qsa0NBQWlDOztBQUVqQzs7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwySEFBMEgsa0dBQWtHOztBQUU1Tjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEJBOzttQkFFQSxHOzs7Ozs7O0FDdkNBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN0QkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0QsbURBQW1ELElBQUk7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQztBQUNELGtDQUFpQzs7QUFFakM7Ozs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQStHO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EscUhBQW9ILHVHQUF1Rzs7QUFFM047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJCQTs7bUJBRUEsRzs7Ozs7OztBQ3BDQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0EsRUFBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiIxLmJ1aWxkLWdyb3VwLXUtLTA1ZTliODU4OWU5MTcxMmQyNzMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWJjNGNhMDY4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVydmlldy52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL092ZXJ2aWV3LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYmM0Y2EwNjghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vT3ZlcnZpZXcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvcmRqL3NyYy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmM0Y2EwNjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYmM0Y2EwNjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBPdmVydmlldy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYmM0Y2EwNjghLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL092ZXJ2aWV3LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYmM0Y2EwNjghLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL092ZXJ2aWV3LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWJjNGNhMDY4IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVydmlldy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1iYzRjYTA2OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIk92ZXJ2aWV3LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1iYzRjYTA2OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL092ZXJ2aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJkai1wYW5lbFwiIHN0eWU9XCJtYXJnaW46IDAgMTBweDtcIj5cblx0XHQ8aDM+UHJpbmNpcGFsIFdlYiBEZXZlbG9wZXIgLyBTZW5pb3IgVXNlciBJbnRlcmZhY2UgQXJjaGl0ZWN0PC9oMz5cblxuXHRcdDxkaXYgY2xhc3M9XCJjYXJkLXBhbmVsXCI+XG5cdFx0XHQ8cD5cblx0XHRcdFx0SSBhbSBhIGhpZ2hseSBleHBlcmllbmNlZCBmcm9udCBlbmQgZGV2ZWxvcGVyIGFuZCBhcmNoaXRlY3Qgd2l0aCB3b3JrIGV4cGVyaWVuY2Ugd2l0aCBtYW55IG1ham9yIFVTIGFuZCBFdXJvcGVhbiBjb21wYW5pZXMgaW4gaW5kdXN0cmllcyBpbmNsdWRpbmcgZmluYW5jZSwgcmV0YWlsLCBtYW51ZmFjdHVyaW5nIGFuZCBpbnN1cmFuY2UuXG5cdFx0XHQ8L3A+XG5cdFx0XHQ8cD5cblx0XHRcdFx0SSBoYXZlIHByb3ZlbiBleHBlcmllbmNlIGluIEhUTUwsIENTUyBhbmQgSmF2YVNjcmlwdCB1c2luZyBtYWpvciBmcmFtZXdvcmtzIHN1Y2ggYXMgUmVhY3RKUyBhbmQgRE9NIGJhc2VkIHNjcmlwdGluZyBsaWJyYXJpZXMgbGlrZSBqUXVlcnkgYW5kIFlVSS5cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1wYW5lbFwiPlxuXHRcdFx0PHA+XG5cdFx0XHRcdEkgYXZvaWQgdXNpbmcgdGVybXMgbGlrZSBcImR5bmFtaWNcIiBhbmQgXCJoaWdobHkgbW90aXZhdGVkXCIgdG8gZGVzY3JpYmUgbXlzZWxmLiAgVGhpcyBzdHVmZiBpcyBqdXN0IHBsYWluIGZ1bi4gIFdoZXRoZXIgdGhlIHBsYXRmb3JtIGlzIG1haW5mcmFtZSBDSUNTIG9yIGJyb3dzZXIvc2VydmVyIGJhc2VkIEphdmFTY3JpcHQsIEkgaGF2ZSBidWlsdCB1c2VyXG5cdFx0XHRcdGludGVyZmFjZXMgZm9yIG15IGVudGlyZSBkZXZlbG9wbWVudCBjYXJlZXIuICBUaGUgaW1tZWRpYXRlIGZlZWRiYWNrIGlzIHJld2FyZGluZyBhbmQgdGhlIGNoYWxsZW5nZSBvZiBwcm9iZW0gc29sdmluZyBpbiBhIG1hbm5lciB0aGF0IHByb3ZpZGVzIGEgY29tZm9ydGFibGUgdXNlclxuXHRcdFx0XHRleHBlcmllbmNlIGlzIHNhdGlzZnlpbmcuXG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNhcmQtcGFuZWxcIj5cblx0XHRcdDxoMz5cblx0XHRcdFx0QSBub3RlIGFib3V0IHRoaXMgc2l0ZS5cblx0XHRcdDwvaDM+XG5cdFx0XHQ8cD5cblx0XHRcdFx0SSBidWlsdCB0aGlzIHNpdGUgd2hlbiBJIHdhcyBmaXJzdCBsZWFybmluZyBWdWUuanMgKGF0IHRoYXQgcG9pbnQgaW4gdGltZSB0aGlzIHdhcyBUSEUgdXAgYW5kIGNvbW1pbmcgbmV3IHRlY2hub2xvZ3kpLiAgQ29tYmluZWQgd2l0aCBCb290c3RyYXAvTWF0ZXJpYWxpemUgaXQgaGFzIGEgc3BlY2lmaWMgbG9vayBhbmQgZmVlbC4gIEl0J3Mgbm90IHRoZSBtb3N0IGNvbXBsZXggdXNlIG9mIGEgXG5cdFx0XHRcdGNvbXBsZXggdG9vbCBsaWtlIFZ1ZS5qcyBidXQgSSBkaWQgbm90IHdhbnQgdG8gc2ltcGx5IHdyaXRlIGEgc2VyaWVzIG9mIFwiSGVsbG8gV29ybGRcIiBsZXZlbCBwYWdlcyB0byBsZWFybiBzbyB0aGlzIGlzIHRoZSByZXN1bHQuICBCeSBjb21iaW5pbmcgaXQgd2l0aFxuXHRcdFx0XHRQSFAvTXlTcWwgZm9yIHRoZSBiYWNrZW5kIHRoaXMgaXMgYSBzdGFibGUgc2l0ZSB0aGF0IG1ha2VzIG5vIHVzZSBvZiBhbnkgdGhpcmQgcGFydHkgc2VydmljZXMgaW5jbHVkaW5nIHRoZSBzaW1wbGUgXCJibG9nXCIgcGFnZXMgdGhhdCBwcm92aWRlIGZvciByZWFsLXRpbWUgZHluYW1pYy91cGRhdGVkLWluLXBsYWNlIGNvbW1lbnRzLlxuXHRcdFx0XHQ8YnIgLz48YnIgLz5cblx0XHRcdFx0SSBoYWQgcGxhbm5lZCB0byByZS1jcmVhdGUgdGhlIHNpdGUgdXNpbmcgUmVhY3QvUmVkdXggYnV0IGhhZCB0byByZWFsbHkgbGVhcm4gdGhlIG51dHMgYW5kIGJvbHRzIG9mIHRoYXQgcGxhdGZvcm0gZm9yIGEgc3RyaW5nIG9mIGNsaWVudCBlbmdhZ2VtZW50cyAuLi4gYW5kIHRoZW4gc29tZXRoaW5nIG5ldyBjYW1lIGFsb25nIGFuZCBtYWRlIFJlYWN0IGEgXCJzZWNvbmQgY2hvaWNlXCIhXG5cdFx0XHRcdDxiciAvPjxiciAvPlxuXHRcdFx0XHRTbywgeW91IGFyZSBub3Qgc2VlaW5nIHRoZSB0b3Agb2YgbXkgZ2FtZSBidXQgYSBsZWFybmluZyBleHBlcmllbmNlLlxuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE92ZXJ2aWV3LnZ1ZT9kYmEwYmYwMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyZGotcGFuZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzdHllXCI6IFwibWFyZ2luOiAwIDEwcHg7XCJcbiAgICB9XG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwiUHJpbmNpcGFsIFdlYiBEZXZlbG9wZXIgLyBTZW5pb3IgVXNlciBJbnRlcmZhY2UgQXJjaGl0ZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1wYW5lbFwiXG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRJIGFtIGEgaGlnaGx5IGV4cGVyaWVuY2VkIGZyb250IGVuZCBkZXZlbG9wZXIgYW5kIGFyY2hpdGVjdCB3aXRoIHdvcmsgZXhwZXJpZW5jZSB3aXRoIG1hbnkgbWFqb3IgVVMgYW5kIEV1cm9wZWFuIGNvbXBhbmllcyBpbiBpbmR1c3RyaWVzIGluY2x1ZGluZyBmaW5hbmNlLCByZXRhaWwsIG1hbnVmYWN0dXJpbmcgYW5kIGluc3VyYW5jZS5cXG5cXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0SSBoYXZlIHByb3ZlbiBleHBlcmllbmNlIGluIEhUTUwsIENTUyBhbmQgSmF2YVNjcmlwdCB1c2luZyBtYWpvciBmcmFtZXdvcmtzIHN1Y2ggYXMgUmVhY3RKUyBhbmQgRE9NIGJhc2VkIHNjcmlwdGluZyBsaWJyYXJpZXMgbGlrZSBqUXVlcnkgYW5kIFlVSS5cXG5cXHRcXHRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtcGFuZWxcIlxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0SSBhdm9pZCB1c2luZyB0ZXJtcyBsaWtlIFxcXCJkeW5hbWljXFxcIiBhbmQgXFxcImhpZ2hseSBtb3RpdmF0ZWRcXFwiIHRvIGRlc2NyaWJlIG15c2VsZi4gIFRoaXMgc3R1ZmYgaXMganVzdCBwbGFpbiBmdW4uICBXaGV0aGVyIHRoZSBwbGF0Zm9ybSBpcyBtYWluZnJhbWUgQ0lDUyBvciBicm93c2VyL3NlcnZlciBiYXNlZCBKYXZhU2NyaXB0LCBJIGhhdmUgYnVpbHQgdXNlclxcblxcdFxcdFxcdGludGVyZmFjZXMgZm9yIG15IGVudGlyZSBkZXZlbG9wbWVudCBjYXJlZXIuICBUaGUgaW1tZWRpYXRlIGZlZWRiYWNrIGlzIHJld2FyZGluZyBhbmQgdGhlIGNoYWxsZW5nZSBvZiBwcm9iZW0gc29sdmluZyBpbiBhIG1hbm5lciB0aGF0IHByb3ZpZGVzIGEgY29tZm9ydGFibGUgdXNlclxcblxcdFxcdFxcdGV4cGVyaWVuY2UgaXMgc2F0aXNmeWluZy5cXG5cXHRcXHRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtcGFuZWxcIlxuICB9LCBbX2MoJ2gzJywgW192bS5fdihcIlxcblxcdFxcdFxcdEEgbm90ZSBhYm91dCB0aGlzIHNpdGUuXFxuXFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdEkgYnVpbHQgdGhpcyBzaXRlIHdoZW4gSSB3YXMgZmlyc3QgbGVhcm5pbmcgVnVlLmpzIChhdCB0aGF0IHBvaW50IGluIHRpbWUgdGhpcyB3YXMgVEhFIHVwIGFuZCBjb21taW5nIG5ldyB0ZWNobm9sb2d5KS4gIENvbWJpbmVkIHdpdGggQm9vdHN0cmFwL01hdGVyaWFsaXplIGl0IGhhcyBhIHNwZWNpZmljIGxvb2sgYW5kIGZlZWwuICBJdCdzIG5vdCB0aGUgbW9zdCBjb21wbGV4IHVzZSBvZiBhIFxcblxcdFxcdFxcdGNvbXBsZXggdG9vbCBsaWtlIFZ1ZS5qcyBidXQgSSBkaWQgbm90IHdhbnQgdG8gc2ltcGx5IHdyaXRlIGEgc2VyaWVzIG9mIFxcXCJIZWxsbyBXb3JsZFxcXCIgbGV2ZWwgcGFnZXMgdG8gbGVhcm4gc28gdGhpcyBpcyB0aGUgcmVzdWx0LiAgQnkgY29tYmluaW5nIGl0IHdpdGhcXG5cXHRcXHRcXHRQSFAvTXlTcWwgZm9yIHRoZSBiYWNrZW5kIHRoaXMgaXMgYSBzdGFibGUgc2l0ZSB0aGF0IG1ha2VzIG5vIHVzZSBvZiBhbnkgdGhpcmQgcGFydHkgc2VydmljZXMgaW5jbHVkaW5nIHRoZSBzaW1wbGUgXFxcImJsb2dcXFwiIHBhZ2VzIHRoYXQgcHJvdmlkZSBmb3IgcmVhbC10aW1lIGR5bmFtaWMvdXBkYXRlZC1pbi1wbGFjZSBjb21tZW50cy5cXG5cXHRcXHRcXHRcIiksIF9jKCdicicpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuXFx0XFx0XFx0SSBoYWQgcGxhbm5lZCB0byByZS1jcmVhdGUgdGhlIHNpdGUgdXNpbmcgUmVhY3QvUmVkdXggYnV0IGhhZCB0byByZWFsbHkgbGVhcm4gdGhlIG51dHMgYW5kIGJvbHRzIG9mIHRoYXQgcGxhdGZvcm0gZm9yIGEgc3RyaW5nIG9mIGNsaWVudCBlbmdhZ2VtZW50cyAuLi4gYW5kIHRoZW4gc29tZXRoaW5nIG5ldyBjYW1lIGFsb25nIGFuZCBtYWRlIFJlYWN0IGEgXFxcInNlY29uZCBjaG9pY2VcXFwiIVxcblxcdFxcdFxcdFwiKSwgX2MoJ2JyJyksIF9jKCdicicpLCBfdm0uX3YoXCJcXG5cXHRcXHRcXHRTbywgeW91IGFyZSBub3Qgc2VlaW5nIHRoZSB0b3Agb2YgbXkgZ2FtZSBidXQgYSBsZWFybmluZyBleHBlcmllbmNlLlxcblxcdFxcdFwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWJjNGNhMDY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1iYzRjYTA2OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvT3ZlcnZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTE4NGY1MDJjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNlbnRDbGllbnRzLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVjZW50Q2xpZW50cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTE4NGY1MDJjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlY2VudENsaWVudHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvcmRqL3NyYy9jb21wb25lbnRzL1JlY2VudENsaWVudHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xODRmNTAyY1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xODRmNTAyY1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJlY2VudENsaWVudHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9SZWNlbnRDbGllbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTg0ZjUwMmMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlY2VudENsaWVudHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xODRmNTAyYyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVjZW50Q2xpZW50cy52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xODRmNTAyYyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVjZW50Q2xpZW50cy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xODRmNTAyYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1JlY2VudENsaWVudHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiUmVjZW50Q2xpZW50cy52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTg0ZjUwMmMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9SZWNlbnRDbGllbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJkai1wYW5lbFwiPlxuXHRcdDxoMz5BIGZldyBjb21wYW5pZXMgZm9yIHdob20gSSBoYXZlIHJlY2VudGx5IGRvbmUgd29yazxzdXA+Kjwvc3VwPjwvaDM+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cImNhcmQtcGFuZWxcIj5cblx0XHRcdDx1bCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdFwiPlxuXHRcdFx0XHQ8bGk+U3RhdGUgU3RyZWV0IEJhbms8L2xpPlxuXHRcdFx0XHQ8bGk+R29sZG1hbiBTYWNocyAodHdpY2UpXG5cdFx0XHRcdDxsaT5SaXNrIE1hbmFnZW1lbnQgU29sdXRpb25zLCBJbmMuPC9saT5cblx0XHRcdFx0PGxpPlN0YW5mb3JkIFVuaXZlcnNpdHk8L2xpPlxuXHRcdFx0XHQ8bGk+QXN1cmlvbjwvbGk+XG5cdFx0XHRcdDxsaT5CYW5rIG9mIEFtZXJpY2EgLyBNZXJyaWxsIEx5bmNoPC9saT5cblx0XHRcdFx0PGxpPlNjaG5laWRlciBFbGVjdHJpYzwvbGk+XG5cdFx0XHRcdDxsaT5GVU5EVGVjaDwvbGk+XG5cdFx0XHRcdDxsaT4xLTgwMC1GTE9XRVJTL0Jsb29tTmV0PC9saT5cblx0XHRcdFx0PGxpPkpQIE1vcmdhbiBDaGFzZSAmIENvLiAobXVsdGlwbGUgbG9jYXRpb25zKTwvbGk+XG5cdFx0XHRcdDxsaT5DaHViYiBJbnN1cmFuY2U8L2xpPlxuXHRcdFx0XHQ8bGk+QmVuY2htYXJrIFNvbHV0aW9uczwvbGk+XG5cdFx0XHRcdDxsaT5Db21tdW5pdHkgRWR1Y2F0aW9uIENlbnRlcnM8L2xpPlxuXHRcdFx0XHQ8bGk+SG93YXJkIEh1Z2hlcyBNZWRpY2FsIEluc3RpdHV0ZTwvbGk+XG5cdFx0XHRcdDxsaT5Nb3JnYW4gU3RhbmxleSwgSW5jLjwvbGk+XG5cdFx0XHRcdDxsaT5MZWFwRnJvZyBFbnRlcnByaXNlcywgSW5jLjwvbGk+XG5cdFx0XHRcdDxsaT5PcmJpdHogV29ybGR3aWRlPC9saT5cblx0XHRcdFx0PGxpPk1vbWVudHVtIE1hcmtldCBJbnRlbGxpZ2VuY2U8L2xpPlxuXHRcdFx0XHQ8bGk+VGhvbXNvbiBDb21wdU1hcms8L2xpPlxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2PlxuXHRcdFx0PGk+PHN1cD4qPC9zdXA+UGxlYXNlIGJlIGF3YXJlIHRoYXQgSSBjYW5ub3QgZGVtb3N0cmF0ZSBhbnkgb2YgbXkgd29yayBmb3IgdGhlc2UgY2xpZW50cyBkdWUgdG8gbXVsdGlwbGUgbm9uLWRpc2Nsb3N1cmUgYWdyZWVtZW50czwvaT5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJlY2VudENsaWVudHMudnVlPzU0MGE3NGU0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJkai1wYW5lbFwiXG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwiQSBmZXcgY29tcGFuaWVzIGZvciB3aG9tIEkgaGF2ZSByZWNlbnRseSBkb25lIHdvcmtcIiksIF9jKCdzdXAnLCBbX3ZtLl92KFwiKlwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1wYW5lbFwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJvd3Nlci1kZWZhdWx0XCJcbiAgfSwgW19jKCdsaScsIFtfdm0uX3YoXCJTdGF0ZSBTdHJlZXQgQmFua1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiR29sZG1hbiBTYWNocyAodHdpY2UpXFxuXFx0XFx0XFx0XCIpXSksIF9jKCdsaScsIFtfdm0uX3YoXCJSaXNrIE1hbmFnZW1lbnQgU29sdXRpb25zLCBJbmMuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJTdGFuZm9yZCBVbml2ZXJzaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJBc3VyaW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJCYW5rIG9mIEFtZXJpY2EgLyBNZXJyaWxsIEx5bmNoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJTY2huZWlkZXIgRWxlY3RyaWNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIkZVTkRUZWNoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCIxLTgwMC1GTE9XRVJTL0Jsb29tTmV0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJKUCBNb3JnYW4gQ2hhc2UgJiBDby4gKG11bHRpcGxlIGxvY2F0aW9ucylcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIkNodWJiIEluc3VyYW5jZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiQmVuY2htYXJrIFNvbHV0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiQ29tbXVuaXR5IEVkdWNhdGlvbiBDZW50ZXJzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJIb3dhcmQgSHVnaGVzIE1lZGljYWwgSW5zdGl0dXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJNb3JnYW4gU3RhbmxleSwgSW5jLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiTGVhcEZyb2cgRW50ZXJwcmlzZXMsIEluYy5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIk9yYml0eiBXb3JsZHdpZGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIk1vbWVudHVtIE1hcmtldCBJbnRlbGxpZ2VuY2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIlRob21zb24gQ29tcHVNYXJrXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdpJywgW19jKCdzdXAnLCBbX3ZtLl92KFwiKlwiKV0pLCBfdm0uX3YoXCJQbGVhc2UgYmUgYXdhcmUgdGhhdCBJIGNhbm5vdCBkZW1vc3RyYXRlIGFueSBvZiBteSB3b3JrIGZvciB0aGVzZSBjbGllbnRzIGR1ZSB0byBtdWx0aXBsZSBub24tZGlzY2xvc3VyZSBhZ3JlZW1lbnRzXCIpXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTg0ZjUwMmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTE4NGY1MDJjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9SZWNlbnRDbGllbnRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=