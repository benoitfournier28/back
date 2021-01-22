const mongoose = require("mongoose");
const Data = require("../Data/data");
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name : {type: String, require: true },
    description : {type: String, require: true },
    price : {type: Number, require: true },
    inStock : {type: Boolean, require: true },
});

module.exports = mongoose.model("Products", productSchema )