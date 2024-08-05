const express = require('express')

const app =express()

app.use('/',(req,res)=>{
    res.send("Hey User")
})


app.listen(5000,()=>{
    console.log("Server is Running");
    
})