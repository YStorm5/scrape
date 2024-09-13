# Scrape

Module to scrape data from a website using [Deno](https://deno.land/), [Deno Dom](https://jsr.io/@b-fuze/deno-dom) and [Astral](https://jsr.io/@astral/astral@0.4.6/).

## Installation

To use this code, you need to have Deno installed on your system. You can install Deno by following the instructions at [deno.land](https://deno.land/).

> If you're using Node.js, you can also install it via [npm](https://www.npmjs.com/package/@ystorm5/scrape).

## Usage

### `scrape(url: string, options?: ScrapeOptions): Promise<Scrape>`

- **url** - Url of website to scrape
- **options** - Scrape options. If defined, Astral will be used, which requires Chromium.

```javascript
// jsr import
import { scrape } from "@panha/scrape/";

// non jsr import
import { scrape } from "https://deno.land/x/scrape@v2.0.0/index.ts";

const scraper = await scrape(url);

// Wait for 1 second or wait for an <h1> element to appear
await scrape("https://www.example.com", {
  waitFor: 1000,
  waitForElement: "h1",
});
```

### Methods

#### `html(selector: string): string[]`

This method scrapes the `innerHTML` of the target element(s) matching the CSS selector and returns an array of strings.

```javascript
const innerHTMLList = scraper.html("selector");
```

#### `text(selector: string): string[]`

This method scrapes the `innerText` of the target element(s) matching the CSS selector and returns an array of strings.

```javascript
const innerTextList = scraper.text("selector");
```

#### `href(selector: string): string[]`

This method scrapes the `href` attribute of the target element(s) matching the CSS selector and returns an array of strings.

```javascript
const hrefList = scraper.href("selector");
```

#### `attr(selector: string, attribute: string): string[]`

This method scrapes the specified attribute of the target element(s) matching the CSS selector and returns an array of strings.

```javascript
const attrList = scraper.attr("selector", "attribute");
```

#### `table(selector: string, skip?: number): TableData[]`

This method scrapes the data of the target table and returns an array of object.

- **skip**: Number of rows to skip, usually the table header, which will be used as object properties.

```javascript
const data = scraper.table("table");

// Skip the first 2 rows of tbody
const data = scraper.table("table", 2);
```

### Example

Here's an example of how to use the `scrape` function to scrape data from a website:

```javascript
import { scrape } from "@panha/scrape/";

const url = "https://example.com";
try {
  const scraper = await scrape(url);
  const titleList = scraper.text("h1");
  console.log(titleList);
} catch (error) {
  console.error(error);
}
```
