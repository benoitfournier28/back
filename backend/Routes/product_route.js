const products = require("../Controllers/product_controller");
var express = require("express");
const router = express.Router();

router.get("/products", products.productsFunction);

module.exports = router;