var socket = io();

var messageList = document.getElementById("messages");
var messageContainer = document.getElementById("message-container")
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
    messageContainer.scrollTop = messageContainer.scrollHeight;
});