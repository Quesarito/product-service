const faker = require('faker');
const fs = require('fs');

// Import products images urls (array of arrays with URLs)
const { productImageURLs } = require('./productImageURLs.js');

// Get a random number of image urls from imported image urls
const getImgUrls = () => {
  const rand = Math.floor(Math.random() * productImageURLs.length);
  return productImageURLs[rand];
};

// Get a random amount of description from faker
const getDescription = () => {
  const rand = Math.floor(Math.random() * 4) + 4;
  const paragraphs = [];

  for (let i = 0; i < rand; i += 1) {
    paragraphs.push(faker.lorem.paragraphs());
  }
  return paragraphs;
};

const getRandomBoolean = () => Math.floor(Math.random() * 10) > 4;
const getRandomQuantity = () => Math.floor(Math.random() * 25);
const getRandomPrice = () => faker.commerce.price();
const getRandomReviewQuantity = () => Math.floor(Math.random() * Math.random() * 100);
const getRandomAnswerQuantity = () => Math.floor(Math.random() * 250);
const getFutureDate = () => faker.date.future().toString();
  
const writeStream = fs.createWriteStream("./mockdata.csv");

let count = 0;

// const populate = () => {
//   while(count <= 10000000) {
//     const id = count
//     const name = faker.commerce.productName();
//     const description = getDescription();
//     const seller = faker.company.companyName();
//     const prime_eligible = getRandomBoolean();
//     const versions = {
//       new: {
//         qty_in_stock: getRandomQuantity(),
//         price: getRandomPrice(),
//       },
//       old: {
//         qty_in_stock: getRandomQuantity(),
//         price: getRandomPrice(),
//       },
//     };
//     const image_urls = getImgUrls();
//     const expected_date_of_arrival = getFutureDate();
//     const five_star_reviews = getRandomReviewQuantity(); 
//     const four_star_reviews = getRandomReviewQuantity();
//     const three_star_reviews = getRandomReviewQuantity(); 
//     const two_star_reviews = getRandomReviewQuantity(); 
//     const one_star_reviews = getRandomReviewQuantity(); 
//     const answered_questions = getRandomAnswerQuantity();

//     const info = [id, name, description, seller, prime_eligible, versions, image_urls, expected_date_of_arrival, five_star_reviews, four_star_reviews, three_star_reviews, two_star_reviews, one_star_reviews, answered_questions];
//     const infoString = info.koin(',');
//     infoString += '\n\r';
// }

const tracker = (i) => {
  if (i === 0) {
    return console.log('WOOOOOO!!! ALL 10,000,000 seeded!!!')
  }
  if (i % 100000 === 0) {
    if (i % 1000000 === 0) {
      console.log( (10 - (i/1000000)) + ',000,000 seeded!')
    } else {
      console.log( 100 - (i/100000) + '00000 seeded!')
    }
    

  }
}

const populate = (writer) => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      i--;
      tracker(i);

      const product = {
        id: i,
        name: faker.commerce.productName(),
        description: getDescription(),
        seller: faker.company.companyName(),
        prime_eligible: getRandomBoolean(),
        versions: {
          new: {
            qty_in_stock: getRandomQuantity(),
            price: getRandomPrice(),
          },
          old: {
            qty_in_stock: getRandomQuantity(),
            price: getRandomPrice(),
          },
        },
        image_urls: getImgUrls(),
        expected_date_of_arrival: getFutureDate(),
        five_star_reviews: getRandomReviewQuantity(),
        four_star_reviews: getRandomReviewQuantity(),
        three_star_reviews: getRandomReviewQuantity(),
        two_star_reviews: getRandomReviewQuantity(),
        one_star_reviews: getRandomReviewQuantity(),
        answered_questions: getRandomAnswerQuantity(),
      };
      const productData = JSON.stringify(product, null, 4) + "\n";
      if (i === 0) {
        writer.write(productData);
      } else {
        ok = writer.write(productData);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  };
  write();
};

populate(writeStream);

