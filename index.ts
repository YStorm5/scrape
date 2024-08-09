import {
  DOMParser,
  type Element,
  type HTMLDocument,
} from "jsr:@b-fuze/deno-dom@0.1.47";
import { removeBrackets, toCamelCase } from "./utils.ts";

interface TableData {
  [key: string]: string | number | TableData | undefined;
}

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
   * @param {number} [skip] - Indicate how many rows to consider as header inside <tbody>. If the table has <thead>, this parameter is not required.
   * @returns TableData[] - An array of TableData.
   */
  table(selector: string, skip?: number): TableData[] {
    const _table = this.doc.querySelector(selector);
    const _rows: Element[] = [];
    const _skipRows: Element[] = [];
    let _skip = skip ?? 0;
    let _hasHead = false;

    // check if there thead
    if (_table == null) throw new Error("There is no target table");
    const _tbody = _table.querySelector("tbody");
    if (_tbody == null) throw new Error("There is no tbody inside the table");
    const _thead = _table.firstElementChild;
    if (_thead?.tagName == "THEAD") {
      _hasHead = true;
      _thead.querySelectorAll("tr").forEach((e) => {
        const _element = e as Element;
        _skipRows.push(_element);
      });
      _skip = _skipRows.length;
    }
    _tbody.querySelectorAll("tr").forEach((e, i) => {
      const _element = e as Element;
      if (!_hasHead) {
        if (i < _skip) _skipRows.push(_element);
        else _rows.push(_element);
      } else {
        _rows.push(_element);
      }
    });
    function generateColumn(i: number, _value: string[], _cols?: number) {
      const _header: TableData = {};
      if (i < _skipRows.length) {
        const childrens = Array.from(_skipRows[i].childNodes); // 3
        let same = true;
        childrens.slice(0, _cols ?? childrens.length).forEach((v) => {
          const col = v as Element;
          const colSpan = col.getAttribute("colspan") ?? 1;
          const _cols = +colSpan; // 5
          if (_cols == 1) {
            _header[toCamelCase(removeBrackets(col.innerText))] = _value
              .shift()
              ?.toString();
          } else {
            if (same) {
              ++i;
              same = false;
            }
            _header[toCamelCase(removeBrackets(col.innerText))] =
              generateColumn(i, _value, _cols);
          }
        });
      }
      return _header;
    }

    const tds = _rows?.splice(0, _rows.length).map((e) => {
      const rows: string[] = [];
      e.childNodes.forEach((v) => {
        const el = v as Element;
        const colSpan = el.getAttribute("colspan") ?? 1;
        const cols = +colSpan;
        Array(cols)
          .fill(el.innerText)
          .forEach((v) => {
            rows.push(removeBrackets(v));
          });
      });
      return generateColumn(0, rows);
    });
    return tds;
  }
}
/**
 * `function` to scrape data from website
 * @param url - url of website to scrape

 */
export async function scrape(url: string): Promise<Scrape> {
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
}
