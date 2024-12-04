import { DOMParser, type Element, type HTMLDocument } from "@b-fuze/deno-dom";
import {
  extractColumnMap,
  extractTableData,
  generateColumnLayout,
} from "./utils.ts";
import type { TableData, ScrapeOptions } from "./type.ts";
import { type Browser, launch } from "@astral/astral";

class Scrape {
  private doc: HTMLDocument;
  constructor(htmlString: string) {
    this.doc = new DOMParser().parseFromString(htmlString, "text/html")!;
  }
  /**
   * Scrape the `innerHTML` of the target element.
   * @param selector - The CSS selector of the target element.
   * @returns string[]
   */
  html(selector: string): string[] {
    const htmlList: string[] = [];
    const elements = this.doc.querySelectorAll(selector);
    elements.forEach((e) => {
      htmlList.push((e as Element).innerHTML.trim());
    });
    if (htmlList.length < 1) {
      return [];
    } else {
      return htmlList;
    }
  }
  /**
   * Scrape the `innerText` of the target element.
   * @param selector - The CSS selector of the target element.
   * @returns string[]
   */
  text(selector: string): string[] {
    const textList: string[] = [];
    const elements = this.doc.querySelectorAll(selector);
    elements.forEach((e) => {
      textList.push((e as Element).innerText.trim());
    });
    if (textList.length < 1) {
      return [];
    } else {
      return textList;
    }
  }
  /**
   * Scrape the `href` of the target element.
   * @param selector - The CSS selector of the target element.
   * @returns string[]
   */
  href(selector: string): string[] {
    const hrefList: string[] = [];
    const elements = this.doc.querySelectorAll(selector);
    elements.forEach((e) => {
      const href = e as Element;
      if (!href.hasAttribute("href")) {
        return;
      } else {
        hrefList.push(href.getAttribute("href")!.trim());
      }
    });
    return hrefList;
  }
  /**
   * Scrape the `attribute` of the target element.
   * @param {string} selector - The CSS selector of the target element.
   * @param {string} attribute - The Attribute of the target element.
   * @returns {string[]} string[]
   */
  attr(selector: string, attribute: string): string[] {
    const attrList: string[] = [];
    const elements = this.doc.querySelectorAll(selector);
    elements.forEach((e) => {
      const href = e as Element;
      if (!href.hasAttribute(attribute)) {
        return;
      } else {
        attrList.push(href.getAttribute(attribute)!.trim());
      }
    });
    return attrList;
  }
  /**
   * Scrape data from target `table` element.
   * @param {string} selector - The CSS selector of the target table element.
   * @param {number} [skip] - Indicate how many rows to consider as header inside `<table>`.
   * @returns TableData[] - An array of TableData.
   */
  table(selector: string, skip: number): TableData[] {
    const table: Element | null = this.doc.querySelector(selector);
    if (!table) throw new Error("No table found with the given selector");
    const tbody = table.querySelector("tbody");
    if (!tbody) throw new Error("No tbody found in the table");
    const columnMap = extractColumnMap(table, skip);
    console.log(columnMap);
    // generate column
    const columnLayout = generateColumnLayout(columnMap, 0, 0, "");
    console.log(columnLayout);
    return extractTableData(tbody, columnLayout, skip);
  }
}
/**
 * Function to scrape data from a website.
 *
 * @param url - URL of the website to scrape.
 * @param options - Scrape options. If defined, Astral will be used, which requires Chromium.
 * @example
 * await scrape("https://www.example.com");
 *
 * // Wait for 1 second or for an <h1> element to appear
 * await scrape("https://www.example.com", {
 *   waitFor: 1000,
 *   waitForElement: "h1"
 * });
 */

export async function scrape(
  url: string,
  options?: ScrapeOptions
): Promise<Scrape> {
  if (url == null) {
    throw "URL can't be empty!";
  }
  let html: string = "";
  // will use astral
  if (options != undefined) {
    const browser = await getBrowser(options);
    if (browser != undefined) {
      const page = await browser.newPage(url);
      if (options.waitFor != undefined)
        await new Promise((r) => setTimeout(r, options.waitFor));
      if (options.waitForElement != undefined)
        await page.waitForSelector(options.waitForElement);
      html = await page.content();
      await browser.close();
    }
  } else {
    const req = await fetch(url);
    html = await req.text();
  }
  const removeScript = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  const cleanHtml = removeScript.replace(/\n/g, "");
  return new Scrape(cleanHtml);
}

async function getBrowser(options?: ScrapeOptions) {
  let _browser: Browser;
  if (options?.waitFor != undefined || options?.waitForElement != undefined) {
    if (options?.path != undefined) {
      // use existing chromium
      _browser = await launch({
        path: options.path,
      });
    } else if (options?.ws != undefined) {
      // use remote browser
      _browser = await launch({
        wsEndpoint: options.ws,
      });
    } else {
      _browser = await launch();
    }
  } else {
    _browser = await launch({
      path: options?.path,
      wsEndpoint: options?.ws,
    });
  }
  return _browser;
}
