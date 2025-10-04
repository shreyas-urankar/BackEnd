// including express module and initialising an app

const express=require('express');
const app=express();

// variable that stores the port number
const port=3000;

app.get('/', (req, res)=>{
    res.send('Get request receive hui he!')
});

// Expalnation of above line 
// app.get describes the type of request that is 1)get, 2)put, 3)post, 4)delete
// '/' or '/about', '/article', etc this sign describes what is the path 
// start your app or server
app.listen(port, ()=>{
    console.log("Application start ho chuki he")
});
