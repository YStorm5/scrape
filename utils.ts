import type { Element } from "@b-fuze/deno-dom";
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
  const _thead =
    thead != null
      ? Array.from(thead.children)
      : Array.from(table.querySelector("tbody")!.children);

  const columnMap: Data[][] = [];
  let nextRow: Data[] = [];
  for (let trIndex = 0; trIndex < skipRows; trIndex++) {
    const rows: Data[] = nextRow;
    nextRow = [];
    const tr = Array.from(_thead[trIndex]?.children || []);
    let totalCols = 0;
    const existCols = rows.map((x) => x.col);

    for (let thIndex = 0; thIndex < tr.length; thIndex++) {
      const th = tr[thIndex];
      const colspan = parseInt(th.getAttribute("colspan") || "1", 10); // 1
      const rowspan = parseInt(th.getAttribute("rowspan") || "1", 10);

      totalCols += colspan;
      existCols.forEach((x) => {
        if (x === totalCols) {
          totalCols += 1;
        }
      });

      const cell: Data = {
        row: trIndex + 1,
        col: totalCols,
        value: toCamelCase(cleanText(th.innerText.trim())),
      };

      for (let rowSpanIndex = 1; rowSpanIndex < rowspan; rowSpanIndex++) {
        nextRow.push({
          ...cell,
          row: rowSpanIndex + 1,
        });
      }

      rows.push(cell);
    }
    const newRows = rows
      .sort((a, b) => a.col - b.col)
      .filter((x) => {
        if (!existCols.includes(x.col)) {
          return x;
        }
      });
    columnMap.push(newRows);
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
 * @param table - Table element
 * @param columnLayout - Generated column layout
 * @param skipRows - Number of header rows to skip
 * @returns Parsed table data
 */
export function extractTableData(
  table: Element,
  columnLayout: TableData | string,
  skipRows: number
): TableData[] {
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody")!;
  const rows =
    thead != null
      ? Array.from(tbody.querySelectorAll("tr"))
      : Array.from(tbody.querySelectorAll("tr")).splice(skipRows);
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
