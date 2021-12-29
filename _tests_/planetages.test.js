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
    expect(age.mercuryAge).toEqual(125);
    expect(age.venusAge).toEqual(48);
    expect(age.marsAge).toEqual(15);
    expect(age.jupiterAge).toEqual(2);
  })

    test('should subtract age in Earth years to number of years left based on average life expectancy', () => {
      const age = new Age(30, null, null, null);
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(48);
    })

    test('should subtract 2 years plus age in Earth years from years left', () => {
      const age = new Age(30, "yes", null, null);
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(46);
    })

    test('should subtract 2 additional years from years left on Earth if user does not exercise', () => {
      const age = new Age (30, "yes", "no", null);
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(44);
    })

    test('should subtract 2 additional years from years left on Earth if user does not eat vegetables', () => {
      const age = new Age (30, "yes", "no", "no");
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(41)
    })

    test('should add 6 years to years left on Earth if user is not stressed, exercises, and eats vegetables', () => {
      const age = new Age (30, "no", "yes", "yes")
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(54);
    })

    test('should calculate number of years remaining on Mercury, Venus, Mars, and Jupiter', () => {
      const age = new Age (30, "no", "yes", "yes")
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(54);
      expect(age.yearsLeftMercury).toEqual(225);
      expect(age.yearsLeftVenus).toEqual(87);
      expect(age.yearsLeftMars).toEqual(28);
      expect(age.yearsLeftJupiter).toEqual(4);
    })

    test('should return years surpassed expectancy as a positive number', () => {
      const age = new Age (100, "no", "yes", "yes")
      age.lifeExpectancy();
      expect(age.yearsLeft).toEqual(16);
      expect(age.yearsLeftMercury).toEqual(66);
      expect(age.yearsLeftVenus).toEqual(25);
      expect(age.yearsLeftMars).toEqual(8);
      expect(age.yearsLeftJupiter).toEqual(1);
    })
})