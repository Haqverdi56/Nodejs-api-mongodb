const { product } = require("../models/Product");

const productController = {
    getAll: async(req, res) => {
        data = await product.find({isDeleted:false})
        res.json(data)
    },
    add: (req,res) => {
            let newProduct = new product({
                name: req.body.name,
                description: req.body.description,
            })
            newProduct.save(function (err, doc) {
                if (!err) {
                    res.json(doc)
                }
                else {
                    res.status(500).json(err)
                }
            })
    },
    getByID:(req,res)=>{
        let id=req.params.id
        product.findById(id,(err,docs)=>{
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    delete:(req,res)=>{
        const id = req.params.id
        product.findById(id,(err,docs)=>{
            if(!err){
                docs.isDeleted = true;
                docs.save()
                res.json({message:"success"})
            }else{
                res.status(500).json(err)
            }
        })
    },
    update:(req,res)=>{
        const id=req.params.id
        product.findByIdAndUpdate(id,{name:req.body.name,description:req.body.description,runValidators:true},(err,docs)=>{
            if(!err){
                res.json(docs)
                docs.save()
            }else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports = {
    productController
}