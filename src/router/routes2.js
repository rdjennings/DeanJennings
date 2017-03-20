import Hero from '../components/Hero.vue'
// import Overview from '../components/Overview.vue'
import AboutMe from '../components/AboutMe.vue'
import ContactMe from '../components/ContactMe.vue'
// import RecentClients from '../components/RecentClients.vue'
// import Skills from '../components/Skills.vue'
import App from '../App.vue'
// import Blog from '../components/Blog.vue'
// import Resume from '../components/Resume.vue'


const Overview = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/Overview.vue'], () => {
    resolve(require('../components/Overview.vue'))
  }, 'group-u')
}

const RecentClients = resolve => {
  require.ensure(['../components/RecentClients.vue'], () => {
    resolve(require('../components/RecentClients.vue'))
  }, 'group-u')
}

const Skills = resolve => {
  require.ensure(['../components/Skills.vue'], () => {
    resolve(require('../components/Skills.vue'))
  }, 'group-v')
}

const Blog = resolve => {
  require.ensure(['../components/Blog.vue'], () => {
    resolve(require('../components/Blog.vue'))
  }, 'group-w')
}

const Resume = resolve => {
  require.ensure(['../components/Resume.vue'], () => {
    resolve(require('../components/Resume.vue'))
  }, 'group-w')
}

export default [
	{
		path: '/',
		redirect: '/hero'
	},
	{
		path: '/',
		component: App,
		children: [
			{
				path: 'overview',
				component: Overview
			},
			{
				path: 'aboutme',
				component: AboutMe
			},
			{
				path: 'contactme',
				component: ContactMe
			},
			{
				path: 'recentclients',
				component: RecentClients
			},
			{
				path: 'skills',
				component: Skills
			},
			{
				path: 'blog',
				component: Blog
			},
			{
				path: 'resume',
				component: Resume
			}
		]
	},
	{
		path: '/hero',
		component: Hero
	}
]