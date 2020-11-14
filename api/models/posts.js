const mongoose = require("mongoose").set('debug',true);
const Schema = mongoose.Schema;

const productSchema = new Schema({
  description: {type: String},
  image: {type: String},
  author:{type:Schema.Types.ObjectId, ref:"User"}
})


const Product = mongoose.model("Product",productSchema)

module.exports = Product;