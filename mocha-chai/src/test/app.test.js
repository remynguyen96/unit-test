import Basic from '../basic';
import { strictEqual, deepStrictEqual } from 'assert';
import { describe, it, beforeEach } from 'mocha';

describe('Running Test With Basic.js Usage Assert Node', () => {
  let test;

  beforeEach(() => {
    test = [-1, 44, 'good', { demo: 'arr' }];
  });

  it(`Function Convert String`, () => {
    strictEqual(Basic.str('good'), 'doog');
  });

  it(`Function Convert Number`, () => {
    strictEqual(Basic.num(5), 2.5);
  });

  it(`Function Convert Array`, () => {
    deepStrictEqual(Basic.arr(test), [44]);
  });

  it(`Function Convert Object`, () => {
    test = {
      id: 4,
      name: 'Remy',
    };
    const result = { ...test, test: 'testObject' };
    deepStrictEqual(Basic.object(test), result);
    deepStrictEqual(new String('foo'), Object('foo'));
  });
});
