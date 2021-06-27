var socket = io();

var messageList = document.getElementById("messages");
var msgForm = document.getElementById("msg-form");
var msgInput = document.getElementById("msg-input");

msgForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (msgInput.value) {
        socket.emit("message", msgInput.value);
        msgInput.value = "";
    }
});

socket.on("message", (msg) => {
    var msgElement = document.createElement("li");
    msgElement.textContent = msg;
    messageList.append(msgElement);
    window.scrollTo(0, document.body.scrollHeight);
});