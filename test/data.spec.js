import { pokeSortAB } from '../src/data.js';


describe('esta funcion es correcta', () => {
  it('funcion ordenar de A- Z', () => {
    expect(typeof pokeSortAB).toBe('undefined');
  });

  it('returns `-1`', () => {
    expect(pokeSortAB("a","b")).toBe('abc');
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
