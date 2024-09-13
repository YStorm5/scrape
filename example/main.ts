import { scrape } from "../index.ts";

const url = "https://www.example.com";
const scrapper = await scrape(url);
console.log(scrapper.html("h1")); // [ "Example Domain" ]
