webpackJsonp([3,5],{

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(132)
	
	/* script */
	__vue_exports__ = __webpack_require__(134)
	
	/* template */
	var __vue_template__ = __webpack_require__(135)
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

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(133);
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

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.blogContent {\n\toverflow: hidden;\n}\n@media (max-width: 992px) {\n.row.main-content {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\n\t\t-webkit-justify-content: center;\n\t   justify-content: center;\n\n    -webkit-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n}\n}\n", "", {"version":3,"sources":["/./src/components/Blog.vue?b9f18ec2"],"names":[],"mappings":";AAoMA;CACA,iBAAA;CACA;AACA;AACA;EACA,sBAAA;EACA,cAAA;;EAEA,gCAAA;IACA,wBAAA;;IAEA,uCAAA;IACA,+BAAA;CACA;CACA","file":"Blog.vue","sourcesContent":["<template>\n\t<div class=\"rdj-panel\">\n\t\t<div class=\"row main-content\"> \n\t\t    <div class=\"col l8 m12 s12\">\n\t\t    \t<div class=\"blogContent card-panel\">\n\t\t    \t\t<transition name=\"fade\">\n\t\t    \t\t\t<article v-html=\"getBlog\" v-if=\"blogContent !== null\"></article>\n\t\t    \t\t</transition>\n\t\t    \t\t<transition appear name=\"slide-fade\">\n\t\t\t    \t\t<div v-if=\"blogContent === null\">\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tHere you'll find the occasional example of relatively recent work.\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tMost of the work that I have done for clients in the last 8 - 10 years is proprietary and not available for public viewing. That's a shame because, as \n\t\t\t\t    \t\t\ta consultant, a lot of what I have done is pretty fresh and exciting (relative to the general excitement level of UI development).\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tSo, I use this area to provide examples of things that I have done that might be of interest to whomever.\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tFrom time to time the content gets a bit thin.  Once a technique is somewhat outmoded or something that I have done that was extraordinary at the time has become \n\t\t\t\t    \t\t\tcommonplace I tend to remove it.  No point in bragging about something that every 15 year old with a laptop does these days.\n\t\t\t\t    \t\t</p>\n\t\t\t\t    \t\t<p>\n\t\t\t\t    \t\t\tBut, feel free to browse and, if you don't see anything of interest, use the contact page to contact me and ask about any (UI related) topic.  I'm always up for a challenge!\n\t\t\t\t    \t\t</p>\n\t\t\t    \t\t</div>\n\t\t    \t\t</transition>\n\t\t    \t</div>\n\t\t    </div> \n\t\t    <div class=\"col l4 m12 s12\">\n\t\t    \t<div class=\"card-panel\">\n\t\t    \t\t<transition appear name=\"fade\">\n\t\t\t\t    \t<ul v-if=\"blogList !== null\" class=\"browser-default\">\n\t\t\t\t    \t\t<li v-for=\"blog in blogList\">\n\t\t\t\t    \t\t\t<a :href=\"blog.url\" v-on:click.prevent=\"getBlogEntry\">{{blog.title}}</a>\n\t\t\t\t    \t\t\t<p class=\"p-small\">{{blog.description}}</p>\n\t\t\t\t    \t\t</li>\n\t\t\t\t    \t</ul>\n\t\t\t    \t</transition>\n\t\t    \t</div>\n\t\t    </div> \n\t\t</div>\n\t\t<div class=\"row blog_comments\" v-if=\"comments && comments.length > 0\">\n\t\t\t<div class=\"col s9\">\n\t\t    \t<div class=\"card-panel\">\n\t\t    \t\t<div class=\"panel panel-default\" v-for=\"comment in comments\">\n\t\t    \t\t\t<div class=\"panel-heading\">\n\t\t    \t\t\t\t<h4 class=\"panel-title\">{{comment.name || \"Dean\"}}</h4>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"panel-body\">{{comment.content}}</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t    </div>\n\t\t</div>\n\t\t<div class=\"row\" v-if=\"blogContent !== null\">\n\t\t\t<div class=\"col s9\">\n\t\t    \t<div class=\"card-panel\">\n\t\t\t\t\t<form class=\"simple-form\" v-on:submit.prevent=\"updateBlogComments\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span>Name: </span>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" v-model=\"form.name\" autocomplete=\"off\"/>\n\t\t\t\t\t\t\t<div class=\"error\" v-show=\"nameError\">Name is a required field</div>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\t<label class=\"comment-text-label\">\n\t\t\t\t\t\t\t<span>Comment: </span>\n\t\t\t\t\t\t\t<textarea class=\"comment-text\" name=\"text\" v-model=\"form.text\"></textarea>\n\t\t\t\t\t\t\t<div class=\"error\" v-show=\"textError\">Comment is a required field</div>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<br /><br />\n\t\t\t\t\t\t<button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">\n\t\t\t\t\t\t\tPost Comment\n\t\t\t\t\t    <i class=\"material-icons right\">send</i>\n\t\t\t\t\t  </button>\n\t\t\t\t\t\t<button v-on:click=\"resetForm\" class=\"btn waves-effect waves-light\" type=\"reset\" name=\"action\">\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t  </button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { mapState, mapActions, mapGetters } from 'vuex'\n\nfunction initialState () {\n  return {\n\t\tnameError: false,\n\t\ttextError: false,\n\t\tform: {\n\t\t\tname: '',\n\t\t\ttext: ''\n\t\t}\n\t}\n}\n\nexport default {\n\tdata () {\n\t\treturn Object.assign({key: null}, initialState())\n\t},\n\tcomputed: {\n\t\t...mapState({\n\t\t\tblogList: state => state.blogList,\n\t\t\tblogContent: state => state.blogContent,\n\t\t\tcomments: state => state.comments\n\t\t}),\n\t\t// we use a console log in the getBlogEntry funcion to demo using a \"getter\"\n\t\t...mapGetters({\n\t\t\tgetBlog: 'getBlogHTML'\n\t\t})\n  },\n\tcreated: function() {\n\t\t$(document).ready(function(){\n\t\t  // the \"href\" attribute of .modal-trigger must specify the modal ID that wants to be triggered\n\t\t  $('.modal').modal();\n  \t});\n\t},\n\tmethods: {\n\t\t...mapActions([\n\t\t\t'fetchBlogList',\n\t\t\t'fetchBlog',\n\t\t\t'fetchComments',\n\t\t\t'updateComments'\n\t\t]),\n\t\tfetchBlogListSuccess: function() {\n\t\t\tconsole.log('blog list retrieved!!')\n\t\t},\n\t\tfetchBlogListError: function() {\n\t\t\tconsole.log('blog list error...', arguments)\n\t\t},\n\t\tgetBlogEntry: function(ev) {\n\t\t\tthis.fetchBlog({\n\t\t\t\tblog: ev.currentTarget.getAttribute('href')\n\t\t\t})\n\n\t\t\tthis.key = ev.currentTarget.innerHTML.replace(/\\s/g, '_');\n\t\t\tconst params = {\n\t\t\t\tkey: this.key\n\t\t\t}\n\t\t\tthis.fetchComments(params)\n\t\t},\n\t\tupdateBlogComments: function(ev) {\n\t\t\tconst name = this.form.name\n\t\t\tconst text = this.form.text\n\t\t\tconst topic = this.key\n\t\t\tconst type = 'user'\n\t\t\tlet errorCnt = 0\n\t\t\tlet responseCode\n\t\t\tif (name.length === 0) {\n\t\t\t\tthis.nameError = true\n\t\t\t\terrorCnt += 1\n\t\t\t} else {\n\t\t\t\tthis.nameError = false\n\t\t\t}\n\t\t\tif (text.length === 0) {\n\t\t\t\tthis.textError = true\n\t\t\t\terrorCnt += 1\n\t\t\t} else {\n\t\t\t\tthis.textError = false\n\t\t\t}\n\t\t\tif (errorCnt > 0) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst fetchComments = this.fetchComments\n\t\t\tconst key = this.key\n\t\t\tconst resetForm = this.resetForm\n\t\t\tconst parms = {\n\t\t\t\tname: name,\n\t\t\t\ttext: text,\n\t\t\t\ttopic: topic,\n\t\t\t\ttype: type,\n\t\t\t\tsuccess: function() {\n\t\t\t\t\tresetForm()\n\t\t\t\t},\n\t\t\t\terror: function(error) {\n\t\t\t\t\tconsole.log('error error:', error)\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.updateComments(parms).then(function (response) {\n\t\t\t\tfetchComments({key: topic})\n\t\t\t})\n\t\t},\n\t\tresetForm: function() {\n\t\t\tObject.assign(this.$data, initialState())\n\t\t}\n\t}\n}\n</script>\n\n<style>\n.blogContent {\n\toverflow: hidden;\n}\n@media (max-width: 992px) {\n\t.row.main-content {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\n\t\t-webkit-justify-content: center;\n\t   justify-content: center;\n\n    -webkit-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n\t}\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 134:
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
	
	exports.default = {
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

/***/ 135:
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
	  }, [_vm._v("\n\t\t\t\t\t\tReset\n\t\t\t\t  ")])])])])]) : _vm._e()])
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

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Resume.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 139:
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

