import express from "express"
import { connectDB } from "../config/db.js";
// import Product from "../models/product.model.js";
// import mongoose from "mongoose";
import { addProducts, deleteProducts, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router()

router.get("/",getProducts);
router.post("/", addProducts);
router.delete("/:id",deleteProducts);
router.put("/:id",updateProduct)

export default router;