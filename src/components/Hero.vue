<template>
	<div class="heroBG">
		<navigation></navigation>
		<div class="flex-container">
			<div class="tag-line-flex">
				<div class="tag-line-flex-item">
					Dean Jennings -&nbsp;
				</div>
				<div class="tag-line-flex-item tag-line-separator">
					&nbsp;-&nbsp;
				</div>
				<div class="tag-line-flex-item">
					Builder of user interfaces
				</div>
			</div>
			<div class="flex-sub-container">
				<router-link tag="div" class="flex-item overview_button" to="/overview" exact>
				  <a>Overview</a>
				</router-link>
				<router-link tag="div" class="flex-item contact_button" to="/contactme" exact>
				  <a>Contact Me</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Navigation from './smallnav.vue'
	export default {
		components: {
			'Navigation': Navigation
		},
	}
</script>

<style>
.heroBG {
	background-image: url('../images/code.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	height: 100%;
}

.smallNav a,
.smallNav a:hover {
	text-decoration: none !important;
}


.tag-line-flex {
	display: -webkit-flex;
	display: flex;

	-webkit-justify-content: center;
   justify-content: center;
}

.tag-line-flex-item	{
	color: #fff;
	font-size: 2em;
	height: 2em;
	position: relative;
}

.tag-line-flex-item.tag-line-separator {
	display:none !important;
}

.flex-container {
	display: -webkit-flex;
	display: flex;

	-webkit-justify-content: center;
   justify-content: center;
	-webkit-flex-direction: column;
   flex-direction: column;
}

.flex-sub-container {
  -webkit-align-items: center;
  align-items: center;

	display: -webkit-flex;
	display: flex;

	-webkit-justify-content: center;
   justify-content: center;
}

.flex-item {
	border: 2px solid #fff;
	margin-right: 20px;
}

.flex-item a {
	color: #fff;
	display: block;
	font-weight: 900;
	padding: 10px 5px;
}

.flex-item a,
.flex-item a:hover {
	text-decoration: none !important;
}

@media (max-width: 770px) {
	.flex-sub-container {
		-webkit-flex-direction: column;
    flex-direction: column;

    width: auto;
	}

	.flex-item {
		margin-bottom: 20px;
	}

	.tag-line-flex-item	{
		top: 0em;
	}
}

@media (max-width: 992px) {
	.side-nav li a {
		font-size: 1em;
	}

	.side-nav li {
		margin-bottom: 25px;
	}
	.tag-line-flex {
		-webkit-flex-direction: column;
    flex-direction: column;
	}

	.tag-line-flex-item	{
		margin: auto auto 1.5em;
	}
}

</style>