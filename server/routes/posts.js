const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.route('/')
	.get(function(req, res)
	{
		knex('posts').then(posts=>
		{
			res.send(posts);
		}).catch(err=>{
			res.send(err);
		})
	})
	.post(function(req, res){
		knex('posts')
		.insert(req.body.post)
		.then(()=>{
			res.redirect('/')
		})
		.catch(err=>{
			console.log(err);
		})
	})

module.exports = router;
