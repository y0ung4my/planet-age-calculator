import Age from '../src/js/planetages.js';

describe('Age', () => {

  test('should create an object for age in Earth years', () => {
    const age = new Age(30);
    expect(age.earthAge).toEqual(30);
  })

  test('should convert age in Earth years to age on Mercury, Venus, Mars, and Jupiter', () => {
    const age = new Age(30);
    age.planetAges();
    expect(age.mercuryAge).toEqual(7);
    expect(age.venusAge).toEqual(18);
    expect(age.marsAge).toEqual(56);
    expect(age.jupiterAge).toEqual(355);
  })

})