import { scrape } from "../index.ts";

const src = await scrape("https://www.example.com/");
console.log(src.text("h1")); // [ "Example Domain" ]
