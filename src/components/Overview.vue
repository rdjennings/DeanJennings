<template>
	<div class="rdj-panel" stye="margin: 0 10px;">
		<h3>Principal Web Developer / Senior User Interface Architect</h3>

		<div class="card-panel">
			<p>
				I am a highly experienced front end developer and architect with work experience with many major US and European companies in industries including finance, retail, manufacturing and insurance.
			</p>
			<p>
				I have proven experience in HTML, CSS and JavaScript using major frameworks such as ReactJS and DOM based scripting libraries like jQuery and YUI.
			</p>
		</div>
		<div class="card-panel">
			<p>
				I avoid using terms like "dynamic" and "highly motivated" to describe myself.  This stuff is just plain fun.  Whether the platform is mainframe CICS or browser/server based JavaScript, I have built user
				interfaces for my entire development career.  The immediate feedback is rewarding and the challenge of probem solving in a manner that provides a comfortable user
				experience is satisfying.
			</p>
		</div>
		<div class="card-panel">
			<h3>
				A note about this site.
			</h3>
			<p>
				I built this site when I was first learning Vue.js (at that point in time this was THE up and comming new technology).  Combined with Bootstrap/Materialize it has a specific look and feel.  It's not the most complex use of a 
				complex tool like Vue.js but I did not want to simply write a series of "Hello World" level pages to learn so this is the result.  By combining it with
				PHP/MySql for the backend this is a stable site that makes no use of any third party services including the simple "blog" pages that provide for real-time dynamic/updated-in-place comments.
				<br /><br />
				I had planned to re-create the site using React/Redux but had to really learn the nuts and bolts of that platform for a string of client engagements ... and then something new came along and made React a "second choice"!
				<br /><br />
				So, you are not seeing the top of my game but a learning experience.
			</p>
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