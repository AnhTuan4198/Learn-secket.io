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
    console.log(`${socket.id} is connecting `);
    socket.on('chat-mess',(data)=>{
        io.sockets.emit('chat-mess',data);
        //console.log(data);
    })
    socket.on("typing", data=>{
        socket.broadcast.emit('typing',data);
        console.log(data);
    });
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname`/public/index.html`);
})


