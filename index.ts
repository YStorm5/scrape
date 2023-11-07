import {
  DOMParser,
  Element,
  HTMLDocument,
} from "https://deno.land/x/deno_dom@v0.1.41-alpha-artifacts/deno-dom-wasm.ts";

class Scrape {
  private htmlString: string;
  private doc: HTMLDocument;
  constructor(htmlString: string) {
    this.htmlString = htmlString;
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
   * @param selector - The CSS selector of the target element.
   * @param attribute - The Attribute of the target element.
   * @returns string[]
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
}
/**
 * `function` to scrape data from website
 * @param url - url of website to scrape
 *
 */
export const scrape = async (url: string) => {
  if (url == null) {
    throw "URL can't be empty!";
  }
  const req = await fetch(url);
  const res = await req.text();
  const removeScript = res.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  const cleanHtml = removeScript.replace(/\n/g, "");
  return new Scrape(cleanHtml);
};
