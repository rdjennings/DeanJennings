<template>
	<nav class='smallNav'>
		<div class="nav-wrapper">
<!--			<div class="col s2 offset-s2">
				<a href="/#hero" class="brand-logo rdj-logo">Dean Jennings</a>
			</div> -->
			<a style="display: inline;" href="#" data-activates="hero-menu" class="button-collapse"><i class="material-icons menu-icon">menu</i></a>
      <!-- Flyout menu -->
      <ul class="side-nav left" id="hero-menu">
				<router-link tag="li" to="/overview" exact>
				  <a>Overview</a>
				</router-link>
				<router-link tag="li" to="/aboutme" exact>
				  <a>About Me</a>
				</router-link>
				<router-link tag="li" to="/contactme" exact>
				  <a>Contact Me</a>
				</router-link>
				<router-link tag="li" to="/recentclients" exact>
				  <a>Recent Clients</a>
				</router-link>
				<router-link tag="li" to="/skills" exact>
				  <a>Skills</a>
				</router-link>
				<router-link tag="li" to="/blog" exact>
				  <a>Blog</a>
				</router-link>
				<router-link tag="li" to="/resume" exact>
				  <a>Resume</a>
				</router-link>
      </ul>
		</div>
	</nav>
</template>

<script>
	export default {
		created: function(){
		}
	}
</script>

<style>
nav.smallNav {
	background-color: transparent;
}

nav i {
	font-size: 4em !important;
}
</style>