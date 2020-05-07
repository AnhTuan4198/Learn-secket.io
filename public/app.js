const socket = io.connect("http://localhost:8080/");

// Query DOM
const windowChat = document.getElementById("chat-window"),
  handle = document.getElementById("handle"),
  message = document.getElementById("message"),
  output = document.getElementById("output"),
  btn = document.getElementById("send"),
  status = document.getElementById("status");

//Emit envents
//Emmit message
btn.addEventListener('click',()=>{
    socket.emit("chat-mess", {
      message:message.value,
      handle: handle.value
    });
    message.value="";
})
//receive message
socket.on('chat-mess',function(data){
    status.innerHTML = "";
    output.innerHTML += `<p><strong>${data.handle}</strong>${data.message} </p>`;
})

// Tying status
message.addEventListener("keypress",()=>{
    socket.emit('typing',({
        typing:handle.value
    }))
});

socket.on('typing',data=>{
    console.log(data.tying);
    status.innerHTML = ` <p> ${data.typing} is typing ... </p>`;
})