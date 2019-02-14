<template>
	<div class="rdj-panel">
		<h3>HTML / CSS / JavaScript</h3>
		
		<div class="card-panel">
			<p>
				<h4>HTML</h4>
				<ul class="browser-default">
					<li>HTML5</li>
					<li>JSP</li>
				</ul>
			</p>
			<p>
				<h4>CSS</h4>
				<ul class="browser-default">
					<li>CSS (2,3)</li>
					<li>Bootstrap</li>
					<li>Sass</li>
				</ul>
			</p>
			<p>
				<h4>JavaScript</h4>
				<ul class="browser-default">
					<li>Vue (with and without Veux)</li>
					<li>React (with and without React-Router)</li>
					<li>
						Redux (with and without React)
						<ul>
							<li>Thunk</li>
							<li>Sagas</li>
							<li>Observables</li>
						</ul>
					</li>
					<li>GraphQL</li>
					<li>Apollo</li>
					<li>jQuery</li>
					<li>Node (server)</li>
					<li>Angular</li>
					<li>Yahoo User Interface (YUI)</li>
					<li>Backbone</li>
					<li>
						Charting
						<ul class="browser-default">
							<li>High Charts</li>
							<li>FusionCharts</li>
							<li>Google Charts</li>
						</ul>
					</li>
				</ul>
			</p>
			<p>
				<h4>Portal Frameworks</h4>
				<ul class="browser-default">
					<li>Liferay</li>
				</ul>
			</p>
			<p>
				<h4>Graphics/Image Manipulation</h4>
				<ul class="browser-default">
					<li>PhotoShop</li>
					<li>The GIMP</li>
				</ul>
			</p>
			<p>
				<h4>General</h4>
				<ul class="browser-default">
					<li>Cross Browser Compatibility</li>
				</ul>
			</p>
		</div>
		
		<h3>Other related skills</h3>
		
		<div class="card-panel">
			<ul class="browser-default">
				<li>PHP</li>
				<li>C++</li>
				<li>General Electronics (yep, transistors, IC's, resitors, etc.)</li>
			</ul>
		</div>
		<commontest></commontest>
	</div>
</template>

<script>
import commontest from './commonTest.vue'
export default {
	components: {
		'commontest': commontest
	}
}
</script>

<style>

</style>
