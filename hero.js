var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
}

Hero.prototype = {
  talk: function(){
    console.log('My name is ' +this.name);
    return ("My name is " +this.name);
  },
  eat: function(food){

    // if this food === favourite food multiply health by 1.5
    // or else if the food is poisoned multiply health by 0.5
    // otherwise multiply health by 1
    var sustenance = food.replenishmentValue
    switch(sustenance) {
      case this.food === food.name:
        this.health += food.replenishmentValue * 1.5;
      case this.food.poisonStatus === true:
        this.health += food.replenishmentValue * .1;
      default:
        this.health += food.replenishmentValue * 1; 
      }
    }
}


module.exports = Hero;