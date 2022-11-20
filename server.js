const express = require('express')
const db = require('./config/db')
const server = express()



const allRouter = require('./routes')



const PORT = process.env.PORT || 3000

server.use(express.json())
server.use(allRouter)
server.listen(PORT, ()=>{
    console.log("server running server at " + PORT);
})