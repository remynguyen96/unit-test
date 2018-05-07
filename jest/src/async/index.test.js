import { AsyncTest, MockTest, Palindromes } from "./index";
// jest.mock('./index', () => {
//     return {
//       MockTest: () => jest.fn((a, b) => {
//           return a + b + 10;
//         }),
//       Palindromes: () => { return 'expected' },
//     }
// });
// console.log(MockTest(4, 5));

describe('Async Test', () => {

    // beforeEach(() => {
    //     jest.resetModules();
    // });

    it('should work with async', async () => {
        const url = 'http://5aaee5998221b60014b72502.mockapi.io/api/test/posts';
        const testApi = new AsyncTest(url);
        window.fetch = jest.fn()
            .mockResolvedValueOnce({
                ok: true,
                json() {
                    return { Id: 746997 };
                }
            })
            .mockRejectedValueOnce(new Error('Async Error !'));

        const response = await testApi.getApi();
        // console.log(response);
        expect(response.Id).toBe(746997);
    });

    it('should call function Palindromes', () => {
      const test = jest.doMock('./index', () => ({
          Palindromes: jest.fn(() => 3434),
      }));
      const PalindromesTest = require('./index').Palindromes;
      // console.log(PalindromesTest());
      const func = Palindromes('abcba');
      // console.log(func);
      expect(func).toBeTruthy();
    });

    it('should call function getter', () => {
        const funcGetter = new MockTest();
        expect(funcGetter.getter(4, 4)).toBe(8);
    });
});




