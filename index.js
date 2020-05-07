const express = require('express');
const socket= require('socket.io');
const app =express();
const port = 8080;
const server = app.listen(port,()=>{
    console.log('Listening on poor 8080');
});

app.use(express.static("public"));
//Socket set up
const io = socket(server);

io.on('connection',(socket)=>{
    console.log(` Connection with io is established with ${socket.id}`); 
})


