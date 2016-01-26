var shopping_basket = require('./shopping_basket');
var assert = require('assert');

var beans = {
  name: "beans",
  price: 20,
  bogof: true
};

var bread = {
  name: "bread",
  price: 2,
  bogof: false
}

var discount_card = function(normalPrice){
   var newPrice = normalPrice * 0.95;
    return newPrice;
}


describe('Shopping Basket', function(){
  it('should be empty array at start', function(){
    assert.equal(undefined, shopping_basket.items[0]);
  });
  it('first item name should be baked beans and price should be 1', function(){
    shopping_basket.add_item(beans)
    assert.equal("beans", shopping_basket.items[0].name);
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

  it('should return array with 2 x beans', function(){
    shopping_basket.add_item(beans)
    assert.deepEqual([beans, beans], shopping_basket.bogof());
  });

  it('should return count with 2 x beans', function(){
   var bogof_items = shopping_basket.bogof();
   var result = shopping_basket.bogof_lookup(bogof_items);
   assert.deepEqual({beans:{count:2, price:20}}, result)
  });

  it('should be 22', function(){
    shopping_basket.add_item(beans)
    result = shopping_basket.discount_price();
    assert.deepEqual(37.8, result);
  });

  
});