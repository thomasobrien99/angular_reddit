const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const requiresLogin = require('../requiresLogin')


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

router.route('/:id')
	.put(function(req, res){
		knex('posts')
		.where('id', req.params.id)
		.update(req.body.post)
		.returning('*')
		.then((post)=>{
			res.send(post)
		})
		.catch(err=>console.log(err))
	})
	.delete(function(req, res){
		knex('posts')
		.where('id', req.params.id)
		.delete()
		.then(()=>{
			res.redirect('/')
		})
		.catch(err=>console.log(err))
	})

module.exports = router;
