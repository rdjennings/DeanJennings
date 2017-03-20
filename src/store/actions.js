const fetchBlogList = ({ commit }, params) => {
	return new Promise((resolve, reject) => {
		commit('FETCH_BLOG_LIST', params)
		resolve()
	})
}

const fetchBlog = ({ commit }, params) => {
	return new Promise((resolve, reject) => {
		commit('FETCH_BLOG', params)
		resolve()
	})
}

const fetchComments = ({ commit }, params) => {
	return new Promise((resolve, reject) => {
		commit('FETCH_COMMENTS', params)
		resolve()
	})
}

const updateComments = ({ dispatch, commit }, params) => {
	return new Promise((resolve, reject) => {
		const newParams = Object.assign({}, params, {resolve: resolve, reject: reject})
		commit('UPDATE_COMMENTS', newParams)
//		resolve()
	})
}

export {fetchBlogList, fetchBlog, fetchComments, updateComments}