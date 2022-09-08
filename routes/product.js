import { Router } from "express";

import {
  createProduct,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = Router();

router.get("/create", createProduct);
router.get("/read/all", readProducts);
router.get("/read/:id", readProduct);
router.get("/update/:id", updateProduct);
router.get("/delete/:id", deleteProduct);

export default router;
