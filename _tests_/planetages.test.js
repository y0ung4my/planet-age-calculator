import Age from '../src/js/planetages.js';

describe('Age', () => {

  test('should create an object for age in Earth years', () => {
    const age = new Age(30, "no", "yes", "yes");
    expect(age.earthAge).toEqual(30);
    expect(age.stress).toEqual("no");
    expect(age.exercise).toEqual("yes");
    expect(age.vegetables).toEqual("yes");
  })

  test('should convert age in Earth years to age on Mercury, Venus, Mars, and Jupiter', () => {
    const age = new Age(30);
    age.planetAges();
    expect(age.mercuryAge).toEqual(7);
    expect(age.venusAge).toEqual(18);
    expect(age.marsAge).toEqual(56);
    expect(age.jupiterAge).toEqual(355);
  })

    test('should subtract age in Earth years to number of years left based on average life expectancy', () => {
      const age = new Age(30,);
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(48);
    })

    test('should subtract 2 years plus age Earth years', () => {
      const age = new Age(30, "yes");
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(46);
    })

})