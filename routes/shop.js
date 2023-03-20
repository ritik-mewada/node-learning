const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render("shop", { prods: products, pageTitle: "Shop Page", path: "/" }); // it will render views/shop.pug
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
