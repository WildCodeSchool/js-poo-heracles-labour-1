/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
    constructor (name, str, dex) {
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.life = MAX_LIFE;
    }

    fight(defender){
        let damage = Math.abs((1 + Math.floor(Math.random() * defender.str)) - defender.dex)
        console.log(damage)
        defender.life -= damage
    }
}

export {Fighter}