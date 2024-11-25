const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

// const fetchData = async () => {
//     try {
//         const response = await axios.get(
//             "https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35"
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
  if (err) {
    console.log("Error in Reading file:", err);
  } else {
    console.log("File Read Successfully");
  }
});

const $ = cheerio.load(htmlData);
const jobDetails = [];

const jobTitles = $("h2.heading-trun");
const companyNames = $("h3.joblist-comp-name");
const jds = $("li.job-description__");
const postedDate = $("span.sim-posted");

jobTitles.each((idx, ele) => {
  const jobTitle = $(ele).text().trim();
  const companyName = $(companyNames[idx]).text().trim() || "Not Available";
  const jdsText = $(jds[idx]).text().trim();

  const locationMatch = jdsText.match(/Location\s*:\s*([^,]+)/i);
  const location = locationMatch ? locationMatch[1].trim() : "Not specified";

  const typeMatch = jdsText.match(/Type\s*:\s*([^,]+)/i);
  const type = typeMatch ? typeMatch[1].trim() : "Not specified";

  const postedOn = $(postedDate[idx]).text().trim();

  const jd = $(jds[idx]).text().trim();
  // console.log(jobTitle);
  if (jobTitle)
    jobDetails.push({
      jobTitle,
      companyName,
      location,
      type, 
      postedOn,
      jd
    });
});

// console.log(jobDetails);

// Prepare the content in the required format
const content = `const jobDetails = ${JSON.stringify(jobDetails, null, 2)};\n\nmodule.exports = jobDetails;`;

// Write to a file
fs.writeFile("jobDetails.js", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File successfully written as 'products.js'");
  }
});

const worksheet = xlsx.utils.json_to_sheet(jobDetails);

const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Products");

const excelFileName = "jobDetails.xlsx";
xlsx.writeFile(workbook, excelFileName);

console.log(`Excel file successfully created as ${excelFileName}`);
