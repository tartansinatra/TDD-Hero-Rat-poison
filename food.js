var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonStatus = false;
}

Food.prototype = {
  poison: function(){
    this.poisonStatus = true;  
  }
}

module.exports = Food;