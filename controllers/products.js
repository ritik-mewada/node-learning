const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
    });
};

exports.postAllProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop", {
            prods: products,
            pageTitle: "Shop Page",
            path: "/",
        });
    });
};
