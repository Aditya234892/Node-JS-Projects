const axios = require("axios");
const fs = require("fs"); 
const cheerio = require("cheerio");

// const fetchData = async () => {
//     try {
//         const response = await axios.get(
//             "https://www.verizon.com/smartphones/apple/"
//         );
//         const html = response.data;

//         fs.writeFile("data.txt", html, (err) => {
//             if (err) {
//                 console.log("Error in Writing File:", err);
//             } else {
//                 console.log("File Written Successfully");
//             }
//         });
//     } catch (error) {
//         console.log("Error in Fetching Data:", error);
//     }
// };

// fetchData();

const htmlData = fs.readFileSync("data.txt", (err) => {
    if(err){
        console.log("Error in Reading file:", err);
    } else{
        console.log("File Read Successfully");
    }
});

const $ = cheerio.load(htmlData);
const titles  = $("span#tileProductText");
const productData = [];
// console.log(titles.length);
titles.each((index, element) => {
    // console.log("Data:", element);
    const title = $(element).text();
    productData.push({title: title});
    // console.log(title);
})

console.log(productData);

// const prices = $("p.StyledTypography-VDS__sc-5k55co-0 hRAXYu StyledBody-VDS__sc-1s1yqd8-0 gjyxKS");
// console.log(prices);
// prices.each((index, price) => {
//     const priceText = $(price).text();
//     console.log(priceText);
// })


