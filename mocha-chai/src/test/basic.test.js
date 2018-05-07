import Basic from '../basic';
// import { expect, assert, deepStrictEqual } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { assert, fake } from 'sinon';

describe('Running Test With Basic.js Usage Assert Chai', () => {
  let test;

  beforeEach(() => {
    test = [-1, 44, 'good', { demo: 'arr' }];
  });

  it(`Function Convert String`, () => {
    const funStr = Basic.str('good');
    // assert.typeOf(funStr, 'string');
    // assert.strictEqual(funStr, 'doog');
    // expect(funStr).to.equal('doog');
    /*----------------------------*/
    const once = (fn) => {
      let returnValue, called = false;
      return function () {
        if (!called) {
          called = true;
          returnValue = fn.apply(this, arguments);
        }
        return returnValue;
      };
    };

    const callback = fake();
    const proxy = once(callback);
    // const object = {};

    // proxy.call(object, 1, 2, 3);
    proxy();
    assert.calledOn();
    // assert(callback.called);
    // assert(callback.calledOnce);
    // assert(callback.calledOn(object));
  });

  it(`Function Convert Number`, () => {
    const funNumber = Basic.num(5);
    // assert.typeOf(funNumber, 'number');
    // assert(funNumber, 2.5);
    // expect(funNumber).to.equal(2.5);
    /*----------------------------*/
  });

  it(`Function Convert Array`, () => {
    // assert.deepStrictEqual(Basic.arr(test), [44]);
    // expect(Basic.arr(test)).to.deep.equal([44]);
    /*----------------------------*/
  });

  it(`Function Convert Object`, () => {
    test = {
      id: 4,
      name: 'Remy',
    };
    const result = { ...test, test: 'testObject' };
    // expect(Basic.object(test)).to.deep.equal(result);
    // assert.deepStrictEqual(Basic.object(test), result);
    // assert.deepStrictEqual(new String('foo'), Object('foo'));
    /*----------------------------*/
  });
});
