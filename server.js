const express = require('express');

const server = express();

const PostRouter = require('./data/post-router.js');


server.use(express.json());
server.use('/api/posts', PostRouter)

// server.get('/', (req,res) => {
//     res.send('<h2>HELLO THERE</h2>')
// })


module.exports = server;