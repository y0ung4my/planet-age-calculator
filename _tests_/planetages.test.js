import Age from '../src/js/planetages.js';

describe('Age', () => {

  test('should create an object for age in Earth years', () => {
  const age = new Age(30);
  expect(age.earthAge).toEqual(30);
  })
})