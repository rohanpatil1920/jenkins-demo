const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("Hi this server is running on port 4000, app v1.0\n My App is running through Jenkins CI/CD Pipeline")
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("Server running on port 4000")
})
