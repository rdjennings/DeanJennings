import { markdown } from 'markdown';

export const getBlogHTML = state => {
	if (state.blogContent) {
		return markdown.toHTML(state.blogContent)
	}
	return null
}