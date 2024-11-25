const axios = require("axios");
const fs = require("fs"); 
const cheerio = require("cheerio");
const xlsx = require("xlsx");
const productData = require("./products");

const fetchData = async () => {
    try {
        const response = await axios.get(
            "https://example-ecommerce-website.com"
        );
        const html = response.data;

        fs.writeFile("data.txt", html, (err) => {
            if (err) {
                console.log("Error in Writing File:", err);
            } else {
                console.log("File Written Successfully");
            }
        });
    } catch (error) {
        console.log("Error in Fetching Data:", error);
    }
};

fetchData();

const htmlData = fs.readFileSync("data.txt", (err) => {
    if(err){
        console.log("Error in Reading file:", err);
    } else{
        console.log("File Read Successfully");
    }
});


const $ = cheerio.load(htmlData);
const products = [];

const titles = $("h2.product_title"); 
const prices = $("p.price");
const availability = $("p.isAvailable");
const ratings = $("p.product_rating");

titles.each((index, element) => {
    const title = $(element).text(); 
    const price = $(prices[index]).text(); 
    const isAvailable = $(availability[index]).text().toLowerCase() === "true"; 
    const rating = parseInt($(ratings[index]).text(), 10) || 0; 
    products.push({
        title,
        price,
        isAvailable,
        rating,
    });
});

const content = `const productData = ${JSON.stringify(products, null, 2)};\n\nmodule.exports = productData;`;

// Write to a file
fs.writeFile("products.js", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File successfully written as 'products.js'");
  }
}); 


const worksheet = xlsx.utils.json_to_sheet(productData);

const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Products");

const excelFileName = "products.xlsx";
xlsx.writeFile(workbook, excelFileName);

console.log(`Excel file successfully created as ${excelFileName}`);







