export default class Age {
  constructor(earthAge, stress, exercise, vegetables) {
  this.earthAge = earthAge;
  this.stress = stress;
  this.exercise = exercise;
  this.vegetables = vegetables;
}

  planetAges() {
    this.mercuryAge = Math.floor(this.earthAge / .24);
    this.venusAge = Math.floor(this.earthAge / .62);
    this.marsAge = Math.floor(this.earthAge / 1.88);
    this.jupiterAge = Math.floor(this.earthAge / 11.86);
  }

  lifeExpectancy() {
    let lifeExpectancy = 78;
    switch (this.stress) {
      case ("yes"):
        lifeExpectancy -= 2;
        break;
      case ("no"):
        lifeExpectancy += 2;
        break;
    }
    switch (this.exercise) {
      case ("yes"):
        lifeExpectancy += 3;
        break;
      case ("no"):
        lifeExpectancy -= 2;
        break;
    }
    switch (this.vegetables) {
      case ("yes"):
        lifeExpectancy += 1;
        break;
      case ("no"):
        lifeExpectancy -= 3;
        break;
    }
    this.yearsLeft = lifeExpectancy - this.earthAge;
    this.yearsLeftMercury = Math.floor(this.yearsLeft / .24);
    this.yearsLeftVenus = Math.floor(this.yearsLeft / .62);
    this.yearsLeftMars = Math.floor(this.yearsLeft / 1.88);
    this.yearsLeftJupiter = Math.floor(this.yearsLeft / 11.86);
  }

}