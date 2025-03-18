require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./routes/router");
const cors = require("cors");

const port = 9000;


server.use(express.json());
server.use(
  cors({
    origin: "https://next-step-mu-five.vercel.app",
    methods: "POST , GET",
    allowedHeaders: "Content-Type,Authorization", // Allow specific headers
  })
);
server.use(router);

server.listen(port,()=>{
    console.log(`server start at port no :${port}`)
})