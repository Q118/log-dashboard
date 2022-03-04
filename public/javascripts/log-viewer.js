const connection = new WebSocket("ws://localhost:3000");

const logWindow = document.querySelector("#log-window");

// assign function to the connection objects ononpen event handler property
connection.onopen = () => {
    connection.send("Hello from the client!");
};

connection.onmessage = (e) => {
    logWindow.innerHTML += e.data;
}