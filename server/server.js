const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const server = express();
const auth = require("./data/api/routes/authRouter");
const user = require("./data/api/routes/userRouter");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", auth);
server.use("/api/users", user);

server.get("/", (req, res) => {
  res.send();
});

module.exports = server;
