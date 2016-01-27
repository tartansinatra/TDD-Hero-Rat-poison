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
    if(this.food === food.name){
      this.health += food.replenishmentValue * 1.5;
      }else{
        this.health += food.replenishmentValue
      }
    }
}


module.exports = Hero;