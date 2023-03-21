const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

router.get("/add-product", productsController.getAllProducts);
router.post("/add-product", productsController.postAllProducts);

module.exports = router;
