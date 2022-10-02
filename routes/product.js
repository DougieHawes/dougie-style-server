import { Router } from "express";

import {
  createProduct,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = Router();

router.post("/create", createProduct);
router.get("/read/all", readProducts);
router.get("/read/:id", readProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
