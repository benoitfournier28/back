const Products = require("../Models/product_model");

exports.productsFunction = async (req, res, next) => {
    const product = Products.find()
        .then(productSchema => res.status(200).json(productSchema))
        .catch(error => res.status(404).json({error}))
    product.save()
}