const connection = new WebSocket("ws://localhost:3000");

const logWindow = document.querySelector("#log-window");

const filePath = document.getElementById("logFilePath").value;

connection.onopen = () => {
    if (filePath) {
      connection.send(filePath)
    }
  }


connection.onmessage = (event) => {
    // logWindow.innerHTML += e.data;
    // replace all new lines with a horizontal rule on event.data
    // const logs = e.data.replace(/\n/g, "<hr>");
    const logs = event.data.split("\n").join("<hr>");
    logWindow.innerHTML = logs;
};
