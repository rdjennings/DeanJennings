import Vue from 'vue/dist/vue.js'
import * as TYPES from './mutation-types'

const mutations = {
	[TYPES.FETCH_BLOG_LIST] (state, params = {}) {
		const success = params.success || function() {}
		const error = params.error || function() {}
	  Vue.http.get('php/blogs.php')
	    .then(function(response) {
	      state.blogList = JSON.parse(response.body)
	      if (typeof success === 'function') {
	      	success()
	      }
	    }, function(error) {
	      console.log('error', error)
	      if (typeof error === 'function') {
	      	error(error)
	      }
	    })
	},
	[TYPES.FETCH_BLOG] (state, params = {blog: ''}) {
	const success = params.success || function() {}
	const error = params.error || function() {}
  Vue.http.get(params.blog)
    .then(function(response) {
      state.blogContent = response.body
      if (typeof success === 'function') {
      	success()
      }
    }, function(error) {
      console.log('error', error)
      if (typeof error === 'function') {
      	error(error)
      }
    })
	},
	[TYPES.FETCH_COMMENTS] (state, params = {key: ''}) {
	const success = params.success || function() {}
	const error = params.error || function() {}
  Vue.http.get('php/blogComments.php?key=' + params.key)
    .then(function(response) {
      state.comments = JSON.parse(response.body)
      if (typeof success === 'function') {
      	success()
      }
    }, function(error) {
      console.log('error', error)
      if (typeof error === 'function') {
      	error(error)
      }
    })
	},
	[TYPES.UPDATE_COMMENTS] (state, params = {}) {
	const success = params.success || function() {}
	const error = params.error || function() {}
  Vue.http.get('php/update_blog_comments.php?name=' + params.name + '&text=' + params.text + '&topic=' + params.topic + '&type=' + params.type)
    .then(function(response) {
      if (typeof success === 'function') {
      	success()
      }
      params.resolve(response)
    }, function(error) {
      console.log('error', error)
      if (typeof error === 'function') {
      	error(error)
      }
    })
	}

}

export default mutations
