# Scrape

Module to scrape data from a website using [Deno](https://deno.land/) and [Deno Dom](https://deno.land/x/deno_dom@v0.1.46).

## Installation

To use this code, you need to have Deno installed on your system. You can install Deno by following the instructions at [deno.land](https://deno.land/).

## Usage

```javascript
import { scrape } from "https://deno.land/x/scrape@v1.0.0/index.ts";

const scraper = await scrape(url);
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

- **skip**: number of rows that consider header of the table - will use as object properties

```javascript
const data = scraper.table("table");
```

### Example

Here's an example of how to use the `scrape` function to scrape data from a website:

```javascript
import { scrape } from "https://deno.land/x/scrape@v1.0.0/index.ts";

const url = "https://example.com";
try {
  const scraper = await scrape(url);
  const titleList = scraper.text("h1");
  console.log(titleList);
} catch (error) {
  console.error(error);
}
```
