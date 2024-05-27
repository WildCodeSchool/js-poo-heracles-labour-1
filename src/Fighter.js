const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(opponent) {
    const damage = Math.floor(Math.random() * this.strength) + 1;

    const actualDamage = Math.max(damage - opponent.dexterity, 0);

    opponent.life = Math.max(opponent.life - actualDamage, 0);

    console.log(
      `${this.name} attacks ${opponent.name} and deals ${actualDamage} damage!`
    );
    console.log(`${opponent.name} has ${opponent.life} 💙 life points left.`);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
