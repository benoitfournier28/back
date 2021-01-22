const mongoose = require("mongoose");
const Data = require("../Data/data");
const Schema = mongoose.Schema;

const UserConnexion = new Schema({
    email: {type: String, required: true, validate: "Vous devez entrer votre adresse mail"},
    secure_password: {type: String, required:true, minlength: 8, maxlength: 25,}, //regex?
    salt: {type: String, required: true}
})

module.exports = mongoose.model("Connexion", UserConnexion )