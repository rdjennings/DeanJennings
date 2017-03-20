<template>
	<div>
		<banner></banner>
		<navigation></navigation>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template >

<script>
	import Banner from './components/banner.vue'
	import Navigation from './components/navigation.vue'
	import { mapActions } from 'vuex'

	export default {
		props: ['propsHere'],
		components: {
			'Banner': Banner,
			'Navigation': Navigation
		},
		created: function(){

//			Materialize.toast('Materialize Running', 2000)
			ga ('send', {
			  'hitType': 'event',    
			  'eventCategory': 'application', 
			  'eventAction': 'load',
			  'eventLabel': 'none'
			});

			// load any initial data
			this.fetchBlogList()
		},
		data () {
			return {
			} 
		},
		methods: {
			...mapActions([
				'fetchBlogList'
			])
		}
	}
</script>

<style>
	html, body {
		height: 100%;
	}
	body {
		font-family: Helvetica, sans-serif;
	}
</style>
