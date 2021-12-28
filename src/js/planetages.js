export default class Age {
  constructor(earthAge) {
  this.earthAge = earthAge;
}

planetAges() {
  this.mercuryAge = Math.floor(this.earthAge * .24);
  this.venusAge = Math.floor(this.earthAge * .62);
  this.marsAge = Math.floor(this.earthAge * 1.88);
  this.jupiterAge = Math.floor(this.earthAge * 11.86);
}

}