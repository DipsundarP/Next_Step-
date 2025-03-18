require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./routes/router");
const cors = require("cors");

const port = 9000;


server.use(express.json());
server.use(cors());
server.use(router);

server.listen(port,()=>{
    console.log(`server start at port no :${port}`)
})