// ye file saare item specific routes ko store karegi
const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res)=>{
  res.send("Hi my name is shreyas! I got a get request.")
  // res.sendFile('./dummy.html', {root:__dirname})
});

//post request
router.post('/items',(req, res)=>{
  // res.send("Ohh great to see you studing BackEnd. We got your post request.")
  res.json({x:1, y:2, z:3})
});

//put request
router.put('/items/:id',(req, res)=>{
  res.send("Got a put request.")
});

//delete request
router.delete("/items/:id",(req, res)=>{
  res.send("Got a delete request.")
});


module.exports = router
