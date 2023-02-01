const express = require('express')
const app = express()
const cors = require('cors')
const productRouter = require('./routes/productRoutes');
const { default: mongoose } = require('mongoose');


app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT || 3000

mongoose.connect("mongodb+srv://Haki:Haki5656@cluster0.0bnhtmj.mongodb.net/test")
.then(res=>{
    console.log("Connect");
})
.catch(err => {
    console.log("err", err);
})


app.use(cors())


app.get('/', function(req,res){
    res.json("Welcome to my API-document")
})
app.use('/api/products', productRouter);




app.listen(port, () => {
    console.log("Server running...");
})