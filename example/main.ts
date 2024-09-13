import { scrape } from "../index.ts";

const src = await scrape("https://www.example.com/", 100);
console.log(src.text("h1")); // [ "Example Domain" ]
