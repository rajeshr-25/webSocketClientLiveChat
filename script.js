const socket = new WebSocket("ws://localhost:3000");

let username = "";

window.onload = () => {
    username = prompt("Enter your username:") || "Guest";
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    const li = document.createElement("li");
    li.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;
    document.getElementById("messages").appendChild(li);

    const box = document.getElementById("messages");
    box.scrollTop = box.scrollHeight;
};

function sendMessage() {
    const text = document.getElementById("msgInput").value;

    if (!text.trim()) return;

    const messageObj = {
        user: username,
        text: text
    };

    socket.send(JSON.stringify(messageObj));

    document.getElementById("msgInput").value = "";
}