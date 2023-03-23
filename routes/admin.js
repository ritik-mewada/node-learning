const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAllProducts);
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAllProducts);
router.get("/edit-product/:productId", adminController.getEditProducts);

router.post("/edit-product", adminController.postEditProduct);
router.post("/delete-product", adminController.postDeleteProduct);
module.exports = router;
