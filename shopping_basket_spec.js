var shopping_basket = require('./shopping_basket');
var assert = require('assert');

var beans = {
  name: "baked beans",
  price: 20,
  bogof: true
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
  it('discounted price should be 1', function(){
    assert.equal(18, shopping_basket.discount_price());
  });
  
});