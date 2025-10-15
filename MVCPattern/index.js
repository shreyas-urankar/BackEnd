const express=require ('express')
const connectDB=require('./config/db')
const dotenv=require('dotenv')
const productRoutes=require("./routes/productRoutes")
const app = express()
app.use(express.json())
//load env
dotenv.config();
const port=process.env.port


//connect to database
connectDB();

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.use('/api',productRoutes);

//=>/api/products

app.listen(port, ()=>{
    console.log(`Product app listning on port ${port}`)
})