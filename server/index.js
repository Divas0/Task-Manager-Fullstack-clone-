const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const os = require("os-utils");
const cors = require("cors");
const si = require("systeminformation");

app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  const interval = setInterval(() => {
    os.cpuUsage((cpuPercent) => {
      socket.emit("cpu", { value: cpuPercent });
    });

    si.processes()
      .then((data) => {
        socket.emit("system", data);
      })
      .catch((error) => console.log(error));
  }, 2000);
  si.mem()
    .then((data) => {
      const memoryUsed = (data.used / data.total) * 100;
      console.log(memoryUsed);
      socket.emit("memory", { value: memoryUsed });
    })
    .catch((err) => console.log("memory error", err));
  si.fsSize().then((disk) => {
    console.log("Disk Usage Information:" , disk[0]);
    socket.emit("diskusage", disk);
  });
  si.networkStats()
    .then((data) => {
      // console.log(data);
      socket.emit("network", data);
    })
    .catch((error) => console.error(error));


  socket.on("disconnect", () => {
    console.log("A user disconnected");
    clearInterval(interval);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
