<template>
	<nav class="rdj_nav">
		<div class="nav-wrapper">
			<div class="col s2 offset-s2 hide-on-med-and-down">
				<a href="#/hero" class="brand-logo rdj-logo">Dean Jennings</a>
			</div>
			<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons menu-icon">menu</i></a>
			<!-- "Normal" full sized menu -->
      <ul class="right hide-on-med-and-down">
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

      <!-- Flyout menu -->
      <ul class="side-nav" id="mobile-demo">
				<router-link tag="li" to="/hero" exact>
				  <a>Home</a>
				</router-link>
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

	}
</script>

<style>

	nav.rdj_nav ul > li {
		margin-top: 4px !important;
	}

	nav i {
		font-size: 4em !important;
	}

	@media (max-width: 992px) {
		.side-nav li a {
			font-size: 1.25em;
		}

		nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
			height: 128px;
			line-height: 128px;
		}
	}
</style>