const express=require('express');
const app=express()
const port=3000;

//loading middleware into the app
// inbuild middleware
app.use(express.json());

// middleware-> looging, auth, validation


//Below Creation of a Middle Ware
// const loggingMiddleware=function(req, res, next)
// {
//     console.log("Logged IN");
//     next();
// }
//Below Loading middle ware into application.
// app.use(loggingMiddleware);

// const authenticationMiddleware=function(req, res, next)
// {
//     console.log("Authentication is done.");
//     next();
// }
// app.use(authenticationMiddleware);

// const validationMiddleware=function(req, res, next)
// {
//     console.log("Validation is done.");
//     next();
// }
// app.use(validationMiddleware);
const route=require('./routes/routes');
app.use('/api', route)

app.get('/',(req,res)=>{
    console.log(req.body);
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`Example app listining on port ${port}`)
})