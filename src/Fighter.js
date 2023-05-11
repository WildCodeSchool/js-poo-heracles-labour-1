const max_life = 100;

class Fighter { 
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = max_life;
    }

fight(defender) {   
    let damage = Math.round(Math.random()* this.strength) - defender.dexterity ;
    console.log(damage);
    if (damage < 0) {
        damage = 0;
    }
    if (defender.life - damage < 0) {
        defender.life = 0;
    }else {
        defender.life -= damage;
    }
    console.log(defender.life);

    return `${this.name} frappe ${defender.name} et lui inflige ${damage} de dégats`;
}}



module.exports = Fighter;