import { scrape } from "../index.ts";

type News = {
  link: string;
  title: string;
  date: string;
};

const scr = await scrape("https://m.freshnewsasia.com/index.php/en/"); //url to web for scrap

const title = scr.text("td.list-title a");
const links = scr.href("td.list-title a");
const date = scr.text("td.list-date.small");

const _res: News[] = title.map((title, index) => {
  return {
    link: links[index],
    title: title,
    date: date[index],
  };
});

//console.log(res);
