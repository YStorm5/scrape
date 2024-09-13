export interface TableData {
  [key: string]: string | number | TableData | undefined;
}

/**
 * @param path - Path to the Chromium executable. Provide this if you already have Chromium installed.
 * @param ws - WebSocket URL to connect to a remote browser.
 * @param waitFor - Time in milliseconds to wait before fetching. Useful for websites that need to run scripts before populating elements.
 * @param waitForElement - CSS selector of a specific element to wait for before fetching.
 */
export interface ScrapeOptions {
  path?: string;
  ws?: string;
  waitFor?: number;
  waitForElement?: string;
}
