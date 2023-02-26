const userModel = require('../models/postModel')
const getPosts = (req,res) =>{
    userModel.find()
    .then(result =>{res.render('index', {users : result})})
    .catch(err =>{console.log(err)});
}

const createPost = (req,res)=>{
    let newUser = new userModel(req.body);
    newUser.save()
    .then(()=> {res.redirect('/')})
    .catch(err =>{ console.log(err)});
}


module.exports = {
    getPosts,
    createPost
}