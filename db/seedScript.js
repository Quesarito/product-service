// Import mongoose module
const mongoose = require('mongoose');
const { fakeData } = require('./fake-data-generator');

// Creating database
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
    },
  },
  image_urls: [String],
  expected_date_of_arrival: String,

  // Number of reviews for each star:
  five_star_reviews: Number, // Eventually fetched from /reviews API
  four_star_reviews: Number,
  three_star_reviews: Number,
  two_star_reviews: Number,
  one_star_reviews: Number,
  total_reviews: Number,

  // Number of answered questions about the product
  answered_questions: Number, // Eventually fetched from /questions API
});

// Products model definition
const Product = mongoose.model('Product', productSchema);

// Insert all fake data (100 products) into database
Product.insertMany(fakeData)
  .then(() => console.log('Successfully inserted fake data from database!'))
  .catch(err => console.log('Error inserting fake data from database index.js! ERROR: ', err));
