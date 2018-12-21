// Import fake data npm module
const faker = require('faker');

// Get a random number of image urls from faker
const getImgUrls = () => {
  const numImg = Math.random() * 10 + 1;
  const images = [];

  for (let i = 0; i < numImg; i += 1) {
    images.push(faker.image.image());
  }
  return images;
};

// Get a random amount of description from faker
const getDescription = () => {
  const rand = Math.floor(Math.random() * 10);
  const text = [];

  for (let i = 0; i < rand; i += 1) {
    text.push(faker.lorem.paragraphs());
  }
  return text.join('');
};

// Produce a new product document with all fields
const newProductDocument = id => ({
  id,
  name: faker.commerce.productName(),
  description: getDescription(),
  seller: faker.company.companyName(),
  prime_eligible: Math.floor(Math.random() * 10) > 4,
  versions: {
    new: {
      qty_in_stock: Math.floor(Math.random() * 25),
      price: Math.floor(Math.random() * 1000),
    },
    old: {
      qty_in_stock: Math.floor(Math.random() * 25),
      price: Math.floor(Math.random() * 1000),
    },
  },
  image_urls: getImgUrls(),
  expected_date_of_arrival: faker.date.future().toString(),

  five_star_reviews: Math.floor(Math.random() * Math.random() * 100),
  four_star_reviews: Math.floor(Math.random() * Math.random() * 100),
  three_star_reviews: Math.floor(Math.random() * Math.random() * 100),
  two_star_reviews: Math.floor(Math.random() * Math.random() * 100),
  one_star_reviews: Math.floor(Math.random() * Math.random() * 100),
  total_reviews: Math.floor(Math.random() * 4882),

  answered_questions: Math.floor(Math.random() * 1000),
});

// Randomly generated data that will be exported with 100 products
const data = [];
for (let i = 0; i < 100; i += 1) {
  data.push(newProductDocument(i));
}

console.log(data[0]);

module.exports = {
  data,
};
