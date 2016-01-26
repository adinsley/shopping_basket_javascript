var shopping_basket = require('./shopping_basket');
var assert = require('assert');

var beans = {
  name: "baked beans",
  price: 20,
  bogof: true
};

var bread = {
  name: "bread",
  price: 2,
  bogof: false
}

var discount_card = function(price){
    newPrice = price * 0.95;
    return newPrice;
}


describe('Shopping Basket', function(){
  it('should be empty array at start', function(){
    assert.equal(undefined, shopping_basket.items[0]);
  });
  it('first item name should be baked beans and price should be 1', function(){
    shopping_basket.add_item(beans)
    assert.equal("baked beans", shopping_basket.items[0].name);
    assert.equal(20, shopping_basket.items_price());
  });
  it('discounted price should be 18 with only one item', function(){
    assert.equal(18, shopping_basket.discount_price());
  });

  it('discounted price should be 19.8 with only one item', function(){
    shopping_basket.add_item(bread)
    assert.equal(19.8, shopping_basket.discount_price());
  });

  it('price with discount card should be  with only one item', function(){
    assert.equal(18.81, discount_card(shopping_basket.discount_price()));
  });


  
});