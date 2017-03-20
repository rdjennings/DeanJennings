<template>
	<div class="rdj-panel">
		<div class="row main-content"> 
		    <div class="col l8 m12 s12">
		    	<div class="blogContent card-panel">
		    		<transition name="fade">
		    			<article v-html="getBlog" v-if="blogContent !== null"></article>
		    		</transition>
		    		<transition appear name="slide-fade">
			    		<div v-if="blogContent === null">
				    		<p>
				    			Here you'll find the occasional example of relatively recent work.
				    		</p>
				    		<p>
				    			Most of the work that I have done for clients in the last 8 - 10 years is proprietary and not available for public viewing. That's a shame because, as 
				    			a consultant, a lot of what I have done is pretty fresh and exciting (relative to the general excitement level of UI development).
				    		</p>
				    		<p>
				    			So, I use this area to provide examples of things that I have done that might be of interest to whomever.
				    		</p>
				    		<p>
				    			From time to time the content gets a bit thin.  Once a technique is somewhat outmoded or something that I have done that was extraordinary at the time has become 
				    			commonplace I tend to remove it.  No point in bragging about something that every 15 year old with a laptop does these days.
				    		</p>
				    		<p>
				    			But, feel free to browse and, if you don't see anything of interest, use the contact page to contact me and ask about any (UI related) topic.  I'm always up for a challenge!
				    		</p>
			    		</div>
		    		</transition>
		    	</div>
		    </div> 
		    <div class="col l4 m12 s12">
		    	<div class="card-panel">
		    		<transition appear name="fade">
				    	<ul v-if="blogList !== null" class="browser-default">
				    		<li v-for="blog in blogList">
				    			<a :href="blog.url" v-on:click.prevent="getBlogEntry">{{blog.title}}</a>
				    			<p class="p-small">{{blog.description}}</p>
				    		</li>
				    	</ul>
			    	</transition>
		    	</div>
		    </div> 
		</div>
		<div class="row blog_comments" v-if="comments && comments.length > 0">
			<div class="col s9">
		    	<div class="card-panel">
		    		<div class="panel panel-default" v-for="comment in comments">
		    			<div class="panel-heading">
		    				<h4 class="panel-title">{{comment.name || "Dean"}}</h4>
		    			</div>
		    			<div class="panel-body">{{comment.content}}</div>
		    		</div>
		    	</div>
		    </div>
		</div>
		<div class="row" v-if="blogContent !== null">
			<div class="col s9">
		    	<div class="card-panel">
					<form class="simple-form" v-on:submit.prevent="updateBlogComments">
						<label>
							<span>Name: </span>
							<input type="text" name="name" v-model="form.name" autocomplete="off"/>
							<div class="error" v-show="nameError">Name is a required field</div>
						</label>
						<br />
						<label class="comment-text-label">
							<span>Comment: </span>
							<textarea class="comment-text" name="text" v-model="form.text"></textarea>
							<div class="error" v-show="textError">Comment is a required field</div>
						</label>
						<br /><br />
						<button class="btn waves-effect waves-light" type="submit" name="action">
							Post Comment
					    <i class="material-icons right">send</i>
					  </button>
						<button v-on:click="resetForm" class="btn waves-effect waves-light" type="reset" name="action">
							Reset
					  </button>
					</form>
				</div>
			</div>
		</div>
		<commontest></commontest>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

function initialState () {
  return {
		nameError: false,
		textError: false,
		form: {
			name: '',
			text: ''
		}
	}
}
import commontest from './commonTest.vue'
export default {
	components: {
		'commontest': commontest
	},
	data () {
		return Object.assign({key: null}, initialState())
	},
	computed: {
		...mapState({
			blogList: state => state.blogList,
			blogContent: state => state.blogContent,
			comments: state => state.comments
		}),
		// we use a console log in the getBlogEntry funcion to demo using a "getter"
		...mapGetters({
			getBlog: 'getBlogHTML'
		})
  },
	created: function() {
		$(document).ready(function(){
		  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
		  $('.modal').modal();
  	});
	},
	methods: {
		...mapActions([
			'fetchBlogList',
			'fetchBlog',
			'fetchComments',
			'updateComments'
		]),
		fetchBlogListSuccess: function() {
			console.log('blog list retrieved!!')
		},
		fetchBlogListError: function() {
			console.log('blog list error...', arguments)
		},
		getBlogEntry: function(ev) {
			this.fetchBlog({
				blog: ev.currentTarget.getAttribute('href')
			})

			this.key = ev.currentTarget.innerHTML.replace(/\s/g, '_');
			const params = {
				key: this.key
			}
			this.fetchComments(params)
		},
		updateBlogComments: function(ev) {
			const name = this.form.name
			const text = this.form.text
			const topic = this.key
			const type = 'user'
			let errorCnt = 0
			let responseCode
			if (name.length === 0) {
				this.nameError = true
				errorCnt += 1
			} else {
				this.nameError = false
			}
			if (text.length === 0) {
				this.textError = true
				errorCnt += 1
			} else {
				this.textError = false
			}
			if (errorCnt > 0) {
				return;
			}

			const fetchComments = this.fetchComments
			const key = this.key
			const resetForm = this.resetForm
			const parms = {
				name: name,
				text: text,
				topic: topic,
				type: type,
				success: function() {
					resetForm()
				},
				error: function(error) {
					console.log('error error:', error)
				}
			}

			this.updateComments(parms).then(function (response) {
				fetchComments({key: topic})
			})
		},
		resetForm: function() {
			Object.assign(this.$data, initialState())
		}
	}
}
</script>

<style>
.blogContent {
	overflow: hidden;
}
@media (max-width: 992px) {
	.row.main-content {
		display: -webkit-flex;
		display: flex;

		-webkit-justify-content: center;
	   justify-content: center;

    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
	}
}
</style>