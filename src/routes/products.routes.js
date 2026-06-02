import productControllers from "../controllers/products.controller.js";
import { Router } from "express";
const router = Router();
router.get("/getAll", productControllers.getAll);
router.get("/getOne/:barcode",productControllers.getOne);
router.put("/updateOne/:barcode",productControllers.updateOne);
router.post("/insertOne/:barcode",productControllers.insertOne);
router.delete("/deleteOne/:barcode",productControllers.deleteOne);
export default router;