const cssVarWithParamRegex = /^var\(--([\w-]+) *(?:\)|, *([^)]+)\))$/;

export function parseCSSVar(value: string): [string | undefined, string | undefined] {
  const match = cssVarWithParamRegex.exec(value);
  if (match) {
    return [match[1], match[2]];
  }
  return [undefined, undefined];
}
