import Overview from '../components/Overview.vue'
import AboutMe from '../components/AboutMe.vue'
import ContactMe from '../components/ContactMe.vue'
import RecentClients from '../components/RecentClients.vue'
import Skills from '../components/Skills.vue'
// import Blog from '../components/Blog.vue'
// import Resume from '../components/Resume.vue'


const Blog = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/Blog.vue'], () => {
    resolve(require('../components/Blog.vue'))
  }, 'group-w')
}

const Resume = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/Resume.vue'], () => {
    resolve(require('../components/Resume.vue'))
  }, 'group-w')
}

export default [
	{
		path: '/',
		redirect: '/overview'
	},
	{
		path: '/overview',
		component: Overview
	},
	{
		path: '/aboutme',
		component: AboutMe
	},
	{
		path: '/contactme',
		component: ContactMe
	},
	{
		path: '/recentclients',
		component: RecentClients
	},
	{
		path: '/skills',
		component: Skills
	},
	{
		path: '/blog',
		component: Blog
	},
	{
		path: '/resume',
		component: Resume
	}
]