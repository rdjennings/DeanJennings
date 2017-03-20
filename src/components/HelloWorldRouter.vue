<template>
	<div>
		<div class="row">
			<div class="col s5 push-s1">
				Hello World Router
			</div>
		</div>
		<div class="row">
			<div class="col s6 push-s2">
				<a @click="callUsers" class="waves-effect waves-light btn">Call Users</a>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<pre>
					{{users}}
				</pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				users: null
			}
		},
		methods: {
			callUsers: function() {
				this.$http({url: '/vue_components/dist/users.json', method: 'GET'})
				.then(function (response) {
					this.users = response.data
				}, function(response) {
					Materialize.toast('Error', 1000)
				});
			}
		}
	}
</script>
