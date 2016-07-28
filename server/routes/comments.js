const express = require('express');
const router = express.Router({mergeParams:true});
const knex = require('../db/knex')
const requiresLogin = require('../requiresLogin')

router.route('/')
	.get(function(req,res){
		knex('comments')
		.where('postID', req.params.post_id)
		.then(comments=>{
			res.send(comments)
		})
		.catch(err=>console.log(err));
	})
	.post(function(req, res){
		knex('comments')
		.insert(req.body.comment)
		.returning('*')
		.then(comment=>{
			res.send(comment)
		})
		.catch(err=>console.log(err))
	})
router.route('/:commentID')
	.delete(function(req,res){
		knex('comments')
		.where('id', req.params.commentID)
		.delete()
		.then(()=>{
			knex('comments')
			.then((comments)=>{
				res.send(comments)
			}).catch(err=>console.log(err))
		}).catch(err=>console.log(err))
	})

module.exports = router;