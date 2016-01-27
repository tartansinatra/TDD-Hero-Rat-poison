var Hero = require('./hero');
var assert = require('assert');
var Food = require('./food');
var Rat = require('./rat');


describe('hero', function(){
  var hero1 = new Hero('Superman', 100, 'pizza');
  var food1 = new Food('pizza', 10);
  var food2 = new Food('curry', 10);
  it('has a name', function(){
    assert.equal('Superman', hero1.name)
  });
  it('has a health rating', function(){
    assert.equal(100, hero1.health)
  });
  it('has a fav food', function(){
    assert.equal('pizza', hero1.food)
  });
  it('can talk and say his name', function(){
    assert.equal('My name is Superman', hero1.talk());
  })
  it('can eat food and replenish health', function(){
    hero1.health = 100;
    hero1.eat(food2);
    assert.equal('110', hero1.health);
  });
  it('can eat fav food and replenish health * 1.5', function(){
    hero1.health = 100;
    food1.poisonStatus = false
    hero1.eat(food1);
    assert.equal(115, hero1.health);
  });
  it('can eat poisoned food and deplete health * 0.5', function(){
    hero1.health = 100;
    food1.poisonStatus = true
    hero1.eat(food1);
    assert.equal(50, hero1.health);
  })
})


describe('food', function(){
  var food1 = new Food('pizza', 10);
  it('has a name', function(){
    assert.equal('pizza', food1.name)
  });
  it('has a replenishment value', function(){
    assert.equal(10, food1.replenishmentValue)
  });
})

describe('rat', function(){
  var rat1 = new Rat();
  var food1 = new Food('pizza', 10);
  
  it('can touch & poison food', function(){
  rat1.touch(food1);
  assert.equal(true, food1.poisonStatus);
  });
})