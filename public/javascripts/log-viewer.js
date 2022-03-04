const connection = new WebSocket("ws://localhost:3000");

const logWindow = document.getElementById("log-window");

const filePath = document.getElementById("logFilePath");

connection.onopen = () => {
    filePath ? connection.send(filePath) : connection.send("Hello from the client!");
};

console.log("log-viewer.js is running");

connection.onmessage = (e) => {
    // logWindow.innerHTML += e.data;
    // replace all new lines with a horizontal rule on event.data
    // const logs = e.data.replace(/\n/g, "<hr>");
    const logs = e.data.split("\n").join("<hr>");
    logWindow.innerHTML = logs;
    console.log(logs)
};
