import express from "express";
import {
  addProduct,
  deleteProduct,
  getProductById,
  getProducts,
  getPublicProducts,
  updateProductById,
} from "../controllers/product.controller.js";
import verifyToken from "../middlewares/verifyToken.js";
import { upload } from "../config/cloudinary.js";

const router = express.Router();

router.get("/", verifyToken, getProducts);
router.get("/:shopname", getPublicProducts);
router.post(
  "/addProduct",
  verifyToken,
  upload.single("productPic"),
  addProduct
);
router.get("/getProductById/:id", verifyToken, getProductById);
router.put("/:id", verifyToken, updateProductById);
router.delete("/:id", verifyToken, deleteProduct);

export default router;
