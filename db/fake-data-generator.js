// Import fake data npm module
const faker = require('faker');

// Import products images urls (array of arrays with URLs)
const { productImageURLs } = require('./productImageURLs.js');

// Get a random number of image urls imported image urls
const getImgUrls = () => {
  const rand = Math.floor(Math.random() * productImageURLs.length);
  return productImageURLs[rand];
};

// Get a random amount of description from faker
const getDescription = () => {
  const rand = Math.floor(Math.random() * 7);
  const paragraphs = [];

  for (let i = 0; i < rand; i += 1) {
    paragraphs.push(faker.lorem.paragraphs());
  }
  return paragraphs;
};

const getRandomBool = () => Math.floor(Math.random() * 10) > 4;
const getRandomQty = () => Math.floor(Math.random() * 25);
const getRandomPrice = () => faker.commerce.price();
const getRandomReviewQty = () => Math.floor(Math.random() * Math.random() * 100);
const getRandomAnswerQty = () => Math.floor(Math.random() * 250);
const getFutureDate = () => faker.date.future().toString();

// Produce a new product document with all fields
const newProductDocument = id => ({
  id,
  name: faker.commerce.productName(),
  description: getDescription(),
  seller: faker.company.companyName(),
  prime_eligible: getRandomBool(),
  versions: {
    new: {
      qty_in_stock: getRandomQty(),
      price: getRandomPrice(),
    },
    old: {
      qty_in_stock: getRandomQty(),
      price: getRandomPrice(),
    },
  },
  image_urls: getImgUrls(),
  expected_date_of_arrival: getFutureDate(),

  five_star_reviews: getRandomReviewQty(),
  four_star_reviews: getRandomReviewQty(),
  three_star_reviews: getRandomReviewQty(),
  two_star_reviews: getRandomReviewQty(),
  one_star_reviews: getRandomReviewQty(),
  total_reviews: getRandomReviewQty(),

  answered_questions: getRandomAnswerQty(),
});

// Randomly generated data array with 100 products
const fakeData = [];
for (let i = 0; i < 100; i += 1) {
  fakeData.push(newProductDocument(i));
}

module.exports = {
  fakeData,
};
