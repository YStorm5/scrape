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
 * Remove brackets from string
 * @param input string that need to remove
 * @returns clean string text
 */
export function removeBrackets(input: string): string {
  return input.replace(/[\[\]\*]/g, "");
}
