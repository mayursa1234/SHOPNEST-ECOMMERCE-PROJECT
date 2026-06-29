const Product = require("../models/Product");

const addProduct = async (req, res) => {
   try{
    const{
        productName,
        category,
        price,
        stocks,
        description,
        image,
    }=req.body;

    const product=await Product.create({
       productName,
       category,
       price,
       stocks,
       description,
       image,
      });

    res.status(201).json({
        message:"Product added successfully",
        product,
    });
   } catch(error){
    res.status(500).json({
        message:error.message,
    });
   }
};

const getAllProducts = async (req, res) => {

    try{
        const products=await Product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};



const getSingleProduct = async (req, res) => {
    try{
        const product=await Product.findById(req.params.id);
        
        if(!product){
            return res.status(404).json({
                message:"Product not found",
            });
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

const updateProduct = async (req, res) => {
   try{
    const product=await Product.findByIdAndUpdate(req.params.id,req.body,
        { new:true }
    ); 
    res.status(200).json(product);
   }catch(error){
    res.status(500).json({
        message:error.message,
    });
   }
};

const deleteProduct = async (req, res) => {
  try{
    const product=await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message:"Product deleted successfully",
    });
  }catch(error){
    res.status(500).json({
        message:error.message,
    });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};