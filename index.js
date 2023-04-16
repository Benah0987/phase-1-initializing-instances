// Write your code here
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}
class lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.drink = drink;
        this.soup = soup;
    }
}
class Dinner {
    #desert;
    constructor(salad, soup, entree, desert){
        this.salad = salad;
        this.soup = soup;
        this.entree=entree;
        this.#desert= desert;
    }
}