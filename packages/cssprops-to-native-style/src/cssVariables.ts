/**
 * catch the css variable with an optional default parameter. breakdown:
 *   ^var\(--       start of sequence at start of input)
 *   ([\w-\+)       capture group 1: the variable name
 *   *              optional whitespace
 *   (?:            start of non-capturing group, used to group | clauses
 *     \)           (option1) end of sequence at end of input
 *     , *([^),]+)  (option2) capture group 2: the default parameter
 */
const cssVarWithParamRegex = /^var\(--([\w-]+) *(?:\)|, *(.+)\))$/;

/**
 * Test a string to see if it is a CSS variable definition and if so return the variable
 * name and default parameter (if any).
 *
 * @param value - a string which may or may not contain a css variable definition
 * @returns - a tuple with the variable name and the default parameter (if any)
 */
export function parseCSSVar(value: string): [string | undefined, string | undefined] {
  const match = cssVarWithParamRegex.exec(value);
  if (match) {
    return [match[1], match[2]];
  }
  return [undefined, undefined];
}
