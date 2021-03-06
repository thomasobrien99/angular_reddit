app.controller('PostsController', PostsController);

PostsController.$inject=["$scope", "PostsService", "store", "auth"];

function PostsController($scope, PostsService, store, auth){
  var pC = this;

  PostsService.getPosts().then(res=>{
    pC.posts = res.data;
  }).catch(err=>console.log(err))

  pC.updatePost = (post, prop, value)=>{
  	post[prop] += value
  	PostsService.updatePost(post.id, post).then(res=>{
  		pC.posts.filter(el=>{
  			return el.id===res.data[0].id
  		})[0] = res.data[0]
  		console.log(res.data)
  	}).catch(err=>console.log(err))
  }
}

app.controller('PostController', PostController);

PostController.$inject=["$scope","PostsService", "$location"];

function PostController($scope, PostsService, $location){
	var pC = this;

	pC.commentsCollapsed = true;
	pC.commentsFormCollapsed = true;

	PostsService.getComments(pC.post.id).then(res=>{
		pC.comments = res.data;
	}).catch(err=>console.log(err));

	pC.vote = function(value){
		pC.onUpdate({post: pC.post, prop:'votes', value})
	}

	pC.deletePost = function(id){
		PostsService.deletePost(id)
		.then(()=>{
			$location.path('/redirect')
		})
		.catch(err=>console.log(err))
	}

	pC.comment = function(form,comment,postID){
		comment.postID = postID

		PostsService.addComment(postID, comment)
		.then((res)=>{
			pC.comments.push(res.data[0]);
		}).catch(err=>console.log(err));
	}

	pC.deleteComment = function(postID, commentID){
		PostsService.deleteComment(postID, commentID)
		.then((res)=>{
			pC.comments = res.data;
		}).catch(err=>console.log(err))
	}
}

app.controller('NewPostController', NewPostController)

NewPostController.$inject = ['PostsService','store', '$location']

function NewPostController(PostsService, store, $location)
{
	var npC = this;
	npC.user = store.get('profile');
	npC.addPost = function(post){
		post.user_img_url = npC.user.picture
		post.user_id = npC.user.user_id
		post.user_name = npC.user.name
		PostsService.addPost(post).then(()=>{
			$location.path('/posts')
		}).catch((err)=>{console.log(err)})
	}
}

app.controller('NavController', NavController)

NavController.$inject['auth']
function NavController(auth){
	var nC = this;

	nC.login = function(){
			// Set popup to true to use popup
			// Store 'profile' & 'token' in local storage
	    auth.signin({popup: true}, function(profile, token){
      	nC.username = profile['name'];
      	nC.picture = profile['picture'];
	      }, function(err){
	        // If anything goes wrong
      	});
  }
}