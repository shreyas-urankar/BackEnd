const express=require('express')
const router= express.Router();

//MiddleWarethat is specific to this router
// const timeLog=(req, res, next)=>{
//     console.log('time: ',Date.now())
//     next()
// }
// router.use(timeLog)

// //defines the home page route
// router.get('/', (req, res)=>{
//     router.send("About birds")
// })

// module.exports=router

//router level middleware
const auth=function(req, res, next){

    console.log("I am inside auth wala middleWare");
    
    //tumhari shayata k lie ek dummy user add kar raha hu
    req.user={userId:1, role:"student"};

    if(req.user)
    {
        //if a valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        //if not a valid user
        res.json({
            success:false,
            message:"Not a valid user."
        });
    }
};

const isStudent=function(req, res, next){
    console.log('Hi student welcome to the school website.')

    if(req.user.role==='student')
    {
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied, thsi route is only for students."
        })
    }
}

const isAdmin=function(req, res, next){
    console.log("Hi welcome to admin dashboard of schools website");

    req.user={adminId:1, role:"admin"}

    if(req.user.role==="admin")
    {
        next();
    }
    else{
        res.json({
            success:false,
            message:"You are not admin."
        })
    }
}

router.get('/student', auth, isStudent, (req, res)=>{
    console.log("You are the student of this school.")
    res.send("Student specific page.")
})

router.get('/admin', auth, isAdmin, (req, res)=>{
    console.log("You are a valid admin if this school.")
    res.send("Admin Specific page.")
})

module.exports=router