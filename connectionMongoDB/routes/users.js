const express=require('express')
const router = express.Router();

const User=require('../models/userModel');

//routes


//Crud Operations

//View or Read below

router.get('/users', async(req, res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users)
    }
    catch(err)
    {
        res.status(500).json({success:false,
            message:err.message})
    }
})

//Create below
router.post('/users', async(req, res)=>{
    console.log("received request for POST methid.")
    try{
        const {name, age, weight}=req.body;
        const newUser=new User({name, age, weight})
        await newUser.save()
        res.status(200).json({
            success:true,
            user:newUser
        })
    }
    catch(err)
    {
        res.status(500).json({success:false,
            message:err.message})
    }
})

//Update Query 
router.put('/users/:id', async(req, res)=>{
    const {id}=req.params;
    const{name, age, weight}=req.body;
    try{
        const updatedUser=await User.findByIdAndUpdate(id, {name, age, weight});
        if(!updatedUser)
        {
            res.json({
                message:"User Not Found."
            })
        }
        //but if you have updated the user successfully
        res.status(200).json({
            success:true,
            user:updatedUser
        }) 
    }
     catch(err)
    {
        res.status(500).json({success:false,
            message:err.message})
    }
})

//Delete 
router.delete('/users/:id', async(req, res)=>{
    const {id}=req.params;
    try{
        const deleteUser=await User.findByIdAndDelete(id);
        if(!deletedUser)
        {
            res.json({
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true, 
            user: deletedUser
        })
    }
     catch(err)
    {
        res.status(500).json({success:false,
            message:err.message})
    }
})
module.exports=router;
