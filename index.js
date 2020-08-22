const express = require('express');
const path = require('path')
const app = express();

// static file
app.use(express.static(path.join(__dirname, 'public'))); 

//router
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname , './software.html'))
})

app.listen(3001, ()=> {
    console.log('connected');
    
})