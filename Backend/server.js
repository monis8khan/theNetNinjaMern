const express = require('express');
require('dotenv').config()



const app = express();

//-- Middleware
app.use((req,res, next)=>{
    console.log('middleware', req.path, req.method)
    next();
})


app.get('/', (req, res)=>{
    res.json({"msg": "testing get"})
})



app.listen(process.env.PORT, ()=>{
    console.log('listening on port 3000');
})