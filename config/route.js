const express = require('express');
const route = express.Router();
const userPostsController = require('../controller/usersPosts')

route.get('/', userPostsController.getPosts);
route.post('/create-post', userPostsController.createPost)

module.exports = route;