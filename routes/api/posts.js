const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//post model
const Post =require ('../../models/Post');

//profile model
const Profile =require ('../../models/Profile');

//validation
const validatePostInput = require('../../validation/post');
//@route GET api/posts/test
//@desc tests post route
//@access Public

router.get('/test',(req,res)=>res.json({msg:"posts works"}));

//@route GET api/posts
//@desc create post
//@access Private
router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
 
 const {errors,isValid} = validatePostInput(req.body);
 //check validation
 if(!isValid){
     //if any errors send 400 with errors object
     return res.status(400).json(errors);

 }
 
    const newPost = new Post({
     text:req.body.text,
     name:req.body.name,
     avatar:req.body.avatar,
     user: req.user.id
 });
newPost.save().then(post=>res.json(post));
});


//@route GET api/posts
//@desc get post
//@access Public

router.get('/',(req,res)=>{
    Post.find()
    .sort({date: -1})
    .then(posts=>res.json(posts))
    .catch(err=> res.status(404).json({nopostsfound:'no posts found'}));
});

//@route GET api/posts/:id
//@desc get post by id
//@access Public

router.get('/:id',(req,res)=>{
    Post.findById(req.params.id)
    .then(post=>res.json(post))
    .catch(err=> res.status(404).json({nopostfound:'no post found with that id'}));
});

//@route DELETE api/posts/:id
//@desc delete post
//@access Private

router.delete('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        Post.findById(req.params.id)
        .then(post=>{
            //check for post owner
            if(post.user.toString() !=req.user.id){
                return res.status(401).json({notauthorized: 'user not authorized'});

            }
            //delete 
            post.remove().then(()=>res.json({success:true}));


        

        })
        .catch(err =>res.status(404).json({postnotfound:'no post found'}));

    })
});


//@route POST api/posts/like/:id
//@desc like post
//@access Private

router.post('/like/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        Post.findById(req.params.id)
        .then(post=>{
            if(post.likes.filter(like=>like.user.toString()=== req.user.id).length >0)
{
    return res.status(400).json({alreadyliked:'user already liked this post'});
}
//add user id to likes array
post.likes.unshift({user:req.user.id});
post.save().then(post=> res.json(post));
        
      })
        .catch(err =>res.status(404).json({postnotfound:'no post found'}));

    })
});

//@route POST api/posts/unlike/:id
//@desc unlike post
//@access Private

router.post('/unlike/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        Post.findById(req.params.id)
        .then(post=>{
            if(post.likes.filter(like=>like.user.toString()=== req.user.id).length === 0)
{
    return res.status(400).json({notliked:'you have not liked this post yet'});
}
//get the remove index
const removeIndex = post.likes
.map(item=>item.user.toString())
.indexOf(req.user.id);
//splice it out of array
post.likes.splice(removeIndex,1);
//save
post.save().then(post=>res.json(post));
        
      })
        .catch(err =>res.status(404).json({postnotfound:'no post found'}));

    })
});

//@route POST api/posts/comment/:id
//@desc add commetn to post
//@access Private

router.post('/comment/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {errors,isValid} = validatePostInput(req.body);
    //check validation
    if(!isValid){
        //if any errors send 400 with errors object
        return res.status(400).json(errors);
   
    }
    Post.findById(req.params.id)
    .then(post=>{
        const newComment = {
            text:req.body.text,
            name:req.bogy.name,
            avatar:req.body.avatar,
            user:req.user.id
        }
        //addd to comments array
        post.comments.unshift(newComment);
        //save
        post.save().then(post=>res.json(post));
    })
    .catch(err=>res.status(404).json({postnotfound:'no post found'}));
});



module.exports =router;