/***/ 140:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nLnZ1ZT82ZDdiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlPzAwZTAiLCJ3ZWJwYWNrOi8vL0Jsb2cudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlPzQzMDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXN1bWUudnVlPzVlNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZT9iMzg1Iiwid2VicGFjazovLy9SZXN1bWUudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Jlc3VtZS52dWU/MzE2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDJDQUEwQyxxQkFBcUIsR0FBRyw2QkFBNkIscUJBQXFCLDRCQUE0QixvQkFBb0Isd0NB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Q0E7QUFDQSxpREFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxtRkFBa0YsZ0dBQWdHOztBQUVsTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBOzttQkFFQSxHOzs7Ozs7O0FDbkJBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6IjMuYnVpbGQtZ3JvdXAtdy0tNTI4YmU3NWQxM2FkOTUxMDNhNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzk4MTBhZjUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Jsb2cudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9CbG9nLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzk4MTBhZjUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQmxvZy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9yZGovc3JjL2NvbXBvbmVudHMvQmxvZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM5ODEwYWY1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM5ODEwYWY1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQmxvZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOTgxMGFmNSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQmxvZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9CbG9nLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9CbG9nLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5ODEwYWY1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQmxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ibG9nQ29udGVudCB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuLnJvdy5tYWluLWNvbnRlbnQge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdFxcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0ICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2NvbXBvbmVudHMvQmxvZy52dWU/YjlmMThlYzJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9NQTtDQUNBLGlCQUFBO0NBQ0E7QUFDQTtBQUNBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBOztFQUVBLGdDQUFBO0lBQ0Esd0JBQUE7O0lBRUEsdUNBQUE7SUFDQSwrQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcIkJsb2cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyZGotcGFuZWxcXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluLWNvbnRlbnRcXFwiPiBcXG5cXHRcXHQgICAgPGRpdiBjbGFzcz1cXFwiY29sIGw4IG0xMiBzMTJcXFwiPlxcblxcdFxcdCAgICBcXHQ8ZGl2IGNsYXNzPVxcXCJibG9nQ29udGVudCBjYXJkLXBhbmVsXFxcIj5cXG5cXHRcXHQgICAgXFx0XFx0PHRyYW5zaXRpb24gbmFtZT1cXFwiZmFkZVxcXCI+XFxuXFx0XFx0ICAgIFxcdFxcdFxcdDxhcnRpY2xlIHYtaHRtbD1cXFwiZ2V0QmxvZ1xcXCIgdi1pZj1cXFwiYmxvZ0NvbnRlbnQgIT09IG51bGxcXFwiPjwvYXJ0aWNsZT5cXG5cXHRcXHQgICAgXFx0XFx0PC90cmFuc2l0aW9uPlxcblxcdFxcdCAgICBcXHRcXHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cXFwic2xpZGUtZmFkZVxcXCI+XFxuXFx0XFx0XFx0ICAgIFxcdFxcdDxkaXYgdi1pZj1cXFwiYmxvZ0NvbnRlbnQgPT09IG51bGxcXFwiPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8cD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0SGVyZSB5b3UnbGwgZmluZCB0aGUgb2NjYXNpb25hbCBleGFtcGxlIG9mIHJlbGF0aXZlbHkgcmVjZW50IHdvcmsuXFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDwvcD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PHA+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdFxcdE1vc3Qgb2YgdGhlIHdvcmsgdGhhdCBJIGhhdmUgZG9uZSBmb3IgY2xpZW50cyBpbiB0aGUgbGFzdCA4IC0gMTAgeWVhcnMgaXMgcHJvcHJpZXRhcnkgYW5kIG5vdCBhdmFpbGFibGUgZm9yIHB1YmxpYyB2aWV3aW5nLiBUaGF0J3MgYSBzaGFtZSBiZWNhdXNlLCBhcyBcXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0YSBjb25zdWx0YW50LCBhIGxvdCBvZiB3aGF0IEkgaGF2ZSBkb25lIGlzIHByZXR0eSBmcmVzaCBhbmQgZXhjaXRpbmcgKHJlbGF0aXZlIHRvIHRoZSBnZW5lcmFsIGV4Y2l0ZW1lbnQgbGV2ZWwgb2YgVUkgZGV2ZWxvcG1lbnQpLlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8L3A+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDxwPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHRcXHRTbywgSSB1c2UgdGhpcyBhcmVhIHRvIHByb3ZpZGUgZXhhbXBsZXMgb2YgdGhpbmdzIHRoYXQgSSBoYXZlIGRvbmUgdGhhdCBtaWdodCBiZSBvZiBpbnRlcmVzdCB0byB3aG9tZXZlci5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PC9wPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8cD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0RnJvbSB0aW1lIHRvIHRpbWUgdGhlIGNvbnRlbnQgZ2V0cyBhIGJpdCB0aGluLiAgT25jZSBhIHRlY2huaXF1ZSBpcyBzb21ld2hhdCBvdXRtb2RlZCBvciBzb21ldGhpbmcgdGhhdCBJIGhhdmUgZG9uZSB0aGF0IHdhcyBleHRyYW9yZGluYXJ5IGF0IHRoZSB0aW1lIGhhcyBiZWNvbWUgXFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdFxcdGNvbW1vbnBsYWNlIEkgdGVuZCB0byByZW1vdmUgaXQuICBObyBwb2ludCBpbiBicmFnZ2luZyBhYm91dCBzb21ldGhpbmcgdGhhdCBldmVyeSAxNSB5ZWFyIG9sZCB3aXRoIGEgbGFwdG9wIGRvZXMgdGhlc2UgZGF5cy5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PC9wPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHQ8cD5cXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0XFx0QnV0LCBmZWVsIGZyZWUgdG8gYnJvd3NlIGFuZCwgaWYgeW91IGRvbid0IHNlZSBhbnl0aGluZyBvZiBpbnRlcmVzdCwgdXNlIHRoZSBjb250YWN0IHBhZ2UgdG8gY29udGFjdCBtZSBhbmQgYXNrIGFib3V0IGFueSAoVUkgcmVsYXRlZCkgdG9waWMuICBJJ20gYWx3YXlzIHVwIGZvciBhIGNoYWxsZW5nZSFcXG5cXHRcXHRcXHRcXHQgICAgXFx0XFx0PC9wPlxcblxcdFxcdFxcdCAgICBcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQgICAgXFx0XFx0PC90cmFuc2l0aW9uPlxcblxcdFxcdCAgICBcXHQ8L2Rpdj5cXG5cXHRcXHQgICAgPC9kaXY+IFxcblxcdFxcdCAgICA8ZGl2IGNsYXNzPVxcXCJjb2wgbDQgbTEyIHMxMlxcXCI+XFxuXFx0XFx0ICAgIFxcdDxkaXYgY2xhc3M9XFxcImNhcmQtcGFuZWxcXFwiPlxcblxcdFxcdCAgICBcXHRcXHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cXFwiZmFkZVxcXCI+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdDx1bCB2LWlmPVxcXCJibG9nTGlzdCAhPT0gbnVsbFxcXCIgY2xhc3M9XFxcImJyb3dzZXItZGVmYXVsdFxcXCI+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDxsaSB2LWZvcj1cXFwiYmxvZyBpbiBibG9nTGlzdFxcXCI+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdFxcdDxhIDpocmVmPVxcXCJibG9nLnVybFxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJnZXRCbG9nRW50cnlcXFwiPnt7YmxvZy50aXRsZX19PC9hPlxcblxcdFxcdFxcdFxcdCAgICBcXHRcXHRcXHQ8cCBjbGFzcz1cXFwicC1zbWFsbFxcXCI+e3tibG9nLmRlc2NyaXB0aW9ufX08L3A+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdFxcdDwvbGk+XFxuXFx0XFx0XFx0XFx0ICAgIFxcdDwvdWw+XFxuXFx0XFx0XFx0ICAgIFxcdDwvdHJhbnNpdGlvbj5cXG5cXHRcXHQgICAgXFx0PC9kaXY+XFxuXFx0XFx0ICAgIDwvZGl2PiBcXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3cgYmxvZ19jb21tZW50c1xcXCIgdi1pZj1cXFwiY29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RoID4gMFxcXCI+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29sIHM5XFxcIj5cXG5cXHRcXHQgICAgXFx0PGRpdiBjbGFzcz1cXFwiY2FyZC1wYW5lbFxcXCI+XFxuXFx0XFx0ICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiIHYtZm9yPVxcXCJjb21tZW50IGluIGNvbW1lbnRzXFxcIj5cXG5cXHRcXHQgICAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxuXFx0XFx0ICAgIFxcdFxcdFxcdFxcdDxoNCBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPnt7Y29tbWVudC5uYW1lIHx8IFxcXCJEZWFuXFxcIn19PC9oND5cXG5cXHRcXHQgICAgXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0ICAgIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPnt7Y29tbWVudC5jb250ZW50fX08L2Rpdj5cXG5cXHRcXHQgICAgXFx0XFx0PC9kaXY+XFxuXFx0XFx0ICAgIFxcdDwvZGl2PlxcblxcdFxcdCAgICA8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImJsb2dDb250ZW50ICE9PSBudWxsXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2wgczlcXFwiPlxcblxcdFxcdCAgICBcXHQ8ZGl2IGNsYXNzPVxcXCJjYXJkLXBhbmVsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwic2ltcGxlLWZvcm1cXFwiIHYtb246c3VibWl0LnByZXZlbnQ9XFxcInVwZGF0ZUJsb2dDb21tZW50c1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuPk5hbWU6IDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgdi1tb2RlbD1cXFwiZm9ybS5uYW1lXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVycm9yXFxcIiB2LXNob3c9XFxcIm5hbWVFcnJvclxcXCI+TmFtZSBpcyBhIHJlcXVpcmVkIGZpZWxkPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9sYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YnIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcImNvbW1lbnQtdGV4dC1sYWJlbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4+Q29tbWVudDogPC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZXh0YXJlYSBjbGFzcz1cXFwiY29tbWVudC10ZXh0XFxcIiBuYW1lPVxcXCJ0ZXh0XFxcIiB2LW1vZGVsPVxcXCJmb3JtLnRleHRcXFwiPjwvdGV4dGFyZWE+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZXJyb3JcXFwiIHYtc2hvdz1cXFwidGV4dEVycm9yXFxcIj5Db21tZW50IGlzIGEgcmVxdWlyZWQgZmllbGQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxiciAvPjxiciAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgbmFtZT1cXFwiYWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRQb3N0IENvbW1lbnRcXG5cXHRcXHRcXHRcXHRcXHQgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zIHJpZ2h0XFxcIj5zZW5kPC9pPlxcblxcdFxcdFxcdFxcdFxcdCAgPC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiB2LW9uOmNsaWNrPVxcXCJyZXNldEZvcm1cXFwiIGNsYXNzPVxcXCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XFxcIiB0eXBlPVxcXCJyZXNldFxcXCIgbmFtZT1cXFwiYWN0aW9uXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRSZXNldFxcblxcdFxcdFxcdFxcdFxcdCAgPC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PC9mb3JtPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuXFxuZnVuY3Rpb24gaW5pdGlhbFN0YXRlICgpIHtcXG4gIHJldHVybiB7XFxuXFx0XFx0bmFtZUVycm9yOiBmYWxzZSxcXG5cXHRcXHR0ZXh0RXJyb3I6IGZhbHNlLFxcblxcdFxcdGZvcm06IHtcXG5cXHRcXHRcXHRuYW1lOiAnJyxcXG5cXHRcXHRcXHR0ZXh0OiAnJ1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXHRkYXRhICgpIHtcXG5cXHRcXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7a2V5OiBudWxsfSwgaW5pdGlhbFN0YXRlKCkpXFxuXFx0fSxcXG5cXHRjb21wdXRlZDoge1xcblxcdFxcdC4uLm1hcFN0YXRlKHtcXG5cXHRcXHRcXHRibG9nTGlzdDogc3RhdGUgPT4gc3RhdGUuYmxvZ0xpc3QsXFxuXFx0XFx0XFx0YmxvZ0NvbnRlbnQ6IHN0YXRlID0+IHN0YXRlLmJsb2dDb250ZW50LFxcblxcdFxcdFxcdGNvbW1lbnRzOiBzdGF0ZSA9PiBzdGF0ZS5jb21tZW50c1xcblxcdFxcdH0pLFxcblxcdFxcdC8vIHdlIHVzZSBhIGNvbnNvbGUgbG9nIGluIHRoZSBnZXRCbG9nRW50cnkgZnVuY2lvbiB0byBkZW1vIHVzaW5nIGEgXFxcImdldHRlclxcXCJcXG5cXHRcXHQuLi5tYXBHZXR0ZXJzKHtcXG5cXHRcXHRcXHRnZXRCbG9nOiAnZ2V0QmxvZ0hUTUwnXFxuXFx0XFx0fSlcXG4gIH0sXFxuXFx0Y3JlYXRlZDogZnVuY3Rpb24oKSB7XFxuXFx0XFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcXG5cXHRcXHQgIC8vIHRoZSBcXFwiaHJlZlxcXCIgYXR0cmlidXRlIG9mIC5tb2RhbC10cmlnZ2VyIG11c3Qgc3BlY2lmeSB0aGUgbW9kYWwgSUQgdGhhdCB3YW50cyB0byBiZSB0cmlnZ2VyZWRcXG5cXHRcXHQgICQoJy5tb2RhbCcpLm1vZGFsKCk7XFxuICBcXHR9KTtcXG5cXHR9LFxcblxcdG1ldGhvZHM6IHtcXG5cXHRcXHQuLi5tYXBBY3Rpb25zKFtcXG5cXHRcXHRcXHQnZmV0Y2hCbG9nTGlzdCcsXFxuXFx0XFx0XFx0J2ZldGNoQmxvZycsXFxuXFx0XFx0XFx0J2ZldGNoQ29tbWVudHMnLFxcblxcdFxcdFxcdCd1cGRhdGVDb21tZW50cydcXG5cXHRcXHRdKSxcXG5cXHRcXHRmZXRjaEJsb2dMaXN0U3VjY2VzczogZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0Y29uc29sZS5sb2coJ2Jsb2cgbGlzdCByZXRyaWV2ZWQhIScpXFxuXFx0XFx0fSxcXG5cXHRcXHRmZXRjaEJsb2dMaXN0RXJyb3I6IGZ1bmN0aW9uKCkge1xcblxcdFxcdFxcdGNvbnNvbGUubG9nKCdibG9nIGxpc3QgZXJyb3IuLi4nLCBhcmd1bWVudHMpXFxuXFx0XFx0fSxcXG5cXHRcXHRnZXRCbG9nRW50cnk6IGZ1bmN0aW9uKGV2KSB7XFxuXFx0XFx0XFx0dGhpcy5mZXRjaEJsb2coe1xcblxcdFxcdFxcdFxcdGJsb2c6IGV2LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJylcXG5cXHRcXHRcXHR9KVxcblxcblxcdFxcdFxcdHRoaXMua2V5ID0gZXYuY3VycmVudFRhcmdldC5pbm5lckhUTUwucmVwbGFjZSgvXFxcXHMvZywgJ18nKTtcXG5cXHRcXHRcXHRjb25zdCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0a2V5OiB0aGlzLmtleVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHR0aGlzLmZldGNoQ29tbWVudHMocGFyYW1zKVxcblxcdFxcdH0sXFxuXFx0XFx0dXBkYXRlQmxvZ0NvbW1lbnRzOiBmdW5jdGlvbihldikge1xcblxcdFxcdFxcdGNvbnN0IG5hbWUgPSB0aGlzLmZvcm0ubmFtZVxcblxcdFxcdFxcdGNvbnN0IHRleHQgPSB0aGlzLmZvcm0udGV4dFxcblxcdFxcdFxcdGNvbnN0IHRvcGljID0gdGhpcy5rZXlcXG5cXHRcXHRcXHRjb25zdCB0eXBlID0gJ3VzZXInXFxuXFx0XFx0XFx0bGV0IGVycm9yQ250ID0gMFxcblxcdFxcdFxcdGxldCByZXNwb25zZUNvZGVcXG5cXHRcXHRcXHRpZiAobmFtZS5sZW5ndGggPT09IDApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLm5hbWVFcnJvciA9IHRydWVcXG5cXHRcXHRcXHRcXHRlcnJvckNudCArPSAxXFxuXFx0XFx0XFx0fSBlbHNlIHtcXG5cXHRcXHRcXHRcXHR0aGlzLm5hbWVFcnJvciA9IGZhbHNlXFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xcblxcdFxcdFxcdFxcdHRoaXMudGV4dEVycm9yID0gdHJ1ZVxcblxcdFxcdFxcdFxcdGVycm9yQ250ICs9IDFcXG5cXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdHRoaXMudGV4dEVycm9yID0gZmFsc2VcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0aWYgKGVycm9yQ250ID4gMCkge1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Y29uc3QgZmV0Y2hDb21tZW50cyA9IHRoaXMuZmV0Y2hDb21tZW50c1xcblxcdFxcdFxcdGNvbnN0IGtleSA9IHRoaXMua2V5XFxuXFx0XFx0XFx0Y29uc3QgcmVzZXRGb3JtID0gdGhpcy5yZXNldEZvcm1cXG5cXHRcXHRcXHRjb25zdCBwYXJtcyA9IHtcXG5cXHRcXHRcXHRcXHRuYW1lOiBuYW1lLFxcblxcdFxcdFxcdFxcdHRleHQ6IHRleHQsXFxuXFx0XFx0XFx0XFx0dG9waWM6IHRvcGljLFxcblxcdFxcdFxcdFxcdHR5cGU6IHR5cGUsXFxuXFx0XFx0XFx0XFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0XFx0cmVzZXRGb3JtKClcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xcblxcdFxcdFxcdFxcdFxcdGNvbnNvbGUubG9nKCdlcnJvciBlcnJvcjonLCBlcnJvcilcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMudXBkYXRlQ29tbWVudHMocGFybXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuXFx0XFx0XFx0XFx0ZmV0Y2hDb21tZW50cyh7a2V5OiB0b3BpY30pXFxuXFx0XFx0XFx0fSlcXG5cXHRcXHR9LFxcblxcdFxcdHJlc2V0Rm9ybTogZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0T2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBpbml0aWFsU3RhdGUoKSlcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJsb2dDb250ZW50IHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG5cXHQucm93Lm1haW4tY29udGVudCB7XFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0XFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHR9XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOTgxMGFmNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0Jsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicmRqLXBhbmVsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvdyBtYWluLWNvbnRlbnRcIj4gXG5cdFx0ICAgIDxkaXYgY2xhc3M9XCJjb2wgbDggbTEyIHMxMlwiPlxuXHRcdCAgICBcdDxkaXYgY2xhc3M9XCJibG9nQ29udGVudCBjYXJkLXBhbmVsXCI+XG5cdFx0ICAgIFx0XHQ8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxuXHRcdCAgICBcdFx0XHQ8YXJ0aWNsZSB2LWh0bWw9XCJnZXRCbG9nXCIgdi1pZj1cImJsb2dDb250ZW50ICE9PSBudWxsXCI+PC9hcnRpY2xlPlxuXHRcdCAgICBcdFx0PC90cmFuc2l0aW9uPlxuXHRcdCAgICBcdFx0PHRyYW5zaXRpb24gYXBwZWFyIG5hbWU9XCJzbGlkZS1mYWRlXCI+XG5cdFx0XHQgICAgXHRcdDxkaXYgdi1pZj1cImJsb2dDb250ZW50ID09PSBudWxsXCI+XG5cdFx0XHRcdCAgICBcdFx0PHA+XG5cdFx0XHRcdCAgICBcdFx0XHRIZXJlIHlvdSdsbCBmaW5kIHRoZSBvY2Nhc2lvbmFsIGV4YW1wbGUgb2YgcmVsYXRpdmVseSByZWNlbnQgd29yay5cblx0XHRcdFx0ICAgIFx0XHQ8L3A+XG5cdFx0XHRcdCAgICBcdFx0PHA+XG5cdFx0XHRcdCAgICBcdFx0XHRNb3N0IG9mIHRoZSB3b3JrIHRoYXQgSSBoYXZlIGRvbmUgZm9yIGNsaWVudHMgaW4gdGhlIGxhc3QgOCAtIDEwIHllYXJzIGlzIHByb3ByaWV0YXJ5IGFuZCBub3QgYXZhaWxhYmxlIGZvciBwdWJsaWMgdmlld2luZy4gVGhhdCdzIGEgc2hhbWUgYmVjYXVzZSwgYXMgXG5cdFx0XHRcdCAgICBcdFx0XHRhIGNvbnN1bHRhbnQsIGEgbG90IG9mIHdoYXQgSSBoYXZlIGRvbmUgaXMgcHJldHR5IGZyZXNoIGFuZCBleGNpdGluZyAocmVsYXRpdmUgdG8gdGhlIGdlbmVyYWwgZXhjaXRlbWVudCBsZXZlbCBvZiBVSSBkZXZlbG9wbWVudCkuXG5cdFx0XHRcdCAgICBcdFx0PC9wPlxuXHRcdFx0XHQgICAgXHRcdDxwPlxuXHRcdFx0XHQgICAgXHRcdFx0U28sIEkgdXNlIHRoaXMgYXJlYSB0byBwcm92aWRlIGV4YW1wbGVzIG9mIHRoaW5ncyB0aGF0IEkgaGF2ZSBkb25lIHRoYXQgbWlnaHQgYmUgb2YgaW50ZXJlc3QgdG8gd2hvbWV2ZXIuXG5cdFx0XHRcdCAgICBcdFx0PC9wPlxuXHRcdFx0XHQgICAgXHRcdDxwPlxuXHRcdFx0XHQgICAgXHRcdFx0RnJvbSB0aW1lIHRvIHRpbWUgdGhlIGNvbnRlbnQgZ2V0cyBhIGJpdCB0aGluLiAgT25jZSBhIHRlY2huaXF1ZSBpcyBzb21ld2hhdCBvdXRtb2RlZCBvciBzb21ldGhpbmcgdGhhdCBJIGhhdmUgZG9uZSB0aGF0IHdhcyBleHRyYW9yZGluYXJ5IGF0IHRoZSB0aW1lIGhhcyBiZWNvbWUgXG5cdFx0XHRcdCAgICBcdFx0XHRjb21tb25wbGFjZSBJIHRlbmQgdG8gcmVtb3ZlIGl0LiAgTm8gcG9pbnQgaW4gYnJhZ2dpbmcgYWJvdXQgc29tZXRoaW5nIHRoYXQgZXZlcnkgMTUgeWVhciBvbGQgd2l0aCBhIGxhcHRvcCBkb2VzIHRoZXNlIGRheXMuXG5cdFx0XHRcdCAgICBcdFx0PC9wPlxuXHRcdFx0XHQgICAgXHRcdDxwPlxuXHRcdFx0XHQgICAgXHRcdFx0QnV0LCBmZWVsIGZyZWUgdG8gYnJvd3NlIGFuZCwgaWYgeW91IGRvbid0IHNlZSBhbnl0aGluZyBvZiBpbnRlcmVzdCwgdXNlIHRoZSBjb250YWN0IHBhZ2UgdG8gY29udGFjdCBtZSBhbmQgYXNrIGFib3V0IGFueSAoVUkgcmVsYXRlZCkgdG9waWMuICBJJ20gYWx3YXlzIHVwIGZvciBhIGNoYWxsZW5nZSFcblx0XHRcdFx0ICAgIFx0XHQ8L3A+XG5cdFx0XHQgICAgXHRcdDwvZGl2PlxuXHRcdCAgICBcdFx0PC90cmFuc2l0aW9uPlxuXHRcdCAgICBcdDwvZGl2PlxuXHRcdCAgICA8L2Rpdj4gXG5cdFx0ICAgIDxkaXYgY2xhc3M9XCJjb2wgbDQgbTEyIHMxMlwiPlxuXHRcdCAgICBcdDxkaXYgY2xhc3M9XCJjYXJkLXBhbmVsXCI+XG5cdFx0ICAgIFx0XHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cImZhZGVcIj5cblx0XHRcdFx0ICAgIFx0PHVsIHYtaWY9XCJibG9nTGlzdCAhPT0gbnVsbFwiIGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCI+XG5cdFx0XHRcdCAgICBcdFx0PGxpIHYtZm9yPVwiYmxvZyBpbiBibG9nTGlzdFwiPlxuXHRcdFx0XHQgICAgXHRcdFx0PGEgOmhyZWY9XCJibG9nLnVybFwiIHYtb246Y2xpY2sucHJldmVudD1cImdldEJsb2dFbnRyeVwiPnt7YmxvZy50aXRsZX19PC9hPlxuXHRcdFx0XHQgICAgXHRcdFx0PHAgY2xhc3M9XCJwLXNtYWxsXCI+e3tibG9nLmRlc2NyaXB0aW9ufX08L3A+XG5cdFx0XHRcdCAgICBcdFx0PC9saT5cblx0XHRcdFx0ICAgIFx0PC91bD5cblx0XHRcdCAgICBcdDwvdHJhbnNpdGlvbj5cblx0XHQgICAgXHQ8L2Rpdj5cblx0XHQgICAgPC9kaXY+IFxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgYmxvZ19jb21tZW50c1wiIHYtaWY9XCJjb21tZW50cyAmJiBjb21tZW50cy5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHM5XCI+XG5cdFx0ICAgIFx0PGRpdiBjbGFzcz1cImNhcmQtcGFuZWxcIj5cblx0XHQgICAgXHRcdDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgdi1mb3I9XCJjb21tZW50IGluIGNvbW1lbnRzXCI+XG5cdFx0ICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG5cdFx0ICAgIFx0XHRcdFx0PGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj57e2NvbW1lbnQubmFtZSB8fCBcIkRlYW5cIn19PC9oND5cblx0XHQgICAgXHRcdFx0PC9kaXY+XG5cdFx0ICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+e3tjb21tZW50LmNvbnRlbnR9fTwvZGl2PlxuXHRcdCAgICBcdFx0PC9kaXY+XG5cdFx0ICAgIFx0PC9kaXY+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiYmxvZ0NvbnRlbnQgIT09IG51bGxcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgczlcIj5cblx0XHQgICAgXHQ8ZGl2IGNsYXNzPVwiY2FyZC1wYW5lbFwiPlxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzPVwic2ltcGxlLWZvcm1cIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlQmxvZ0NvbW1lbnRzXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPk5hbWU6IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LXNob3c9XCJuYW1lRXJyb3JcIj5OYW1lIGlzIGEgcmVxdWlyZWQgZmllbGQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImNvbW1lbnQtdGV4dC1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5Db21tZW50OiA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cImNvbW1lbnQtdGV4dFwiIG5hbWU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0udGV4dFwiPjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtc2hvdz1cInRleHRFcnJvclwiPkNvbW1lbnQgaXMgYSByZXF1aXJlZCBmaWVsZDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxiciAvPjxiciAvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRQb3N0IENvbW1lbnRcblx0XHRcdFx0XHQgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPnNlbmQ8L2k+XG5cdFx0XHRcdFx0ICA8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gdi1vbjpjbGljaz1cInJlc2V0Rm9ybVwiIGNsYXNzPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIHR5cGU9XCJyZXNldFwiIG5hbWU9XCJhY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0UmVzZXRcblx0XHRcdFx0XHQgIDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG5mdW5jdGlvbiBpbml0aWFsU3RhdGUgKCkge1xuICByZXR1cm4ge1xuXHRcdG5hbWVFcnJvcjogZmFsc2UsXG5cdFx0dGV4dEVycm9yOiBmYWxzZSxcblx0XHRmb3JtOiB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHRleHQ6ICcnXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe2tleTogbnVsbH0sIGluaXRpYWxTdGF0ZSgpKVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdC4uLm1hcFN0YXRlKHtcblx0XHRcdGJsb2dMaXN0OiBzdGF0ZSA9PiBzdGF0ZS5ibG9nTGlzdCxcblx0XHRcdGJsb2dDb250ZW50OiBzdGF0ZSA9PiBzdGF0ZS5ibG9nQ29udGVudCxcblx0XHRcdGNvbW1lbnRzOiBzdGF0ZSA9PiBzdGF0ZS5jb21tZW50c1xuXHRcdH0pLFxuXHRcdC8vIHdlIHVzZSBhIGNvbnNvbGUgbG9nIGluIHRoZSBnZXRCbG9nRW50cnkgZnVuY2lvbiB0byBkZW1vIHVzaW5nIGEgXCJnZXR0ZXJcIlxuXHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0Z2V0QmxvZzogJ2dldEJsb2dIVE1MJ1xuXHRcdH0pXG4gIH0sXG5cdGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdFx0ICAvLyB0aGUgXCJocmVmXCIgYXR0cmlidXRlIG9mIC5tb2RhbC10cmlnZ2VyIG11c3Qgc3BlY2lmeSB0aGUgbW9kYWwgSUQgdGhhdCB3YW50cyB0byBiZSB0cmlnZ2VyZWRcblx0XHQgICQoJy5tb2RhbCcpLm1vZGFsKCk7XG4gIFx0fSk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQuLi5tYXBBY3Rpb25zKFtcblx0XHRcdCdmZXRjaEJsb2dMaXN0Jyxcblx0XHRcdCdmZXRjaEJsb2cnLFxuXHRcdFx0J2ZldGNoQ29tbWVudHMnLFxuXHRcdFx0J3VwZGF0ZUNvbW1lbnRzJ1xuXHRcdF0pLFxuXHRcdGZldGNoQmxvZ0xpc3RTdWNjZXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdibG9nIGxpc3QgcmV0cmlldmVkISEnKVxuXHRcdH0sXG5cdFx0ZmV0Y2hCbG9nTGlzdEVycm9yOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdibG9nIGxpc3QgZXJyb3IuLi4nLCBhcmd1bWVudHMpXG5cdFx0fSxcblx0XHRnZXRCbG9nRW50cnk6IGZ1bmN0aW9uKGV2KSB7XG5cdFx0XHR0aGlzLmZldGNoQmxvZyh7XG5cdFx0XHRcdGJsb2c6IGV2LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJylcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMua2V5ID0gZXYuY3VycmVudFRhcmdldC5pbm5lckhUTUwucmVwbGFjZSgvXFxzL2csICdfJyk7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGtleTogdGhpcy5rZXlcblx0XHRcdH1cblx0XHRcdHRoaXMuZmV0Y2hDb21tZW50cyhwYXJhbXMpXG5cdFx0fSxcblx0XHR1cGRhdGVCbG9nQ29tbWVudHM6IGZ1bmN0aW9uKGV2KSB7XG5cdFx0XHRjb25zdCBuYW1lID0gdGhpcy5mb3JtLm5hbWVcblx0XHRcdGNvbnN0IHRleHQgPSB0aGlzLmZvcm0udGV4dFxuXHRcdFx0Y29uc3QgdG9waWMgPSB0aGlzLmtleVxuXHRcdFx0Y29uc3QgdHlwZSA9ICd1c2VyJ1xuXHRcdFx0bGV0IGVycm9yQ250ID0gMFxuXHRcdFx0bGV0IHJlc3BvbnNlQ29kZVxuXHRcdFx0aWYgKG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMubmFtZUVycm9yID0gdHJ1ZVxuXHRcdFx0XHRlcnJvckNudCArPSAxXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm5hbWVFcnJvciA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy50ZXh0RXJyb3IgPSB0cnVlXG5cdFx0XHRcdGVycm9yQ250ICs9IDFcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudGV4dEVycm9yID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdGlmIChlcnJvckNudCA+IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmZXRjaENvbW1lbnRzID0gdGhpcy5mZXRjaENvbW1lbnRzXG5cdFx0XHRjb25zdCBrZXkgPSB0aGlzLmtleVxuXHRcdFx0Y29uc3QgcmVzZXRGb3JtID0gdGhpcy5yZXNldEZvcm1cblx0XHRcdGNvbnN0IHBhcm1zID0ge1xuXHRcdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0XHR0ZXh0OiB0ZXh0LFxuXHRcdFx0XHR0b3BpYzogdG9waWMsXG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlc2V0Rm9ybSgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBlcnJvcjonLCBlcnJvcilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnVwZGF0ZUNvbW1lbnRzKHBhcm1zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRmZXRjaENvbW1lbnRzKHtrZXk6IHRvcGljfSlcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRyZXNldEZvcm06IGZ1bmN0aW9uKCkge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBpbml0aWFsU3RhdGUoKSlcblx0XHR9XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYmxvZ0NvbnRlbnQge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cdC5yb3cubWFpbi1jb250ZW50IHtcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0ZGlzcGxheTogZmxleDtcblxuXHRcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHR9XG59XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBCbG9nLnZ1ZT9iOWYxOGVjMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmRqLXBhbmVsXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IG1haW4tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBsOCBtMTIgczEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvZ0NvbnRlbnQgY2FyZC1wYW5lbFwiXG4gIH0sIFtfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9LCBbKF92bS5ibG9nQ29udGVudCAhPT0gbnVsbCkgPyBfYygnYXJ0aWNsZScsIHtcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5nZXRCbG9nKVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhcHBlYXJcIjogXCJcIixcbiAgICAgIFwibmFtZVwiOiBcInNsaWRlLWZhZGVcIlxuICAgIH1cbiAgfSwgWyhfdm0uYmxvZ0NvbnRlbnQgPT09IG51bGwpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHQgICAgXFx0XFx0XFx0SGVyZSB5b3UnbGwgZmluZCB0aGUgb2NjYXNpb25hbCBleGFtcGxlIG9mIHJlbGF0aXZlbHkgcmVjZW50IHdvcmsuXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHQgICAgXFx0XFx0XFx0TW9zdCBvZiB0aGUgd29yayB0aGF0IEkgaGF2ZSBkb25lIGZvciBjbGllbnRzIGluIHRoZSBsYXN0IDggLSAxMCB5ZWFycyBpcyBwcm9wcmlldGFyeSBhbmQgbm90IGF2YWlsYWJsZSBmb3IgcHVibGljIHZpZXdpbmcuIFRoYXQncyBhIHNoYW1lIGJlY2F1c2UsIGFzIFxcblxcdFxcdFxcdCAgICBcXHRcXHRcXHRhIGNvbnN1bHRhbnQsIGEgbG90IG9mIHdoYXQgSSBoYXZlIGRvbmUgaXMgcHJldHR5IGZyZXNoIGFuZCBleGNpdGluZyAocmVsYXRpdmUgdG8gdGhlIGdlbmVyYWwgZXhjaXRlbWVudCBsZXZlbCBvZiBVSSBkZXZlbG9wbWVudCkuXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHQgICAgXFx0XFx0XFx0U28sIEkgdXNlIHRoaXMgYXJlYSB0byBwcm92aWRlIGV4YW1wbGVzIG9mIHRoaW5ncyB0aGF0IEkgaGF2ZSBkb25lIHRoYXQgbWlnaHQgYmUgb2YgaW50ZXJlc3QgdG8gd2hvbWV2ZXIuXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHQgICAgXFx0XFx0XFx0RnJvbSB0aW1lIHRvIHRpbWUgdGhlIGNvbnRlbnQgZ2V0cyBhIGJpdCB0aGluLiAgT25jZSBhIHRlY2huaXF1ZSBpcyBzb21ld2hhdCBvdXRtb2RlZCBvciBzb21ldGhpbmcgdGhhdCBJIGhhdmUgZG9uZSB0aGF0IHdhcyBleHRyYW9yZGluYXJ5IGF0IHRoZSB0aW1lIGhhcyBiZWNvbWUgXFxuXFx0XFx0XFx0ICAgIFxcdFxcdFxcdGNvbW1vbnBsYWNlIEkgdGVuZCB0byByZW1vdmUgaXQuICBObyBwb2ludCBpbiBicmFnZ2luZyBhYm91dCBzb21ldGhpbmcgdGhhdCBldmVyeSAxNSB5ZWFyIG9sZCB3aXRoIGEgbGFwdG9wIGRvZXMgdGhlc2UgZGF5cy5cXG5cXHRcXHRcXHQgICAgXFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcblxcdFxcdFxcdCAgICBcXHRcXHRcXHRCdXQsIGZlZWwgZnJlZSB0byBicm93c2UgYW5kLCBpZiB5b3UgZG9uJ3Qgc2VlIGFueXRoaW5nIG9mIGludGVyZXN0LCB1c2UgdGhlIGNvbnRhY3QgcGFnZSB0byBjb250YWN0IG1lIGFuZCBhc2sgYWJvdXQgYW55IChVSSByZWxhdGVkKSB0b3BpYy4gIEknbSBhbHdheXMgdXAgZm9yIGEgY2hhbGxlbmdlIVxcblxcdFxcdFxcdCAgICBcXHRcXHRcIildKV0pIDogX3ZtLl9lKCldKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIGw0IG0xMiBzMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXBhbmVsXCJcbiAgfSwgW19jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFwcGVhclwiOiBcIlwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9LCBbKF92bS5ibG9nTGlzdCAhPT0gbnVsbCkgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJvd3Nlci1kZWZhdWx0XCJcbiAgfSwgX3ZtLl9sKChfdm0uYmxvZ0xpc3QpLCBmdW5jdGlvbihibG9nKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBibG9nLnVybFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLmdldEJsb2dFbnRyeSgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhibG9nLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwLXNtYWxsXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhibG9nLmRlc2NyaXB0aW9uKSldKV0pXG4gIH0pKSA6IF92bS5fZSgpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uY29tbWVudHMgJiYgX3ZtLmNvbW1lbnRzLmxlbmd0aCA+IDApID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgYmxvZ19jb21tZW50c1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbCBzOVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtcGFuZWxcIlxuICB9LCBfdm0uX2woKF92bS5jb21tZW50cyksIGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiXG4gICAgfSwgW19jKCdoNCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLXRpdGxlXCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50Lm5hbWUgfHwgXCJEZWFuXCIpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1ib2R5XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhjb21tZW50LmNvbnRlbnQpKV0pXSlcbiAgfSkpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmJsb2dDb250ZW50ICE9PSBudWxsKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sIHM5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1wYW5lbFwiXG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaW1wbGUtZm9ybVwiLFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS51cGRhdGVCbG9nQ29tbWVudHMoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfYygnc3BhbicsIFtfdm0uX3YoXCJOYW1lOiBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0ubmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZm9ybS5uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5uYW1lRXJyb3IpLFxuICAgICAgZXhwcmVzc2lvbjogXCJuYW1lRXJyb3JcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yXCJcbiAgfSwgW192bS5fdihcIk5hbWUgaXMgYSByZXF1aXJlZCBmaWVsZFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29tbWVudC10ZXh0LWxhYmVsXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIkNvbW1lbnQ6IFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50ZXh0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJjb21tZW50LXRleHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmZvcm0udGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtLnRleHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0udGV4dEVycm9yKSxcbiAgICAgIGV4cHJlc3Npb246IFwidGV4dEVycm9yXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvclwiXG4gIH0sIFtfdm0uX3YoXCJDb21tZW50IGlzIGEgcmVxdWlyZWQgZmllbGRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInJlc2V0XCIsXG4gICAgICBcIm5hbWVcIjogXCJhY3Rpb25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnJlc2V0Rm9ybVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFJlc2V0XFxuXFx0XFx0XFx0XFx0ICBcIildKV0pXSldKV0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJuYW1lXCI6IFwiYWN0aW9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRQb3N0IENvbW1lbnRcXG5cXHRcXHRcXHRcXHQgICAgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyByaWdodFwiXG4gIH0sIFtfdm0uX3YoXCJzZW5kXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM5ODEwYWY1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zOTgxMGFmNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQmxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMDJhZmUzNDAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Jlc3VtZS52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Jlc3VtZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTAyYWZlMzQwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Jlc3VtZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9yZGovc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDJhZmUzNDBcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDJhZmUzNDBcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSZXN1bWUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9SZXN1bWUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMmFmZTM0MCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVzdW1lLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDJhZmUzNDAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Jlc3VtZS52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMmFmZTM0MCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVzdW1lLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAyYWZlMzQwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvUmVzdW1lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlJlc3VtZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDJhZmUzNDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9SZXN1bWUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicmRqLXBhbmVsXCI+XG5cdFx0PGgzPlJlc3VtZTwvaDM+XG5cdDwhLS1cdDxhIG5nLWhyZWY9XCJcIiBjbGFzcz1cInJlc3VtZUxpbmtcIiBuZy1jbGljaz1cImRvd25sb2FkUmVzdW1lKClcIj4oQ2xpY2sgdG8gZG93bmxvYWQgYSBwZGYgY29weSk8L2E+IC0tPlxuXHRcblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1wYW5lbFwiPlxuXHRcdFx0PHA+XG5cdFx0XHRcdFRoZSBkb3dubG9hZGFibGUgcmVzdW1lIHRoYXQgSSBoYWQgaGVyZSAoYSBwZGYpIHdhcyBnZXR0aW5nIGEgYml0IGRhdGVkLiAgSSBoYXZlIG5vdCBwb3N0ZWQgYSBuZXcgdmVyc2lvbiBpbiBxdWl0ZSBhIHdoaWxlLlxuXHRcdFx0XHQ8YnIgLz48YnIgLz5cblx0XHRcdFx0U28sIHRoZSBvcmdpbmFsL2VkaXRhYmxlIHZlcnNpb24gaXMgb24gYSBzZXJ2ZXIgaGVyZSB0aGF0IGlzIG9mZmxpbmUuICBPbmNlIEkgYnJpbmcgaXQgYmFjayBvbmxpbmUgSSdsbCB1cGRhdGUgaXQgYW5kIHByZXNlbnRcblx0XHRcdFx0YW4gSFRNTCB2ZXJzaW9uIGFzIHdlbGwgYXMgYSBkb3dubG9hZGFibGUgV29yZCBhbmQgcGRmIHZlcnNpb25zIGZvciB5b3VyIHJlYWRpbmcgcGxlYXN1cmUuXG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSZXN1bWUudnVlPzgyNTUwMDA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJkai1wYW5lbFwiXG4gIH0sIFtfYygnaDMnLCBbX3ZtLl92KFwiUmVzdW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1wYW5lbFwiXG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRUaGUgZG93bmxvYWRhYmxlIHJlc3VtZSB0aGF0IEkgaGFkIGhlcmUgKGEgcGRmKSB3YXMgZ2V0dGluZyBhIGJpdCBkYXRlZC4gIEkgaGF2ZSBub3QgcG9zdGVkIGEgbmV3IHZlcnNpb24gaW4gcXVpdGUgYSB3aGlsZS5cXG5cXHRcXHRcXHRcIiksIF9jKCdicicpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuXFx0XFx0XFx0U28sIHRoZSBvcmdpbmFsL2VkaXRhYmxlIHZlcnNpb24gaXMgb24gYSBzZXJ2ZXIgaGVyZSB0aGF0IGlzIG9mZmxpbmUuICBPbmNlIEkgYnJpbmcgaXQgYmFjayBvbmxpbmUgSSdsbCB1cGRhdGUgaXQgYW5kIHByZXNlbnRcXG5cXHRcXHRcXHRhbiBIVE1MIHZlcnNpb24gYXMgd2VsbCBhcyBhIGRvd25sb2FkYWJsZSBXb3JkIGFuZCBwZGYgdmVyc2lvbnMgZm9yIHlvdXIgcmVhZGluZyBwbGVhc3VyZS5cXG5cXHRcXHRcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wMmFmZTM0MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDJhZmUzNDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1Jlc3VtZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9