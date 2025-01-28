import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async(req, res) => {
  try {
    const allProducts = await Product.find({}); //gets all the data
    res.status(200).json({success:true, data:allProducts});
  } catch (error) {
    console.log(error.message).json({success:false, message: "internal server failure"})
    res.status(500)
  }
}

export const addProducts = async(req, res)=>{
  const product = req.body

  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success:false,message:"Please provide correct details"})
  }
  const newProduct = new Product(product)
  try {
    await newProduct.save()
    res.status(201).json({success:true, data:newProduct})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({success:false, message:"server error"}) // 500 meaning internal server error
  }

  


}

export const deleteProducts = async (req, res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false, message:"invalid product id"})
  }
  try {
   await Product.findByIdAndDelete(id)
    res.status(200).json({sucess:true, message:"Successfully deleted"})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({sucess:false, message:"error"})
  }

}
export const updateProduct = async(req, res)=>{
  const {id} = req.params;
  const product = req.body
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false, message:"invalid product id"})
  }
  try {
    const result  = await Product.findByIdAndUpdate(id, product, {new:true})
    res.status(200).json({success:true, data:result})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({success:false, message:"internal server error"})
  }
}