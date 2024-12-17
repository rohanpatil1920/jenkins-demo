const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("Hi this server is running on port 4000:4000, app v0.1")
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("Server running on port 4000")
})
