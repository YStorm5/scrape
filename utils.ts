import { DOMParser, type Element } from "@b-fuze/deno-dom";
import type { Data, TableData } from "./type.ts";

/**
 * Convert string to camelCase
 * @param input string that will convert to camelCase
 * @returns camelCase string
 */
export function toCamelCase(input: string): string {
  const words = input.split(" ");
  let camelCaseString = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    camelCaseString +=
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return camelCaseString;
}
/**
 * Remove unnecessary symbols or characters from the string.
 * @param input string that need to remove
 * @returns clean string text
 */
export function cleanText(input: string): string {
  return input
    .replace(/\[.*?\]/g, "")
    .replace(/['"]/g, "")
    .replace("  ", "-");
}

/**
 * Extract column mapping, handling complex header structures with colspan and rowspan
 * @param table - The table element
 * @param skipRows - Number of header rows to skip
 * @returns Array of column mapping data
 */
export function extractColumnMap(table: Element, skipRows: number): Data[][] {
  const thead = table.querySelector("thead");
  const _thead = thead
    ? Array.from(thead.children).concat(
        Array.from(thead.querySelectorAll("tr"))
      )
    : Array.from(table.querySelectorAll("tr"));

  const columnMap: Data[][] = [];
  for (let trIndex = 0; trIndex < skipRows; trIndex++) {
    const rows: Data[] = [];
    const tr = Array.from(_thead[trIndex]?.children || []);
    let totalCols = 0;

    for (let thIndex = 0; thIndex < tr.length; thIndex++) {
      const th = tr[thIndex];
      const colspan = parseInt(th.getAttribute("colspan") || "1", 10);
      const rowspan = parseInt(th.getAttribute("rowspan") || "1", 10);
      if (th.innerText === "") {
        totalCols += 1;
        continue;
      } //
      const cell: Data = {
        row: trIndex + 1,
        col: (totalCols += colspan),
        value: toCamelCase(cleanText(th.innerText.trim())),
      };

      // add empty th to next row if rowspan > 1
      if (rowspan > 1) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(
          "<table><tr></tr></table>",
          "text/html"
        );
        const thEl = doc!.createElement("th");
        for (let rowSpanIndex = 1; rowSpanIndex < rowspan; rowSpanIndex++) {
          _thead[trIndex + rowSpanIndex]!.prepend(thEl);
        }
      }

      rows.push(cell);
    }
    columnMap.push(rows);
  }

  return columnMap;
}

/**
 * Recursively generate column layout based on header structure
 * @param columnMap - Mapped column data
 * @param rowIndex - Current row index
 * @param colSpan - Column span
 * @param columnName - Column name of parent. Used when is no header name.
 * @returns Structured column layout
 */
export function generateColumnLayout(
  columnMap: Data[][],
  rowIndex: number,
  colSpan: number,
  columnName: string
): TableData | string {
  const row = columnMap[rowIndex];
  if (!row) {
    const obj: TableData = {};
    Array.from({ length: colSpan }, (_, i) => {
      obj[`${columnName}#${i}`] = "###";
    });
    return obj;
  }

  const header: TableData = {};
  const columns = rowIndex === 0 ? row : row.splice(0, colSpan);

  columns.forEach((column, columnIndex) => {
    const previousColumn =
      columnIndex !== 0 ? columns[columnIndex - 1] : { col: column.col };

    const colspan = column.col - previousColumn.col;
    header[column.value] =
      colspan === 0 ||
      (colspan === 1 && columnMap[rowIndex + 1]?.at(0)?.col !== column.col)
        ? "###"
        : generateColumnLayout(columnMap, rowIndex + 1, colspan, column.value);
  });

  return header;
}

/**
 * Extract table data into structured format
 * @param tbody - Table body element
 * @param columnLayout - Generated column layout
 * @param skipRows - Number of header rows to skip
 * @returns Parsed table data
 */
export function extractTableData(
  tbody: Element,
  columnLayout: TableData | string,
  skipRows: number
): TableData[] {
  const rows = Array.from(tbody.querySelectorAll("tr")).slice(skipRows);
  const existedRow: Data[] = [];

  return rows.map((row, trIndex) => {
    let jsonTemplate = JSON.stringify(columnLayout);
    const innerData: string[] = [];
    const cells = Array.from(row.children);

    cells.forEach((cell, tdIndex) => {
      const colspan = parseInt(cell.getAttribute("colspan") || "1", 10);
      const rowspan = parseInt(cell.getAttribute("rowspan") || "1", 10);

      let value = cleanText(cell.innerText.trim());

      // Remove empty cell
      // if (cell.children.length === 0 && value === "") return "";

      // Try to get image src if text is empty
      if (value === "") {
        const img = cell.querySelector("img");
        value = img?.getAttribute("src") || "";
      }

      if (rowspan > 1) {
        existedRow.push({
          row: trIndex,
          col: tdIndex,
          value: value,
        });
      }

      // Handle multiple column spans
      for (let colIndex = 0; colIndex < colspan; colIndex++) {
        innerData.push(value);
      }
    });

    // Inject existed row values
    const existRow = existedRow.filter((e) => e.row === trIndex - 1);
    existRow.forEach((e) => innerData.splice(e.col, 0, e.value));

    // Replace placeholders with actual values
    innerData.forEach((e) => {
      jsonTemplate = jsonTemplate.replace("###", e);
    });

    return JSON.parse(jsonTemplate);
  });
}
