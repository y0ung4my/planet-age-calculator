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

    test('should subtract 2 years plus age in Earth years from years left', () => {
      const age = new Age(30, "yes");
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(46);
    })

    test('should subtract 2 additional years from years left on Earth if user doesn\'t exercise', () => {
      const age = new Age (30, "yes", "no");
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(44);
    })

    test('should subtract 2 additional years from years left on Earth if user doesn\'t eat vegetables', () => {
      const age = new Age (30, "yes", "no", "no");
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(41)
    })

    test('should add 6 years to years left on Earth if user isn\t stressed, exercises, and eats vegetables', () => {
      const age = new Age (30, "no", "yes", "yes")
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(54);
    })
})