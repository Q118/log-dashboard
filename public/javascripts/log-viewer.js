const connection = new WebSocket("ws://localhost:3000");

const logWindow = document.querySelector("#log-window");

const filePath = document.getElementById("logFilePath");

connection.onopen = () => {
    filePath ? connection.send(filePath) : connection.send("Hello from the client!");
};

connection.onmessage = (e) => {
    logWindow.innerHTML += e.data;
};
