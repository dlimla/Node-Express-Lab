const express = require('express');

const router = express.Router();

const Post = require('./db.js')

router.get('/', async (req,res) => {
    try {
        const posts = await Post.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({error: "The Post is not in the database"})
    }
})
  
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post) {
            res.status(200).json(post);
        }
        else {
            res.status(400).json({message: "Post not found"})
        }
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Error retrieving the post"
        })
    }
})

router.post('/', async (req,res) => {
    try {
        const post = await Post.insert(req.body);
        
        if(post) {
            res.status(200).json(post)
        }
        else {
            res.status(400).json({message: "Could not add your post"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Error saving your post"
        })
    }
})





module.exports = router;