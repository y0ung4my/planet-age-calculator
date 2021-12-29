export default class Age {
  constructor(earthAge, stress, exercise, vegetables) {
  this.earthAge = earthAge;
  this.stress = stress;
  this.exercise = exercise;
  this.vegetables = vegetables;
}

planetAges() {
  this.mercuryAge = Math.floor(this.earthAge * .24);
  this.venusAge = Math.floor(this.earthAge * .62);
  this.marsAge = Math.floor(this.earthAge * 1.88);
  this.jupiterAge = Math.floor(this.earthAge * 11.86);
}

lifeExpectancy() {
  this.yearsLeft = 78 - this.earthAge;
}

}