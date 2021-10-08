import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.isStoned = false;
    this.distance = 1;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = value;
  }

  get attack() {
    let attack = this._attack - (this._attack / 10) * (this.distance - 1);
    if (this.isStoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    if (attack < 0) {
      return 0;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this._attack = value;
  }
}
