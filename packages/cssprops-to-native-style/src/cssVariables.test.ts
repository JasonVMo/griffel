import { parseCSSVar } from './cssVariables';

describe('css variable parsing', () => {
  it('css var parsing regex works as expected', () => {
    const runParseTest = (input: string, val1: string | undefined, val2: string | undefined) => {
      const [v1, v2] = parseCSSVar(input);
      expect(v1).toBe(val1);
      expect(v2).toBe(val2);
    };

    runParseTest('var(--testvar)', 'testvar', undefined);
    runParseTest('var(--testvar, 10px)', 'testvar', '10px');
    runParseTest('var(--test-var)', 'test-var', undefined);
    runParseTest('var(bad--input)', undefined, undefined);
    runParseTest('var(--testMulti, multi word param)', 'testMulti', 'multi word param');
    runParseTest('var(--testUnfinished', undefined, undefined);
    runParseTest('var(--embedded, var(--embeddedVar))', 'embedded', 'var(--embeddedVar)');
  });
});
