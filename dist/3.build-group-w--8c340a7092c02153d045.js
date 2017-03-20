webpackJsonp([3],{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(137)
	
	/* script */
	__vue_exports__ = __webpack_require__(139)
	
	/* template */
	var __vue_template__ = __webpack_require__(140)
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
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/Blog.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-39810af5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-39810af5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Blog.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39810af5!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blog.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39810af5!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.blogContent {\n\toverflow: hidden;\n}\n@media (max-width: 992px) {\n.row.main-content {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\n\t\t-webkit-justify-content: center;\n\t   justify-content: center;\n\n    -webkit-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n}\n}\n", "", {"version":3,"sources":["/./src/components/Blog.vue?1bfe26d0"],"names":[],"mappings":";AAwMA;CACA,iBAAA;CACA;AACA;AACA;EACA,sBAAA;EACA,cAAA;;EAEA,gCAAA;IACA,wBAAA;;IAEA,uCAAA;IACA,+BAAA;CACA;CACA","file":"Blog.vue","sourcesContent":["<template>\n\t<div class=\"rdj-panel\">\n\t\t<div class=\"row main-content\"> \n\t\t    <div class=\"col l8 m12 s12\">\n\t\t    \t<div class=\"blogContent card-panel\">\n\t\t    \t\t<transition name=\"fade\">\n\t\t    \t\t\t<article v-html=\"getBlog\" v-if=\"blogContent !== null\"></article>\n\t\t    \t\t</transition>\n\t\t    \t\t<transition appear name=\"slide-fade\">\n\t\t\t    \t\t<div v-if=\"blogContent === null\">\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tHere you'll find the occasional example of relatively recent work.\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tMost of the work that I have done for clients in the last 8 - 10 years is proprietary and not available for public viewing. That's a shame because, as \n\t\t\t\t    \t\t\ta consultant, a lot of what I have done is pretty fresh and exciting (relative to the general excitement level of UI development).\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tSo, I use this area to provide examples of things that I have done that might be of interest to whomever.\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tFrom time to time the content gets a bit thin.  Once a technique is somewhat outmoded or something that I have done that was extraordinary at the time has become \n\t\t\t\t    \t\t\tcommonplace I tend to remove it.  No point in bragging about something that every 15 year old with a laptop does these days.\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tBut, feel free to browse and, if you don't see anything of interest, use the contact page to contact me and ask about any (UI related) topic.  I'm always up for a challenge!\n\t\t\t\t    \t\t</p>\n\t\t\t    \t\t</div>\n\t\t    \t\t</transition>\n\t\t    \t</div>\n\t\t    </div> \n\t\t    <div class=\"col l4 m12 s12\">\n\t\t    \t<div class=\"card-panel\">\n\t\t    \t\t<transition appear name=\"fade\">\n\t\t\t\t    \t<ul v-if=\"blogList !== null\" class=\"browser-default\">\n\t\t\t\t    \t\t<li v-for=\"blog in blogList\">\n\t\t\t\t    \t\t\t<a :href=\"blog.url\" v-on:click.prevent=\"getBlogEntry\">{{blog.title}}</a>\n\t\t\t\t    \t\t\t<p class=\"p-small\">{{blog.description}}</p>\n\t\t\t\t    \t\t</li>\n\t\t\t\t    \t</ul>\n\t\t\t    \t</transition>\n\t\t    \t</div>\n\t\t    </div> \n\t\t</div>\n\t\t<div class=\"row blog_comments\" v-if=\"comments && comments.length > 0\">\n\t\t\t<div class=\"col s9\">\n\t\t    \t<div class=\"card-panel\">\n\t\t    \t\t<div class=\"panel panel-default\" v-for=\"comment in comments\">\n\t\t    \t\t\t<div class=\"panel-heading\">\n\t\t    \t\t\t\t<h4 class=\"panel-title\">{{comment.name || \"Dean\"}}</h4>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"panel-body\">{{comment.content}}</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t    </div>\n\t\t</div>\n\t\t<div class=\"row\" v-if=\"blogContent !== null\">\n\t\t\t<div class=\"col s9\">\n\t\t    \t<div class=\"card-panel\">\n\t\t\t\t\t<form class=\"simple-form\" v-on:submit.prevent=\"updateBlogComments\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span>Name: </span>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" v-model=\"form.name\" autocomplete=\"off\"/>\n\t\t\t\t\t\t\t<div class=\"error\" v-show=\"nameError\">Name is a required field</div>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\t<label class=\"comment-text-label\">\n\t\t\t\t\t\t\t<span>Comment: </span>\n\t\t\t\t\t\t\t<textarea class=\"comment-text\" name=\"text\" v-model=\"form.text\"></textarea>\n\t\t\t\t\t\t\t<div class=\"error\" v-show=\"textError\">Comment is a required field</div>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<br /><br />\n\t\t\t\t\t\t<button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">\n\t\t\t\t\t\t\tPost Comment\n\t\t\t\t\t    <i class=\"material-icons right\">send</i>\n\t\t\t\t\t  </button>\n\t\t\t\t\t\t<button v-on:click=\"resetForm\" class=\"btn waves-effect waves-light\" type=\"reset\" name=\"action\">\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t  </button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<commontest></commontest>\n\t</div>\n</template>\n\n<script>\nimport { mapState, mapActions, mapGetters } from 'vuex'\n\nfunction initialState () {\n  return {\n\t\tnameError: false,\n\t\ttextError: false,\n\t\tform: {\n\t\t\tname: '',\n\t\t\ttext: ''\n\t\t}\n\t}\n}\nimport commontest from './commonTest.vue'\nexport default {\n\tcomponents: {\n\t\t'commontest': commontest\n\t},\n\tdata () {\n\t\treturn Object.assign({key: null}, initialState())\n\t},\n\tcomputed: {\n\t\t...mapState({\n\t\t\tblogList: state => state.blogList,\n\t\t\tblogContent: state => state.blogContent,\n\t\t\tcomments: state => state.comments\n\t\t}),\n\t\t// we use a console log in the getBlogEntry funcion to demo using a \"getter\"\n\t\t...mapGetters({\n\t\t\tgetBlog: 'getBlogHTML'\n\t\t})\n  },\n\tcreated: function() {\n\t\t$(document).ready(function(){\n\t\t  // the \"href\" attribute of .modal-trigger must specify the modal ID that wants to be triggered\n\t\t  $('.modal').modal();\n  \t});\n\t},\n\tmethods: {\n\t\t...mapActions([\n\t\t\t'fetchBlogList',\n\t\t\t'fetchBlog',\n\t\t\t'fetchComments',\n\t\t\t'updateComments'\n\t\t]),\n\t\tfetchBlogListSuccess: function() {\n\t\t\tconsole.log('blog list retrieved!!')\n\t\t},\n\t\tfetchBlogListError: function() {\n\t\t\tconsole.log('blog list error...', arguments)\n\t\t},\n\t\tgetBlogEntry: function(ev) {\n\t\t\tthis.fetchBlog({\n\t\t\t\tblog: ev.currentTarget.getAttribute('href')\n\t\t\t})\n\n\t\t\tthis.key = ev.currentTarget.innerHTML.replace(/\\s/g, '_');\n\t\t\tconst params = {\n\t\t\t\tkey: this.key\n\t\t\t}\n\t\t\tthis.fetchComments(params)\n\t\t},\n\t\tupdateBlogComments: function(ev) {\n\t\t\tconst name = this.form.name\n\t\t\tconst text = this.form.text\n\t\t\tconst topic = this.key\n\t\t\tconst type = 'user'\n\t\t\tlet errorCnt = 0\n\t\t\tlet responseCode\n\t\t\tif (name.length === 0) {\n\t\t\t\tthis.nameError = true\n\t\t\t\terrorCnt += 1\n\t\t\t} else {\n\t\t\t\tthis.nameError = false\n\t\t\t}\n\t\t\tif (text.length === 0) {\n\t\t\t\tthis.textError = true\n\t\t\t\terrorCnt += 1\n\t\t\t} else {\n\t\t\t\tthis.textError = false\n\t\t\t}\n\t\t\tif (errorCnt > 0) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst fetchComments = this.fetchComments\n\t\t\tconst key = this.key\n\t\t\tconst resetForm = this.resetForm\n\t\t\tconst parms = {\n\t\t\t\tname: name,\n\t\t\t\ttext: text,\n\t\t\t\ttopic: topic,\n\t\t\t\ttype: type,\n\t\t\t\tsuccess: function() {\n\t\t\t\t\tresetForm()\n\t\t\t\t},\n\t\t\t\terror: function(error) {\n\t\t\t\t\tconsole.log('error error:', error)\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.updateComments(parms).then(function (response) {\n\t\t\t\tfetchComments({key: topic})\n\t\t\t})\n\t\t},\n\t\tresetForm: function() {\n\t\t\tObject.assign(this.$data, initialState())\n\t\t}\n\t}\n}\n</script>\n\n<style>\n.blogContent {\n\toverflow: hidden;\n}\n@media (max-width: 992px) {\n\t.row.main-content {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\n\t\t-webkit-justify-content: center;\n\t   justify-content: center;\n\n    -webkit-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n\t}\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends2 = __webpack_require__(65);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _assign = __webpack_require__(66);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _vuex = __webpack_require__(114);
	
	var _commonTest = __webpack_require__(120);
	
	var _commonTest2 = _interopRequireDefault(_commonTest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initialState() {
		return {
			nameError: false,
			textError: false,
			form: {
				name: '',
				text: ''
			}
		};
	} //
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
		components: {
			'commontest': _commonTest2.default
		},
		data: function data() {
			return (0, _assign2.default)({ key: null }, initialState());
		},
	
		computed: (0, _extends3.default)({}, (0, _vuex.mapState)({
			blogList: function blogList(state) {
				return state.blogList;
			},
			blogContent: function blogContent(state) {
				return state.blogContent;
			},
			comments: function comments(state) {
				return state.comments;
			}
		}), (0, _vuex.mapGetters)({
			getBlog: 'getBlogHTML'
		})),
		created: function created() {
			$(document).ready(function () {
				// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
				$('.modal').modal();
			});
		},
		methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['fetchBlogList', 'fetchBlog', 'fetchComments', 'updateComments']), {
			fetchBlogListSuccess: function fetchBlogListSuccess() {
				console.log('blog list retrieved!!');
			},
			fetchBlogListError: function fetchBlogListError() {
				console.log('blog list error...', arguments);
			},
			getBlogEntry: function getBlogEntry(ev) {
				this.fetchBlog({
					blog: ev.currentTarget.getAttribute('href')
				});
	
				this.key = ev.currentTarget.innerHTML.replace(/\s/g, '_');
				var params = {
					key: this.key
				};
				this.fetchComments(params);
			},
			updateBlogComments: function updateBlogComments(ev) {
				var name = this.form.name;
				var text = this.form.text;
				var topic = this.key;
				var type = 'user';
				var errorCnt = 0;
				var responseCode = void 0;
				if (name.length === 0) {
					this.nameError = true;
					errorCnt += 1;
				} else {
					this.nameError = false;
				}
				if (text.length === 0) {
					this.textError = true;
					errorCnt += 1;
				} else {
					this.textError = false;
				}
				if (errorCnt > 0) {
					return;
				}
	
				var fetchComments = this.fetchComments;
				var key = this.key;
				var resetForm = this.resetForm;
				var parms = {
					name: name,
					text: text,
					topic: topic,
					type: type,
					success: function success() {
						resetForm();
					},
					error: function error(_error) {
						console.log('error error:', _error);
					}
				};
	
				this.updateComments(parms).then(function (response) {
					fetchComments({ key: topic });
				});
			},
			resetForm: function resetForm() {
				(0, _assign2.default)(this.$data, initialState());
			}
		})
	};

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "rdj-panel"
	  }, [_c('div', {
	    staticClass: "row main-content"
	  }, [_c('div', {
	    staticClass: "col l8 m12 s12"
	  }, [_c('div', {
	    staticClass: "blogContent card-panel"
	  }, [_c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [(_vm.blogContent !== null) ? _c('article', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.getBlog)
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "appear": "",
	      "name": "slide-fade"
	    }
	  }, [(_vm.blogContent === null) ? _c('div', [_c('p', [_vm._v("\n\t\t\t    \t\t\tHere you'll find the occasional example of relatively recent work.\n\t\t\t    \t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t    \t\t\tMost of the work that I have done for clients in the last 8 - 10 years is proprietary and not available for public viewing. That's a shame because, as \n\t\t\t    \t\t\ta consultant, a lot of what I have done is pretty fresh and exciting (relative to the general excitement level of UI development).\n\t\t\t    \t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t    \t\t\tSo, I use this area to provide examples of things that I have done that might be of interest to whomever.\n\t\t\t    \t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t    \t\t\tFrom time to time the content gets a bit thin.  Once a technique is somewhat outmoded or something that I have done that was extraordinary at the time has become \n\t\t\t    \t\t\tcommonplace I tend to remove it.  No point in bragging about something that every 15 year old with a laptop does these days.\n\t\t\t    \t\t")]), _vm._v(" "), _c('p', [_vm._v("\n\t\t\t    \t\t\tBut, feel free to browse and, if you don't see anything of interest, use the contact page to contact me and ask about any (UI related) topic.  I'm always up for a challenge!\n\t\t\t    \t\t")])]) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "col l4 m12 s12"
	  }, [_c('div', {
	    staticClass: "card-panel"
	  }, [_c('transition', {
	    attrs: {
	      "appear": "",
	      "name": "fade"
	    }
	  }, [(_vm.blogList !== null) ? _c('ul', {
	    staticClass: "browser-default"
	  }, _vm._l((_vm.blogList), function(blog) {
	    return _c('li', [_c('a', {
	      attrs: {
	        "href": blog.url
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.getBlogEntry($event)
	        }
	      }
	    }, [_vm._v(_vm._s(blog.title))]), _vm._v(" "), _c('p', {
	      staticClass: "p-small"
	    }, [_vm._v(_vm._s(blog.description))])])
	  })) : _vm._e()])], 1)])]), _vm._v(" "), (_vm.comments && _vm.comments.length > 0) ? _c('div', {
	    staticClass: "row blog_comments"
	  }, [_c('div', {
	    staticClass: "col s9"
	  }, [_c('div', {
	    staticClass: "card-panel"
	  }, _vm._l((_vm.comments), function(comment) {
	    return _c('div', {
	      staticClass: "panel panel-default"
	    }, [_c('div', {
	      staticClass: "panel-heading"
	    }, [_c('h4', {
	      staticClass: "panel-title"
	    }, [_vm._v(_vm._s(comment.name || "Dean"))])]), _vm._v(" "), _c('div', {
	      staticClass: "panel-body"
	    }, [_vm._v(_vm._s(comment.content))])])
	  }))])]) : _vm._e(), _vm._v(" "), (_vm.blogContent !== null) ? _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col s9"
	  }, [_c('div', {
	    staticClass: "card-panel"
	  }, [_c('form', {
	    staticClass: "simple-form",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.updateBlogComments($event)
	      }
	    }
	  }, [_c('label', [_c('span', [_vm._v("Name: ")]), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.name),
	      expression: "form.name"
	    }],
	    attrs: {
	      "type": "text",
	      "name": "name",
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": _vm._s(_vm.form.name)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.form.name = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.nameError),
	      expression: "nameError"
	    }],
	    staticClass: "error"
	  }, [_vm._v("Name is a required field")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
	    staticClass: "comment-text-label"
	  }, [_c('span', [_vm._v("Comment: ")]), _vm._v(" "), _c('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.text),
	      expression: "form.text"
	    }],
	    staticClass: "comment-text",
	    attrs: {
	      "name": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.form.text)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.form.text = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.textError),
	      expression: "textError"
	    }],
	    staticClass: "error"
	  }, [_vm._v("Comment is a required field")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('button', {
	    staticClass: "btn waves-effect waves-light",
	    attrs: {
	      "type": "reset",
	      "name": "action"
	    },
	    on: {
	      "click": _vm.resetForm
	    }
	  }, [_vm._v("\n\t\t\t\t\t\tReset\n\t\t\t\t  ")])])])])]) : _vm._e(), _vm._v(" "), _c('commontest')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('button', {
	    staticClass: "btn waves-effect waves-light",
	    attrs: {
	      "type": "submit",
	      "name": "action"
	    }
	  }, [_vm._v("\n\t\t\t\t\t\tPost Comment\n\t\t\t\t    "), _c('i', {
	    staticClass: "material-icons right"
	  }, [_vm._v("send")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-39810af5", module.exports)
	  }
	}

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(142)
	
	/* script */
	__vue_exports__ = __webpack_require__(144)
	
	/* template */
	var __vue_template__ = __webpack_require__(145)
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
	__vue_options__.__file = "/Library/WebServer/Documents/rdj/src/components/Resume.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-02afe340", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-02afe340", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Resume.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-02afe340!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resume.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-02afe340!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Resume.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Resume.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 144:
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
	
	exports.default = {};

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "rdj-panel"
	  }, [_c('h3', [_vm._v("Resume")]), _vm._v(" "), _c('div', {
	    staticClass: "card-panel"
	  }, [_c('p', [_vm._v("\n\t\t\tThe downloadable resume that I had here (a pdf) was getting a bit dated.  I have not posted a new version in quite a while.\n\t\t\t"), _c('br'), _c('br'), _vm._v("\n\t\t\tSo, the orginal/editable version is on a server here that is offline.  Once I bring it back online I'll update it and present\n\t\t\tan HTML version as well as a downloadable Word and pdf versions for your reading pleasure.\n\t\t")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-02afe340", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nLnZ1ZT82ZDdiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlPzAwZTAiLCJ3ZWJwYWNrOi8vL0Jsb2cudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlPzQzMDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bWUudnVlPzVlNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZT9iMzg1Iiwid2VicGFjazovLy9SZXN1bWUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Jlc3VtZS52dWU/MzE2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDJDQUEwQyxxQkFBcUIsR0FBRyw2QkFBNkIscUJBQXFCLDRCQUE0QixvQkFBb0Isd0NB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Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxtRkFBa0YsZ0dBQWdHOztBQUVsTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBOzttQkFFQSxHOzs7Ozs7O0FDbkJBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6IjMuYnVpbGQtZ3JvdXAtdy0tOGMzNDBhNzA5MmMwMjE1M2QwNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzk4MTBhZjUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Jsb2cudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9CbG9nLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzk4MTBhZjUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQmxvZy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9yZGovc3JjL2NvbXBvbmVudHMvQmxvZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM5ODEwYWY1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM5ODEwYWY1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQmxvZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOTgxMGFmNSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQmxvZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9CbG9nLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9CbG9nLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQmxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ibG9nQ29udGVudCB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuLnJvdy5tYWluLWNvbnRlbnQge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdFxcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2NvbXBvbmVudHMvQmxvZy52dWU/MWJmZTI2ZDBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdNQTtDQUNBLGlCQUFBO0NBQ0E7QUFDQTtBQUNBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBOztFQUVBLGdDQUFBO0lBQ0Esd0JBQUE7O0lBRUEsdUNBQUE7SUFDQSwrQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcIkJsb2cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyZGotcGFuZWxcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluLWNvbnRlbnRcXFwiPiBcXG5cXHRcXHQgICAgPGRpdiBjbGFzcz1cXFwiY29sIGw4IG0xMiBzMTJcXFwiPlxcblxcdFxcdCAgICBcXHQ8ZGl2IGNsYXNzPVxcXCJibG9nQ29udGVudCBjYXJkLXBhbmVsXFxcIj5cXG5cXHRcXHQgICAgXFx0XFx0PHRyYW5zaXRpb24gbmFtZT1cXFwiZmFkZVxcXCI+XFxuXFx0XFx0ICAgIFxcdFxcdFxcdDxhcnRpY2xlIHYtaHRtbD1cXFwiZ2V0QmxvZ1xcXCIgdi1pZj1cXFwiYmxvZ0NvbnRlbnQgIT09IG51bGxcXFwiPjwvYXJ0aWNsZT5cXG5cXHRcXHQgICAgXFx0XFx0PC90cmFuc2l0aW9uPlxcblxcdFxcdCAgICBcXHRcXHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cXFwic2xpZGUtZmFkZVxcXCI+XFxuXFx0XFx0XFx0ICAgIFxcdFxcdDxkaXYgdi1pZj1cXFwiYmxvZ0NvbnRlbnQgPT09IG51bGxcXFwiPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8cD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0SGVyZSB5b3UnbGwgZmluZCB0aGUgb2NjYXNpb25hbCBleGFtcGxlIG9mIHJlbGF0aXZlbHkgcmVjZW50IHdvcmsuXFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDwvcD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PHA+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdFxcdE1vc3Qgb2YgdGhlIHdvcmsgdGhhdCBJIGhhdmUgZG9uZSBmb3IgY2xpZW50cyBpbiB0aGUgbGFzdCA4IC0gMTAgeWVhcnMgaXMgcHJvcHJpZXRhcnkgYW5kIG5vdCBhdmFpbGFibGUgZm9yIHB1YmxpYyB2aWV3aW5nLiBUaGF0J3MgYSBzaGFtZSBiZWNhdXNlLCBhcyBcXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0YSBjb25zdWx0YW50LCBhIGxvdCBvZiB3aGF0IEkgaGF2ZSBkb25lIGlzIHByZXR0eSBmcmVzaCBhbmQgZXhjaXRpbmcgKHJlbGF0aXZlIHRvIHRoZSBnZW5lcmFsIGV4Y2l0ZW1lbnQgbGV2ZWwgb2YgVUkgZGV2ZWxvcG1lbnQpLlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8L3A+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDxwPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHRcXHRTbywgSSB1c2UgdGhpcyBhcmVhIHRvIHByb3ZpZGUgZXhhbXBsZXMgb2YgdGhpbmdzIHRoYXQgSSBoYXZlIGRvbmUgdGhhdCBtaWdodCBiZSBvZiBpbnRlcmVzdCB0byB3aG9tZXZlci5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PC9wPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8cD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0RnJvbSB0aW1lIHRvIHRpbWUgdGhlIGNvbnRlbnQgZ2V0cyBhIGJpdCB0aGluLiAgT25jZSBhIHRlY2huaXF1ZSBpcyBzb21ld2hhdCBvdXRtb2RlZCBvciBzb21ldGhpbmcgdGhhdCBJIGhhdmUgZG9uZSB0aGF0IHdhcyBleHRyYW9yZGluYXJ5IGF0IHRoZSB0aW1lIGhhcyBiZWNvbWUgXFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdFxcdGNvbW1vbnBsYWNlIEkgdGVuZCB0byByZW1vdmUgaXQuICBObyBwb2ludCBpbiBicmFnZ2luZyBhYm91dCBzb21ldGhpbmcgdGhhdCBldmVyeSAxNSB5ZWFyIG9sZCB3aXRoIGEgbGFwdG9wIGRvZXMgdGhlc2UgZGF5cy5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PC9wPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8cD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0QnV0LCBmZWVsIGZyZWUgdG8gYnJvd3NlIGFuZCwgaWYgeW91IGRvbid0IHNlZSBhbnl0aGluZyBvZiBpbnRlcmVzdCwgdXNlIHRoZSBjb250YWN0IHBhZ2UgdG8gY29udGFjdCBtZSBhbmQgYXNrIGFib3V0IGFueSAoVUkgcmVsYXRlZCkgdG9waWMuICBJJ20gYWx3YXlzIHVwIGZvciBhIGNoYWxsZW5nZSFcXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PC9wPlxcblxcdFxcdFxcdCAgICBcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQgICAgXFx0XFx0PC90cmFuc2l0aW9uPlxcblxcdFxcdCAgICBcXHQ8L2Rpdj5cXG5cXHRcXHQgICAgPC9kaXY+IFxcblxcdFxcdCAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgbDQgbTEyIHMxMlxcXCI+XFxuXFx0XFx0ICAgIFxcdDxkaXYgY2xhc3M9XFxcImNhcmQtcGFuZWxcXFwiPlxcblxcdFxcdCAgICBcXHRcXHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cXFwiZmFkZVxcXCI+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdDx1bCB2LWlmPVxcXCJibG9nTGlzdCAhPT0gbnVsbFxcXCIgY2xhc3M9XFxcImJyb3dzZXItZGVmYXVsdFxcXCI+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDxsaSB2LWZvcj1cXFwiYmxvZyBpbiBibG9nTGlzdFxcXCI+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdFxcdDxhIDpocmVmPVxcXCJibG9nLnVybFxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJnZXRCbG9nRW50cnlcXFwiPnt7YmxvZy50aXRsZX19PC9hPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHRcXHQ8cCBjbGFzcz1cXFwicC1zbWFsbFxcXCI+e3tibG9nLmRlc2NyaXB0aW9ufX08L3A+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDwvbGk+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdDwvdWw+XFxuXFx0XFx0XFx0ICAgIFxcdDwvdHJhbnNpdGlvbj5cXG5cXHRcXHQgICAgXFx0PC9kaXY+XFxuXFx0XFx0ICAgIDwvZGl2PiBcXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3cgYmxvZ19jb21tZW50c1xcXCIgdi1pZj1cXFwiY29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RoID4gMFxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sIHM5XFxcIj5cXG5cXHRcXHQgICAgXFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbFxcXCI+XFxuXFx0XFx0ICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiIHYtZm9yPVxcXCJjb21tZW50IGluIGNvbW1lbnRzXFxcIj5cXG5cXHRcXHQgICAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxuXFx0XFx0ICAgIFxcdFxcdFxcdFxcdDxoNCBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPnt7Y29tbWVudC5uYW1lIHx8IFxcXCJEZWFuXFxcIn19PC9oND5cXG5cXHRcXHQgICAgXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0ICAgIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPnt7Y29tbWVudC5jb250ZW50fX08L2Rpdj5cXG5cXHRcXHQgICAgXFx0XFx0PC9kaXY+XFxuXFx0XFx0ICAgIFxcdDwvZGl2PlxcblxcdFxcdCAgICA8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImJsb2dDb250ZW50ICE9PSBudWxsXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2wgczlcXFwiPlxcblxcdFxcdCAgICBcXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwic2ltcGxlLWZvcm1cXFwiIHYtb246c3VibWl0LnByZXZlbnQ9XFxcInVwZGF0ZUJsb2dDb21tZW50c1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuPk5hbWU6IDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgdi1tb2RlbD1cXFwiZm9ybS5uYW1lXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVycm9yXFxcIiB2LXNob3c9XFxcIm5hbWVFcnJvclxcXCI+TmFtZSBpcyBhIHJlcXVpcmVkIGZpZWxkPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9sYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YnIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcImNvbW1lbnQtdGV4dC1sYWJlbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4+Q29tbWVudDogPC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZXh0YXJlYSBjbGFzcz1cXFwiY29tbWVudC10ZXh0XFxcIiBuYW1lPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJmb3JtLnRleHRcXFwiPjwvdGV4dGFyZWE+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZXJyb3JcXFwiIHYtc2hvdz1cXFwidGV4dEVycm9yXFxcIj5Db21tZW50IGlzIGEgcmVxdWlyZWQgZmllbGQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxiciAvPjxiciAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgbmFtZT1cXFwiYWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRQb3N0IENvbW1lbnRcXG5cXHRcXHRcXHRcXHRcXHQgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zIHJpZ2h0XFxcIj5zZW5kPC9pPlxcblxcdFxcdFxcdFxcdFxcdCAgPC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiB2LW9uOmNsaWNrPVxcXCJyZXNldEZvcm1cXFwiIGNsYXNzPVxcXCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XFxcIiB0eXBlPVxcXCJyZXNldFxcXCIgbmFtZT1cXFwiYWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRSZXNldFxcblxcdFxcdFxcdFxcdFxcdCAgPC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PC9mb3JtPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxjb21tb250ZXN0PjwvY29tbW9udGVzdD5cXG5cXHQ8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcblxcbmZ1bmN0aW9uIGluaXRpYWxTdGF0ZSAoKSB7XFxuICByZXR1cm4ge1xcblxcdFxcdG5hbWVFcnJvcjogZmFsc2UsXFxuXFx0XFx0dGV4dEVycm9yOiBmYWxzZSxcXG5cXHRcXHRmb3JtOiB7XFxuXFx0XFx0XFx0bmFtZTogJycsXFxuXFx0XFx0XFx0dGV4dDogJydcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5pbXBvcnQgY29tbW9udGVzdCBmcm9tICcuL2NvbW1vblRlc3QudnVlJ1xcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXHRjb21wb25lbnRzOiB7XFxuXFx0XFx0J2NvbW1vbnRlc3QnOiBjb21tb250ZXN0XFxuXFx0fSxcXG5cXHRkYXRhICgpIHtcXG5cXHRcXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7a2V5OiBudWxsfSwgaW5pdGlhbFN0YXRlKCkpXFxuXFx0fSxcXG5cXHRjb21wdXRlZDoge1xcblxcdFxcdC4uLm1hcFN0YXRlKHtcXG5cXHRcXHRcXHRibG9nTGlzdDogc3RhdGUgPT4gc3RhdGUuYmxvZ0xpc3QsXFxuXFx0XFx0XFx0YmxvZ0NvbnRlbnQ6IHN0YXRlID0+IHN0YXRlLmJsb2dDb250ZW50LFxcblxcdFxcdFxcdGNvbW1lbnRzOiBzdGF0ZSA9PiBzdGF0ZS5jb21tZW50c1xcblxcdFxcdH0pLFxcblxcdFxcdC8vIHdlIHVzZSBhIGNvbnNvbGUgbG9nIGluIHRoZSBnZXRCbG9nRW50cnkgZnVuY2lvbiB0byBkZW1vIHVzaW5nIGEgXFxcImdldHRlclxcXCJcXG5cXHRcXHQuLi5tYXBHZXR0ZXJzKHtcXG5cXHRcXHRcXHRnZXRCbG9nOiAnZ2V0QmxvZ0hUTUwnXFxuXFx0XFx0fSlcXG4gIH0sXFxuXFx0Y3JlYXRlZDogZnVuY3Rpb24oKSB7XFxuXFx0XFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcXG5cXHRcXHQgIC8vIHRoZSBcXFwiaHJlZlxcXCIgYXR0cmlidXRlIG9mIC5tb2RhbC10cmlnZ2VyIG11c3Qgc3BlY2lmeSB0aGUgbW9kYWwgSUQgdGhhdCB3YW50cyB0byBiZSB0cmlnZ2VyZWRcXG5cXHRcXHQgICQoJy5tb2RhbCcpLm1vZGFsKCk7XFxuICBcXHR9KTtcXG5cXHR9LFxcblxcdG1ldGhvZHM6IHtcXG5cXHRcXHQuLi5tYXBBY3Rpb25zKFtcXG5cXHRcXHRcXHQnZmV0Y2hCbG9nTGlzdCcsXFxuXFx0XFx0XFx0J2ZldGNoQmxvZycsXFxuXFx0XFx0XFx0J2ZldGNoQ29tbWVudHMnLFxcblxcdFxcdFxcdCd1cGRhdGVDb21tZW50cydcXG5cXHRcXHRdKSxcXG5cXHRcXHRmZXRjaEJsb2dMaXN0U3VjY2VzczogZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0Y29uc29sZS5sb2coJ2Jsb2cgbGlzdCByZXRyaWV2ZWQhIScpXFxuXFx0XFx0fSxcXG5cXHRcXHRmZXRjaEJsb2dMaXN0RXJyb3I6IGZ1bmN0aW9uKCkge1xcblxcdFxcdFxcdGNvbnNvbGUubG9nKCdibG9nIGxpc3QgZXJyb3IuLi4nLCBhcmd1bWVudHMpXFxuXFx0XFx0fSxcXG5cXHRcXHRnZXRCbG9nRW50cnk6IGZ1bmN0aW9uKGV2KSB7XFxuXFx0XFx0XFx0dGhpcy5mZXRjaEJsb2coe1xcblxcdFxcdFxcdFxcdGJsb2c6IGV2LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJylcXG5cXHRcXHRcXHR9KVxcblxcblxcdFxcdFxcdHRoaXMua2V5ID0gZXYuY3VycmVudFRhcmdldC5pbm5lckhUTUwucmVwbGFjZSgvXFxcXHMvZywgJ18nKTtcXG5cXHRcXHRcXHRjb25zdCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0a2V5OiB0aGlzLmtleVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHR0aGlzLmZldGNoQ29tbWVudHMocGFyYW1zKVxcblxcdFxcdH0sXFxuXFx0XFx0dXBkYXRlQmxvZ0NvbW1lbnRzOiBmdW5jdGlvbihldikge1xcblxcdFxcdFxcdGNvbnN0IG5hbWUgPSB0aGlzLmZvcm0ubmFtZVxcblxcdFxcdFxcdGNvbnN0IHRleHQgPSB0aGlzLmZvcm0udGV4dFxcblxcdFxcdFxcdGNvbnN0IHRvcGljID0gdGhpcy5rZXlcXG5cXHRcXHRcXHRjb25zdCB0eXBlID0gJ3VzZXInXFxuXFx0XFx0XFx0bGV0IGVycm9yQ250ID0gMFxcblxcdFxcdFxcdGxldCByZXNwb25zZUNvZGVcXG5cXHRcXHRcXHRpZiAobmFtZS5sZW5ndGggPT09IDApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLm5hbWVFcnJvciA9IHRydWVcXG5cXHRcXHRcXHRcXHRlcnJvckNudCArPSAxXFxuXFx0XFx0XFx0fSBlbHNlIHtcXG5cXHRcXHRcXHRcXHR0aGlzLm5hbWVFcnJvciA9IGZhbHNlXFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xcblxcdFxcdFxcdFxcdHRoaXMudGV4dEVycm9yID0gdHJ1ZVxcblxcdFxcdFxcdFxcdGVycm9yQ250ICs9IDFcXG5cXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdHRoaXMudGV4dEVycm9yID0gZmFsc2VcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0aWYgKGVycm9yQ250ID4gMCkge1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Y29uc3QgZmV0Y2hDb21tZW50cyA9IHRoaXMuZmV0Y2hDb21tZW50c1xcblxcdFxcdFxcdGNvbnN0IGtleSA9IHRoaXMua2V5XFxuXFx0XFx0XFx0Y29uc3QgcmVzZXRGb3JtID0gdGhpcy5yZXNldEZvcm1cXG5cXHRcXHRcXHRjb25zdCBwYXJtcyA9IHtcXG5cXHRcXHRcXHRcXHRuYW1lOiBuYW1lLFxcblxcdFxcdFxcdFxcdHRleHQ6IHRleHQsXFxuXFx0XFx0XFx0XFx0dG9waWM6IHRvcGljLFxcblxcdFxcdFxcdFxcdHR5cGU6IHR5cGUsXFxuXFx0XFx0XFx0XFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0XFx0cmVzZXRGb3JtKClcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xcblxcdFxcdFxcdFxcdFxcdGNvbnNvbGUubG9nKCdlcnJvciBlcnJvcjonLCBlcnJvcilcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMudXBkYXRlQ29tbWVudHMocGFybXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuXFx0XFx0XFx0XFx0ZmV0Y2hDb21tZW50cyh7a2V5OiB0b3BpY30pXFxuXFx0XFx0XFx0fSlcXG5cXHRcXHR9LFxcblxcdFxcdHJlc2V0Rm9ybTogZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0T2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBpbml0aWFsU3RhdGUoKSlcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJsb2dDb250ZW50IHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG5cXHQucm93Lm1haW4tY29udGVudCB7XFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0XFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHR9XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOTgxMGFmNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicmRqLXBhbmVsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvdyBtYWluLWNvbnRlbnRcIj4gXG5cdFx0ICAgIDxkaXYgY2xhc3M9XCJjb2wgbDggbTEyIHMxMlwiPlxuXHRcdCAgICBcdDxkaXYgY2xhc3M9XCJibG9nQ29udGVudCBjYXJkLXBhbmVsXCI+XG5cdFx0ICAgIFx0XHQ8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxuXHRcdCAgICBcdFx0XHQ8YXJ0aWNsZSB2LWh0bWw9XCJnZXRCbG9nXCIgdi1pZj1cImJsb2dDb250ZW50ICE9PSBudWxsXCI+PC9hcnRpY2xlPlxuXHRcdCAgICBcdFx0PC90cmFuc2l0aW9uPlxuXHRcdCAgICBcdFx0PHRyYW5zaXRpb24gYXBwZWFyIG5hbWU9XCJzbGlkZS1mYWRlXCI+XG5cdFx0XHQgICAgXHRcdDxkaXYgdi1pZj1cImJsb2dDb250ZW50ID09PSBudWxsXCI+XG5cdFx0XHRcdCAgICBcdFx0PHA+XG5cdFx0XHRcdCAgICBcdFx0XHRIZXJlIHlvdSdsbCBmaW5kIHRoZSBvY2Nhc2lvbmFsIGV4YW1wbGUgb2YgcmVsYXRpdmVseSByZWNlbnQgd29yay5cblx0XHRcdFx0ICAgIFx0XHQ8L3A+XG5cdFx0XHRcdCAgICBcdFx0PHA+XG5cdFx0XHRcdCAgICBcdFx0XHRNb3N0IG9mIHRoZSB3b3JrIHRoYXQgSSBoYXZlIGRvbmUgZm9yIGNsaWVudHMgaW4gdGhlIGxhc3QgOCAtIDEwIHllYXJzIGlzIHByb3ByaWV0YXJ5IGFuZCBub3QgYXZhaWxhYmxlIGZvciBwdWJsaWMgdmlld2luZy4gVGhhdCdzIGEgc2hhbWUgYmVjYXVzZSwgYXMgXG5cdFx0XHRcdCAgICBcdFx0XHRhIGNvbnN1bHRhbnQsIGEgbG90IG9mIHdoYXQgSSBoYXZlIGRvbmUgaXMgcHJldHR5IGZyZXNoIGFuZCBleGNpdGluZyAocmVsYXRpdmUgdG8gdGhlIGdlbmVyYWwgZXhjaXRlbWVudCBsZXZlbCBvZiBVSSBkZXZlbG9wbWVudCkuXG5cdFx0XHRcdCAgICBcdFx0PC9wPlxuXHRcdFx0XHQgICAgXHRcdDxwPlxuXHRcdFx0XHQgICAgXHRcdFx0U28sIEkgdXNlIHRoaXMgYXJlYSB0byBwcm92aWRlIGV4YW1wbGVzIG9mIHRoaW5ncyB0aGF0IEkgaGF2ZSBkb25lIHRoYXQgbWlnaHQgYmUgb2YgaW50ZXJlc3QgdG8gd2hvbWV2ZXIuXG5cdFx0XHRcdCAgICBcdFx0PC9wPlxuXHRcdFx0XHQgICAgXHRcdDxwPlxuXHRcdFx0XHQgICAgXHRcdFx0RnJvbSB0aW1lIHRvIHRpbWUgdGhlIGNvbnRlbnQgZ2V0cyBhIGJpdCB0aGluLiAgT25jZSBhIHRlY2huaXF1ZSBpcyBzb21ld2hhdCBvdXRtb2RlZCBvciBzb21ldGhpbmcgdGhhdCBJIGhhdmUgZG9uZSB0aGF0IHdhcyBleHRyYW9yZGluYXJ5IGF0IHRoZSB0aW1lIGhhcyBiZWNvbWUgXG5cdFx0XHRcdCAgICBcdFx0XHRjb21tb25wbGFjZSBJIHRlbmQgdG8gcmVtb3ZlIGl0LiAgTm8gcG9pbnQgaW4gYnJhZ2dpbmcgYWJvdXQgc29tZXRoaW5nIHRoYXQgZXZlcnkgMTUgeWVhciBvbGQgd2l0aCBhIGxhcHRvcCBkb2VzIHRoZXNlIGRheXMuXG5cdFx0XHRcdCAgICBcdFx0PC9wPlxuXHRcdFx0XHQgICAgXHRcdDxwPlxuXHRcdFx0XHQgICAgXHRcdFx0QnV0LCBmZWVsIGZyZWUgdG8gYnJvd3NlIGFuZCwgaWYgeW91IGRvbid0IHNlZSBhbnl0aGluZyBvZiBpbnRlcmVzdCwgdXNlIHRoZSBjb250YWN0IHBhZ2UgdG8gY29udGFjdCBtZSBhbmQgYXNrIGFib3V0IGFueSAoVUkgcmVsYXRlZCkgdG9waWMuICBJJ20gYWx3YXlzIHVwIGZvciBhIGNoYWxsZW5nZSFcblx0XHRcdFx0ICAgIFx0XHQ8L3A+XG5cdFx0XHQgICAgXHRcdDwvZGl2PlxuXHRcdCAgICBcdFx0PC90cmFuc2l0aW9uPlxuXHRcdCAgICBcdDwvZGl2PlxuXHRcdCAgICA8L2Rpdj4gXG5cdFx0ICAgIDxkaXYgY2xhc3M9XCJjb2wgbDQgbTEyIHMxMlwiPlxuXHRcdCAgICBcdDxkaXYgY2xhc3M9XCJjYXJkLXBhbmVsXCI+XG5cdFx0ICAgIFx0XHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cImZhZGVcIj5cblx0XHRcdFx0ICAgIFx0PHVsIHYtaWY9XCJibG9nTGlzdCAhPT0gbnVsbFwiIGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCI+XG5cdFx0XHRcdCAgICBcdFx0PGxpIHYtZm9yPVwiYmxvZyBpbiBibG9nTGlzdFwiPlxuXHRcdFx0XHQgICAgXHRcdFx0PGEgOmhyZWY9XCJibG9nLnVybFwiIHYtb246Y2xpY2sucHJldmVudD1cImdldEJsb2dFbnRyeVwiPnt7YmxvZy50aXRsZX19PC9hPlxuXHRcdFx0XHQgICAgXHRcdFx0PHAgY2xhc3M9XCJwLXNtYWxsXCI+e3tibG9nLmRlc2NyaXB0aW9ufX08L3A+XG5cdFx0XHRcdCAgICBcdFx0PC9saT5cblx0XHRcdFx0ICAgIFx0PC91bD5cblx0XHRcdCAgICBcdDwvdHJhbnNpdGlvbj5cblx0XHQgICAgXHQ8L2Rpdj5cblx0XHQgICAgPC9kaXY+IFxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgYmxvZ19jb21tZW50c1wiIHYtaWY9XCJjb21tZW50cyAmJiBjb21tZW50cy5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHM5XCI+XG5cdFx0ICAgIFx0PGRpdiBjbGFzcz1cImNhcmQtcGFuZWxcIj5cblx0XHQgICAgXHRcdDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgdi1mb3I9XCJjb21tZW50IGluIGNvbW1lbnRzXCI+XG5cdFx0ICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG5cdFx0ICAgIFx0XHRcdFx0PGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj57e2NvbW1lbnQubmFtZSB8fCBcIkRlYW5cIn19PC9oND5cblx0XHQgICAgXHRcdFx0PC9kaXY+XG5cdFx0ICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+e3tjb21tZW50LmNvbnRlbnR9fTwvZGl2PlxuXHRcdCAgICBcdFx0PC9kaXY+XG5cdFx0ICAgIFx0PC9kaXY+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiYmxvZ0NvbnRlbnQgIT09IG51bGxcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczlcIj5cblx0XHQgICAgXHQ8ZGl2IGNsYXNzPVwiY2FyZC1wYW5lbFwiPlxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzPVwic2ltcGxlLWZvcm1cIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlQmxvZ0NvbW1lbnRzXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPk5hbWU6IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LXNob3c9XCJuYW1lRXJyb3JcIj5OYW1lIGlzIGEgcmVxdWlyZWQgZmllbGQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImNvbW1lbnQtdGV4dC1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5Db21tZW50OiA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImNvbW1lbnQtdGV4dFwiIG5hbWU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0udGV4dFwiPjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtc2hvdz1cInRleHRFcnJvclwiPkNvbW1lbnQgaXMgYSByZXF1aXJlZCBmaWVsZDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxiciAvPjxiciAvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRQb3N0IENvbW1lbnRcblx0XHRcdFx0XHQgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPnNlbmQ8L2k+XG5cdFx0XHRcdFx0ICA8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gdi1vbjpjbGljaz1cInJlc2V0Rm9ybVwiIGNsYXNzPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIHR5cGU9XCJyZXNldFwiIG5hbWU9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0UmVzZXRcblx0XHRcdFx0XHQgIDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8Y29tbW9udGVzdD48L2NvbW1vbnRlc3Q+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZnVuY3Rpb24gaW5pdGlhbFN0YXRlICgpIHtcbiAgcmV0dXJuIHtcblx0XHRuYW1lRXJyb3I6IGZhbHNlLFxuXHRcdHRleHRFcnJvcjogZmFsc2UsXG5cdFx0Zm9ybToge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHR0ZXh0OiAnJ1xuXHRcdH1cblx0fVxufVxuaW1wb3J0IGNvbW1vbnRlc3QgZnJvbSAnLi9jb21tb25UZXN0LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcG9uZW50czoge1xuXHRcdCdjb21tb250ZXN0JzogY29tbW9udGVzdFxuXHR9LFxuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7a2V5OiBudWxsfSwgaW5pdGlhbFN0YXRlKCkpXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwU3RhdGUoe1xuXHRcdFx0YmxvZ0xpc3Q6IHN0YXRlID0+IHN0YXRlLmJsb2dMaXN0LFxuXHRcdFx0YmxvZ0NvbnRlbnQ6IHN0YXRlID0+IHN0YXRlLmJsb2dDb250ZW50LFxuXHRcdFx0Y29tbWVudHM6IHN0YXRlID0+IHN0YXRlLmNvbW1lbnRzXG5cdFx0fSksXG5cdFx0Ly8gd2UgdXNlIGEgY29uc29sZSBsb2cgaW4gdGhlIGdldEJsb2dFbnRyeSBmdW5jaW9uIHRvIGRlbW8gdXNpbmcgYSBcImdldHRlclwiXG5cdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRnZXRCbG9nOiAnZ2V0QmxvZ0hUTUwnXG5cdFx0fSlcbiAgfSxcblx0Y3JlYXRlZDogZnVuY3Rpb24oKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0XHQgIC8vIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgLm1vZGFsLXRyaWdnZXIgbXVzdCBzcGVjaWZ5IHRoZSBtb2RhbCBJRCB0aGF0IHdhbnRzIHRvIGJlIHRyaWdnZXJlZFxuXHRcdCAgJCgnLm1vZGFsJykubW9kYWwoKTtcbiAgXHR9KTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC4uLm1hcEFjdGlvbnMoW1xuXHRcdFx0J2ZldGNoQmxvZ0xpc3QnLFxuXHRcdFx0J2ZldGNoQmxvZycsXG5cdFx0XHQnZmV0Y2hDb21tZW50cycsXG5cdFx0XHQndXBkYXRlQ29tbWVudHMnXG5cdFx0XSksXG5cdFx0ZmV0Y2hCbG9nTGlzdFN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Jsb2cgbGlzdCByZXRyaWV2ZWQhIScpXG5cdFx0fSxcblx0XHRmZXRjaEJsb2dMaXN0RXJyb3I6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Jsb2cgbGlzdCBlcnJvci4uLicsIGFyZ3VtZW50cylcblx0XHR9LFxuXHRcdGdldEJsb2dFbnRyeTogZnVuY3Rpb24oZXYpIHtcblx0XHRcdHRoaXMuZmV0Y2hCbG9nKHtcblx0XHRcdFx0YmxvZzogZXYuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5rZXkgPSBldi5jdXJyZW50VGFyZ2V0LmlubmVySFRNTC5yZXBsYWNlKC9cXHMvZywgJ18nKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0a2V5OiB0aGlzLmtleVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5mZXRjaENvbW1lbnRzKHBhcmFtcylcblx0XHR9LFxuXHRcdHVwZGF0ZUJsb2dDb21tZW50czogZnVuY3Rpb24oZXYpIHtcblx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLmZvcm0ubmFtZVxuXHRcdFx0Y29uc3QgdGV4dCA9IHRoaXMuZm9ybS50ZXh0XG5cdFx0XHRjb25zdCB0b3BpYyA9IHRoaXMua2V5XG5cdFx0XHRjb25zdCB0eXBlID0gJ3VzZXInXG5cdFx0XHRsZXQgZXJyb3JDbnQgPSAwXG5cdFx0XHRsZXQgcmVzcG9uc2VDb2RlXG5cdFx0XHRpZiAobmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5uYW1lRXJyb3IgPSB0cnVlXG5cdFx0XHRcdGVycm9yQ250ICs9IDFcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubmFtZUVycm9yID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnRleHRFcnJvciA9IHRydWVcblx0XHRcdFx0ZXJyb3JDbnQgKz0gMVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy50ZXh0RXJyb3IgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdFx0aWYgKGVycm9yQ250ID4gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZldGNoQ29tbWVudHMgPSB0aGlzLmZldGNoQ29tbWVudHNcblx0XHRcdGNvbnN0IGtleSA9IHRoaXMua2V5XG5cdFx0XHRjb25zdCByZXNldEZvcm0gPSB0aGlzLnJlc2V0Rm9ybVxuXHRcdFx0Y29uc3QgcGFybXMgPSB7XG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdHRleHQ6IHRleHQsXG5cdFx0XHRcdHRvcGljOiB0b3BpYyxcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVzZXRGb3JtKClcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGVycm9yOicsIGVycm9yKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudXBkYXRlQ29tbWVudHMocGFybXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGZldGNoQ29tbWVudHMoe2tleTogdG9waWN9KVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdHJlc2V0Rm9ybTogZnVuY3Rpb24oKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuJGRhdGEsIGluaXRpYWxTdGF0ZSgpKVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5ibG9nQ29udGVudCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcblx0LnJvdy5tYWluLWNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdH1cbn1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEJsb2cudnVlPzFiZmUyNmQwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyZGotcGFuZWxcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgbWFpbi1jb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIGw4IG0xMiBzMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9nQ29udGVudCBjYXJkLXBhbmVsXCJcbiAgfSwgW19jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFsoX3ZtLmJsb2dDb250ZW50ICE9PSBudWxsKSA/IF9jKCdhcnRpY2xlJywge1xuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmdldEJsb2cpXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFwcGVhclwiOiBcIlwiLFxuICAgICAgXCJuYW1lXCI6IFwic2xpZGUtZmFkZVwiXG4gICAgfVxuICB9LCBbKF92bS5ibG9nQ29udGVudCA9PT0gbnVsbCkgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRcXHRIZXJlIHlvdSdsbCBmaW5kIHRoZSBvY2Nhc2lvbmFsIGV4YW1wbGUgb2YgcmVsYXRpdmVseSByZWNlbnQgd29yay5cXG5cXHRcXHRcXHQgICAgXFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRcXHRNb3N0IG9mIHRoZSB3b3JrIHRoYXQgSSBoYXZlIGRvbmUgZm9yIGNsaWVudHMgaW4gdGhlIGxhc3QgOCAtIDEwIHllYXJzIGlzIHByb3ByaWV0YXJ5IGFuZCBub3QgYXZhaWxhYmxlIGZvciBwdWJsaWMgdmlld2luZy4gVGhhdCdzIGEgc2hhbWUgYmVjYXVzZSwgYXMgXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFxcdGEgY29uc3VsdGFudCwgYSBsb3Qgb2Ygd2hhdCBJIGhhdmUgZG9uZSBpcyBwcmV0dHkgZnJlc2ggYW5kIGV4Y2l0aW5nIChyZWxhdGl2ZSB0byB0aGUgZ2VuZXJhbCBleGNpdGVtZW50IGxldmVsIG9mIFVJIGRldmVsb3BtZW50KS5cXG5cXHRcXHRcXHQgICAgXFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRcXHRTbywgSSB1c2UgdGhpcyBhcmVhIHRvIHByb3ZpZGUgZXhhbXBsZXMgb2YgdGhpbmdzIHRoYXQgSSBoYXZlIGRvbmUgdGhhdCBtaWdodCBiZSBvZiBpbnRlcmVzdCB0byB3aG9tZXZlci5cXG5cXHRcXHRcXHQgICAgXFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRcXHRGcm9tIHRpbWUgdG8gdGltZSB0aGUgY29udGVudCBnZXRzIGEgYml0IHRoaW4uICBPbmNlIGEgdGVjaG5pcXVlIGlzIHNvbWV3aGF0IG91dG1vZGVkIG9yIHNvbWV0aGluZyB0aGF0IEkgaGF2ZSBkb25lIHRoYXQgd2FzIGV4dHJhb3JkaW5hcnkgYXQgdGhlIHRpbWUgaGFzIGJlY29tZSBcXG5cXHRcXHRcXHQgICAgXFx0XFx0XFx0Y29tbW9ucGxhY2UgSSB0ZW5kIHRvIHJlbW92ZSBpdC4gIE5vIHBvaW50IGluIGJyYWdnaW5nIGFib3V0IHNvbWV0aGluZyB0aGF0IGV2ZXJ5IDE1IHllYXIgb2xkIHdpdGggYSBsYXB0b3AgZG9lcyB0aGVzZSBkYXlzLlxcblxcdFxcdFxcdCAgICBcXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFxcdEJ1dCwgZmVlbCBmcmVlIHRvIGJyb3dzZSBhbmQsIGlmIHlvdSBkb24ndCBzZWUgYW55dGhpbmcgb2YgaW50ZXJlc3QsIHVzZSB0aGUgY29udGFjdCBwYWdlIHRvIGNvbnRhY3QgbWUgYW5kIGFzayBhYm91dCBhbnkgKFVJIHJlbGF0ZWQpIHRvcGljLiAgSSdtIGFsd2F5cyB1cCBmb3IgYSBjaGFsbGVuZ2UhXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFwiKV0pXSkgOiBfdm0uX2UoKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgbDQgbTEyIHMxMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtcGFuZWxcIlxuICB9LCBbX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXBwZWFyXCI6IFwiXCIsXG4gICAgICBcIm5hbWVcIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFsoX3ZtLmJsb2dMaXN0ICE9PSBudWxsKSA/IF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJicm93c2VyLWRlZmF1bHRcIlxuICB9LCBfdm0uX2woKF92bS5ibG9nTGlzdCksIGZ1bmN0aW9uKGJsb2cpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IGJsb2cudXJsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uZ2V0QmxvZ0VudHJ5KCRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGJsb2cudGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInAtc21hbGxcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGJsb2cuZGVzY3JpcHRpb24pKV0pXSlcbiAgfSkpIDogX3ZtLl9lKCldKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb21tZW50cyAmJiBfdm0uY29tbWVudHMubGVuZ3RoID4gMCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyBibG9nX2NvbW1lbnRzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHM5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1wYW5lbFwiXG4gIH0sIF92bS5fbCgoX3ZtLmNvbW1lbnRzKSwgZnVuY3Rpb24oY29tbWVudCkge1xuICAgIHJldHVybiBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nXCJcbiAgICB9LCBbX2MoJ2g0Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtdGl0bGVcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNvbW1lbnQubmFtZSB8fCBcIkRlYW5cIikpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNvbW1lbnQuY29udGVudCkpXSldKVxuICB9KSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uYmxvZ0NvbnRlbnQgIT09IG51bGwpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wgczlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXBhbmVsXCJcbiAgfSwgW19jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpbXBsZS1mb3JtXCIsXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnVwZGF0ZUJsb2dDb21tZW50cygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywgW19jKCdzcGFuJywgW192bS5fdihcIk5hbWU6IFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5mb3JtLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm5hbWVFcnJvciksXG4gICAgICBleHByZXNzaW9uOiBcIm5hbWVFcnJvclwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIlxuICB9LCBbX3ZtLl92KFwiTmFtZSBpcyBhIHJlcXVpcmVkIGZpZWxkXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb21tZW50LXRleHQtbGFiZWxcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiQ29tbWVudDogXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLnRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRleHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImNvbW1lbnQtdGV4dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJ0ZXh0XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZm9ybS50ZXh0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0udGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS50ZXh0RXJyb3IpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0ZXh0RXJyb3JcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yXCJcbiAgfSwgW192bS5fdihcIkNvbW1lbnQgaXMgYSByZXF1aXJlZCBmaWVsZFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmVzZXRcIixcbiAgICAgIFwibmFtZVwiOiBcImFjdGlvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ucmVzZXRGb3JtXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0UmVzZXRcXG5cXHRcXHRcXHRcXHQgIFwiKV0pXSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NvbW1vbnRlc3QnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcIm5hbWVcIjogXCJhY3Rpb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFBvc3QgQ29tbWVudFxcblxcdFxcdFxcdFxcdCAgICBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zIHJpZ2h0XCJcbiAgfSwgW192bS5fdihcInNlbmRcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzk4MTBhZjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9CbG9nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wMmFmZTM0MCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVzdW1lLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVzdW1lLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDJhZmUzNDAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmVzdW1lLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3Jkai9zcmMvY29tcG9uZW50cy9SZXN1bWUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMmFmZTM0MFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMmFmZTM0MFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJlc3VtZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1Jlc3VtZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAyYWZlMzQwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXN1bWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMmFmZTM0MCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVzdW1lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAyYWZlMzQwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZXN1bWUudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDJhZmUzNDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9SZXN1bWUudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiUmVzdW1lLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMmFmZTM0MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1Jlc3VtZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyZGotcGFuZWxcIj5cblx0XHQ8aDM+UmVzdW1lPC9oMz5cblx0PCEtLVx0PGEgbmctaHJlZj1cIlwiIGNsYXNzPVwicmVzdW1lTGlua1wiIG5nLWNsaWNrPVwiZG93bmxvYWRSZXN1bWUoKVwiPihDbGljayB0byBkb3dubG9hZCBhIHBkZiBjb3B5KTwvYT4gLS0+XG5cdFxuXHRcdDxkaXYgY2xhc3M9XCJjYXJkLXBhbmVsXCI+XG5cdFx0XHQ8cD5cblx0XHRcdFx0VGhlIGRvd25sb2FkYWJsZSByZXN1bWUgdGhhdCBJIGhhZCBoZXJlIChhIHBkZikgd2FzIGdldHRpbmcgYSBiaXQgZGF0ZWQuICBJIGhhdmUgbm90IHBvc3RlZCBhIG5ldyB2ZXJzaW9uIGluIHF1aXRlIGEgd2hpbGUuXG5cdFx0XHRcdDxiciAvPjxiciAvPlxuXHRcdFx0XHRTbywgdGhlIG9yZ2luYWwvZWRpdGFibGUgdmVyc2lvbiBpcyBvbiBhIHNlcnZlciBoZXJlIHRoYXQgaXMgb2ZmbGluZS4gIE9uY2UgSSBicmluZyBpdCBiYWNrIG9ubGluZSBJJ2xsIHVwZGF0ZSBpdCBhbmQgcHJlc2VudFxuXHRcdFx0XHRhbiBIVE1MIHZlcnNpb24gYXMgd2VsbCBhcyBhIGRvd25sb2FkYWJsZSBXb3JkIGFuZCBwZGYgdmVyc2lvbnMgZm9yIHlvdXIgcmVhZGluZyBwbGVhc3VyZS5cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJlc3VtZS52dWU/ODI1NTAwMDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmRqLXBhbmVsXCJcbiAgfSwgW19jKCdoMycsIFtfdm0uX3YoXCJSZXN1bWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXBhbmVsXCJcbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdFRoZSBkb3dubG9hZGFibGUgcmVzdW1lIHRoYXQgSSBoYWQgaGVyZSAoYSBwZGYpIHdhcyBnZXR0aW5nIGEgYml0IGRhdGVkLiAgSSBoYXZlIG5vdCBwb3N0ZWQgYSBuZXcgdmVyc2lvbiBpbiBxdWl0ZSBhIHdoaWxlLlxcblxcdFxcdFxcdFwiKSwgX2MoJ2JyJyksIF9jKCdicicpLCBfdm0uX3YoXCJcXG5cXHRcXHRcXHRTbywgdGhlIG9yZ2luYWwvZWRpdGFibGUgdmVyc2lvbiBpcyBvbiBhIHNlcnZlciBoZXJlIHRoYXQgaXMgb2ZmbGluZS4gIE9uY2UgSSBicmluZyBpdCBiYWNrIG9ubGluZSBJJ2xsIHVwZGF0ZSBpdCBhbmQgcHJlc2VudFxcblxcdFxcdFxcdGFuIEhUTUwgdmVyc2lvbiBhcyB3ZWxsIGFzIGEgZG93bmxvYWRhYmxlIFdvcmQgYW5kIHBkZiB2ZXJzaW9ucyBmb3IgeW91ciByZWFkaW5nIHBsZWFzdXJlLlxcblxcdFxcdFwiKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAyYWZlMzQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wMmFmZTM0MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=