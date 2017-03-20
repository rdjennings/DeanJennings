<template>
	<div>
		<router-view></router-view>
	</div>
</template >

<script>
	import utils from './utils'
	export default {
		data () {
			return {} 
		},
		 updated: function () {
		 	utils.manageSideNav()
		 }

	}
</script>
