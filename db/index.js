// Import mongoose module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_db');

// Product Schema definition
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  description: [String],
  seller: String,
  prime_eligible: Boolean,
  versions: {
    new: {
      qty_in_stock: Number,
      price: Number,
    },
    old: {
      qty_in_stock: Number,
      price: Number,
    }
  },
  image_urls: [String],
  expected_date_of_arrival: String,
  // Number of reviews for each star:
  five_star_reviews: Number, // Eventually fetched from /reviews API
  four_star_reviews: Number,
  three_star_reviews: Number,
  two_star_reviews: Number,
  one_star_reviews: Number,
  // Number of answered questions about the product
  answered_questions: Number, // Eventually fetched from /questions API
});

// Products model definition
const Product = mongoose.model('Product', productSchema);

// Querying the database to find a product according to the specified conditions
// E.g. find({id: 45}) –> will query the database for a product whose id === 45.
const find = conditions => Product.find(conditions);

module.exports = {
  find,
};
