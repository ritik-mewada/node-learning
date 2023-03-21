const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAllProducts);
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAllProducts);

module.exports = router;
